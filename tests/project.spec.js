const path = require('path');
const assert = require('assert');
const ganache = require('ganache-cli');
const BigNumber = require('bignumber.js');
const Web3 = require('web3');

// 1. 拿到 bytecode
const ProjectList = path.resolve(__dirname, '../compiled/ProjectList.json')
const Project = path.resolve(__dirname, '../compiled/Project.json');
// const { interface, bytecode } = require(ProjectList);
// const {ProjectInterface, ProjectBytecode} = require(Project);

// 2. 配置 provider
const web3 = new Web3(ganache.provider());

let accounts;
// let contract;
// const initialBrand = 'AUDI';
let project;
let projectList;

console.log('1');
console.log(ProjectList.bytecode)
// console.log(interface)
// console.log(ProjectListInterface)
describe('Project Contract', () => {
    // 3. 每次跑单测时需要部署全新的合约实例，起到隔离的作用
    beforeEach(async () => {
        // 3.1 拿到ganache本地测试网络的账号
        accounts = await web3.eth.getAccounts();
        console.log('合约部署账户：', accounts[0]);
        // 3.2 部署ProjectList合约
        console.log('2');
        // if(ProjectList.interface != null){     
        // }
        projectList = await new web3.eth.Contract(JSON.parse(ProjectList.interface))
            .deploy({ data: ProjectList.bytecode})
            .send({ from: accounts[0], gas: '5000000' });
        // console.log('合约部署成功：', contract.options.address);
        console.log(projectList);
        // 3.3 调用ProjectList的createProject方法
        await projectList.methods.createProject('The first ICO project', 100, 10000, 100000).send({
            from: accounts[0],
            gas: '5000000',
        });

        // 3.4 获取刚刚创建的Project实例的地址
        const [address] = await projectList.methods.getProjects().call();

        // 3.5 生成Project合约对象
        project = await new web3.eth.Contract(JSON.parse(Project.interface), address);
    });

    it('should deploy ProjectList and Project', async() => {
        assert.ok(projectList.options.address);
        assert.ok(project.options.address);
    });

    it('should save correct project properties', async() => {
        const owner = await project.methods.owner().call();
        const description = await project.methods.description().call();
        const minInvest = await project.methods.minInvest().call();
        const maxInvest = await project.methods.maxInvest().call();
        const goal = await project.methods.goal().call();

        assert.strictEqual(owner, accounts[0]);
        assert.strictEqual(description, 'The first ICO project');
        assert.strictEqual(minInvest, 100);
        assert.strictEqual(maxInvest, 10000);
        assert.strictEqual(goal, 100000);
    });

    // 后续可逐步提高测试用例的覆盖度，如各种方法是否正确，各类值是否正确更新
    it('should allow investor to contribute', async() => {
        const investor = accounts[1];
        await project.methods.contribute().send({
            from: investor,
            value: '200',
        });
        const amount = await project.methods.investors(investor).call();
        assert.ok(amount == '200');
    });

    // 完整业务流程测试
    it('allows investor to approve payments', async () => {
               // 项目方、投资人、收款方账户
                const owner = accounts[0];
                const investor = accounts[1];
                const receiver = accounts[2];
        
                // 收款前的余额
                const oldBalance = new BigNumber(await web3.eth.getBalance(receiver));
        
                // 投资项目
                await project.methods.contribute().send({
                    from: investor,
                    value: '5000',
                });
        
                // 资金支出请求
                await project.methods.createPayment('Rent Office', 2000, receiver).send({
                    from: owner,
                    gas: '1000000',
                });
        
                // 投票
                await project.methods.approvePayment(0).send({
                    from: investor,
                    gas: '1000000',
                });
        
                // 资金划转
                await project.methods.doPayment(0).send({
                    from: owner,
                    gas: '1000000',
                });
        
                // 检查 payment 状态
                const payment = await project.methods.payments(0).call();
                assert.strictEqual(payment.completed, true);
                assert.strictEqual(payment.voterCount, 1);
        
                // 收款后的余额
                const newBalance = new BigNumber(await web3.eth.getBalance(receiver));
                const balanceDiff = newBalance.minus(oldBalance);
                console.log({ oldBalance, newBalance, balanceDiff });

                // 确保精确的余额变化
        assert.equal(balanceDiff, 2000);
    });
    // // 4. 编写单元测试
    // it('deploy a contract', () => {
    //     assert.ok(contract.options.address);
    // });

    // it('has initial brand', async () => {
    //     const brand = await contract.methods.brand().call();
    //     assert.strictEqual(brand, initialBrand);
    // });

    // it('can change the brand', async () => {
    //     const newBrand = 'BWM';
    //     await contract.methods.setBrand(newBrand).send({ from: accounts[0] });
    //     const brand = await contract.methods.brand().call();
    //     assert.strictEqual(brand, newBrand);
    // });
});

// 注意需要使用./node_modules/.bin/mocha tests来执行单元测试
pragma solidity ^0.4.17;


library SafeMath {
    function mul(uint a, uint b) internal pure returns (uint) {
        uint c = a * b;
        assert(a == 0 || c / a == b);
        return c;
    }

    function div(uint a, uint b) internal pure returns (uint) {
        // assert(b > 0); // Solidity automatically throws when dividing by 0
        uint c = a / b;
        // assert(a == b * c + a % b); // There is no case in which this doesn't hold
        return c;
    }

    function sub(uint a, uint b) internal pure returns (uint) {
        assert(b <= a);
        return a - b;
    }

    function add(uint a, uint b) internal pure returns (uint) {
        uint c = a + b;
        assert(c >= a);
        return c;
    }
}

contract ProjectList {
    /**
        项目列表类，用来管理所有的Project合约实例
     */
    using SafeMath for uint;
    address[] public projects;

    function createProject(string _description, uint _minInvest, uint _maxInvest, uint _goal) public {
        address newProject = new Project(_description, _minInvest, _maxInvest, _goal, msg.sender);
        projects.push(newProject);
    }
    function getProjects() public view returns(address[]) {
        return projects;
    }
}

contract Project {

    using SafeMath for uint;

    struct Payment{
        string description;
        uint amount;
        address receiver;
        bool completed;
        // 列表项过大时，操作会费资源与Gas
        // address[] voters;
        mapping(address => bool) voters;
        uint voterCount;
    }

    address public owner;
    string public description;
    uint public minInvest;
    uint public maxInvest;
    uint public goal;
    // address[] public investors;
    mapping(address => uint) public investors;
    uint investorCount;
    Payment[] public payments;

    // 使用modifier机制复用权限检查的代码，占位符就是将其包裹的函数代码填入
    modifier ownerOnly(){
        require(msg.sender == owner);
        _;
    }

    constructor(string _description, uint _minInvest, uint _maxInvest, uint _goal, address _owner) public {
        // owner = msg.sender;
        owner = _owner;
        description = _description;
        minInvest = _minInvest;
        maxInvest = _maxInvest;
        goal = _goal;
    }
    /**
        本函数调用者是投资人，给当前合约实例投资
    */
    function getSummary() public view returns(string, uint, uint, uint, uint, uint, uint, address) {
        return (
            description,
            minInvest,
            maxInvest,
            goal,
            address(this).balance,
            investorCount,
            payments.length,
            owner
        );
    }
    function contribute() public payable{
        require(msg.value >= minInvest);
        require(msg.value <= maxInvest);
        // require(address(this).balance + msg.value <= goal);
        uint newBalance = 0;
        newBalance = address(this).balance.add(msg.value);
        require(newBalance <= goal);
        // investors.push(msg.sender);
        investors[msg.sender] = msg.value;
        investorCount ++;
    }

    /**
        本函数是合约所有者进行调用资金的请求，该请求会统一存入payments数组中，等待后续投票
    */
    function createPayment(string _description, uint _amount, address _receiver)  ownerOnly public{
        // require(msg.sender == owner);
        Payment memory newPayment = Payment({
            description: _description,
            amount: _amount,
            receiver: _receiver,
            completed: false,
            // voters: new address[](0)
            voterCount: 0
        });

        // 为了严谨，调用资金请求时也要判断余额是否足够，避免无效交易
        require(address(this).balance >= _amount);
        payments.push(newPayment);
    }

    /**
        本函数为针对某个资金调用（index）申请的投票表决，
     */
    function approvePayment(uint index) public {
        Payment storage payment = payments[index];

        // judge whether he is an investor
        // bool isInvestor = false;
        // for(uint i = 0; i < investors.length; ++i){
        //     isInvestor = investors[i] == msg.sender;
        //     if(isInvestor){
        //         break;
        //     }
        // }

        // require(isInvestor);
        require(investors[msg.sender] > 0);

        // One investor can not vote twice
        // bool hasVoted = false;
        // for(uint j = 0; j < payment.voters.length; ++j){
        //     hasVoted = payment.voters[j] == msg.sender;
        //     if(hasVoted){
        //         break;
        //     }
        // }

        // require(!hasVoted);

        // payment.voters.push(msg.sender);
        // 每个股东仅可进行一次投票，在voters中表示投过票了
        require(!payment.voters[msg.sender]);
        payment.voters[msg.sender] = true;
        payment.voterCount ++;
    }

    /**
        本函数表示进行资金调用（转移）的实际操作，其中进行了能够转账的判断
     */
    function doPayment(uint index) ownerOnly public {
        // require(msg.sender == owner);
        Payment storage payment = payments[index];
        require(!payment.completed);
        // 账户余额检查
        require(address(this).balance >= payment.amount);
        // require(payment.voters.length > (investors.length / 2));
        require(payment.voterCount > (investorCount / 2));

        payment.receiver.transfer(payment.amount);
        payment.completed = true;
    }

}
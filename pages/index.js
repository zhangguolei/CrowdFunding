import React from 'react';
import {Grid, Button, Typography, Card, CardContent, CardActions, LinearProgress} from '@material-ui/core';
import {Link} from '../routes';
import ProjectList from '../libs/projectList';
import Project from '../libs/project';
import withRoot from '../libs/withRoot';
import Layout from '../components/Layout';
import InfoBlock from '../components/InfoBlock';
// import Web3 from 'web3';
import web3 from '../libs/web3';
// export default class Index extends React.Component{
//     render(){
//         return <div>Welcome to Ethereum ICO DApp!</div>;
//     }
// }

class Index extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         accounts: [],
    //     };

    //     // this.web3 = new Web3(window.web3.currentProvider);
    // }

    // async componentDidMount(){
      
    //     const accounts = await web3.eth.getAccounts();
    //     // console.log(accounts);
    //     const balances = await Promise.all(accounts.map(x => web3.eth.getBalance(x)));
    //     console.log({accounts, balances});

    //     // this.setState({accounts});
    //     this.setState({accounts: accounts.map((x, i) => ({account: x, balance: balances[i]}))})
    // }
    static async getInitialProps({ req }){
        const addressList = await ProjectList.methods.getProjects().call();
        console.log('addressList:', addressList)
        const summaryList = await Promise.all(
            addressList.map(address => 
                Project(address).methods.getSummary().call())
        );
        console.log({summaryList});
        const projects = addressList.map((address, i) => {
            const [description, minInvest, maxInvest, goal, balance, investorCount, paymentCount, owner]
            = Object.values(summaryList[i]);
            return {
                address,
                description,
                minInvest,
                maxInvest,
                goal,
                balance, 
                investorCount,
                paymentCount,
                owner,
            };
        });
        console.log(projects);
        return {projects};
    }
    render(){
        // return <Button variant="raised" color="primary">Welcome to Ethereum ICO DApp!</Button>;
        // const {accounts} = this.state;
        const {projects} = this.props;

        return(
            <Layout>
                {/* <Button variant='raised' color='primary'>
                    Welcome to Ethereum ICO DApp!
                </Button> */}
                {/* <ul>
                    {accounts.map(x => <li key={x}>{x}</li>)}
                </ul> */}
                {/* <ul>
                    {accounts.map(x => (
                        <li key={x.account}>
                            {x.account} : {web3.utils.fromWei(x.balance, 'ether')}
                        </li>
                    ))}
                </ul> */}
                <Grid container spacing={16}>
                    {projects.length === 0 && <p>还没有项目，快去创建吧！</p>}
                    {projects.length > 0 && projects.map(this.renderProject)}
                </Grid>
            </Layout>
        );
    }

    renderProject(project){
        const progress = project.balance / project.goal * 100;

        return (
            <Grid item md={6} key={project.address}>
                <Card>
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">
                            {project.description}
                        </Typography>
                        <LinearProgress style={{margin: '10px 0'}} color="primary" variant="determinate" value={progress} />
                        {/* <Typography component="p">
                            {project.address}
                        </Typography> */}
                        <Grid container spacing={16}>
                            <InfoBlock title={`${web3.utils.fromWei(project.goal, 'ether')} ETH`} description="募资上限" />
                            <InfoBlock title={`${web3.utils.fromWei(project.minInvest, 'ether')} ETH`} description="最小投资金额" />
                            <InfoBlock title={`${web3.utils.fromWei(project.maxInvest, 'ether')} ETH`} description="最大投资金额" />
                            <InfoBlock title={`${project.investorCount}人`} description="参投人数" />
                            <InfoBlock title={`${web3.utils.fromWei(project.balance, 'ether')} ETH`} description="已募资金额" /> 
                        </Grid>
                    </CardContent>
                    <CardActions>
                        <Link route={`/projects/${project.address}`}>
                            <Button size="small" color="secondary">
                                立即投资
                            </Button>
                        </Link>
                        <Link route={`/projects/${project.address}`}>
                            <Button size="small" color="primary">
                                查看详情
                            </Button>
                        </Link>
                    </CardActions>
                </Card>
            </Grid>
        );
    }
}
export default withRoot(Index);
import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react'; // https://react.semantic-ui.com/
import factory from '../factory';
import Layout from '../components/layout'; 

// export default () => {
//     return <h1>This is the campaign list page.</h1>
// }

class CampaignIndex extends Component{
    static async getInitialProps(){
        //const campaigns = await factory.methods.GetDeployedCampaigns().call();
        const campaigns = await factory.methods.GetDeployedCampaigns().call();
        

        return {campaigns : campaigns};
    }
    
    // async componentDidMount(){
    //     //const campaigns = await factory.methods.GetDeployedCampaigns().call();
    //     console.log(campaigns);
    // }

    renderCampaigns(){const items = this.props.campaigns.map(address=>{ // This is the loop
            return {
                header : address,
                description: <a>View Campaign</a>,
                fluid: true
            };
        });
        return <Card.Group items={items} />;
    }

    render(){
        //return <div>Campaigns Index</div>;
        //return <div>{this.props.campaigns}</div>;
        return (
            <Layout>
            <div>
                <h1>Campaign Factory</h1>

                <h3>Open Campaigns</h3>
                
                <Button 
                    floated="right"
                    content='Create Campaign'
                    icon='add  circle'
                    primary
                />
                {this.renderCampaigns()}
            </div>
            </Layout>
        );
    }
}

export default CampaignIndex;


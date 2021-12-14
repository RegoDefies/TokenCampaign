import React, { Component } from 'react';
import factory from '../factory';

// export default () => {
//     return <h1>This is the campaign list page.</h1>
// }

class CampaignIndex extends Component{
    async componentDidMount(){
        const campaigns = await factory.methods.getDeployedCampaigns().call();

        console.log(campaigns);
    }

    render(){
        return <div>Campaigns Index</div>
    }
}
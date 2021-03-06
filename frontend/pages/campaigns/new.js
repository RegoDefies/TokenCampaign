import React, {Component, Compponent} from 'react';
import {Form, Button, Input, Message} from 'semantic-ui-react';
import Layout from '../../components/layout';
import factory from '../../factory';
import web3 from '../../web3';

class CampaignNew extends Component{
    state={
        minContribution: '',
        errorMessage:'',
        loading: false
    };
    
    onSubmit = async (event) => {
        event.preventDefault();
    
        this.setState({loading:true, errorMessage:''});

        try{
            const accounts = await web3.eth.getAccounts();
            await factory.methods.CreateCampaign(this.state.minimumContribution).send({
            from: accounts[0],
            });
        } catch(err){
            this.setState({errorMessage:err.message});
        }

        this.setState({loading:false});
      };

    render(){
        return (
            <Layout>
                <h3>Create a new campaign</h3>
                <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                    <Form.Field>
                        <label>Minimum Contribution</label>
                        <Input 
                            label='wei'
                            labelPosition='right'
                            value={this.state.minContribution}
                            onChange={event=>
                                this.setState({minContribution:event.target.value})}
                        />
                    </Form.Field>

                    <Message error 
                        header='Something went wrong!'
                        content={this.state.errorMessage} />

                    <Button loading={this.state.loading} primary>Create</Button>
                </Form>
            </Layout>
        )
    }
}

export default CampaignNew;
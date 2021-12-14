import web3 from './web3';

const address = '0x587E66D42E786Fa2Ed7e6325fc7c76bBcA2F778e';

const abi = 
[
	{
		"constant": false,
		"inputs": [
			{
				"name": "pMinContrib",
				"type": "uint256"
			}
		],
		"name": "CreateCampaign",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "gDeployedCampaigns",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "GetDeployedCampaigns",
		"outputs": [
			{
				"name": "",
				"type": "address[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];

export default new web3.eth.Contract(abi, address);
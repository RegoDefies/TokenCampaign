import web3 from './web3';

const address = '0x587E66D42E786Fa2Ed7e6325fc7c76bBcA2F778e';

const abi = 
[
	{
		"constant": false,
		"inputs": [
			{
				"name": "pRequestIndex",
				"type": "uint256"
			}
		],
		"name": "FinalizeRequest",
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
				"type": "address"
			}
		],
		"name": "gApprovers",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "gApproversCounter",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "pDescription",
				"type": "string"
			},
			{
				"name": "pValue",
				"type": "uint256"
			},
			{
				"name": "pRecipient",
				"type": "address"
			}
		],
		"name": "CreateRequest",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "Contribute",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "gManager",
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
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "gRequests",
		"outputs": [
			{
				"name": "description",
				"type": "string"
			},
			{
				"name": "value",
				"type": "uint256"
			},
			{
				"name": "recipient",
				"type": "address"
			},
			{
				"name": "complete",
				"type": "bool"
			},
			{
				"name": "approvals_counter",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "gMinContrib",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "pRequestIndex",
				"type": "uint256"
			}
		],
		"name": "ApproveRequest",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "pMinContrib",
				"type": "uint256"
			},
			{
				"name": "pCampaignCreator",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	}
];

export default new web3.eth.Contract(abi, address);
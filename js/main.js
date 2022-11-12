var hospital_contract_addr = "0xAaDEFF05081634079c91E0ac43488eba7f320B2F";

var hospital_abi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "hospital_id",
				"type": "uint256"
			},
			{
				"name": "_hospital_name",
				"type": "string"
			},
			{
				"name": "_hospital_address",
				"type": "string"
			},
			{
				"name": "_hospital_spec",
				"type": "string"
			}
		],
		"name": "store_hospital_details",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "hospital_id",
				"type": "uint256"
			}
		],
		"name": "retreive_hospital_details",
		"outputs": [
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	}
];
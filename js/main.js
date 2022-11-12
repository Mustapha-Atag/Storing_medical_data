var account;

window.addEventListener('load', async () => {
	
	if (typeof window.ethereum !== 'undefined') { 
		console.log("MetaMask is Available :) !"); 
	}
			
	// Modern DApp browsers
	if (window.ethereum) {
		window.web3 = new Web3(ethereum);
			
		// To prevent the page reloading when the MetaMask network changes
		ethereum.autoRefreshOnNetworkChange = false;
			
		// To Capture the account details from MetaMask
		const accounts = await ethereum.enable();
		account = accounts[0];
				
	}
		// Legacy DApp browsers
	else if (window.web3) {
			//window.web3 = new Web3(web3.currentProvider);
			window.web3 = new Web3(new Web3.providers.HttpProvider(infura_endPoint));
	}
		// Non-DApp browsers
	else {
		console.log('Non-Ethereum browser detected. Please install MetaMask');
	}
			
});


var infura_endPoint = "https://sepolia.infura.io/v3/81fd111a871d4790b8e1109eabf8087a";

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
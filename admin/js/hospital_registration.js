console.log("hospital_registration.js script is loaded");

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
			window.web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/cbd9dc11b30147e9a2cc974be655ef7c")); 
	}
		// Non-DApp browsers
	else {
		console.log('Non-Ethereum browser detected. Please install MetaMask');
	}
			
});
    	
var abi = hospital_abi;
        var contractaddress = '0x9076fbf394E33c0084FEC28d38074b713be67C54';
        
        function add_details() {
            var myContract = new web3.eth.Contract(abi,contractaddress, {from: account, gasPrice: '5000000', gas: '500000'});
			var ds1 = document.getElementById("addr").value;
			var ds2 = document.getElementById("spec").value;
            var tname = document.getElementById("name1").value;
            var id = document.getElementById("id1").value;
             var result = myContract.methods.store_doctor_details(id,tname,ds1,ds2).send(function (err, result) {
               
                if (err) { console.log(err); }
                if (result) { document.getElementById("result").innerHTML = result; }
               
                });
        }
		function show_details() {
            var myContract = new web3.eth.Contract(abi,contractaddress, {from: account, gasPrice: '5000000', gas: '500000'});
            var idd = document.getElementById("tid").value;
             var result = myContract.methods.retreive_hospital_details(idd).call(function (err, result) {
               
                if (err) { console.log(err); }
                if (result) { 
                    document.getElementById("get_name").innerHTML = result[0];
					document.getElementById("get_addr").innerHTML = result[1];
					document.getElementById("get_spec").innerHTML = result[2];
                }
               
                });
        }
        function del_details() {
            var myContract = new web3.eth.Contract(abi,contractaddress, {from: account, gasPrice: '5000000', gas: '500000'});
            var bid = document.getElementById("bid1").value;
             var result = myContract.methods.burnMyToken(bid).send(function (err, result) {
               
                if (err) { console.log(err); }
                });
        }
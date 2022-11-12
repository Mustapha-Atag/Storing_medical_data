console.log("verify_hospital.js script is loaded");
        
var abi = hospital_abi;
var contractaddress = hospital_contract_addr;

function show_details() {
    var myContract = new web3.eth.Contract(abi,contractaddress, {from: account});
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
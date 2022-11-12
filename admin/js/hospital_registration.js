console.log("hospital_registration.js script is loaded");
    	
var abi = hospital_abi;
var contractaddress = hospital_contract_addr;
        
function add_details() {
    var myContract = new web3.eth.Contract(abi,contractaddress, {from: account});
	var ds1 = document.getElementById("addr").value;
	var ds2 = document.getElementById("spec").value;
    var tname = document.getElementById("name1").value;
	var id = document.getElementById("id1").value;
	var result = myContract.methods.store_hospital_details(id,tname,ds1,ds2).send(function (err, result) {
               
	if (err) { console.log(err); }
	if (result) { //document.getElementById("result").innerHTML = result; 
		console.log("result : " + result)
	}
               
	});
}

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
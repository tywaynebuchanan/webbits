function ChangePwd(){

	var strongPassowrd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
	var password = document.getElementById("password");
	var confirmpassword = document.getElementById("confirmpassword");
	var error = document.getElementById("error");
	var error_2 = document.getElementById("error1");
	


	if(!strongPassowrd.test(password.value))
	{
		error.style.display = 'inline';
		return false;
	}


	if(password.value !== confirmpassword.value)

	{
		error_2.style.display = 'inline';
		return false;
	
	}else {

		window.open('index.html');
		window.close('fpwd.html');
		password.value = "";
		confirmpassword.value ="";
  		
	}
}



function Input_Focus(){

	document.getElementById("error").style.display = "none";
}

function Input_Focus2(){

	document.getElementById("error1").style.display = "none";
}


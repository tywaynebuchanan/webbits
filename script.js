var login_attempts=3;

function checkForm(){
var username = document.getElementById("username");
var password = document.getElementById("password");
var element = document.getElementById("demo");


if (username.value == "tywaynebuchanan@gmail.com" && password.value == "12345")
{
	window.open('success.html');
	document.getElementById("username").value="";
  	document.getElementById("password").value="";
	return false;
	
}else{
	
	if(login_attempts==0)
	  {

	   alert("No Login Attempts Available");
	  }
	  else
	  {
	   login_attempts=login_attempts-1;
	   alert("Login Failed Now Only "+login_attempts+" Login Attempts Available");
	   if(login_attempts==0)
	   {
	    document.getElementById("username").disabled=true;
	    document.getElementById("password").disabled=true;
	    element.style.display = "inline";
	    
	    setTimeout(function() { 
        document.getElementById("username").disabled = false;
        document.getElementById("password").disabled = false;
        element.style.display = "none";
        }, 30000); 

	    
	   }
	  }

}
}

function RegValidate(){

	var strongPassowrd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
	var simpleEmailRegex = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
	var inputname = document.getElementById("name");
	var inputemail = document.getElementById("email");
	var inputpwd = document.getElementById("pwd");
	var inputcpwd = document.getElementById("con_pwd");
	var error_blank = document.getElementById("error_blank");
	var error_1 = document.getElementById("error_name");
	var error_2 = document.getElementById("error_email");
	var error_3 = document.getElementById("error_pwd");
	var error_4 = document.getElementById("error_lgt");


	if(!inputname.value && !inputemail.value && !inputpwd.value && !inputcpwd.value)
	{
		error_blank.style.display = 'inline';
		return false;

	}
	if(!inputname.value)
	{
		error_1.style.display = 'inline';
		inputname.focus();
		return false;
	} 
	if(!simpleEmailRegex.test(inputemail.value))

	{
		error_2.style.display = 'inline';
		document.getElementById("email").value="";
		inputemail.focus();
		return false;
	} 

	if(!strongPassowrd.test(inputpwd.value))
	{
		error_4.style.display = 'inline';
		document.getElementById("pwd").value="";
		return false;
	}
	if(inputpwd.value !== inputcpwd.value)

	{
		error_3.style.display = 'inline';
		document.getElementById("con_pwd").value="";
		return false;
	
	} else {
		window.open('success.html');
		document.getElementById("name").value="";
  		document.getElementById("email").value="";
  		document.getElementById("pwd").value="";
  		document.getElementById("con_pwd").value="";
  		document.getElementById("progress").value =0;
		
	}

}

	function RegUser(){

		window.open('reguser.html');
		return false;
	}


	function myfunction1(){
		document.getElementById("error_name").style.display = "none";
		document.getElementById("progress").value ="25";

	}

	function myfunction2(){
		document.getElementById("error_email").style.display = "none";
		document.getElementById("progress").value ="50";
		
	}
	function myfunction3(){
		document.getElementById("error_pwd").style.display = "none";
		document.getElementById("progress").value ="75";
		
	}
	function myfunction4(){
		document.getElementById("error_lgt").style.display = "none";
		document.getElementById("progress").value ="100";
		
	}

	function removeMessage(){

		document.getElementById("error_blank").style.display = 'none';


	}







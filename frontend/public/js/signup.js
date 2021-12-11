const signupButton = document.getElementById('register');

signupButton.addEventListener('click', ()=>{
  
	const email = document.getElementById('email').value;
	const password = document.getElementById('password').value;
	const name  = document.getElementById('name').value;
	
	var variablesToCheck = [email, password, name];
	
	    for(i=0; i < variablesToCheck.length; i++){
		if(variablesToCheck[i] == null || variablesToCheck[i] == ""){
	
		    alert("All details must be filled to register");
		    return false;
	
		}
	    }

	    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	    var passFormat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
	    var nameFormat = /^[A-Za-z\s]+$/;
	    if(!email.match(mailformat) && !password.match(passFormat) &&!name.match(nameFormat))
	    {
	    document.getElementById('email').classList.add("invalid");
	    document.getElementById('name').classList.add("invalid");
	    document.getElementById('password').classList.add("invalid");
	    alert("Please enter a valid email address, password and name");
	    return false;
	    }
	    else if(!email.match(mailformat) && !password.match(passFormat)){
		document.getElementById('email').classList.add("invalid");
		document.getElementById('password').classList.add("invalid");
	      alert("Please enter a valid email address and password");
	      alert("Password must be 8 to 15 characters long, should have uppercase, lowercase letters, special charaters and digits.");
	      return false;
	    }
	    else if(!password.match(passFormat) && !name.match(nameFormat))
	    {
		document.getElementById('name').classList.add("invalid");
		document.getElementById('password').classList.add("invalid");
	      alert("Please enter valid name and password");
	      alert("Password must be 8 to 15 characters long, should have uppercase, lowercase letters, special charaters and digits.");
	      return false;
	    }
	    else if(!email.match(mailformat) && !name.match(nameFormat))
	    {
		document.getElementById('email').classList.add("invalid");
		document.getElementById('name').classList.add("invalid");
		alert("Please enter valid name and email");
		return false;		    
	    }
	    else if(!email.match(mailformat)){
		document.getElementById('email').classList.add("invalid");
		alert("Please enter a valid email address");
		return false;
		}
	    else if(!password.match(passFormat)){
		document.getElementById('password').classList.add("invalid");
		alert("Password must be 8 to 15 characters long, should have uppercase, lowercase letters, special charaters and digits.");
		return false;
	      }
	      else if(!name.match(nameFormat)){
		document.getElementById('name').classList.add("invalid");
		alert("Please enter valid name");
		return false;
	      }

	    
	  fetch('http://localhost:8080/user/signup', {
	    method: 'POST',
	    body: JSON.stringify({
	      email: email,  
	      password: password,
	      name: name
	    }), 
	    headers: {  
	      'Content-Type': 'application/json'
	    }
	  })
	  .then(async(res)=>{ 
	    const msg = await res.json();
	    return {status: res.status, data: msg.message};
	  })
	  .then((result)=>{
	    console.log(result); 
	    alert(""+ result.data+ " Redirecting to login page, Kindly LogIn");
	    if(result.status === 201)
	      { return document.location.href = "http://localhost:3000/login";
	      }
		document.location.href = "http://localhost:3000";
	  })
	  .catch((err)=>{ 
	    console.log(err);
	  })
});
	
const loginButton = document.getElementById('login');

loginButton.addEventListener('click', ()=>{

const email = document.getElementById('emails').value;
const password = document.getElementById('passwords').value;

var variablesToCheck = [email, password];

    for(i=0; i < variablesToCheck.length; i++){
        if(variablesToCheck[i] == null || variablesToCheck[i] == ""){

            alert("Enter Email and Password to Login");
            return false;

        }
    }
  
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var passFormat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if(!email.match(mailformat) && !password.match(passFormat))
    {
    document.getElementById('emails').classList.add("invalid");
    document.getElementById('passwords').classList.add("invalid");
    alert("Invalid Email and Password");
    return false;
    }
    else if(!email.match(mailformat)){
      document.getElementById('emails').classList.add("invalid");
      alert("Invalid Email");
      return false;
    }
    else if(!password.match(passFormat))
    {
      document.getElementById('passwords').classList.add("invalid");
      alert("Invalid Password");
      return false;
    }

  fetch('http://localhost:8080/user/login', {
    method: 'POST',
    body: JSON.stringify({
      email: email,
      password: password
    }), 
    headers: {  
      'Content-Type': 'application/json'
    }
  })
  .then(async(res)=>{
    console.log(res);
    const msg = await res.json();
    return { status: res.status, data : msg.message};
  })
  .then((result)=>{
    console.log(result);
    if(result.status === 200)
      { return document.location.href = "http://localhost:3000/home";
      }
      document.getElementById('emails').classList.add("invalid");
	    document.getElementById('passwords').classList.add("invalid");
        alert(result.data);
  })
  .catch((err)=>{
    console.log(err);
  });

});
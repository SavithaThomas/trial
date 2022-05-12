const fname=document.getElementById('fname').value;
const lname=document.getElementById('lname');


function msg() {
    a=document.myform.fname.value;
    // window.alert(a.length);
    b=document.myform.lname.value;
    pho=document.myform.pno.value;
    pass=document.myform.pwd.value;
    mail=document.myform.email.value;

    if (pass.length < 4){
        window.alert("no of password is less");
    }    
    
    if ( a.length < 3 )
    {
        window.alert("First name has to be atleast 3 chars");
    }
    
    if ( b.length < 3 )
    {
        window.alert("Last name has to be atleast 3 chars");
    }
    if ( pho.length < 10 )
    {
        window.alert("Phone no has to be atleast 10 chars");
    }

     if (pass == null || pass == " ") {
         window.alert("please enter password");
     }           
}

  function msg1() {
    window.alert("Your values are getting cleared");
  }

  
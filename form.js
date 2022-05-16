


function fnamecheck() {

    var fnre = /^[a-zA-Z]+$/;
    a=document.myform.fname.value;    
    if ( !fnre.test(a) )
     {   
     alert("First name must contain only characters");        
     document.getElementById("fname").selected = true;    
}
}

function fnlcheck() {
    a=document.myform.fname.value;    
    document.getElementById("fname").selected = true;   
    if (a == null || a == "") {
        window.alert("Please enter firstname")
        document.getElementById("fname").selected = true;   
      
    } 
    else if ( a.length < 5 )
    {       
       
        alert("Please enter first name with min 5 chars ");         
         document.getElementById("fname").selected = true;   
        
    }
    else if ( a.length > 15)  
     {
        
         alert("Please enter first name with max 15 chars");
         document.getElementById("fname").selected = true;   
         
    }
 
    
}
function lnamecheck() {

    var fnre = /^[a-zA-Z]+$/;
    b=document.myform.lname.value;    
    if ( !fnre.test(b) )
     {   
     alert("First name must contain only characters");        
     document.getElementById("lname").selected = true;    
}
}

function lnlcheck() {
    b=document.myform.lname.value;    
    document.getElementById("lname").selected = true;   
    if (b == null || b == "") {
        window.alert("Please enter lastname")
        document.getElementById("lname").selected = true;   
      
    } 
   else  if ( b.length < 5 )
    {       
       
        alert("Please enter last name with min 5 chars ");         
         document.getElementById("lname").selected = true;   
         }
    else if ( b.length > 15)  
     {
        
         alert("Please enter last name with max 15 chars");
         document.getElementById("lname").selected = true;   
             }   
}

function pnocheck() {

    var phre = /^[0-9]+$/;    
    pho=document.myform.pno.value;    
    if ( !phre.test(pho) )
     {   
     alert("Phone no must contain only numbers");        
    //  document.getElementById("pno").selected = true;    
}
}

function pnolcheck() {
    pho=document.myform.pno.value;
    document.getElementById("pno").selected = true;   
    // if (pho == null || pho == "") {
    //     window.alert("Please enter phonenumber")
    //     document.getElementById("pno").selected = true;   
      
    // } 
    if ( pho.length != 10 )
    {            
        alert("Please enter 10 digit phone number ");         
        document.getElementById("pno").selected = true;   
         }
    }

function emailcheck() {
    mail=document.myform.email.value;
    var emre = /^\w+[\.]?\w+[@]+\w+[\.]+[a-zA-Z]+$/;
    if ( mail== null || mail == "") {
        window.alert("Please enter email")
        document.getElementById("email").selected = true;         
    } 
    
    else if ( !emre.test(mail) ) {
        // document.getElementById("demo").innerHTML = "Email must contain @ characters";
           alert("Email must contain @ & . characters");                       
     }
 
}

function passcheck()
{

    var passre = /[a-z]+/;
    var pass1 = /[@#!$]+/;
    var pass2 = /[A-Z]+/;
    var pass3 = /[0-9]+/;

    pass=document.myform.pwd.value;

    if (pass.length < 8){
        window.alert("Password must be atleast 8 chars long")
        document.getElementById("pass").selected = true;   
        //document.getElementById("demo").innerHTML ="Password must be atleast 4 chars long";
    }    
     else if (pass == null || pass == "") {
         window.alert("Please enter password")
       // document.getElementById("demo").innerHTML ="Please enter password";
     } 
     else if ( !passre.test(pass) ) {
                                  
        //document.getElementById("demo").innerHTML = "Password must contain an upper case letter , special charcter  and a number";
         window.alert("Password must contain a small case letter ");                           
    }     
    
    else if ( !pass1.test(pass))
    {
    window.alert("Password must contain a special charcter");        
    }
   else if ( !pass2.test(pass))
    {
    window.alert("Password must contain an upper case letter"); 
    }       

    else if ( !pass3.test(pass))
   {

    window.alert("Password must contain a number");     
}       

}

function msg1() {
    document.getElementById("demo").innerHTML = "Your values are getting cleared";
    document.getElementById("pass").selected = true;   
    // window.alert("") ;
 }

 function validation() {
    a=document.myform.fname.value; 
    b=document.myform.lname.value;  
    pho=document.myform.pno.value;   
    mail=document.myform.email.value;
    pass=document.myform.pwd.value;
     
    if (a == null || a == "") {
        window.alert("Please enter firstname")
        document.getElementById("fname").selected = true;   
      
    }     
    else if (b == null || b == "") {
        window.alert("Please enter lastname")
        document.getElementById("lname").selected = true;   
      
    }        
    else if (pho == null ||pho == "") {
        window.alert("Please enter phonenumber")
        document.getElementById("pno").selected = true; 
      
    }     
    else if ( mail== null || mail == "") {
        window.alert("Please enter email")
        document.getElementById("email").selected = true;       
    }     
   else  if (pass == null || pass == "") {
        window.alert("Please enter password")
        document.getElementById("pwd").selected = true; 
      // document.getElementById("demo").innerHTML ="Please enter password";
    } 

    window.location="appl.html";
    

 }




// function validation() {

// //Getting the values from the document

//     a=document.myform.fname.value;    
//     b=document.myform.lname.value;
    
//     pass=document.myform.pwd.value;
//     mail=document.myform.email.value;
//     // document.getElementById("demo").innerHTML = " ";

//  //Regular expressions
    
//     var phre = /^[0-9][0-9]{9}$/;
//     var fnre = /^[a-zA-Z]+$/;
//     var emre = /[@]+/;
//     var passre = /[a-z]+/;
//     var pass1 = /[@#!$]+/;
//     var pass2 = /[A-Z]+/;
//     var pass3 = /[0-9]+/;
    

// //Conditions to check the length of first and last names and also the the presence of special charcters
 
//     if ( a.length < 3 || a.length > 10)
//     {
//          window.alert("Please enter first name with min 3 chars and max 10 chars");
//         // document.getElementById("demo").innerHTML =" Please enter first name with min 3 chars and max 10 chars";
//     }
    
//     if ( b.length < 3 || b.length > 10 )
//     {
//         window.alert("Please enter last name with min 3 chars and max 10 chars");
//         // document.getElementById("demo").innerHTML =" Please enter last name with min 3 chars and max 10 chars";        
//     }
//     if ( !fnre.test(a) ) {
//         document.getElementById("demo").innerHTML = "First name must contain only characters";
//          window.alert("First name must contain only characters");                       
//     }
//     if ( !fnre.test(b) ) {
//         // document.getElementById("demo").innerHTML = "Last name must contain only characterss";
//          window.alert("Last name must contain only characters");   
//     }
        
// //Conditions to check phone number           

//     if ( pho.length < 10 )
//     {
//         //document.getElementById("demo").innerHTML = "Phone no must be atleast 10chars";
//          window.alert("Phone no has to be atleast 10 chars");
//     }
//     if ( !phre.test(pho) ) {
//         //document.getElementById("demo").innerHTML = "Phone no must contain only numbers";
//         window.alert("Phone no must contain only numbers");   
//     }

// // Conditions to check the length of password and special characters in password

//     if (pass.length < 4){
//         window.alert("Password must be atleast 4 chars long")
//         //document.getElementById("demo").innerHTML ="Password must be atleast 4 chars long";
//     }    
//      if (pass == null || pass == " ") {
//          window.alert("Please enter password")
//        // document.getElementById("demo").innerHTML ="Please enter password";
//      } 
//      if ( !passre.test(pass) || !pass1.test(pass) || !pass2.test(pass) || !pass3.test(pass) ) {
                                  
//         //document.getElementById("demo").innerHTML = "Password must contain an upper case letter , special charcter  and a number";
//          window.alert("Password must contain an upper case letter , special charcter  and a number");                           
//     }                     
   
// //Conditions to check email   

//      if ( !emre.test(mail) ) {
//        // document.getElementById("demo").innerHTML = "Email must contain @ characters";
//           window.alert("Email must contain @ & . characters");                       
//     }

// }

 
  
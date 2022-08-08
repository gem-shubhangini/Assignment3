
const Tablefilled = () => {
  // Fetches the data from localStorage and parses it to be used in code
  if (localStorage.getItem('Details') !== null) {
      const details = JSON.parse(localStorage.Details);
      const tableBody = document.querySelector('tbody');
      tableBody.innerHTML = '';
      console.log("I AM here")
      details.forEach(detail => {
          tableBody.innerHTML += `
      <td>${detail.name}</td>
      <td>${detail.email}</td>
      <td>${detail.mobile}</td>
      `
      })
  }
}
function clearErrors(){

  errors = document.getElementsByClassName('formerror');
  for(let item of errors)
  {
      item.innerHTML = "";
  }


}
function seterror(id, error){
  //sets error inside tag of id 
  element = document.getElementById(id);
  element.getElementsByClassName('formerror')[0].innerHTML = error;

}

function validateForm(){
  var alpha = /^[a-zA-Z\s]*$/;
  var returnval = true;
  clearErrors();

  //perform validation and if validation fails, set the value of returnval to false
  var name = document.forms['myForm']["name"].value;
var phone = document.forms['myForm']["phone"].value;
var email = document.forms['myForm']["email"].value;
  
  if (name.length == 0){
      seterror("name", "*Name Required");
      returnval = false;
  }
  if (name.match(alpha)){
    returnval = true;
  }
  else{
    seterror("name", "*Only Alphabets");
    returnval = false;
  }
  if (name.length<5){
    seterror("name", "*Length of name is too short");
    returnval = false;
   }


  
 
  if(email.length==0){
    seterror("email", "**Email Required");
      returnval = false;
  }

  else if(email.indexOf('@')<=0){
       seterror("email", "**Invalid @ Position");
      returnval = false;
  }
 
  
  
  if (isNaN(phone)){
      seterror("phone", "*Phone number should have only digits!");
      returnval = false;
  }
  else if(phone.length>0 && phone.length<10){
    seterror("phone", "*Phone number should be of 10 digits!");
      returnval = false;
  }
  let data = [];
  
    if (localStorage.getItem('Details') !== null) {
        let OldData = JSON.parse(localStorage.Details);
        OldData.forEach(oldData => data.push(OldData));
    }
    let Data = {
        name: name,
        email: email,
        mobile: phone
    };
  
    data.push(Data);
    
    localStorage.setItem('Details', JSON.stringify(data));
    

    form.reset();
    Tablefilled();

  return returnval;
}


Tablefilled();
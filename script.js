// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-BuGbFZPv0lEG-bbcpKI-tkbGHeJ5jMQ",
  authDomain: "registrationform-18307.firebaseapp.com",
  databaseURL: "https://registrationform-18307-default-rtdb.firebaseio.com",
  projectId: "registrationform-18307",
  storageBucket: "registrationform-18307.appspot.com",
  messagingSenderId: "701001934422",
  appId: "1:701001934422:web:b715b4be30015432c6fdf7"
};
/*------
var peopleNo=0;

function displayinput(fullname,email,phonenumber,address,dateofbirth,medicalhistory){
  var info=document.getElementById('registrationform');
  var header=document.createElement('h2');

   var _fullname= document.createElement('input');
   var _email= document.createElement('input');
   var _phonenumber= document.createElement('input');
   var _address= document.createElement('input');
   var _dateofbirth= document.createElement('input');
   var _medicalhistory= document.createElement('input');
   
   header.innerHTML='People-' + (++peopleNo);

   _fullname.innerHTML='fullname:' +fullname;
   _email.innerHTML='email:' +email;
   _phonenumber.innerHTML='phonenumber:' +phonenumber;
   _address.innerHTML='address:' +address;
   _dateofbirth.innerHTML='dateofbirth:' +dateofbirth;
   _medicalhistory.innerHTML='medicalhistory:' +medicalhistory;

   info.appendChild(header);
   info.appendChild(_fullname);
   info.appendChild(_email);
   info.appendChild(_phonenumber);
   info.appendChild(_address);
   info.appendChild(_dateofbirth);
   info.appendChild(_medicalhistory);
}
function FetchAllData(){
  firebase.database().ref('people').once('value',function(snapshot){
    snapshot.forEach(
      function(ChildSnapshot){
        let fullname = ChildSnapshot.val().fullname;
        let  email = ChildSnapshot.val().email;
        let  phonenumber = ChildSnapshot.val().phonenumber;
        let  address = ChildSnapshot.val().address;
        let  dateofbirth= ChildSnapshot.val().dateofbirth;
        let  medicalhistory= ChildSnapshot.val().medicalhistory;
        displayinput(fullname,email,phonenumber,address,dateofbirth,medicalhistory);
      }
    )
  })
}
window.onload(FetchAllData());
------*/


// Initialize Firebase
firebase.initializeApp(firebaseConfig);


//reference your database
var registrationformdb = firebase.database().ref('registrationform');
document.getElementById('registrationform').addEventListener('submit',submitform);

function submitform(e){
    e.preventDefault();

    var fullname = getElementVal('fullname');
    var email = getElementVal('email');
    var phonenumber = getElementVal('phonenumber');
    var address= getElementVal('address');
    var dateofbirth= getElementVal('dateofbirth');
    var medicalhistory= getElementVal('medicalhistory');

    saveMessages(fullname,email,phonenumber,address,dateofbirth,medicalhistory);

    // enable alert
    document.querySelector('.alert').style.display = "block";
    //remove the alert
    setTimeout(() => {
    document.querySelector('.alert').style.display = "none";
    },3000);
    //reset the form
    document.getElementById("registrationform").reset();
  }
    const saveMessages= (fullname,email,phonenumber,address,dateofbirth,medicalhistory) =>{
      var newregistrationform= registrationformdb.push();

      newregistrationform.set({
        fullname: fullname,
        email: email,
        phonenumber: phonenumber,
        address: address,
        dateofbirth :dateofbirth  ,
        medicalhistory: medicalhistory,
      });

    };

const getElementVal = (id) =>{
    return document.getElementById(id). value;

}

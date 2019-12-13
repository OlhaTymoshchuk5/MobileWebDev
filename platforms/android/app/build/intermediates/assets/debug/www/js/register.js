

 
/* register functions */
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {  
    var saveFBButton = document.getElementById("btn-register");
    saveFBButton.addEventListener("click", registerInFirebase, false);

    var cancelFBBButton = document.getElementById("btn-cancel");
    cancelFBBButton.addEventListener("click", callLoginPage, false);

    var photoButton = document.getElementById("photo");
    photoButton.addEventListener("click", takePhoto, false);

    API_RemoveStorageItems('blob');
    API_RemoveStorageItems('url');
    startRegister();
}


function SaveDataUser(name){
  var userId = firebase.auth().currentUser.uid;
  var email = firebase.auth().currentUser.email;
  var url = "";
  var FileImage      = API_GetStorage('myImageRegister');
  if(FileImage != null){
    sendToFirebase(FileImage,0);
  } 

  url =API_GetStorage("url");
  if (url == null){
    url = "";
  } 

  var db = firebase.firestore(app);


  var data = `{"userId":"${userId}","email":"${email}","name":"${name}","url":"${url}"}`;


  db.collection('users').doc(userId).set(
      {
          dataUser:data,
      }, 
      { 
          merge: true // set with merge set to true to make sure we don't blow away existing data we didnt intend to
      }
  )
  .then(function() {
      console.log("Document successfully written!");
      firebase.auth().signOut().then(function() {
        API_Alert("You are now ready to login!",CallPage("../index.html"),"Alert");
      }).catch(function(error) {
        // An error happened.
      });
      // CallPage('../index.html');
  })
  .catch(function(error) {
      console.error("Error writing document: ", error);
  });

};

function startRegister(){
    API_RemoveStorageItems('myImageRegister');
  }

  function registerInFirebase() {
    var email    = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var name     = document.getElementById('name').value; 
  
    if (name.length < 4) {
      API_Alert('Please enter a name.', null, 'Alert', 'OK');
      return;
    }
  
    if (email.length < 4) {
      API_Alert('Please enter an email address.', null, 'Alert', 'OK');
      return;
    }
  
    if (password.length < 4) {
      API_Alert('Please enter a password.', null, 'Alert', 'OK');
      return;
    }

  
  
     firebase.auth().createUserWithEmailAndPassword(email, password)
         .then(function(firebaseUser) {
             var user = firebase.auth().currentUser;
             SaveDataUser(name);
         })
         .catch(function(error) {
             var errorCode = error.code;
             var errorMessage = error.message;
             if (errorCode == 'auth/weak-password') {
              API_Alert('The password is too weak.', null, 'Alert', 'OK');
             } 
             else {
              API_Alert(errorMessage);
             }
             console.log(error);
         }
     );
  }
  
  function callLoginPage(){
    CallPage('../index.html');
  }
  
function takePhoto(){
  API_Camera('myImageRegister');
}
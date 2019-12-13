var storage = window.localStorage;
// Wait for device API libraries to load
document.addEventListener("deviceready", onDeviceReady, false);

// device APIs are available
function onDeviceReady() {  
  var loginButton = document.getElementById("loginButton");
  loginButton.addEventListener("click", loginWithFirebase, false);

  var registerButton = document.getElementById("registerButton");
  registerButton.addEventListener("click", callRegister, false);

  onLoad();
};

function onLoad(){
  var email = API_GetStorage('email');
  var passw = API_GetStorage('password');
  var save = API_GetStorage('save');
  if (save != null && save == "true"){
    document.getElementById('login-email-input').value    = email;
    document.getElementById('login-password-input').value = passw;
    document.getElementById("inlineCheckbox1").checked    = true;
  } else {
    document.getElementById('login-email-input').value    = "";
    document.getElementById('login-password-input').value = "";
    document.getElementById("inlineCheckbox1").checked    = false;
  }
}

function loginWithFirebase() {
  var email   = document.getElementById('login-email-input').value;
  var password = document.getElementById('login-password-input').value;
  var saveData = document.getElementById("inlineCheckbox1").checked;


  if (email.length < 4) {
    var message = "Please enter an email address."
    API_Alert(message,null,'Alert','Ok');
    return;
  }

  if (password.length < 4) {
    var message = 'Please enter a password.';
    API_Alert(message,null,'Alert','Ok');
    return;
  }

  var network = API_Network();
  if (network == 'none'){
    API_Alert('No network connection', null, 'Alert', 'Ok');
  }
  else{

  firebase.auth().signInWithEmailAndPassword(email, password)
  .then(function(firebaseUser) {
    if (saveData) {
      API_SetStorage("save",true);
      API_SetStorage("email",email);
      API_SetStorage("password",password);
    } else {
      API_SetStorage("save",false);
      API_RemoveStorageItems("email");
      API_RemoveStorageItems("password");
    } 
    window.location.assign('html/games.html');
    // load data
  })
  .catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') errorMessage = 'Wrong password.';
      API_Alert(errorMessage, null, 'Alert', 'OK');
  }
);
}

}
function callRegister(){
  window.location = 'html/register.html';
}





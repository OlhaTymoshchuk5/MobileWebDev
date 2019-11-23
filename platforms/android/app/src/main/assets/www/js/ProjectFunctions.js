/*Global Function*/
//Call a page
function CallPage(url){
  window.location = url;
}


/* Index.html' functions  */
function onLoad(){
  var email  = API_GetStorage('email');
  var passw = API_GetStorage('passw');
  if (email != null && passw != null){
    document.getElementById('login-email-input').value = email;
    document.getElementById('login-password-input').value = passw;
    document.getElementById("inlineCheckbox1").checked = true;
  } else {
    document.getElementById('login-email-input').value = "";
    document.getElementById('login-password-input').value = "";
    document.getElementById("inlineCheckbox1").checked = false;
  }
}

function loginWithFirebase() {
  var email   = document.getElementById('login-email-input').value;
  var password = document.getElementById('login-password-input').value;
  var saveData = document.getElementById("inlineCheckbox1").checked;
  if (document.getElementById('inlineCheckbox1').value = '1') {saveData = true} ;

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
      API_SetStorage(email,password);
    } else {
      API_RemoveStorageItems();
    } 
    window.location.assign('html/pagePlays.html');
      // load data
     // retrieveDataFromFirebase();
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
  CallPage('html/register.html');
}

/* register functions */
function registerInFirebase() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var name = document.getElementById('name').value;

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
           user.updateProfile({
             displayName:name
             //photoURL: "https://example.com/jane-q-user/profile.jpg"
           }).then(function() {
             // Update successful.
           }).catch(function(error) {
             // An error happened.
           });
           CallPage('../index.html');
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
    API_Camera("image");
}

/* PlaysGame functions*/
function setUrlYouTube(){
  document.getElementById('video').src = "http://www.youtube.com/embed/q1AMTDasitI";
}


function callComents(){
  CallPage('../html/coment.html');

}

function outputComment(){
  //use gameId
  var userId = firebase.auth().currentUser.uid;

  var db = firebase.firestore(app);
  var docRef = db.collection("comments").doc(userId);

  docRef.get().then(function(doc) {
        if (doc.exists) {
            document.getElementById('commentArea').innerHTML = doc.data().title;
            console.log("Document data:", doc.data());
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
}

/*Comment Page */

function saveComment(){
  var gameID = "1";
  var comment = document.getElementById("inputTextarea").value;
  var title = document.getElementById("InputTitle").value;
  var pic = "1";

  if(title.length <= 0){
      API_Alert("Write the title", null, "Alert", "OK");
      return
  }
  if(comment.length <= 0){
    API_Alert("Write the comment", null, "Alert", "OK");
  }
  var Latitude;
  var Longitude;

  navigator.geolocation.watchPosition(
    
    (position) => {
      Latitude = position.coords.latitude;
      Longitude = position.coords.longitude;
    }, 
    null, 
    { timeout: 30000, enableHighAccuracy: true }
);

    var string;
    var db = firebase.firestore(app);
    string = `{usermame: "${firebase.auth().currentUser.uid}", title: "${title}", comment: "${comment}", locationLat: "${Latitude}", locationLat: "${Longitude}", date:"${new Date()}"}`;
    var comm = db.collection("comments").doc(gameID);

    comm.update({comments:firebase.firestore.FieldValue.arrayUnion(string)});
  
 
}



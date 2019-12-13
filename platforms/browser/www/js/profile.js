document.addEventListener("deviceready", onDeviceReady, false);


// device APIs are available
function onDeviceReady() {  
    var sinoutButton = document.getElementById("singout");
    sinoutButton.addEventListener("click", singOut, false);

    outputUser();
}

function singOut(){
  firebase.auth().signOut().then(function() {
    API_Alert("Come back soon!",CallPage("../index.html"),"Alert");
  }).catch(function(error) {
    // An error happened.
  });
}

function outputUser(){

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      var userId = firebase.auth().currentUser;
      var db = firebase.firestore(app);
      var storageRef  = firebase.storage().ref();
      docRef = db.collection("users").doc(userId.uid);
      docRef.onSnapshot(function(doc) {
       console.log("Current data: ", doc.data().dataUser);
         var obj =JSON.parse(doc.data().dataUser);
         name = obj.name;
         email = obj.email;
         urlUser = obj.url
         document.getElementById('name').innerHTML = name;
         document.getElementById('email').innerHTML = email;

         // Create a reference to the file we want to download
         var starsRef = storageRef.child(urlUser);

         // Get the download URL
         starsRef.getDownloadURL().then(function(url) {
           // Insert url into an <img> tag to "download"
           document.getElementById("myImageRegister").src = url;
         }).catch(function(error) {
           console.log(error);
           switch (error.code) {
             case 'storage/object-not-found':
               // File doesn't exist
               break;
           
             case 'storage/unauthorized':
               // User doesn't have permission to access the object
               break;
           
             case 'storage/canceled':
               // User canceled the upload
               break;
           
             case 'storage/unknown':
               // Unknown error occurred, inspect the server response
               break;
           }
         });

      });
      // User is signed in.
    } else {
      console.log('No user is signed in.');
      // No user is signed in.
    }
  });




//   var userId = firebase.auth().currentUser;
//   var db = firebase.firestore(app);
//   docRef = db.collection("users").doc(userId.uid);
//   docRef.onSnapshot(function(doc) {
//     console.log("Current data: ", doc.data());
// });

//     var user = firebase.auth().currentUser;
//     var name, email;
    
//     if (user != null) {
//       name = user.displayName;
//       email = user.email;
//       console.log('email: ' + email);
//       console.log('name: ' + name);
//       console.log("obj user" + user);
//       console.log(user);
//       document.getElementById('name').innerHTML = name;
//       document.getElementById('email').innerHTML = email;
//     }
  }
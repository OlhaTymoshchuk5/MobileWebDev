/*Global Function*/

// function codeLatLng(lat, lng) {
//   var latlng = new google.maps.LatLng(lat, lng);
//   geocoder.geocode({'latLng': latlng}, function(results, status) {
//     if (status == google.maps.GeocoderStatus.OK) {
//     console.log(results)
//       if (results[1]) {
//        //formatted address
//        alert(results[0].formatted_address)
//       //find country name
//            for (var i=0; i<results[0].address_components.length; i++) {
//           for (var b=0;b<results[0].address_components[i].types.length;b++) {

//           //there are different types that might hold a city admin_area_lvl_1 usually does in come cases looking for sublocality type will be more appropriate
//               if (results[0].address_components[i].types[b] == "administrative_area_level_1") {
//                   //this is the object you are looking for
//                   city= results[0].address_components[i];
//                   break;
//               }
//           }
//       }
//       return city.short_name
//       // alert( + " " + city.long_name)


//       } else {
//         return "No results found";
//       }
//     } else {
//       return "Geocoder failed due to: " + status;
//     }
//   })};


//Call a page
function CallPage(url){
  window.location = url;
}


/* Index.html' functions  */
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
  CallPage('html/register.html');
}

/* register functions */
function startRegister(){
  API_RemoveStorageItems('myImageRegister');
}


function updateUsuar(name,url){ 
      var user = firebase.auth().currentUser;          
      user.updateProfile({
        displayName:name
      }).then(function() {

        
      }).catch(function(error) {
        console.log(error)
      });
  
  
    }     
  


function registerInFirebase() {
  var email    = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var name     = document.getElementById('name').value;
  var url = "";
  userIn = true;

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

  // //Upload photo 
  // var filePath = API_GetStorage('myImageRegister');
  // if (filePath != null){

  // window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onFileSystemSuccess, fail);
  
  // function onFileSystemSuccess(fileEntry) {
  //   var ref     = firebase.storage().ref();
  //   var newName =  '_Photo.' + fileEntry.name;
  //   var task    = ref.child(newName).put(fileEntry);
  //   task
  //   .then((snapshot) => {
  //     url = snapshot.downloadURL;
  //     API_RemoveStorageItems('myImageRegister');
  //   })
  //   .catch((error) => {
  //    console.log(error);
  //   })
  //  }

    
  // function fail(evt) {
  //     console.log(evt.target.error.code);
  //   }
  // }


  firebase.auth().createUserWithEmailAndPassword(email, password)
       .then(function(firebaseUser) {
          console.log('user in');
          updateUsuar(name,file);
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
       ) ;
}

function callLoginPage(){
  CallPage('../index.html');
}

function takePhoto(){
  API_Camera('myImageRegister');
}

/* PlaysGame functions*/
function startPlay(){

  // var gameID  = storage.getItem('currentGame');
  var gameID  = "1";
  LoadPage(gameID);
}


function callComents(){
  CallPage('../html/comment.html');
}

function LoadPage(gameID){
  var db = firebase.firestore(app);
  var docRef = db.collection("comments").doc(gameID);

   docRef.get().then(function(doc) {
        if (doc.exists) {
          var data = doc.data();

          //LOAD "Local Database" Datas 
          var GameData = data.data;
          var obj = JSON.parse(GameData);
          document.getElementById('playName').innerHTML = obj.Title;
          document.getElementById('video').src = obj.URL;
          document.getElementById('description').innerHTML = obj.Description;

          //LOAD "Local Database" Comments 
          var count = data.comments.length;
          document.getElementById("count").innerHTML = `${count} customers comments`;

            var htmlTemp = "";
            for(var i=0; i < count;i++){
              var comments = data.comments[i];
              var obj = JSON.parse(comments);
              htmlTemp = htmlTemp + `<div><h5>${obj.usermame}  <small class="text-muted">(${obj.locationLat} , ${obj.locationLon}) </small> </h5></div>
                         <div class="font-weight-bold">${obj.title}</div> 
                         <div class="pb-4">${obj.comment}</div>`;
            }

            document.getElementById("commets").innerHTML = htmlTemp;

        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
}

/*Comment Page */
function startComments(){
  API_RemoveStorageItems('myImageCommets');
  //Set Game Name
  document.getElementById('nameplayComments').innerHTML = "Spinner Gamer";
}

function AttachImage(){
  API_Camera('myImageCommets');
}

function saveComment(){
  UploadDate();
  API_Alert("Thanks for your comment!!",CallPage("../html/pagePlays.html"),"Alert","Ok");
}

function UploadDate(){
  var gameID = "1";
  var comment = document.getElementById("inputTextarea").value;
  var title = document.getElementById("InputTitle").value;
  var url = "";

  if(title.length <= 0){
      API_Alert("Write the title", null, "Alert", "OK");
      return
  }
  if(comment.length <= 0){
    API_Alert("Write the comment", null, "Alert", "OK");
  }

  API_Geolocation();
  var lat = API_GetStorage("Lat");
  var lon = API_GetStorage("Lon");


  //  //Upload photo 
  //  var file = API_GetStorage('myImageCommets');
  //  if (file != null) {
  //    var ref     = firebase.storage().ref();
  //    var newName =  gameID +  '_Photo_' + title + '.' + file.split('.').pop();
  //    var task    = ref.child(newName).put(file);
  //    task
  //    .then((snapshot) => {
  //      url = snapshot.downloadURL;
  //      API_RemoveStorageItems('myImageRegister');
  //    })
  //    .catch((error) => {
  //     console.log(error);
  //    })
  //  };
  
  var arrayString="";
  var db = firebase.firestore(app);
  arrayString = `{"usermame": "${firebase.auth().currentUser.displayName}", "title": "${title}", "comment": "${comment}", "locationLat": "${lat}", "locationLon": "${lon}", "date":"${new Date()}","urlPhoto":"${url}"}`;
  var comm = db.collection("comments").doc(gameID);
  comm.update({comments:firebase.firestore.FieldValue.arrayUnion(arrayString)})

  

}


/*Profile Page */
function outputUser(){
  var user = firebase.auth().currentUser;
  var email;
  if (user != null) {
    name = user.displayName;
    email = user.email;
    console.log('email: ' + email);
    console.log('name: ' + name);
    console.log("obj user" + user);
    console.log(user);
    document.getElementById('email').innerHTML = email;
    document.getElementById('name').innerHTML = name;
  }
}

async function DataGame(ID){
  var db = firebase.firestore(app);
  var docRef = db.collection("comments").doc(ID);
  var obj = {};
   docRef.get().then(function(doc) {
        if (doc.exists) {
          var data = doc.data();
          //LOAD "Local Database" Datas 
          var GameData = data.data;
          return JSON.parse(GameData);
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }
    ).catch(function(error) {
        console.log("Error getting document:", error);
        return null;
    });
  }

//function Game Page
function showGames(all){
  document.getElementById("theGames").innerHTML="";
  var filter ="";
  if (all==0){
    filter = "in this app.";
    console.log("all Games"); 
  } else {
    filter = "in your favorites";
    filterTitle= "Favorite Plays";
     console.log("Favorite Games");
     document.getElementById("back").innerHTML=" <a href='games.html' title=''>Back to All Plays</a>";
  }

  var thegame="";
  var nOfGames = 0;
  var len =1;

  for (i = 0; i < len; i++) { 
     var obj =  await DataGame(`${i+1}`);
     if (obj != null){
      nOfGames++;
      thegame +="<div class='col-6 '>";
      thegame +="<div id='games'>";
      thegame +="<p>"+obj.name + "</p>";
      thegame +="<img src='../img/play-button.png' title='Go to this Play' class='img-responsive' onclick='gotoGame("+results.rows.item(i).gameID+")'/>";
      thegame +="</div>";
      thegame +="</div>";
     }
  }
  document.getElementById("numberOfGames").innerHTML = "There is a total of ("+nOfGames+") Plays "+filter+".";
  document.getElementById("theGames").innerHTML += thegame;
}



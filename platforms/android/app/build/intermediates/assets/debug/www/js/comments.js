var storage = window.localStorage;

// Wait for device API libraries to load
document.addEventListener("deviceready", onDeviceReady, false);

// device APIs are available
function onDeviceReady() {  
  var attachImage = document.getElementById("attachImage");
  attachImage.addEventListener("click", AttachImage, false);

  var saveCommentBtn = document.getElementById("saveComment");
  saveCommentBtn.addEventListener("click", saveComment, false);

  startComments();
};

function startComments(){
  API_RemoveStorageItems('myImageCommets');
  API_RemoveStorageItems("url");
  //Set Game Name
  document.getElementById('nameplayComments').innerHTML = storage.getItem('playName');
}

function AttachImage(){
  API_Camera('myImageCommets');
}

//Call a page
function CallPage(url){
  window.location = url;
}

function saveComment(){
  UploadDate();
  //API_Alert("Thanks for your comment!!",CallPage("../html/pagePlays.html"),"Alert","Ok");
}


async function GeoGEO(){
   var geo = await API_Geolocation();
  console.log(geo);
  return geo;
}


async function UploadDate(){
  var gameID  = storage.getItem('currentGame');
  var comment = document.getElementById("inputTextarea").value;
  var title = document.getElementById("InputTitle").value;
  var FileImage      = API_GetStorage('myImageCommets');


  if(FileImage != null){
    sendToFirebase(FileImage,1);
  } 

  url =API_GetStorage("url");
  if (url == null){
    url = "";
  } 

  var geo = await GeoGEO();
  var lat = 0;
  var lon = 0;
  if (geo != null){
    var lat = geo.coords.latitude;
    var lon = geo.coords.longitude;
  } 
  

  if(title.length <= 0){
      API_Alert("Write the title", null, "Alert", "OK");
      return;
  }
  if(comment.length <= 0){
    API_Alert("Write the comment", null, "Alert", "OK");
    return;
  }

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      var userId = firebase.auth().currentUser;
      var db = firebase.firestore(app);
      docRef = db.collection("users").doc(userId.uid);
      docRef.onSnapshot(function(doc) {
         var obj =JSON.parse(doc.data().dataUser);
         var name = obj.name;
         var comentsArray = `{"usermame": "${name}", "title": "${title}", "comment": "${comment}", "locationLat": "${lat}", "locationLon": "${lon}", "date":"${new Date()}","urlPhoto":"${url}"}`;
         var comm = db.collection("video").doc(gameID);
         comm.update({
           comments: firebase.firestore.FieldValue.arrayUnion(comentsArray)
         }).then(() => {
           API_Alert("Thanks for your comment!!",CallPage("../html/pagePlays.html"),"Alert","Ok");
           console.log('Successfully written')
         })
         .catch(err => {console.log(err)});;
         // User is signed in.
      });
    } else {
      console.log('No user is signed in.');
      // No user is signed in.
    }
  });  

}

// Wait for device API libraries to load
document.addEventListener("deviceready", onDeviceReady, false);

// device APIs are available
function onDeviceReady() {  
  StartLoad();
}

function gotoGame(idgame){
  storage.setItem('currentGame', idgame);
  window.location.assign('./pagePlays.html');
}


function DataGame(ID){
  var db = firebase.firestore(app);
  var docRef = db.collection("video").doc(ID);
  var obj = {};
    return docRef.get().then(function(doc) {
        if (doc.exists) {
          var data = doc.data();
          //LOAD "Local Database" Datas 
          var GameData = data.data;
          console.log('Dagame ' + JSON.parse(GameData))
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

  
async function loadData(Data){
  document.getElementById("gamesf").innerHTML="";
  var thegame="";
  var len =7;
  var cor = 0;
  var dec = false;

  for (i = 0; i < Data.length; i++) { 
     var obj = await DataGame(`${Data[i]}`);
     if (obj != null){
      if (cor < 6 && !dec){
        cor++;
        if (cor == 1) {dec = false};
      } else {
        if (cor == 6){dec = true;cor = 1;} else { cor--;}
      }
      thegame +=`<button type="button" class="list-group-item list-group-item-action bg-color-${cor} p-5 my-1" onclick="gotoGame(${Data[i]})"`;
      thegame += `><p class="h1 text-light"> ${obj.Title}</p></button>`;
     }
  }
   document.getElementById("gamesf").innerHTML += thegame;
}

function StartLoad(){
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      var userId = firebase.auth().currentUser;
      var db = firebase.firestore(app);
      docRef = db.collection("users").doc(userId.uid);
      docRef.onSnapshot(function(doc) {
        loadData(doc.data().favorite);
      });
    } else {
      console.log('No user is signed in.');
      // No user is signed in.
    }
  });
}
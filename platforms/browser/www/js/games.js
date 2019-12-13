var storage = window.localStorage;
// Wait for device API libraries to load
document.addEventListener("deviceready", onDeviceReady, false);

// device APIs are available
function onDeviceReady() {  
  showGames('0');
};

function showAllPlaysStart(gameID){
  var gameID  = storage.getItem('currentGame');
  //var gameID  = "1";
  showAllPlays(gameID);
  
}

function gotoGame(idgame){
  storage.setItem('currentGame', idgame);
  window.location.assign('./pagePlays.html');
 // window.location.assign('./pagePlaysTest.html');
}


function DataGame(ID){
  var db = firebase.firestore(app);
  var docRef = db.collection("video").doc(ID);
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


async function showGames(all){
  document.getElementById("theGames").innerHTML="";

  var thegame="";
  var len =7;
  var cor = 0;
  var dec = false;

  for (i = 0; i < len; i++) { 
     var obj = await DataGame(`${i+1}`);
     if (obj != null){
      
      if (cor < 6 && !dec){
        cor++;
        if (cor == 1) {dec = false};
      } else {
        if (cor == 6){dec = true;cor = 1;} else { cor--;}

      }
     


      thegame +=`<div class="col-6 p-2">`;
      thegame +=`<div class="card bg-color-${cor} text-light text-center" style="border-radius: 10px; width:150px; height:140px;" onclick="gotoGame(${i+1})">`;
      thegame +=`<div class="card-body">`;
      var title = obj.Title;
      thegame +=`<p class="card-text">${title}</p> </div>`;

      thegame +=`<div class="card-footer" style=" height:50px;">`;
      thegame +=`<img src="../img/${i+1}.png" alt="..." style=" width:35px; height:35px">`;
      thegame +=`</div></div></div>`;
     }
  }
  // document.getElementById("numberOfGames").innerHTML = "There is a total of ("+nOfGames+") Plays "+filter+".";
  document.getElementById("theGames").innerHTML += thegame;
}
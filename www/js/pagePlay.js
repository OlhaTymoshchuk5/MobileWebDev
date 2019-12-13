
// /*Global Function*/

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

// Wait for device API libraries to load
document.addEventListener("deviceready", onDeviceReady, false);

// device APIs are available
function onDeviceReady() {  
  startPlay();

  var registerButton = document.getElementById("registerButton");
  registerButton.addEventListener("click", callComents, false);
}



/* PlaysGame functions*/
function startPlay(){
  var gameID  = API_GetStorage('currentGame');
  LoadPage(gameID);
  showStar();
}

function showStar(){
   var gameID = storage.getItem('currentGame');
  // var favGame = storage.getItem(gameID);
  var favGame = false; 
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      var userId = firebase.auth().currentUser;
      var db = firebase.firestore(app);
      docRef = db.collection("users").doc(userId.uid);
      docRef.onSnapshot(function(doc) {
        console.log(doc.data().favorite);
        if (doc.data().favorite != undefined){
          for(var i=0;i<doc.data().favorite.length;i++){
            if(doc.data().favorite[i]==gameID){
              favGame = true;
              break;
            }
          }
        } 
        var img = "";
        if (favGame){ 
          img="<img  src='../img/Yes_favorite.png' title='Remove from Favorite' class='img-responsive' onclick='removeFromFav()'/>";
        } else {
          img="<img  src='../img/no_favorite.png' title='Add to Favorite' class='img-responsive' onclick='addToFav()'/>";
        }
        document.getElementById("FavStar").innerHTML=img;
      });
    } else {
      console.log('No user is signed in.');
      // No user is signed in.
    }
  });

  

}

function addToFav(){
  // var gameID = storage.getItem('currentGame');
  // storage.setItem(''+gameID+'', "yes");
  var gameID  = API_GetStorage('currentGame');
  var userId = firebase.auth().currentUser.uid;
  var db = firebase.firestore(app);
  var docRef = db.collection("users").doc(userId);
  docRef.update({
    favorite: firebase.firestore.FieldValue.arrayUnion(gameID)
  });
  
  showStar();
}

function removeFromFav(){
  // var gameID = storage.getItem('currentGame');
  // storage.setItem(''+gameID+'', "no");
  // var favGameId =  storage.getItem(''+gameID+'');
  var gameID  = API_GetStorage('currentGame');
  var userId = firebase.auth().currentUser.uid;
  var db = firebase.firestore(app);
  var docRef = db.collection("users").doc(userId);
  docRef.update({
    favorite: firebase.firestore.FieldValue.arrayRemove(gameID)
   });

  showStar();

  
}



function callComents(){
  
  CallPage('../html/comment.html');
}

function getUrlImage(imageUrl){
  var storageRef  = firebase.storage().ref();
  var starsRef = storageRef.child(imageUrl);

  return starsRef.getDownloadURL().then(function(url) {
          // API_SetStorage('div',`<div class="image">
          // <img src="${url}" style=" width:50px; height:50px"/>
          // </div>`);
          return `<div class="image">
                  <img src="${url}" style=" width:50px; height:50px"/>
                 </div>`;
    }
    ).catch(function(error) {
        console.log("Error getting document:", error);
        return null;
    });
  }

function DataGame(ID){
    var db = firebase.firestore(app);
    var docRef = db.collection("video").doc(ID);
    return docRef.get().then(function(doc) {
          if (doc.exists) {
            var data = doc.data();
            //LOAD "Local Database" Datas 
            var GameData = data;
            return GameData;
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


async function LoadPage(gameID){


  var db = firebase.firestore(app);
  var docRef = db.collection("video").doc(gameID);


  var doc = await DataGame(gameID);
  console.log(doc);

  //LOAD "Local Database" Datas 
  var GameData = doc.data;
  var obj = JSON.parse(GameData);
 
 document.getElementById('playName').innerHTML = obj.Title;
 API_SetStorage('playName',obj.Title);
 document.getElementById('video').src = obj.URL;
 document.getElementById('description').innerHTML = obj.Description;
 //LOAD "Local Database" Comments 
 var count = doc.comments.length;
 document.getElementById("count").innerHTML = `${count} customers comments`;

   var htmlTemp = "";
   for(var i=0; i < count;i++){
     var comments = doc.comments[i];
     var obj = JSON.parse(comments);
     htmlTemp +=`<div><h5>${obj.usermame}  <small class="text-muted">(${obj.locationLat} , ${obj.locationLon}) </small> </h5></div>
                <div class="font-weight-bold">${obj.title}</div> 
                <div>${obj.comment}</div>`;

     if (obj.urlPhoto != ""){
      // getUrlImage(obj.urlPhoto);
       var aux = await getUrlImage(obj.urlPhoto);
       console.log(aux);
       htmlTemp += aux;
     } 
     htmlTemp += "<br>";
   }
   document.getElementById("commets").innerHTML = htmlTemp;


  //  docRef.get().then(function(doc) {
  //       if (doc.exists) {
  //         var data = doc.data();

  //         //LOAD "Local Database" Datas 
  //         var GameData = data.data;
  //         var obj = JSON.parse(GameData);
  //         document.getElementById('playName').innerHTML = obj.Title;
  //         API_SetStorage('playName',obj.Title);
  //         document.getElementById('video').src = obj.URL;
  //         document.getElementById('description').innerHTML = obj.Description;

  //         //LOAD "Local Database" Comments 
  //         var count = data.comments.length;
  //         document.getElementById("count").innerHTML = `${count} customers comments`;

  //           var htmlTemp = "";
  //           for(var i=0; i < count;i++){
  //             var comments = data.comments[i];
  //             var obj = JSON.parse(comments);
  //             htmlTemp +=`<div><h5>${obj.usermame}  <small class="text-muted">(${obj.locationLat} , ${obj.locationLon}) </small> </h5></div>
  //                        <div class="font-weight-bold">${obj.title}</div> 
  //                        <div class="pb-4">${obj.comment}</div>`;

  //             if (obj.urlPhoto != ""){
  //               getUrlImage(obj.urlPhoto);
  //               var aux = API_GetStorage("div");
  //                htmlTemp += aux;
  //             } 
  //           }
  //           document.getElementById("commets").innerHTML = htmlTemp;

  //       } else {
  //           // doc.data() will be undefined in this case
  //           console.log("No such document!");
  //       }
  //   }).catch(function(error) {
  //       console.log("Error getting document:", error);
  //   });
}

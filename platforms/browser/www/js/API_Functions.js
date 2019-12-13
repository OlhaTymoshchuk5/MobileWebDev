var storage = window.localStorage;
// Wait for device API libraries to load
document.addEventListener("deviceready", onDeviceReady, false);

// device APIs are available
function onDeviceReady() {  
   
};

//Call a page
function CallPage(url){
  window.location = url;
}


function API_Alert(message,alertCallback, title, buttonName){
  navigator.notification.alert(message, alertCallback, [title], [buttonName]);
};

function API_SetStorage(key,value){
  storage.setItem(key, value);
};

function API_GetStorage(key){
  return storage.getItem(key);
};

function API_RemoveStorageItems(key){
  storage.removeItem(key);
};

function API_Network(){
  
    var networkState = navigator.connection.type;
    
    return networkState;
};



getUrl = async function (){

   return new Promise((resolve,reject) => {

      
   });
};



function sendToFirebase(FileImage,code){
  function randomString(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }
    var ref     = firebase.storage().ref();
    var fileName = randomString(10);

    switch(code) {
      case 0://Profile Photo
        newName = `/register/${fileName}_profile_photo.jpg`;
        API_SetStorage('url',newName);
        break;
      case 1:
        newName = `/comments/${fileName}_comments_photo.jpg`;
         API_SetStorage('url',newName);
        // code block
        break;
      default:
        // code block
    }


    window.resolveLocalFileSystemURL(FileImage, function (fileEntry) {
      fileEntry.file(function (file) {
          var reader = new FileReader();
          reader.onloadend = function () {
                 var blob = new Blob([new Uint8Array(this.result)], { type: "image/jpeg" });                  
                 var task    = ref.child(newName).put(blob);
                 task
                 .then((snapshot) => {
                   var url = snapshot.metadata.fullPath;;
                   console.log(url);
                 })
                 .catch((error) => {
                  console.log(error);
                 });
          };
          reader.readAsArrayBuffer(file);
       });
   }, function (error) {
       console.log(error);
       return "";
   });
  };  

function API_Camera(idDiv){

  function camError(errorMessage){
    return errorMessage;
}
  
  function camSuccess(imageData){
    document.getElementById(idDiv).src = imageData;
    API_SetStorage(idDiv, imageData);
    
}
    
    var options = {
      'quality': 85,
      'targetWidth': 1280,
      'targetHeight': 720,
      'saveToPhotoAlbum': false,
      'allowEdit': false,
      'destinationType' : navigator.camera.DestinationType.FILE_URI,
      'sourceType' : navigator.camera.PictureSourceType.CAMERA,
      'MediaType':  navigator.camera.MediaType.PICTURE,
      'encodingType': navigator.camera.EncodingType.JPEG,
      'Direction': navigator.camera.Direction.BACK, }
        navigator.camera.getPicture( camSuccess, camError, options );
      
};


function getPosition() {
  return new Promise((res, rej) => {
      navigator.geolocation.getCurrentPosition(res, rej);
  });
}


async function API_Geolocation() {
  return await getPosition()
  .then((position) => {
    console.log(position);
    return position;
  })
  .catch((err) => {
    console.error(err.message);
    return null;
  });

}




    
    
var storage = window.localStorage;
// Wait for device API libraries to load
document.addEventListener("deviceready", onDeviceReady, false);

// device APIs are available
function onDeviceReady() {  
   
};

function API_Alert(message,alertCallback, title, buttonName){
  navigator.notification.alert(message, alertCallback, [title], [buttonName]);
};

function API_SetStorage(email,password){
  storage.setItem('email', email);
  storage.setItem('passw', password);
};

function API_GetStorage(key){
  return storage.getItem(key);
};

function API_RemoveStorageItems(){
  storage.removeItem('email');
  storage.removeItem('passw');
};

function API_Network(){
  
    var networkState = navigator.connection.type;
    
    return networkState;
};

function API_Camera(divId){
  
  function camError(errorMessage){
    return "Error!";
}
  
  function camSuccess(imageData){
    var outputImg = '<img src="'+imageData+'" style="  width:100px; height:100px"/>';
    document.getElementById(divId).innerHTML = outputImg;
   
    
    
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

function API_Geolocation(){
var Latitude;
var Longitude;
var watchID = null;
  function onError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}

  watchID = navigator.geolocation.watchPosition(
    // inline onSuccess function
    (position) => {
      Latitude = position.coords.latitude;
       Longitude = position.coords.longitude;
    }, 
    onError, 
    { timeout: 30000, enableHighAccuracy: true }
);

    return {Latitude, Longitude};

}



    
    
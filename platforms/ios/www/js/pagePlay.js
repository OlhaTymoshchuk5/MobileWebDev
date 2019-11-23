// Wait for device API libraries to load
document.addEventListener("deviceready", onDeviceReady, false);

// device APIs are available
function onDeviceReady() {  
  document.getElementById('video').src = "//www.youtube.com/embed/q1AMTDasitI";
}

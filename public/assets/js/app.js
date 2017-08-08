// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCC_rYFUf8nwK8Mffb8a80_KpdAU_i9IL0",
    authDomain: "pastorcitofeliz-9b6a3.firebaseapp.com",
    databaseURL: "https://pastorcitofeliz-9b6a3.firebaseio.com",
    projectId: "pastorcitofeliz-9b6a3",
    storageBucket: "pastorcitofeliz-9b6a3.appspot.com",
    messagingSenderId: "975075129164"
  };
  // firebase.initializeApp(config);
var botonGoogle = document.getElementById("google");
var botonFacebook = document.getElementById("facebook");
var botonTwitter = document.getElementById("twitter");

var autenticacion = function (provider) {
  firebase.auth().signInWithPopup(provider)
    .then(function(result) {
      var token = result.credential.accessToken;
      var user = result.user;
    })
    .catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
    });
}

var inicioGoogle = function (e) {
  var provider = new firebase.auth.GoogleAuthProvider();
  autenticacion(provider);
}

var inicioFacebook = function (e) {
  var provider = new firebase.auth.FacebookAuthProvider();
  autenticacion(provider);
}

var inicioTwitter = function (e) {
  var provider = new firebase.auth.TwitterAuthProvider();
  autenticacion(provider);
}

firebase.initializeApp(config);
botonGoogle.addEventListener("click", inicioGoogle);
botonFacebook.addEventListener("click", inicioFacebook);
botonTwitter.addEventListener("click", inicioTwitter);

(function (window) {
  "use strict";
  var App = window.App || {};

  var FirebaseConfig = {
    apiKey: "AIzaSyAM3Eq2JfO16Bfx_1T_Jh5jcaJQnZ141cc",
    authDomain: "coffeerun-12d08.firebaseapp.com",
    projectId: "coffeerun-12d08",
    storageBucket: "coffeerun-12d08.appspot.com",
    messagingSenderId: "184545939537",
    appId: "1:184545939537:web:943a01ba7b36e864dc6870",
    measurementId: "G-1ZFWGKFR4H",
  };

  App.FirebaseConfig = FirebaseConfig;
  firebase.initializeApp(App.FirebaseConfig);

  window.App = App;
})(window);

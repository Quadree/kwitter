
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAAkjJTHqURKbE_gh3BGatixnFBZIYX1rk",
      authDomain: "kwitter-5ae57.firebaseapp.com",
      databaseURL: "https://kwitter-5ae57-default-rtdb.firebaseio.com",
      projectId: "kwitter-5ae57",
      storageBucket: "kwitter-5ae57.appspot.com",
      messagingSenderId: "405267796583",
      appId: "1:405267796583:web:15eaace8e93400f82bbac2"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

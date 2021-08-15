var firebaseConfig = {
  apiKey: "AIzaSyAB8oOYn4nohddm3225Z6mYVtz-CPTSZXI",
  authDomain: "project-chat-8c59c.firebaseapp.com",
  databaseURL: "https://project-chat-8c59c-default-rtdb.firebaseio.com",
  projectId: "project-chat-8c59c",
  storageBucket: "project-chat-8c59c.appspot.com",
  messagingSenderId: "423198356047",
  appId: "1:423198356047:web:0e7c47e5a676b78ef6f03a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("username_input");
console.log("Hello  "+username);
document.getElementById("user_tag").innerHTML = "Welcome, "+username+"!";

function addRoom(){
  var room_name = document.getElementById("room_name_input").value;
  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });
  localStorage.setItem("room_name",room_name);
  window.location="chat_page.html";
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
var room_div = "<div class='room_name' style='background-color:gray; border-radius:15px;' id="+Room_names+" onclick='redirectToRoomName(this.id)'> #"+Room_names+ "</div> <hr>";
document.getElementById("output").innerHTML += room_div;

function redirectToRoomName(name){
  localStorage.setItem("room",name);
  window.location="chat_page.html";
}
//End code
});});}
getData();
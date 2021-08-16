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

user_name = localStorage.getItem("username_input");
room_name = localStorage.getItem("room_name");

function send(){
    var message = document.getElementById("msg_input").value;
    firebase.database().ref(room_name).push({
        Username: user_name,
        Msg: message,
        Likes: 0
    });
    document.getElementById("msg_input").value = "";
}
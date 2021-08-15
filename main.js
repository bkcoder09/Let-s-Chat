function login(){
    username_input = document.getElementById("username_input").value;
    localStorage.setItem("username_input",username_input);
    window.location="chat_room.html";
}
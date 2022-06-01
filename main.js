function login() {
    var player1_name = document.getElementById('text_input1').value;
    var player2_name = document.getElementById('text_input2').value;

    localStorage.setItem("player1_name", player1_name);
    localStorage.setItem("player2_name", player2_name);

    window.location.replace("game_page.html");
}
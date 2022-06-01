player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;

function send() {
    get_word = document.getElementById("word").value;

    word = get_word.toLowerCase();
    console.log("Word In Lowercase = " + word);

    first = word.charAt(1);
    console.log(first);

    len = Math.floor(word.length/2);

    second = word.charAt(len);
    console.log(second);

    ln = word.length-1;

    third = word.charAt(ln);
    console.log(third);

    remove_first = word.replace(first, "_");
    remove_second = remove_first.replace(second, "_");
    remove_third = remove_second.replace(third, "_");
    console.log(remove_third);

    question_word = "<h4 id='word_display'> Q. " + remove_third + "</h4>";

    answer_word = "<br>Answer : <input type = text id='anser_input'>";

    button = "<br><br><button class = 'btn btn-info' onclick='check()'>Check</button>";

    row = question_word + answer_word + button;

    document.getElementById("output").innerHTML = row;
    
    document.getElementById("word").value = "";
}

question_turn = "player1_name";
answer_turn = "player2_name";

function check() {
    get_answer = document.getElementById("anser_input").value;

    answer = get_answer.toLowerCase();
    console.log("Answer In Lowercase = " + answer);
    if(answer == word) {
        if(answer_turn == "player1_name") {
                   player1_score = player1_score + 1;
        document.getElementById("player1_score").innerHTML = player1_score;
        }
           else {
        player2_score = player2_score + 1;
        document.getElementById("player2_score").innerHTML = player2_score;
    }
    }

    if(question_turn == "player1_name") {
        question_turn = "player2_name";
        document.getElementById("player_question").innerHTML = "Question_turn - " + player2_name;
    }
    else {
        question_turn = "player1_name";
        document.getElementById("player_question").innerHTML = "Question_turn - " + player1_name;
    }

    if(answer_turn == "player1_name") {
        answer_turn = "player2_name";
        document.getElementById("player_answer").innerHTML = "Answer_turn - " + player2_name;
    }
    else {
        answer_turn = "player1_name";
        document.getElementById("player_answer").innerHTML = "Answer_turn - " + player1_name;
    }

    document.getElementById("output").innerHTML = "";
}
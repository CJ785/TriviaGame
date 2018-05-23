
$(document).ready(function () {

    var correct;
    var incorrect;
    var unanswered;
    var userinput = [];
    var timer;
    var seconds = 5;
    $("#hidden").hide();
    $("#tally").hide();
    var isChecked = true;

    function tally() {
        $("#tally").show();
        $("#hidden").hide();
        var ans1 = $("input[type = radio][name=Q1]:checked").val();
        var check1 = $('input[name=Q1][id = right]:radio').val();
        if (ans1 == check1) {
            correct++;
        } else if (ans1 != check1) {
            incorrect++;
        } else if ($("input [name=Q1]:checked" == false)) {
            unanswered++;
        }

        var ans2 = $("input[type = radio][name=Q2]:checked").val();
        var check2 = $('input[name=Q2][id = right]:radio').val();
        if (ans2 == check2) {
            correct++;
        } else if ($("input [name=Q2]:checked" == false)) {
            unanswered++;
        } else if (ans2 != check2) {
            incorrect++;
        }

        var ans3 = $("input[type = radio][name=Q3]:checked").val();
        var check3 = $('input[name=Q3][id = right]:radio').val();
        if ($("input [name=Q3]").is(":not(:checked)")) {
            unanswered++;
        } else if (ans3 == check3) {
            correct++;
        } else if (ans3 != check3) {
            incorrect++;
        }

        var ans4 = $("input[type = radio][name=Q4]:checked").val();
        var check4 = $('input[name=Q4][id = right]:radio').val();
        if ($("input [name=Q4]").is(":not(:checked)")) {
            unanswered++;
        } else if (ans4 == check4) {
            correct++;
        } else if (ans4 != check4) {
            incorrect++;
        }

        var ans5 = $("input[type = radio][name=Q5]:checked").val();
        var check5 = $('input[name=Q5][id = right]:radio').val();
        if ($("input [name=Q5]").is(":not(:checked)")) {
            unanswered++;
        } else if (ans5 == check5) {
            correct++;
        } else if (ans5 != check5) {
            incorrect++;
        }

        var ans6 = $("input[type = radio][name=Q6]:checked").val();
        var check6 = $('input[name=Q6][id = right]:radio').val();
        if ($("input [name=Q6]").is(":not(:checked)")) {
            unanswered++;
        } else if (ans6 == check6) {
            correct++;
        } else if (ans6 != check6) {
            incorrect++;
        }

        var ans7 = $("input[type = radio][name=Q7]:checked").val();
        var check7 = $('input[name=Q7][id = right]:radio').val();
        if ($("input [name=Q7]").is(":not(:checked)")) {
            unanswered++;
        } else if (ans7 == check7) {
            correct++;
        } else if (ans7 != check7) {
            incorrect++;
        }

        var ans8 = $("input[type = radio][name=Q8]:checked").val();
        var check8 = $('input[name=Q8][id = right]:radio').val();
        if ($("input [name=Q8]").is(":not(:checked)")) {
            unanswered++;
        } else if (ans8 == check8) {
            correct++;
        } else if (ans8 != check8) {
            incorrect++;
        }

        var ans9 = $("input[type = radio][name=Q9]:checked").val();
        var check9 = $('input[name=Q9][id = right]:radio').val();
        if ($("input [name=Q9]").is(":not(:checked)")) {
            unanswered++;
        } else if (ans9 == check9) {
            correct++;
        } else if (ans9 != check9) {
            incorrect++;
        }

        var ans10 = $("input[type = radio][name=Q10]:checked").val();
        var check10 = $('input[name=Q10][id = right]:radio').val();
        if ($("input [name=Q10]").is(":not(:checked)")) {
            unanswered++;
        } else if (ans10 == check10) {
            correct++;
        } else if (ans10 != check10) {
            incorrect++;
        }








    }

    function countDown() {
        seconds--;
        $("#clock").text("You have " + seconds + " seconds remaining!");

        if (seconds === 0) {
            clearTimeout(timer);
            tally();
            $("#correct").text("Correct: " + correct);
            $("#incorrect").text("Incorrect: " + incorrect);
            $("#unanswered").text("Unanswered: " + unanswered);
        }
    }

    function start() {
        correct = 0;
        incorrect = 0;
        unanswered = 0;
        $(".row").hide();
        $("#hidden").show();
        timer = setInterval(countDown, 1000);
    }

    $("#startBtn").on("click", function () {
        start();
    })

})
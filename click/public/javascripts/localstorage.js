var cont = 0;
$(document).ready(function () {
    $('#btnlocalStorage').click(function () {
        clickCounter();
    })

    if (!localStorage.clickcount) {
        $("#btnlocalStorage").text("0");

    } else {
        $("#btnlocalStorage").text(localStorage.clickcount);

    }

});

function clickCounter() {
    if (typeof (Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount) + 1;
        } else {
            localStorage.clickcount = 1;
        }
        $("#btnlocalStorage").text(localStorage.clickcount);

    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
}
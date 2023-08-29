var elm = document.querySelectorAll(".box");
var turn = "",
    pattern;

function inputX(cont, elc) {
    var elmX = document.createElement("p");
    elmX.textContent = cont;
    elmX.classList.add("cont");
    // , 50);
    cont !== "" ? elc.appendChild(elmX) : false;
}

function data(p) {
    document.querySelectorAll(".btn").forEach((btnNew) => {
        btnNew.addEventListener("click", (e) => {
            console.log("e", e);
            turn = true;
            turn ? (turn = e.target.innerText) : firstClick();
            document
                .querySelectorAll(".btn")
                .forEach((btn) => btn.setAttribute("disabled", true));
        });
        return turn;
    });
}
data();

function winner() {
    pattern = {
        pt012: elm[0].innerText + elm[1].innerText + elm[2].innerText,
        pt345: elm[3].innerText + elm[4].innerText + elm[5].innerText,
        pt678: elm[6].innerText + elm[7].innerText + elm[8].innerText,
        pt036: elm[0].innerText + elm[3].innerText + elm[6].innerText,
        pt147: elm[1].innerText + elm[4].innerText + elm[7].innerText,
        pt258: elm[2].innerText + elm[5].innerText + elm[8].innerText,
        pt246: elm[2].innerText + elm[4].innerText + elm[6].innerText,
        pt048: elm[0].innerText + elm[4].innerText + elm[8].innerText,
        //   pt256: elm[2].innerText + elm[5].innerText + elm[6].innerText,
    };

    console.log("isEMpty", isEMpty);
    var isWinner = false;

    Object.values(pattern).forEach((key) => {
        if (key !== "") {
            if (key == "xxx" || key == "000") {
                console.log("key");
                setTimeout(() => {
                    alert(key[0] + "  team " + " " + "win ");
                    emptyStr();
                    document
                        .querySelectorAll(".btn")
                        .forEach((btn) =>
                            btn.removeAttribute("disabled", true)
                        );

                    //    location.reload();
                }, 550);
                isWinner = true;
            }
        }
    });

    let boxes = Array.from(elm);
    var isEMpty = boxes.every((box) => {
        return box.innerText !== "";
    });

    if (isEMpty && !isWinner) {
        setTimeout(() => {
            alert(" Match Draw");
            emptyStr();
            document
                .querySelectorAll(".btn")
                .forEach((btn) => btn.removeAttribute("disabled", true));
        }, 700);
        return;
    }
}

function firstClick(disc) {
    alert("Select One Turn");
}

function changeTurn(c) {
    //    turn = false;
    //    turn ? data() : firstClick();
    // if(turn)
    inputX(turn, c);
    if (turn === "0") {
        turn = "x";
    } else if (turn === "x") {
        turn = "0";
    } else {
        alert("Select turn than start");
        //   location.reload();
    }
}

function emptyStr() {
    elm.forEach((e) => {
        e.innerText = "";
        turn = "";
    });
}

elm.forEach((e) => {
    e.addEventListener("click", function () {
        //   console.log("clicked");
        e.innerText === "" ? changeTurn(e) : false;

        //   data();
        winner();
    });
});

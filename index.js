function RandomGenerator() {
    const firstno = Math.ceil(Math.random() * 6)
    const secondno = Math.ceil(Math.random() * 6)
    const thirdno = Math.ceil(Math.random() * 6)

    firstButton = document.getElementById("member-1b")
    firstButton.innerHTML = firstno;

    secondButton = document.getElementById("member-2b")
    secondButton.innerHTML = secondno;

    thirdButton = document.getElementById("member-3b")
    thirdButton.innerHTML = thirdno;

    let a = [firstno, secondno, thirdno]
    let win = Math.max(...a)
    a.sort();
    //a.forEach(element => {console.log(element);});

    winnerButton = document.getElementById("winner")
    winnerButton.innerHTML = win;

    if (firstno != secondno && secondno != thirdno && firstno != thirdno) {
        if (firstno === a[2]) { //a[2] or win
            document.getElementById("member-1b").style.backgroundColor = "lightgreen"
        }
        else if (firstno === a[1]) {
            document.getElementById("member-1b").style.backgroundColor = "yellow"
        }
        else if (firstno === a[0]) {
            document.getElementById("member-1b").style.backgroundColor = "indianred"
        }

        if (secondno === a[2]) {
            document.getElementById("member-2b").style.backgroundColor = "lightgreen"
        }
        else if (secondno === a[1]) {
            document.getElementById("member-2b").style.backgroundColor = "yellow"
        }
        else if (secondno === a[0]) {
            document.getElementById("member-2b").style.backgroundColor = "indianred"
        }

        if (thirdno === a[2]) {
            document.getElementById("member-3b").style.backgroundColor = "lightgreen";
        }
        else if (thirdno === a[1]) {
            document.getElementById("member-3b").style.backgroundColor = "yellow";
        }
        else if (thirdno === a[0]) {
            document.getElementById("member-3b").style.backgroundColor = "indianred";
        }
    }
    else if (firstno == secondno && secondno == thirdno) {
        document.getElementById("member-2b").style.backgroundColor = "skyblue";
        document.getElementById("member-3b").style.backgroundColor = "skyblue";
        document.getElementById("member-1b").style.backgroundColor = "skyblue";
    }

    else if (firstno == secondno) {
        document.getElementById("member-1b").style.backgroundColor = "skyblue";
        document.getElementById("member-2b").style.backgroundColor = "skyblue";
        if (firstno == win && secondno == win) {
            document.getElementById("member-3b").style.backgroundColor = "yellow";
        }
        else {
            document.getElementById("member-3b").style.backgroundColor = "lightgreen";
        }

    }

    else if (firstno == thirdno) {
        document.getElementById("member-1b").style.backgroundColor = "skyblue";
        document.getElementById("member-3b").style.backgroundColor = "skyblue";
        if (firstno == win && thirdno == win) {
            document.getElementById("member-2b").style.backgroundColor = "yellow";
        }
        else {
            document.getElementById("member-2b").style.backgroundColor = "lightgreen";
        }
    }

    else if (secondno == thirdno) {
        document.getElementById("member-2b").style.backgroundColor = "skyblue";
        document.getElementById("member-3b").style.backgroundColor = "skyblue";
        if (secondno == win && thirdno == win) {
            document.getElementById("member-1b").style.backgroundColor = "yellow";
        }
        else {
            document.getElementById("member-1b").style.backgroundColor = "lightgreen";
        }
    }


}
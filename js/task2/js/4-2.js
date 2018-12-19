let Player = JSON.parse(window.sessionStorage.getItem("player"));
let Click = JSON.parse(window.sessionStorage.getItem("click"));
let diaryColor = JSON.parse(window.sessionStorage.getItem("diarycolor"));
let activation = JSON.parse(window.sessionStorage.getItem("activation"));
let toDay = JSON.parse(window.sessionStorage.getItem("today"));
let Die = JSON.parse(window.sessionStorage.getItem("Die"));
let Journal = JSON.parse(window.sessionStorage.getItem("journal"));
console.log(Player);
for (let i = 0; i < Player.length; i++) {
    $("main").append(`<div class="main-square-box"></div>`);
    $(".main-square-box").eq(i).append('<p class="main-square-identity"></p>');
    $(".main-square-identity").eq(i).html(Player[i].name);
    $(".main-square-box").eq(i).append('<p class="main-square-number">p>');
    $(".main-square-number").eq(i).html((i + 1) + "号");
}
if (Journal.length !== 1) {
    if (Click == 0) {
        $(".header-nav-word").html("杀手开杀");
        $(".header-in-word").html("天黑请闭眼，杀手睁眼");
    } else {
        $(".header-nav-word").html("全民投票");
        $(".header-in-word").html("快投，赶下一场");
    }
} else {
    $(".header-nav-word").html("战况表");
    $(".header-in-word").html("死的就这些，赶快返回");
    $(".header-bottom-word").html(" ");
    $(".footer-choice-jump").html("返回");
    for (let l = 0; l < Player.length; l++) {
        $(".main-square-box").eq(l).addClass("disabled");
    }
}
for (let b = 0; b < Player.length; b++) {
    if (Player[b].death == false) {
        $(".main-square-identity").eq(b).css("background-color", "red");
    }
}
let clickNumber;
$(".main-square-box").click(function () {
    let s = $(".main-square-box").index($(this));
    clickNumber = s;
    for (let l = 0; l < Player.length; l++) {
        $(".main-square-identity").eq(l).removeClass("mainRed");
    }
    if (Journal.length !== 1) {
        if ((Click.length - 1) == 0) {
            if (Player[s].name == "平民" && Player[s].death == true) {
                $(".main-square-identity").eq(s).addClass("mainRed");
            } else if (Player[s].death !== true) {
                alert("鞭尸人品减一")
            } else {
                alert("兄弟自己人！");
            }
        } else {
            if (Player[s].death == true) {
                $(".main-square-identity").eq(s).addClass("mainRed");
            } else {
                alert("鞭尸人品减一")
            }
        }
    } else {
        for (let l = 0; l < Player.length; l++) {
            $(".main-square-identity").eq(l).removeClass("mainRed");
        }
    }
})
function Winjump() {
    let SurvivalNumber = Player.filter(function (item, index, array) {
        return (item.death == true)
    })
    let KillerNumber = SurvivalNumber.filter(function (item, index, array) {
        return (item.name == "杀手")
    })
    if (KillerNumber.length == 0) {
        JumpStorage();
        let win = "平民胜利";
        sessionStorage.setItem("win", win);
        sessionStorage.setItem("alive", JSON.stringify(SurvivalNumber));
        sessionStorage.setItem("KillerNumber", JSON.stringify(KillerNumber));
        window.location.href = "../html/4-3.html"
    } else if (KillerNumber.length >= (SurvivalNumber.length - KillerNumber.length)) {
        JumpStorage();
        let win = "杀手胜利";
        if ((Click.length - 1) == 0) {
            toDay.push(0);
            sessionStorage.setItem("today", JSON.stringify(toDay));
        }
        sessionStorage.setItem("win", win);
        sessionStorage.setItem("alive", JSON.stringify(SurvivalNumber));
        sessionStorage.setItem("KillerNumber", JSON.stringify(KillerNumber));
        window.location.href = "../html/4-3.html"
    } else {
        window.location.href = "../html/4-1.html"
    }
}
function JumpOperation() {
    Player[clickNumber].death = false;
    Die.push(clickNumber + 1);
}
function JumpStorage() {
    sessionStorage.setItem("Die", JSON.stringify(Die));
    sessionStorage.setItem("today", JSON.stringify(toDay));
    sessionStorage.setItem("activation", JSON.stringify(activation));
    sessionStorage.setItem("diarycolor", JSON.stringify(diaryColor));
    sessionStorage.setItem("click", JSON.stringify(Click))
    sessionStorage.setItem("player", JSON.stringify(Player))
}
$(".footer-choice-jump").click(function () {
    if (Journal.length !== 1) {
        if (clickNumber !== undefined && (Click.length - 1) == 0 && Player[clickNumber].name == "平民" && Player[clickNumber].death == true) {
            JumpOperation();
            JumpStorage();
            Winjump();
        } else if (clickNumber !== undefined && (Click.length - 1) == 3 && Player[clickNumber].death == true) {
            toDay.push(0);
            Click.splice(0, Click.length);
            JumpOperation();
            JumpStorage();
            Winjump();
        } else {
            alert("?还没选人你就点");
        }
    } else {
        if (Journal.length == 1) {
            JumpStorage();
            Journal.splice(0, Journal.length);
            sessionStorage.setItem("journal", JSON.stringify(Journal));
            window.location.href = "../html/4-1.html";
        }
    }

})
$(".header-top-box").click(function () {
    JumpStorage();
    window.location.href = "../html/4-1.html"
})
function Close() {
    let c = confirm("关闭本轮游戏回到主页？")
    if (c == true) {
        sessionStorage.clear();
        window.location.href = "../html/2-1.html";
    }
}

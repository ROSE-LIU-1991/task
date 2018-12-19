let Player = JSON.parse(window.sessionStorage.getItem("player"));
if (JSON.parse(window.sessionStorage.getItem("click"))) {
    x = JSON.parse(window.sessionStorage.getItem("click"));
} else {
    x = new Array();
}
if (JSON.parse(window.sessionStorage.getItem("today"))) {
    toDay = JSON.parse(window.sessionStorage.getItem("today"));
} else {
    toDay = [0];
}
for (let y = 1; y < toDay.length; y++) {
    if (y > 0) {
        $(".mainToDayBox").first().clone().prependTo($('main'))
        $(".mainOperate").eq(y - 1).hide();
    }
}
for (let t = 1; t <= toDay.length; t++) {
    $(".mainToDayNumber").eq(t - 1).html("第" + t + "天");
}
$(".mainOperate").eq(toDay.length - 1).show();
$(".mainToDayNumber").click(function () {
    $(this).siblings().toggle();
})
if (JSON.parse(window.sessionStorage.getItem("diarycolor"))) {
    diaryColor = JSON.parse(window.sessionStorage.getItem("diarycolor"));
} else {
    diaryColor = new Array();
}
if (JSON.parse(window.sessionStorage.getItem("activation"))) {
    activation = JSON.parse(window.sessionStorage.getItem("activation"));
} else {
    activation = 0;
}
if (activation == 1) {
    for (let i = 0; i < diaryColor.length; i++) {
        $(".mainButton").eq(i).css("background-color", "#83b09a");
        $(".mainTriangle").eq(i).css("border-right-color", "#83b09a");
    }
}
if (JSON.parse(window.sessionStorage.getItem("Die"))) {
    Die = JSON.parse(window.sessionStorage.getItem("Die"));
} else {
    Die = new Array();
}
console.log(Die)
if (Die.length !== 0) {
    for (let s = 0; s < Die.length; s++) {
        let t = Die[s]
        if ((s + 1) % 2 === 0) {
            $(".add").eq(s).after(`<p class="resultFontSize">` + t + "号被大家投死，他的身份是" + Player[t - 1].name + '</p>');
        } else {
            $(".add").eq(s).after(`<p class="resultFontSize">` + t + "号被杀手杀死，他的身份是" + Player[t - 1].name + '</p>');
        }
    }
}
function ButtonOperation() {
    x.push(0);
    diaryColor.push(0);
}
function StorageJume() {
    sessionStorage.setItem("Die", JSON.stringify(Die));
    sessionStorage.setItem("activation", JSON.stringify(activation));
    sessionStorage.setItem("player", JSON.stringify(Player));
    sessionStorage.setItem("click", JSON.stringify(x));
    sessionStorage.setItem("diarycolor", JSON.stringify(diaryColor));
}
$(".buttonBox").eq(toDay.length * 4 - 4).click(function () {
    if (x.length == 0) {
        $(".mainButton").eq(toDay.length * 4 - 4).addClass("buttonBackgroundColor");
        $(".mainTriangle").eq(toDay.length * 4 - 4).addClass("buttonBorderColor");
        alert("天黑了!人就要跪");
        activation = 1;
        ButtonOperation();
        StorageJume();
        window.location.href = "../html/4-2.html";
    } else {
        alert("老哥按顺序来!");
    }
})
$(".buttonBox").eq(toDay.length * 4 - 3).click(function () {
    if (x.length == 1) {
        $(".mainButton").eq(toDay.length * 4 - 3).addClass("buttonBackgroundColor");
        $(".mainTriangle").eq(toDay.length * 4 - 3).addClass("buttonBorderColor");
        ButtonOperation();
        StorageJume();
        alert("亡者快说话，不说滚");
    } else {
        alert("老哥按顺序来!");
    }
})
$(".buttonBox").eq(toDay.length * 4 - 2).click(function () {
    if (x.length == 2) {
        $(".mainButton").eq(toDay.length * 4 - 2).addClass("buttonBackgroundColor");
        $(".mainTriangle").eq(toDay.length * 4 - 2).addClass("buttonBorderColor");
        ButtonOperation();
        StorageJume()
        alert("顺序开始依次说话");
    } else {
        alert("老哥按顺序来!");
    }
})
$(".buttonBox").eq(toDay.length * 4 - 1).click(function () {
    if (x.length == 3) {
        $(".mainButton").eq(toDay.length * 4 - 1).addClass("buttonBackgroundColor");
        $(".mainTriangle").eq(toDay.length * 4 - 1).addClass("buttonBorderColor");
        sessionStorage.setItem("today", JSON.stringify(toDay));
        ButtonOperation();
        StorageJume()
        alert("速度投，开始下一轮");
        window.location.href = "../html/4-2.html";
        //x.splice(0,x.length);
    } else {
        alert("老哥按顺序来!");
    }
})
if (JSON.parse(window.sessionStorage.getItem("journal"))) {
    Journal = JSON.parse(window.sessionStorage.getItem("journal"));
} else {
    Journal = new Array();
    sessionStorage.setItem("journal", JSON.stringify(Journal));
}
$(".footerLog").click(function () {
    StorageJume();
    Journal.push(0);
    sessionStorage.setItem("journal", JSON.stringify(Journal));
    window.location.href = "../html/4-2.html";
})
function Close() {
    let c = confirm("关闭本轮游戏回到主页？")
    if (c == true) {
        sessionStorage.clear();
        window.location.href = "../html/task2-1.html";
    }
}function backOff(){
    let b = confirm("是否返回到上一页？");
    if(b == true){
        sessionStorage.clear();
        window.location.href = "../html/3-2.html" ;
    }
}

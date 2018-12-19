var textNumber = document.getElementById("TextNumber");
var rangeNumber = document.getElementById("RangeNumber");
textNumber.onchange = function(){
    if(textNumber.value >= 4 && textNumber.value <= 18){
        rangeNumber.value = textNumber.value ;
    } else{
        alert("玩家数量应在4-18之间");
    }
}
rangeNumber.oninput = function(){
    textNumber.value = rangeNumber.value;
}
function BtnAdd(){
    rangeNumber.value ++ ;
    if(textNumber.value >= 18){
        alert("这么多人咋玩");
    } else{
        textNumber.value = rangeNumber.value;
    }
}
function BtnSub(){
    rangeNumber.value -- ;
    if(textNumber.value <= 4){
        alert("人太少了");
    } else{
        textNumber.value = rangeNumber.value;
    }
}
var r = 0;
function PlayerRatio(){
    var peopleNumber = textNumber.value;
    var killerNumber = Math.floor(peopleNumber / 3);
    var civilianNumber = peopleNumber - killerNumber ;
    var Ullabel = document.getElementById("list");
    var Lilabel = document.getElementsByTagName("li");
    for(i = Lilabel.length;i > 0;i --){
        Ullabel.removeChild(Lilabel[0]);
    }
    if(peopleNumber < 4 || peopleNumber > 18){
        alert("弄错人数了");
        r = 0 ;
    } else {
        for(i = 0;i < killerNumber;i++){
            var List = document.getElementById("list");
            var Killer = document.createElement("li");
            var Text = document.createTextNode("杀手1人");
            var Square = document.createElement("span");
            List.appendChild(Killer);
            Killer.appendChild(Square);
            Killer.appendChild(Text);
            Killer.className = "killer" ;
        }
        for(i = 0;i < civilianNumber;i ++){
            var List = document.getElementById("list");
            var Civilian = document.createElement("li");
            var Text = document.createTextNode("平民1人");
            var Square = document.createElement("span");
            List.appendChild(Civilian);
            Civilian.appendChild(Square);
            Civilian.appendChild(Text);
            Civilian.className = "civilian" ;
        }
        r = 1;
    }
}
function Start(){
    var peopleNumber = textNumber.value;
    var killerNumber = Math.floor(peopleNumber / 3);
    var civilianNumber = peopleNumber - killerNumber;
    if(r == 0){
        alert("不设置人数一发都来不了");
    } else {
        var all = [] ; 
        for(var k = 0;k < killerNumber;k ++){
            all.push("杀手");
        }
        for(var j = 0;j < civilianNumber;j ++){
            all.push("平民");
        }
        console.log(all);
        for(var l = all.length - 1;l >= 0;l --){
            var rand = Math.floor(Math.random() * (l + 1));
            var p = all[l];
            all[l] = all[rand];
            all[rand] = p ;
        }
        console.log(all);
        sessionStorage.setItem("all",JSON.stringify(all));
        window.location.href = "../html/3-1.html";
    }
}
function BackOff(){
    let b = confirm("需要回到主页吗？");
    if(b == true){
        sessionStorage.clear();
        window.location.href = "../html/2-1.html";
    }
}

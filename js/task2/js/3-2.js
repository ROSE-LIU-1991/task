let Player = JSON.parse(window.sessionStorage.getItem("all"));
for(i = 0;i < Player.length;i ++){
    $("main").append('<div class="main-square-box"></div>');
    $(".main-square-box").eq(i).append(' <p class="main-square-identity"></p>');
    $(".main-square-identity").eq(i).html(Player[i]);
    $(".main-square-box").eq(i).append('<p class="main-square-number"></p>');
    $(".main-square-number").eq(i).html((i + 1) + "号");
}
function jump(){
    var y = [];
    for(i = 0;i < Player.length;i ++){
        if(Player[i] == "平民"){
            y.push({name:"平民" , death:true });
        }else{
            y.push({name:"杀手" , death:true });
        }
    }
    sessionStorage.setItem("player",JSON.stringify(y));
    window.location.href = "../html/4-1.html" ;
}
function backOff(){
    let b = confirm("是否返回到上一页？");
    if(b == true){
        sessionStorage.clear();
        window.location.href = "../html/3-1.html" ;
    }
}
function Close(){
    let c = confirm("关闭本轮游戏回到主页？");
    if(c == true){
        sessionStorage.clear();
        window.location.href = "../html/2-1.html" ;
    }
}

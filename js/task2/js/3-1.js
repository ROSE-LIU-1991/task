var Player = JSON.parse(window.sessionStorage.getItem("all"));
var x = 0,
    y = 0,
    z = 2;
function btn(){
    if(y < Player.length){
        if(x == 0){
            $("#pictureOne").css("display","none");
            if(Player[y] == "平民"){
                $("#pictureCivilian").css("display","block");
            } else{
                $("#pictureKiller").css("display","block");
            }
            $("#identity").html(Player[y]);
            console.log(Player[y]);
            $("#footerText").html("隐藏并传递给" + z + "号");
            y ++ ;
            if(y == Player.length){
                $("#footerText").html("查看整体");
            }
            x = 1;
        }
        else{
            if(Player[y - 1] == "平民"){
                $("#pictureCivilian").css("display","none");
            } else{
                $("#pictureKiller").css("display","none");
            }
            $("#identity").html(" ");
            $("#footerText").html("看看" + z + "号是谁");
            $("#mainTopNumber").html(z);
            $("#pictureOne").css("display","block");
            z ++;
            x = 0;
        }
    }
    else{
        sessionStorage.setItem("all",JSON.stringify(Player));
        window.location.href = "../html/3-2.html";
    }
}
function BackOff(){
    let b = confirm("是否返回到上一页？");
    if(b == true){
        sessionStorage.clear();
        window.location.href = "../html/2-2.html";
    }
}
function Close(){
    let c = confirm("关闭本轮游戏回到主页？");
    if(c == true){
        sessionStorage.clear();
        window.location.href = "../html/2-1.html";
    }
}

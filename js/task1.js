function Shuffle(a){
    var length = a.length;
    for(var i = length - 1,rand;i >= 0;i--){
        rand = Math.floor(Math.random()*(i + 1));
        var p = a[i];
        a[i] = a[rand];
        a[rand] = p;
    }
}
a = [0,1,2,3,4,5,6,7,8];
Shuffle(a);
function randomlyColor(){
    var red,green,blue;
    red = Math.floor(Math.random() * 256);
    do{
        green = Math.floor(Math.random() * 256);
    } while(red == green);
    do{
        blue = Math.floor(Math.random() * 256);
    }while(blue == red || blue == green);
    return(
        "rgb("+ red + ","+ green +","+ blue +")"
    );
}
function clear(){
    var units = document.getElementsByClassName("box");
    for(i = 0;i < units.length;i ++){
        units[i].style.backgroundColor = "#ff8c00" ;
    }
    units[a.slice(0,3)[0]].style.backgroundColor = randomlyColor();
    units[a.slice(0,3)[1]].style.backgroundColor = randomlyColor();
    units[a.slice(0,3)[2]].style.backgroundColor = randomlyColor();
    console.log(a.slice(0,3)[0],a.slice(0,3)[1],a.slice(0,3)[2])
}
function Timer(){
    Shuffle(a);
    clear();
    t = setTimeout("Timer()",1000);
}
function start(){
    if(status == 0){
        Timer();
        status == 1;
    }else{
        return;
    }
}
function end(){
    clearTimeout(t);
    status == 0;
    units = document.getElementsByClassName("box");
    for(i = 0;i < units.length;i ++){
        units[i].style.backgroundColor = "#ff8c00" ;
    }
}
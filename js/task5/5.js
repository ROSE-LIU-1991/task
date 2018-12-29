// //原生Js
// //监听登陆按钮
// let ask = document.getElementsByClassName("login");
// //设置点击事件
// ask[0].onclick = function () {
//     //获取账号的值
//     text = document.getElementById("input1").value;
//     //获取密码的值
//     password = document.getElementById("input2").value;
//     //创建一个//XHR
//     let newXHR = new XMLHttpRequest();
//     //这是设置一个onreadystatechange监听，根据不同的readystatechange做一个反应
//     newXHR.onreadystatechange = function () {
//         //如果填空的账号密码反应
//         if (text == "" || password == "") {
//             if (text == "") {
//                 document.getElementById("info").innerHTML = "账号不能为空";
//             } else {
//                 document.getElementById("info").innerHTML = "密码不能为空";
//             }
//         }
//         //填写数据后直接进入判断
//         else {
//             //readyState==4，则表示服务器返回的数据已经全部接受了，或者本次接受失败
//             if (newXHR.readyState === 4) {
//                 //status状态==200，表示响应成功
//                 if (newXHR.status === 200) {
//                     //打印出返回的主体文本
//                     console.log(newXHR.responseText);
//                     //将返回的主题文本转换为json对象。
//                     let inputTxt = JSON.parse(newXHR.responseText)
//                     console.log(inputTxt.code);
//                     document.getElementById("info").innerHTML = "" ;
//                     //code是返回参数的状态码，这里==0表示响应成功
//                     if (inputTxt.code == 0) {
//                         alert("登陆成功")
//                         // window.location.href = "http://www.baidu.com";
//                     }
//                     //如果不为0，则表示响应始变，则给出反馈的message（消息） 
//                     else {
//                         document.getElementById("info").innerHTML = inputTxt.message;
//                     }
//                 }
//                 //readyState没有进行到第第四步，则打印出相应的statusText（状态信息文本）
//                 else {
//                     console.log(newXHR.statusText);
//                 }
//             }
//         }
//     }
//     //向服务器发送请求
//     //虽然设置了拦截名，但是后面还是要遵守请求地址：Post /a/login。
//     newXHR.open("POST", "/a/a/login", true);
//     //如无特殊标注，所有的Post和Put操作都以Application/json 的方式提交，这样适合于复杂的模型。
//     //一些简单的操作应注明    “application/x-www-form-urlencoded”
//     newXHR.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//     //这里name和pwd是给出的请求参数，&表示和。
//     newXHR.send("name=" + text + "&pwd=" + password);
// }
// jQuery
$(".login").click(function () {
    let text = $("#input1").val();
    let passige = $("#input2").val();
    //ajax() 方法通过 HTTP 请求加载远程数据
    $.ajax({
        //请求方式
        type: 'POST',
        //location拦截名——后台——登陆。
        url: '/a/a/login',
        //data用于添加账号密码的值。
        data: { name: text, pwd: passige },
        // dataType值为json,则会把后端返回的字符串尝试通过JSON.parse()尝试解析为js对象。
        dataType: 'json',
        // contentType: 'application/x-www-form-urlencoded',
        //请求成功的回调函数。
        success: function (data) {
            if (text == "" || passige == "") {
                if (text == "") {
                    $("#info").html("账号不能为空");
                    $("#info").css("opacity","1");
                } else {
                    $("#info").html("密码不能为空");
                    $("#info").css("opacity","1");
                }
            } else {
                if (data.code == 0) {
                    alert("登陆成功")
                    console.log(text);
                    console.log(passige);
                    console.log(data);
                    window.location.href = "http://dev.admin.carrots.ptteng.com/";
                } else {
                    $("#info").html(data.message);
                    console.log(text);
                    console.log(passige);
                    console.log(data);
                };
            };
        }
    });
});
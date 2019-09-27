function pushNotice(notice){
    if (!("Notification" in window)) {

        console.log(notice);
    
    }else if (Notification.permission === "granted") {
    
        var notification = new Notification('PHP54+', {
            body: notice,
            icon: '/static/img/wechat-cheni.jpg'
        });
        
        // 点击跳转
        notification.onclick = function () {
            location = '/index.html';
            // 通过焦点事件，回到浏览器
            window.focus();
        }
        // 设置关闭时间
        setTimeout(()=>{
            notification.close();
        }, 3000);
    
    }else {
        Notification.requestPermission(function (permission) {
            if (permission === "granted") {
                var notification = new Notification('PHP54+', {
                    body: notice,
                    icon: '/static/img/wechat-cheni.jpg'
                });
                notification.onclick = function () {
                    location = '/index.html';
                    window.focus();
                }
                setTimeout(()=>{
                    notification.close();
                }, 3000);
            }else{
                console.log(notice);
            }
        });
    }
}

$(document).keydown(function (event) {
    switch (event.keyCode) {
        case 13:
            pushNotice(new Date().getTime());
            console.log(new Date().getTime());
            break;
        case 32:
            console.log(SysApp.data.user_arr);
            break;
        default:
            console.log("按键：" + event.keyCode);
    }
});
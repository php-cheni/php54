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
        setTimeout(function() {notification.close();}, 3000);
    
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
                setTimeout(function() {notification.close();}, 3000);
            }else{
                console.log(notice);
            }
        });
    }
}
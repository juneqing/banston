$(function() {



    //更新
    $(".check").click(function() {
        $(".check h4").text("检查更新中····");
        setTimeout(function() {
            $(".check h4").text("数据包已经更新");
        }, 2000);
    })
    var m = 0;
    $("label").click(function() {
        if (m == 1) {
            $(".check h4").text("检查更新");
            m = 0;
        } else {
            m = 1;
            $(".check h4").text("检查更新中····");
            setTimeout(function() {
                $(".check h4").text("数据包已经更新");
            }, 2000);
        }
    })
    $(".backTo").click(function() {
        window.location.href = "index.html"
    })


})
window.onload = function () {
    document.onclick = function (e) {
        if (!e) e = window.event;
        console.log("x: " + e.pageX + ", y: " + e.pageY + ", ts: " + + new Date());
        // document.getElementById('xy').innerHTML = "x = " + e.pageX + ", y = " + e.pageY;
        // return "{}"
    }
}
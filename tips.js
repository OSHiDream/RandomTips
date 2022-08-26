function gettips() {
    document.getElementById("tips").innerHTML = "Loading...";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("tips").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "您的 Tips 接口地址", true);
    xhttp.send();
}
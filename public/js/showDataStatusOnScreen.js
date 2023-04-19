function showDataStatusOnScreen(status, text) {
    let content = document.querySelector("#server-status");
    if (status >= 200 && status < 300) {
        content.style.background = "rgb(25, 222, 71)";
        content.innerHTML = `<h2>HTTP ${status} - ${text}</h2>`;
    } else if (status >= 400 && status < 500) {
        content.style.background = "rgb(254, 47, 36)";
        content.innerHTML = `<h2>HTTP ${status} - ${text}</h2>`;
    }
}

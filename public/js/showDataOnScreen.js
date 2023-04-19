async function showDataOnScreen(text) {
    let content = document.querySelector("#movies-content");
    let textToJSON = JSON.parse(text);
    let textToHTML = "";

    if (Array.isArray(textToJSON)) {
        for (let i = 0; i < textToJSON.length; i++) {
            textToHTML += `<div id="movies-list">${await getMovieInfo(
                textToJSON[i]
            )}</div>`;
        }
    } else {
        textToHTML = `<div id="movie-list">${await getMovieInfo(
            textToJSON
        )}</div>`;
    }

    content.innerHTML = textToHTML;
}

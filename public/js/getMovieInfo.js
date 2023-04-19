async function getMovieInfo(movie) {
    let { title, genre, year, rating } = movie;
    let movieImage = await getMovieLink(title);
    let text = `
        
            <img src="${movieImage}">
            <h3>${title}</h3>
            ${genre}<br>
            ${year}<br>
            ${rating}<br>
        
    `;

    return text;
}

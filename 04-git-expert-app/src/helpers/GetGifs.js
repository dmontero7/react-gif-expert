const apiKey = 'oPnL6snP804yDy0jlmYt6tm3x3hh1nUe';

export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=oPnL6snP804yDy0jlmYt6tm3x3hh1nUe&q=${category}&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    return gifs;
}
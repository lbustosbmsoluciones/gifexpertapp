export const getGifs = async( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?&q=${ encodeURI(category) }&limit=9&api_key=4H5MASFouTs59Fg9Tbt1YAC71Y6EeaZd`;
    const response = await fetch(url);
    const {data} = await response.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url

        }
    })

    return(gifs);
}
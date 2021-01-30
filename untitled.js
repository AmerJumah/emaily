async function fetchAlbum(){
    const res = await fetch('https://rallycoding.herokuapp.com/api/music_album')
    const json = await res.json()

    console.log(json);
}

fetchAlbum()
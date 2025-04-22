
// make an event listener which will trigger when DOM is loaded. aka when visiting webpage
addEventListener("DOMContentLoaded", async function () {
    const response = await fetch("http://localhost:3000/api/songs")
    const songs = await response.json()

    let html = ""
    for (let song of songs) {
        html +=`<li>${song.title} - ${song.artist}</li>`
    }

    document.querySelector("#addedsong").innerHTML = html
})
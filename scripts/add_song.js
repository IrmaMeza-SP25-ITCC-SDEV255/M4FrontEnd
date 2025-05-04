addEventListener("DOMContentLoaded", function () {
    document.querySelector("#addBtn").addEventListener("click", addSong)
})

// add song to db.. has to be async func bc we are calling data outside server

async function addSong() {
    // create song object based on form user fills out. will make it easier when we send the data to the backend 
    const song = {
        title: document.querySelector("#title").value,
        artist: document.querySelector("#artist").value,
        releaseDate: document.querySelector("#released").value,
        popularity: document.querySelector("#popularity").value,
        genre: document.querySelector("#genre").value ? document.querySelector("#genre").value.split(",") : [],
        username : localStorage.getItem("uname")
    }

    const response = await fetch("http://localhost:3000/api/songs", {
        method: "POST", 
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(song)
    })

    // check if song added
    if (response.ok) {
        const results = await response.json()
        alert("Added song with ID of " + results._id)

        // reset form after song has been added
        document.querySelector("form").reset()
    }

    else {
        document.querySelector("#error").innerHTML = "Cannot add song"
    }
}
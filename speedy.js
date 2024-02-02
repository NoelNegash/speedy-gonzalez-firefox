function speedySpawnToastHome () {
    // Create the overlay div
    var overlay = document.createElement("div");
    overlay.id = "speedy-toast-overlay"
    document.body.appendChild(overlay);
}
function speedySpawnToast(text) {
    var overlay = document.getElementById("speedy-toast-overlay")
    overlay.innerHTML = `<div class='fade-out fade-out-end'>${text}</div>`
}

function speedyCallback(e) {
    if (e.ctrlKey) {
        var videos = document.getElementsByTagName("video");
        for (var i = 0; i < videos.length; i++) {
            if (e.code == "Period") {
                if (videos[i].playbackRate >= 1) videos[i].playbackRate++;
                else videos[i].playbackRate *= 2
            } else if (e.code == "Comma") {
                if (videos[i].playbackRate > 1) videos[i].playbackRate--;
                else videos[i].playbackRate /= 2
            }
        }
        if (videos.length && (e.code == "Comma" || e.code == "Period")) speedySpawnToast(videos[0].playbackRate + "x")
    }
};

document.addEventListener("keydown", speedyCallback)
speedySpawnToastHome()
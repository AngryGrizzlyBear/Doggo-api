const userAction = async () => {
    const response = await fetch('https://random.dog/woof.json');
    const myJson = await response.json();
    return myJson.url
};


function button() {
    document.getElementById('btn').onclick = async function () {
        const src = await userAction();
        let pieces = src.split(".");
        document.getElementById('media').innerHTML = "";



        if (pieces[pieces.length - 1] === "mp4" || pieces[pieces.length - 1] === "webM") {
            const video = document.createElement("video");
            video.src = src;
            video.id = 'doggo_image';
            video.width = 500;
            video.height = 500;
            video.alt = "doggotoo";
            video.id = "doggo_video";
            document.getElementById('media').appendChild(video);
        } else {
            const img = document.createElement('img');
            img.src = src;
            img.width = 500;
            img.height = 500;
            img.alt = "doggo";
            img.id = 'doggo_image';
            document.getElementById('media').appendChild(img);
        }
    };
}

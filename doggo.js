const userAction = async () => {
    const response = await fetch('https://random.dog/woof.json');
    const myJson = await response.json();
    return myJson.url
};


async function button() {
    const src = await userAction();
    let pieces = src.split(".");
    document.getElementById('media').innerHTML = "";

    if (pieces[pieces.length - 1] === "mp4" || pieces[pieces.length - 1] === "webM") {
        const video = document.createElement("video");
        video.src = src;
        video.id = 'doggo_image';
        video.width = 500;
        video.height = 500;
        document.getElementById('media').appendChild(video);
    } else {
        const img = document.createElement('img');
        img.src = src;
        img.width = 500;
        img.height = 500;
        document.getElementById('media').appendChild(img);
    }
    change();
}

function change() {
    const elem = document.getElementById("btn");
    if (elem.textContent === "Click Me!") elem.textContent = "Click Me!";
    else elem.textContent = "Click Me Again!";
}
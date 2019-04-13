const userAction = async () => {
    const response = await fetch('https://random.dog/woof.json');
    const myJson = await response.json();
    return myJson.url
};


function button() {
    document.getElementById('btn').onclick = async function () {
        const src = await userAction();
        const img = document.createElement('img');
        img.src = src;
        img.width = 500;
        img.height = 500;
        img.alt = "doggo";
        img.id = 'doggo_image';
        let pieces = src.split(".");

        // Need to figure this part out
        if (pieces[pieces.length-1] === "mp4" || pieces[pieces.length-1] === "webM") {
            let video = document.createElement("video");
            document.body.append(video);
        } else {

        }

        const current_image = document.getElementById(img.id);
        if (current_image) {
            document.body.replaceChild(img, current_image);
        } else {
            document.body.appendChild(img);
        }
    };
}

// function button () {
//     document.getElementById('btn').onclick = function () {
//         let src = userAction(),
//             img = document.createElement('img');
//         console.log(src);
//         img.src = src;
//         document.body.appendChild(img);
//     };
// }


// let request = new XMLHttpRequest();
//
// request.open('GET', "https://random.dog/woof.json", true);
// request.onload = function() {
// // Begin accessing JSON data here
//     let data = JSON.parse(this.response);
//     console.log(data)
// };
//
//
// request.send();
//
// const getJSON(,
//     function(data) {
//     console.log(data);
// });


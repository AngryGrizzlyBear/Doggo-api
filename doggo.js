const userAction = async () => {
    const response = await fetch('https://random.dog/woof.json');
    const myJson = await response.json();
    return myJson.url
};


function button() {
    document.getElementById('btn').onclick = async function () {
        const src = await userAction(),
            img = document.createElement('img');
        img.src = src;
        img.width = 500;
        img.height = 500;
        img.alt = "doggo";
        img.id = 'doggo_image';
        document.body.appendChild(img);
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


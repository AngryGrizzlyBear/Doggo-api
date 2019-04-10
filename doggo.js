const userAction = async () => {
    const response = await fetch('https://random.dog/woof.json');
        const myJson = await response.json();
        console.log(myJson)

};


function button () {
    document.getElementById('btn').onclick = function () {
        let src = userAction(),
            img = document.createElement('img');

        img.src = src;
        document.body.appendChild(img);
    };
}


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


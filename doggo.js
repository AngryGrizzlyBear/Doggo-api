let request = new XMLHttpRequest();

request.open('GET', "https://random.dog/woof.json", true);
request.onload = function() {
// Begin accessing JSON data here
    var data = JSON.parse(this.response);
    console.log(data)
};

request.send();
//
// const getJSON(,
//     function(data) {
//     console.log(data);
// });


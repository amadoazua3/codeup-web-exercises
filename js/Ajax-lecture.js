
// TODO: create a JSON object about your favorite hobby. make sure to include at least one of every data type that can
//  be accepted as values

aboutMe = {
    "Hobby1": "Gaming",
    "Hobby2": "Programming"
};




// TODO: using https://jsonplaceholder.typicode.com/ make an ajax request to the comments endpoint and console it.
// TODO: make a POST request to the '/posts' endpoint, make sure to include any data required for that post to be made successfully
// TODO: what status do you get back when making a GET request to: https://jsonplaceholder.typicode.com/cmments


$.ajax("https://jsonplaceholder.typicode.com/");



console.log($.ajax({
    url: "https://jsonplaceholder.typicode.com/posts",
    type: "POST",
    data: {
        "userId": 1,
        "id": 1,
        "title": "Something unique",
        "body": "Howdy"
    }
}));

$.ajax({
    url: "https://jsonplaceholder.typicode.com/posts",
    type: "POST",
    data: {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    }
});

$.ajax({
    url: "https://jsonplaceholder.typicode.com/comments",
    type: "GET"
});























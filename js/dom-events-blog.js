
function addButtonEvent() {

    document.getElementById("submitBtn")
        .addEventListener("click", addPost);
}



function addPost() {

    //creat a element

    let textarea = document.getElementById("user-input");

    // create another element and have it set to the new textarea

    let post = document.createElement('textarea');

    // append the input into the new textarea

    post.textContent = textarea.value;

    document.getElementById("blog-container").append(post);

    addEmail();
}

function addEmail(){

    // create a element

    let emailAdd = document.getElementById("email");

    // create another element and have it set to the new text area

    let postE = document.createElement('textarea');

    // append the email input into the new textarea

    postE.textContent = emailAdd.value;

    document.getElementById("blog-container").append(postE);

}

addButtonEvent();


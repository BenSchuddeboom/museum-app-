
function submitComment() {
    const inputField = document.getElementById('name');
    const name = inputField.value;
    const textArea = document.getElementById('msg');
    const msg = textArea.value;

    if(name && msg && msg.length < 300) {
        createComment(name, msg);
    } else if(!name && msg) {
        alert("Please enter your name.");
    } else if(!msg && name) {
        alert("Please enter a message " + name + ".");
    } else if(msg.length > 300) {
        alert("Please keep your message shorter than 300 characters.");
    } else if(!msg && !name) {
        alert("Please fill in the blanks.");
    } else {
        alert("Something went wrong while posting your comment, please try again.");
    }

    inputField.value = null;
    textArea.value = null;
    
}

function createComment(name, msg) {
    const comment = document.createElement('section');
    const commentName = document.createElement('h3');
    const commentContent = document.createElement('p');
    
    commentName.innerHTML = `${name} said:`;
    commentContent.innerHTML = msg;
    
    comment.classList.add("comment");
    
    comment.appendChild(commentName);
    comment.appendChild(commentContent);
    
    commentSection = document.getElementById('comments');
    commentSection.appendChild(comment);
    
}
function submitComment() {
    const inputField = document.getElementById('name');
    const name = inputField.value;
    const textArea = document.getElementById('msg');
    const msg = textArea.value;

    const comment = document.createElement('section');
    const commentName = document.createElement('h3');
    const commentContent = document.createElement('p');

    commentName.innerHTML = `${name} said:`;
    commentContent.innerHTML = msg;

    comment.classList.add("comment");

    comment.appendChild(commentName);
    comment.appendChild(commentContent);

    console.log(comment)
}
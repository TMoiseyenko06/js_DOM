let submission = {};

const logSubmission = (event) => {
    event.preventDefault()
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    submission['name'] = name;
    submission['email'] = email;
    submission['message'] = message;
    console.log(submission)
};
const users = [];
let userIdCounter = 1;

function registerUser() {
    const name = document.getElementById("name").value;
    const age = parseInt(document.getElementById("age").value);
    const interests = document.getElementById("interests").value.split(",").map(item => item.trim());
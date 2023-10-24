const users = [];
let userIdCounter = 1;

function registerUser() {
    const name = document.getElementById("name").value;
    const age = parseInt(document.getElementById("age").value);
    const interests = document.getElementById("interests").value.split(",").map(item => item.trim());

    if (name && age && interests.length > 0) {
        const user = { id: userIdCounter++, name, age, interests };
        users.push(user);
        alert("Registration successful!");
    } else {
        alert("Please fill in all fields.");
    }
}

function findMatches(){
    
}
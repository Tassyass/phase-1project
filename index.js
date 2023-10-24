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
    const currentUserId = userIdCounter - 1;
    const currentUser = users.find(user => user.id === currentUserId);
    if (!currentUser) return;

    const potentialMatches = users.filter(user => {
        return user.id !== currentUserId && user.age >= currentUser.age - 5 && user.age <= currentUser.age + 5;
    });
}

const matchesContainer = document.getElementById("matches");
matchesContainer.innerHTML = "";

if (potentialMatches.length === 0) {
    matchesContainer.innerHTML = "No matches found.";
} else {
    potentialMatches.forEach(match => {
        const matchDiv = document.createElement("div");
        matchDiv.innerText = `Name: ${match.name}, Age: ${match.age}, Interests: ${match.interests.join(", ")}`;
        matchesContainer.appendChild(matchDiv);
    });
}
}

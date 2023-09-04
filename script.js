// Sample player data
const playersData = [
    {
        "id": 0,
        "playerName": "Hardik Pandya",
        "from": "MI",
        "price": "6.50 Cr",
        "isPlaying": true,
        "description": "All-rounder"
    },
    // Add more players here
];

// Sample team data
const teamsData = [
    {
        "name": "MI",
        "icon": "mi-icon.png",
        "players": playersData.filter(player => player.from === "MI")
    },
    // Add more teams here
];

// Function to render teams on the homepage
function renderTeams() {
    const teamList = document.getElementById("teamList");
    teamList.innerHTML = "";

    teamsData.forEach(team => {
        const teamCard = document.createElement("div");
        teamCard.classList.add("team-card");

        // Add team information to the card
        teamCard.innerHTML = `
            <img src="${team.icon}" alt="${team.name} Icon">
            <h2>${team.name}</h2>
            <p>Player Count: ${team.players.length}</p>
        `;

        // Add a click event listener to view team details
        teamCard.addEventListener("click", () => {
            // Call a function to display team details page
            displayTeamDetails(team);
        });

        teamList.appendChild(teamCard);
    });
}

// Function to display team details page
function displayTeamDetails(team) {
    // Implement this function to display team details as specified
    // You can create a new HTML page dynamically and add it to the DOM
}

// Event listener for the "Add Team" button
document.getElementById("addTeamButton").addEventListener("click", () => {
    // Implement logic to add a new team to teamsData and update the UI
    // You can use prompt or a form to get team details from the user
});

// Event listener for the "Add Player" button
document.getElementById("addPlayerButton").addEventListener("click", () => {
    // Implement logic to add a new player to playersData and update the UI
    // You can use prompt or a form to get player details from the user
});

// Initial rendering of teams
renderTeams();

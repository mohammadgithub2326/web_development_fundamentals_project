// JavaScript for your web app

document.addEventListener("DOMContentLoaded", function () {
    // Load teams from local storage and display them on the homepage
    loadTeams();
});

function loadTeams() {
    // Retrieve teams data from local storage (replace with your actual data)
    const teamsData = getTeamsFromLocalStorage();

    // Get the teamList container
    const teamList = document.getElementById("teamList");

    // Loop through teams and create team cards
    teamsData.forEach(team => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <img src="${team.icon}" alt="${team.name}" class="team-icon">
            <h2>${team.name}</h2>
            <p>Player Count: ${team.playerCount}</p>
        `;

        // Add a click event listener to each team card
        card.addEventListener("click", () => {
            // Redirect to the team details page with team ID
            window.location.href = `team-details.html?teamId=${team.id}`;
        });

        // Append the card to the teamList
        teamList.appendChild(card);
    });
}
document.getElementById("searchButton").addEventListener("click", () => {
    const teamCode = document.getElementById("teamCodeInput").value.toUpperCase();
    const teamPlayers = searchPlayersByTeam(teamCode); // Implement this function
    displayTeamPlayers(teamPlayers); // Implement this function to display the results
});
function searchPlayersByTeam(teamCode) {
    const playersData = getPlayersFromLocalStorage(); // Implement this function
    return playersData.filter(player => player.from === teamCode);
}
document.getElementById("addTeamButton").addEventListener("click", () => {
    // Implement code to open a form or modal for adding a new team
});

document.getElementById("addPlayerButton").addEventListener("click", () => {
    // Implement code to open a form or modal for adding a new player
});
// Function to add a new team to local storage
function addNewTeamToLocalStorage(teamData) {
    const teamsData = getTeamsFromLocalStorage(); // Get existing team data
    teamsData.push(teamData); // Add the new team data
    localStorage.setItem("teams", JSON.stringify(teamsData)); // Update local storage
}

// Function to add a new player to local storage
function addNewPlayerToLocalStorage(playerData) {
    const playersData = getPlayersFromLocalStorage(); // Get existing player data
    playersData.push(playerData); // Add the new player data
    localStorage.setItem("players", JSON.stringify(playersData)); // Update local storage
}

// Function to retrieve teams data from local storage
function getTeamsFromLocalStorage() {
    const teamsData = JSON.parse(localStorage.getItem("teams")) || [];
    return teamsData;
}

// Function to retrieve players data from local storage
function getPlayersFromLocalStorage() {
    const playersData = JSON.parse(localStorage.getItem("players")) || [];
    return playersData;
}
// Function to add a new team to local storage
function addNewTeamToLocalStorage(teamData) {
    const teamsData = getTeamsFromLocalStorage(); // Get existing team data
    teamsData.push(teamData); // Add the new team data
    localStorage.setItem("teams", JSON.stringify(teamsData)); // Update local storage
}

// Function to add a new player to local storage
function addNewPlayerToLocalStorage(playerData) {
    const playersData = getPlayersFromLocalStorage(); // Get existing player data
    playersData.push(playerData); // Add the new player data
    localStorage.setItem("players", JSON.stringify(playersData)); // Update local storage
}

// Function to retrieve teams data from local storage
function getTeamsFromLocalStorage() {
    const teamsData = JSON.parse(localStorage.getItem("teams")) || [];
    return teamsData;
}

// Function to retrieve players data from local storage
function getPlayersFromLocalStorage() {
    const playersData = JSON.parse(localStorage.getItem("players")) || [];
    return playersData;
}
const addTeamButton = document.getElementById("addTeamButton");
const addPlayerButton = document.getElementById("addPlayerButton");
const addTeamForm = document.getElementById("addTeamForm");
const addPlayerForm = document.getElementById("addPlayerForm");

addTeamButton.addEventListener("click", () => {
    // Show the team form and hide the player form
    addTeamForm.style.display = "block";
    addPlayerForm.style.display = "none";
});

addPlayerButton.addEventListener("click", () => {
    // Show the player form and hide the team form
    addPlayerForm.style.display = "block";
    addTeamForm.style.display = "none";
});
const teamForm = document.getElementById("teamForm");
const playerForm = document.getElementById("playerForm");

teamForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const teamData = {
        // Retrieve form field values and create a team data object
    };
    addNewTeamToLocalStorage(teamData);
    refreshTeamList(); // Update the UI
    // Hide the form or reset form fields
});

playerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const playerData = {
        // Retrieve form field values and create a player data object
    };
    addNewPlayerToLocalStorage(playerData);
    // Hide the form or reset form fields
});


// Implement functions for retrieving and displaying team details and players on the team details and player details pages.

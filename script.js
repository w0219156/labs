let score = 0;
let unlockedObjects = [];
const unlockThresholds = { planet: 3, rocket: 7, alien: 10 }; // Thresholds for unlocking objects
let allUnlocked = false; // Flag to check if all objects have been unlocked

function clickCookie() {
    score++;
    updateScore();
    checkUnlockables();
}

function updateScore() {
    document.getElementById('scoreValue').textContent = score;
}

function unlockObject(object) {
    if (!unlockedObjects.includes(object)) {
        unlockedObjects.push(object);
        const objElement = document.getElementById(object);
        objElement.classList.add('unlocked');
        objElement.onclick = function() {
            this.classList.toggle('enlarged'); // Toggle size on click
        };
        alert(`Congratulations! You've unlocked the ${object}!`);
    }
    if (unlockedObjects.length === 3 && !allUnlocked) {
        allUnlocked = true;
        addFourthEmoji();
    }
}

function checkUnlockables() {
    Object.keys(unlockThresholds).forEach(object => {
        if (score >= unlockThresholds[object] && !unlockedObjects.includes(object)) {
            unlockObject(object);
        }
    });
}

function addFourthEmoji() {
    const spaceObjectsDiv = document.getElementById('spaceObjects');
    const newEmoji = document.createElement('div');
    newEmoji.classList.add('space-object', 'unlocked');
    newEmoji.id = 'star';
    newEmoji.innerHTML = '⭐';
    newEmoji.onclick = function() {
        this.classList.toggle('enlarged');
    };
    spaceObjectsDiv.appendChild(newEmoji);
}

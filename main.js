let intervalId; // To store the interval ID
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');

// Function to handle the start button click
startButton.addEventListener('click', () => {
    if (!intervalId) {
        const minInt = parseInt(document.getElementById('minInterval').value) * 1000;
        const maxInt = parseInt(document.getElementById('maxInterval').value) * 1000;
        intervalId = setInterval(randomGenerator, getRandomInterval(minInt, maxInt)); // Start the interval
        startButton.disabled = true; // Disable the start button while running
        stopButton.disabled = false; // Enable the stop button
    }
});

// Function to handle the stop button click
stopButton.addEventListener('click', () => {
    clearInterval(intervalId); // Stop the interval
    intervalId = null;
    startButton.disabled = false; // Enable the start button
    stopButton.disabled = true; // Disable the stop button
});

document.getElementById('startButton').addEventListener('click', () => {
    if (!intervalId) {
        const minInt = parseInt(document.getElementById('minInterval').value) * 1000;
        const maxInt = parseInt(document.getElementById('maxInterval').value) * 1000;
        intervalId = setInterval(randomGenerator, getRandomInterval(minInt, maxInt)); // Start the interval
    } else {
        clearInterval(intervalId); // Stop the interval when the button is clicked again
        intervalId = null;
    }
});

// interval generator
// interval generator
function randomGenerator() {
  document.getElementById('number').innerText = 
    Math.floor(Math.random() * (51 - 30)) + 30;
  
  const minInt = parseInt(document.getElementById('minInterval').value);
  const maxInt = parseInt(document.getElementById('maxInterval').value);
  const randomIntervalInMinutes = Math.floor(Math.random() * (maxInt - minInt + 1)) + minInt;

  clearInterval(intervalId); // Pause the interval

  if (selectedWorkouts.length > 0) {
    const randomIndex = Math.floor(Math.random() * selectedWorkouts.length);
    document.getElementById('workout').innerText = selectedWorkouts[randomIndex];
  }

  if (confirm("Number changed!")) {
      intervalId = setInterval(randomGenerator, randomIntervalInMinutes * 60 * 1000); // Resume the interval in milliseconds
      showChangedInfo();
  }
  document.title = "Original Title"; // Change the title back to the original title
  playSound()
}



// Function to play a sound
function playSound() {
    const audio = new Audio('files/beep.mp3'); // Replace with the actual path to your sound file
    audio.play();
}
  

function showChangedInfo() {
    const changedInfo = document.getElementById('changedInfo');
    const number = document.getElementById('number').innerText;
    const workout = document.getElementById('workout').innerText;
    
    const newInfo = document.createElement('p');
    newInfo.innerText = `Number: ${number}, Workout: ${workout}`;
    changedInfo.appendChild(newInfo);
}

  // Set up click event listeners for workout types
  const workoutItems = document.querySelectorAll('#workout-types ul li');
  const selectedWorkouts = [];
  
  workoutItems.forEach(item => {
    item.addEventListener('click', () => {
      const workoutType = item.textContent;
  
      if (!selectedWorkouts.includes(workoutType)) {
        selectedWorkouts.push(workoutType);
        item.style.backgroundColor = 'bisque'; // Change background color when added to array
      } else {
        const index = selectedWorkouts.indexOf(workoutType);
        selectedWorkouts.splice(index, 1);
        item.style.backgroundColor = ''; // Reset background color when removed from array
      }
    });
  });
  
  // Set up click event listener for the start button
  document.getElementById('startButton').addEventListener('click', () => {
    randomGenerator();
  });
  

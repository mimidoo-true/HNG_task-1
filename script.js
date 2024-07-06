function updateTimeAndDay() {
    const now = new Date();
    const timeElement = document.getElementById('time');
    const dayElement = document.getElementById('day');
    
    // Convert to UTC and format the time
    const utcTime = now.toUTCString().split(' ')[4];
    timeElement.textContent = utcTime;
    
    // Get the day of the week
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDay = days[now.getUTCDay()];
    dayElement.textContent = currentDay;
}

// Update the time and day on page load
updateTimeAndDay();

// Optionally, update every second
setInterval(updateTimeAndDay, 1000);

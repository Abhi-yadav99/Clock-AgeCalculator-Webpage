function updateClock() {
    const now = new Date();

    // Time
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Add leading zero if number is less than 10
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    document.getElementById('timeDisplay').innerText = `${hours}:${minutes}:${seconds}`;

    // Date Details
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    document.getElementById('dayName').innerText = days[now.getDay()];
    document.getElementById('dateNum').innerText = now.getDate();
    document.getElementById('monthName').innerText = months[now.getMonth()];
    document.getElementById('yearNum').innerText = now.getFullYear();
}

// Update clock every 1 second (1000 milliseconds)
setInterval(updateClock, 1000);
updateClock(); // Run immediately on load

// 2. AGE CALCULATOR FUNCTIONALITY
function calculateAge() {
    const birthDateInput = document.getElementById('birthDate').value;
    const resultDiv = document.getElementById('result');

    if (!birthDateInput) {
        resultDiv.innerHTML = '<span class="error">Please select a date of birth.</span>';
        return;
    }

    const birthDate = new Date(birthDateInput);
    const today = new Date();

    // Check if the user selected a future date
    if (birthDate > today) {
        resultDiv.innerHTML = '<span class="error">Birth date cannot be in the future!</span>';
        return;
    }

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    // Adjust if the current month is before the birth month
    if (months < 0 || (months === 0 && days < 0)) {
        years--;
        months += 12;
    }

    // Adjust if the current day is before the birth day
    if (days < 0) {
        // Get the number of days in the previous month
        const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += prevMonth.getDate();
        months--;
    }

    resultDiv.innerHTML = `You are <span style="color:#ff6b6b">${years}</span> years, <span style="color:#ff6b6b">${months}</span> months, and <span style="color:#ff6b6b">${days}</span> days old.`;
}

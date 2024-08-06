// JavaScript for updating battery percentage and handling disclaimer

function updateBattery(percentage) {
    const batteryLevel = document.getElementById('batteryLevel');
    const batteryPercentage = document.getElementById('batteryPercentage');
    
    batteryLevel.style.width = percentage + '%';
    batteryPercentage.innerText = percentage + '%';

    // Check if percentage is below 10% to display disclaimer
    const disclaimer = document.getElementById('disclaimer');
    if (percentage < 10) {
        disclaimer.innerText = 'Battery low. Consider switching back to mains power.';
    } else {
        disclaimer.innerText = '';
    }
}

// Function to update storage percentage
function updateStorage() {
    const storageInput = document.getElementById('storageInput').value;
    document.getElementById('storagePercentage').innerText = storageInput + '%';
    updateBattery(storageInput);
}

// Function to update energy gained
function updateGained() {
    const gainedInput = document.getElementById('gainedInput').value;
    document.getElementById('energyGained').innerText = gainedInput + ' kWh';
}

// Function to update energy used
function updateUsed() {
    const usedInput = document.getElementById('usedInput').value;
    document.getElementById('energyUsed').innerText = usedInput + ' kWh';
}

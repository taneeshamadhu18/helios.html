// JavaScript for Energy Trends Page using Chart.js

window.onload = function() {
    // Sample data for demonstration
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    const data = [500, 800, 1200, 1000, 1500, 1300]; // Energy production data in kWh for each month

    // Configuration options for Chart.js
    const config = {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Energy Produced (kWh)',
                data: data,
                borderColor: 'rgba(255, 99, 132, 1)', // Brighter border color
                backgroundColor: 'rgba(255, 99, 132, 0.2)', // Brighter and lighter fill
                borderWidth: 2, // Thicker border
                fill: true // Fill the area under the line
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        color: 'rgba(255, 99, 132, 1)' // Brighter legend color
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(255, 99, 132, 0.8)', // Brighter tooltip background
                    titleColor: 'white', // White tooltip title color
                    bodyColor: 'white' // White tooltip body color
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    ticks: {
                        color: 'rgba(255, 99, 132, 1)' // Brighter x-axis ticks
                    },
                    grid: {
                        color: 'rgba(255, 99, 132, 0.2)' // Lighter x-axis grid lines
                    }
                },
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: 'rgba(255, 99, 132, 1)' // Brighter y-axis ticks
                    },
                    grid: {
                        color: 'rgba(255, 99, 132, 0.2)' // Lighter y-axis grid lines
                    }
                }
            }
        }
    };

    // Render the chart
    const ctx = document.getElementById('energyChart').getContext('2d');
    const energyChart = new Chart(ctx, config);
    const dataValues = [
        parseFloat(document.getElementById('january').value),
        parseFloat(document.getElementById('february').value),
        parseFloat(document.getElementById('march').value),
        parseFloat(document.getElementById('april').value),
        parseFloat(document.getElementById('may').value),
        parseFloat(document.getElementById('june').value),
        parseFloat(document.getElementById('july').value),
        parseFloat(document.getElementById('august').value),
        parseFloat(document.getElementById('september').value),
        parseFloat(document.getElementById('october').value),
        parseFloat(document.getElementById('november').value),
        parseFloat(document.getElementById('december').value)
    ];
};

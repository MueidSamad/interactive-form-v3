document.addEventListener('DOMContentLoaded', function () {
    const activitiesFieldset = document.getElementById('activities');
    const totalCostElement = document.getElementById('activity-cost');
    let totalCost = 0;

    activitiesFieldset.addEventListener('change', function (event) {
        const checkbox = event.target;

        if (checkbox.type === 'checkbox') {
            const activityCost = parseInt(checkbox.getAttribute('data-cost'), 10);

            if (checkbox.checked) {
                totalCost += activityCost;
            } else {
                totalCost -= activityCost;
            }

            totalCostElement.textContent = totalCost;
        }
    });
});
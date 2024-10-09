document.addEventListener("DOMContentLoaded", function () {
    // Select all checkbox inputs within the activities section
    const activityCheckboxes = document.querySelectorAll('#activities-box input[type="checkbox"]');

    activityCheckboxes.forEach(checkbox => {
        // Listen for focus event   
        checkbox.addEventListener('focus', function () {
            // Add the .focus class to the parent label of the checkbox
            this.parentElement.classList.add('focus');
            console.log(checkbox);
        });

        // Listen for blur event
        checkbox.addEventListener('blur', function () {
            // Remove the .focus class from the parent label of the checkbox
            this.parentElement.classList.remove('focus');
        });
    });
});

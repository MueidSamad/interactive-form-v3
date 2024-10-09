document.addEventListener('DOMContentLoaded', function () {
    // Select elements
    const jobRoleSelect = document.getElementById('title');
    const otherJobRoleInput = document.getElementById('other-job-role');

    // Hide the "Other job role" input field by default
    otherJobRoleInput.style.display = 'none';

    // Add an event listener to the "Job Role" <select> element
    jobRoleSelect.addEventListener('change', function () {
        if (jobRoleSelect.value === 'other') {
            // Show the "Other job role" field if "Other" is selected
            otherJobRoleInput.style.display = 'block';
        } else {
            // Hide the "Other job role" field if another option is selected
            otherJobRoleInput.style.display = 'none';
        }
    });
});


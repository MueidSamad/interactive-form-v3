
document.addEventListener('DOMContentLoaded', function () {
    const designSelect = document.getElementById('design');
    const colorSelect = document.getElementById('color');
    const colorOptions = colorSelect.children;

    // Disable the Color select field by default
    colorSelect.disabled = true;

    // Add an event listener to the "Design" <select> element
    designSelect.addEventListener('change', function () {
        const selectedDesign = designSelect.value;

        // Enable the Color dropdown when a design is selected
        if (selectedDesign !== '') {
            colorSelect.disabled = false;
        } else {
            colorSelect.disabled = true;
        }

        // Loop through all the color options
        for (let i = 0; i < colorOptions.length; i++) {
            const option = colorOptions[i];
            const theme = option.getAttribute('data-theme');

            // Show the color options that match the selected design
            if (theme === selectedDesign) {
                option.style.display = 'block';
            } else {
                option.style.display = 'none';
            }
        }

        // Set the color dropdown back to the default (first visible option)
        colorSelect.value = '';
        for (let i = 0; i < colorOptions.length; i++) {
            if (colorOptions[i].style.display === 'block') {
                colorSelect.value = colorOptions[i].value;
                break;
            }
        }
    });
});

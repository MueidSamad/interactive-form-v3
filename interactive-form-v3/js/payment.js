
document.addEventListener('DOMContentLoaded', function () {
    const paymentSelect = document.getElementById('payment');
    const creditCardInfo = document.getElementById('credit-card');
    const paypalInfo = document.getElementById('paypal');
    const bitcoinInfo = document.getElementById('bitcoin');

    // Function to hide all payment sections
    function hideAllPaymentSections() {
        creditCardInfo.style.display = 'none';
        paypalInfo.style.display = 'none';
        bitcoinInfo.style.display = 'none';
    }

    // Set Credit Card as default selected option and show only its section
    paymentSelect.value = 'credit-card';
    hideAllPaymentSections();
    creditCardInfo.style.display = 'block';

    // Add event listener for changes in the payment select element
    paymentSelect.addEventListener('change', function () {
        const selectedPayment = paymentSelect.value;

        // Hide all payment sections initially
        hideAllPaymentSections();

        // Display the relevant payment section based on the selected option
        if (selectedPayment === 'credit-card') {
            creditCardInfo.style.display = 'block';
        } else if (selectedPayment === 'paypal') {
            paypalInfo.style.display = 'block';
        } else if (selectedPayment === 'bitcoin') {
            bitcoinInfo.style.display = 'block';
        }
    });
});

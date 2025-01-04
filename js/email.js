<script src="https://cdn.emailjs.com/dist/email.min.js"></script>
<script>
    // Initialize Email.js with your Public Key
    (function() {
        emailjs.init("jnrR9d4wmhtLAMmli"); // Replace with your actual Public Key
    })();

    // Handle form submission
    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Define the Service ID and Template ID
        const serviceID = "service_k0zk7w4"; 
        const templateID = "vashisht-email"; 

        // Collect form data
        const formData = {
            full_name: document.getElementById("full_name").value,
            moving_from: document.getElementById("moving_from").value,
            moving_to: document.getElementById("moving_to").value,
            moving_date: document.getElementById("moving_date").value,
            phone_number: document.getElementById("phone_number").value,
        };

        // Send the email
        emailjs.send(serviceID, templateID, formData)
            .then(response => {
                alert("Details sent successfully!");
                console.log("Success:", response);
            })
            .catch(error => {
                alert("Failed to send details. Please try again.");
                console.error("Error:", error);
            });
    });
</script>
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents page reload
    document.getElementById("message-status").innerText = "Sent"; // Show message
    document.getElementById("message-status").style.color = "green"; // Text color
});

        
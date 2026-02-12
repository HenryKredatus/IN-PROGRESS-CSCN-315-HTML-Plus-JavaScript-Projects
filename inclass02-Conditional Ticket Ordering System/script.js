document.getElementById("checkAgeBtn").addEventListener("click", categorizeAge);

function categorizeAge() {
    const input = document.getElementById("ageInput").value.trim();
    const messageDiv = document.getElementById("message");

    console.clear();
    console.log("Raw input:", input);

    const age = Number(input);
    console.log("Converted age:", age);

    if (input === "" || Number.isNaN(age) || age < 0) {
        console.log("Validation failed.");
        messageDiv.innerHTML = '<p class="error">Please enter a valid, non-negative number for age.</p>';
        return;
    }

    let category = "";
    let className = "";

    switch (true) {
        case (age >= 65):
            category = "Senior Ticket (Discount Applied)";
            className = "senior";
            break;

        case (age >= 18):
            category = "Adult Ticket";
            className = "adult";
            break;

        default:
            category = "Youth Ticket";
            className = "youth";
    }

    console.log("Final category:", category);

    messageDiv.innerHTML = `
        <div class="ticket ${className}">
            <h3>${category}</h3>
            <p><strong>Age:</strong> ${age}</p>
            <p>Enjoy the show!</p>
        </div>
    `;
}

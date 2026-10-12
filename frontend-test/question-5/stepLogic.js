const form = document.getElementById("registrationForm");
const steps = document.querySelectorAll(".step");
const indicators = document.querySelectorAll(".indicator");
const progress = document.getElementById("progress");
let currentStep = 0;

function showStep(index) {
    steps.forEach((step, i) => {
        step.classList.toggle("active", i === index);
    });

    indicators.forEach((indicator, i) => {
        indicator.classList.toggle("active", i === index);
        indicator.classList.toggle("completed", i < index);
    });

    progress.textContent = `Step ${index + 1} of ${steps.length}`;
}

document.querySelectorAll(".next").forEach((button) => {
    button.addEventListener("click", () => {
        const fields = steps[currentStep].querySelectorAll(
            "input, textarea"
        );

        for (const field of fields) {
            if (!field.reportValidity()) {
                return;
            }
        }

        if (currentStep < steps.length - 1) {
            currentStep++;
            showStep(currentStep);
        }
    });
});

document.querySelectorAll(".back").forEach((button) => {
    button.addEventListener("click", () => {
        if (currentStep > 0) {
            currentStep--;
            showStep(currentStep);
        }
    });
});

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.reportValidity()) {
        return;
    }

    alert("Registration submitted!");
});
// Service information used to create the cards.
const donationServices = [
    {
        name: "Food Donations",
        description:
            "We collect and distribute food parcels to families and individuals who are experiencing food insecurity."
    },
    {
        name: "Clothing Donations",
        description:
            "We collect clothing and distribute it to people and families who need support."
    },
    {
        name: "School Supplies",
        description:
            "We assist learners by providing school supplies and other educational resources where possible."
    },
    {
        name: "Community Support",
        description:
            "We work with communities to identify people who require assistance and connect them with available resources."
    },
    {
        name: "Donation Collection",
        description:
            "We accept donations from individuals, businesses and organisations that would like to support our work."
    }
];

const serviceList = document.getElementById("service-list");
const serviceSearch = document.getElementById("service-search");
const serviceSort = document.getElementById("service-sort");
const serviceResults = document.getElementById("service-results");
const serviceReset = document.getElementById("service-reset");

// Only run this section when the Services page elements exist.
if (
    serviceList &&
    serviceSearch &&
    serviceSort &&
    serviceResults &&
    serviceReset
) {
    function displayServices() {
        const searchText = serviceSearch.value.trim().toLowerCase();

        // Search both the service name and its description.
        let matchingServices = donationServices.filter(function (service) {
            const serviceText =
                service.name + " " + service.description;

            return serviceText.toLowerCase().includes(searchText);
        });

        // Sort the filtered results without changing the original data.
        if (serviceSort.value === "az") {
            matchingServices.sort(function (first, second) {
                return first.name.localeCompare(second.name);
            });
        } else if (serviceSort.value === "za") {
            matchingServices.sort(function (first, second) {
                return second.name.localeCompare(first.name);
            });
        }

        // Remove the old cards before displaying the current results.
        serviceList.replaceChildren();

        matchingServices.forEach(function (service) {
            const card = document.createElement("article");
            card.className = "service-card";

            const heading = document.createElement("h3");
            heading.textContent = service.name;

            const description = document.createElement("p");
            description.textContent = service.description;

            card.append(heading, description);
            serviceList.appendChild(card);
        });

        if (matchingServices.length === 0) {
            serviceResults.textContent =
                "No services found. Try another word or select Reset.";
        } else {
            const resultWord =
                matchingServices.length === 1 ? "service" : "services";

            serviceResults.textContent =
                matchingServices.length + " " + resultWord + " found.";
        }
    }

    serviceSearch.addEventListener("input", displayServices);
    serviceSort.addEventListener("change", displayServices);

    serviceReset.addEventListener("click", function () {
        serviceSearch.value = "";
        serviceSort.value = "default";
        displayServices();
        serviceSearch.focus();
    });

    // Show all services when the page first loads.
    displayServices();
}
// Validate the Contact form and prepare an email.
const contactForm = document.getElementById("contact-form");

if (contactForm) {
    const contactName = document.getElementById("contact-name");
    const contactEmail = document.getElementById("contact-email");
    const contactPhone = document.getElementById("contact-phone");
    const contactType = document.getElementById("contact-type");
    const contactMessage = document.getElementById("contact-message");
    const contactStatus = document.getElementById("contact-status");
    const contactEmailLink = document.getElementById("contact-email-link");

    const contactFields = [
        contactName,
        contactEmail,
        contactPhone,
        contactType,
        contactMessage
    ];

    // Use our field messages when JavaScript is available.
    // Native HTML validation remains available without JavaScript.
    contactForm.noValidate = true;

    function showContactError(field, message) {
        const error = document.getElementById(field.id + "-error");
        error.textContent = message;
        field.setAttribute("aria-invalid", message ? "true" : "false");
    }

    // Editing the form makes any previously prepared email outdated.
    contactFields.forEach(function (field) {
        field.addEventListener("input", function () {
            showContactError(field, "");
            contactEmailLink.hidden = true;
            contactEmailLink.removeAttribute("href");
            contactStatus.textContent = "";
        });
    });

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        contactEmailLink.hidden = true;
        contactEmailLink.removeAttribute("href");

        contactFields.forEach(function (field) {
            showContactError(field, "");
        });

        let firstInvalidField = null;

        function markInvalid(field, message) {
            showContactError(field, message);

            if (!firstInvalidField) {
                firstInvalidField = field;
            }
        }

        const name = contactName.value.trim();
        const email = contactEmail.value.trim();
        const phone = contactPhone.value.trim();
        const message = contactMessage.value.trim();

        contactEmail.value = email;

        if (name.length < 2 || name.length > 80) {
            markInvalid(
                contactName,
                "Enter your name using between 2 and 80 characters."
            );
        }

        if (!email || !contactEmail.validity.valid) {
            markInvalid(
                contactEmail,
                "Enter a valid email address, such as name@example.com."
            );
        }

        // Accept local and international South African formats.
        const compactPhone = phone.replace(/[\s()-]/g, "");

        if (phone && !/^(0\d{9}|\+27\d{9})$/.test(compactPhone)) {
            markInvalid(
                contactPhone,
                "Enter 10 digits starting with 0, or +27 followed by 9 digits."
            );
        }

        if (!contactType.value) {
            markInvalid(contactType, "Choose a message type.");
        }

        if (message.length < 10 || message.length > 2000) {
            markInvalid(
                contactMessage,
                "Write a message using between 10 and 2000 characters."
            );
        }

        if (firstInvalidField) {
            contactStatus.textContent =
                "Please correct the highlighted fields.";
            firstInvalidField.focus();
            return;
        }

        // The recipient comes from the form action.
        const recipient = contactForm
            .getAttribute("action")
            .replace(/^mailto:/i, "");

        const subject =
            "Isipho Donations: " + contactType.value;

        const emailBody = [
            "Name: " + name,
            "Email: " + email,
            "Phone: " + (phone || "Not supplied"),
            "Message type: " + contactType.value,
            "",
            message
        ].join("\n");

        contactEmailLink.href =
            "mailto:" + recipient +
            "?subject=" + encodeURIComponent(subject) +
            "&body=" + encodeURIComponent(emailBody);

        contactEmailLink.hidden = false;

        contactStatus.textContent =
            "Your email is prepared. Select the link below, then send " +
            "it from your email application. Nothing has been sent yet.";
    });
}
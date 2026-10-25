"use strict";

/* =====================================================
   ISIPHO DONATIONS - WEDE5020 PART 3
   JavaScript Functionality and Form Validation

   Features:
   1. Mobile navigation
   2. Scroll animations
   3. Services search and sorting
   4. Gallery lightbox
   5. Interactive Pretoria map
   6. Enquiry form guidance
   7. Form validation
   8. Netlify form submission
   9. Optional email functionality

   Validation techniques adapted from WEDE5020
   JavaScript Form Validation lecture material.
   ===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    console.log("Isipho Donations JavaScript loaded successfully");


    /* =====================================
       1. MOBILE NAVIGATION
       ===================================== */

    const menuButton = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".site-nav");

    if (menuButton && navigation) {

        menuButton.addEventListener("click", function () {

            const isOpen = navigation.classList.toggle("is-open");

            menuButton.setAttribute("aria-expanded", String(isOpen));

            menuButton.setAttribute(
                "aria-label",
                isOpen ? "Close navigation" : "Open navigation"
            );

            menuButton.firstChild.textContent = isOpen ? "✕ " : "☰ ";

        });

        navigation.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function () {

                navigation.classList.remove("is-open");

                menuButton.setAttribute("aria-expanded", "false");
                menuButton.setAttribute("aria-label", "Open navigation");
                menuButton.firstChild.textContent = "☰ ";

            });

        });

    }


    /* =====================================
       2. SCROLL ANIMATIONS
       ===================================== */

    if (
        "IntersectionObserver" in window &&
        !window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {

        const elements = document.querySelectorAll(".reveal");

        document.body.classList.add("js-ready");

        const observer = new IntersectionObserver(function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("in-view");
                    observer.unobserve(entry.target);

                }

            });

        }, { threshold: 0.08 });

        elements.forEach(function (element) {

            observer.observe(element);

        });

    }


    /* =====================================
       3. DYNAMIC SERVICES AND SEARCH
       ===================================== */

    const serviceGrid = document.getElementById("services-grid");

    if (serviceGrid) {

        const services = [

            {
                name: "Food donations",
                category: "Essentials",
                icon: "✿",
                colour: "coral-icon",
                description: "Collecting food parcels and pantry basics to support people experiencing food insecurity."
            },

            {
                name: "Clothing support",
                category: "Essentials",
                icon: "♡",
                colour: "gold-icon",
                description: "Encouraging donations of clean, usable clothing for people who need them."
            },

            {
                name: "School supplies",
                category: "Education",
                icon: "▤",
                colour: "green-icon",
                description: "Supporting access to books, stationery and learning materials for schoolchildren."
            },

            {
                name: "Volunteer opportunities",
                category: "People",
                icon: "✦",
                colour: "coral-icon",
                description: "Helping community-minded people ask how their time and skills could make a difference."
            },

            {
                name: "Local partnerships",
                category: "Community",
                icon: "✳",
                colour: "green-icon",
                description: "Bringing together schools, local businesses and community partners."
            },

            {
                name: "Donation enquiries",
                category: "Get involved",
                icon: "↗",
                colour: "gold-icon",
                description: "Giving supporters a way to ask what items may be useful and how to contribute."
            }

        ];


        const search = document.getElementById("service-search");
        const sort = document.getElementById("service-sort");
        const count = document.getElementById("service-count");


        function renderServices() {

            const term = search ? search.value.trim().toLowerCase() : "";

            const items = services.filter(function (service) {

                const information =
                    service.name + " " +
                    service.category + " " +
                    service.description;

                return information.toLowerCase().includes(term);

            });


            if (sort && sort.value === "az") {

                items.sort(function (a, b) {

                    return a.name.localeCompare(b.name);

                });

            }

            if (sort && sort.value === "za") {

                items.sort(function (a, b) {

                    return b.name.localeCompare(a.name);

                });

            }


            serviceGrid.replaceChildren();


            items.forEach(function (service) {

                const card = document.createElement("article");
                card.className = "feature-card service-card";

                const badge = document.createElement("span");
                badge.className = "feature-icon " + service.colour;
                badge.textContent = service.icon;

                const category = document.createElement("span");
                category.className = "tag";
                category.textContent = service.category;

                const heading = document.createElement("h3");
                heading.textContent = service.name;

                const description = document.createElement("p");
                description.textContent = service.description;

                const link = document.createElement("a");
                link.href = "enquiry.html";
                link.textContent = "Ask about this →";

                card.append(
                    badge,
                    category,
                    heading,
                    description,
                    link
                );

                serviceGrid.appendChild(card);

            });


            if (items.length === 0) {

                const emptyMessage = document.createElement("p");

                emptyMessage.className = "empty-state";
                emptyMessage.textContent =
                    "No matching services. Try food, school or volunteering.";

                serviceGrid.appendChild(emptyMessage);

            }


            if (count) {

                count.textContent =
                    items.length + " of " +
                    services.length + " services shown";

            }

        }


        if (search) {
            search.addEventListener("input", renderServices);
        }

        if (sort) {
            sort.addEventListener("change", renderServices);
        }

        renderServices();

    }


    /* =====================================
       4. INTERACTIVE GALLERY LIGHTBOX
       ===================================== */

    const galleryDialog = document.getElementById("gallery-dialog");

    if (galleryDialog) {

        const largeImage = document.getElementById("lightbox-image");
        const caption = document.getElementById("lightbox-caption");
        const closeButton = document.getElementById("close-lightbox");

        if (largeImage && caption) {

            const galleryImages = document.querySelectorAll(".gallery-tile");

            galleryImages.forEach(function (image) {

                image.addEventListener("click", function () {

                    largeImage.src = image.dataset.image;
                    largeImage.alt = image.dataset.alt || "Donation photograph";

                    caption.textContent = image.dataset.caption || "";

                    galleryDialog.showModal();

                });

            });

        }


        if (closeButton) {

            closeButton.addEventListener("click", function () {

                galleryDialog.close();

            });

        }


        galleryDialog.addEventListener("click", function (event) {

            if (event.target === galleryDialog) {

                galleryDialog.close();

            }

        });

    }


    /* =====================================
       5. INTERACTIVE PRETORIA MAP
       ===================================== */

    const mapContainer = document.getElementById("community-map");

    if (mapContainer) {

        if (typeof L !== "undefined") {

            const map = L.map(mapContainer).setView(
                [-25.7479, 28.2293],
                12
            );

            L.tileLayer(
                "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
                {
                    maxZoom: 18,
                    attribution:
                        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                }
            ).addTo(map);

            L.marker([-25.7479, 28.2293])
                .addTo(map)
                .bindPopup(
                    "<strong>Pretoria city centre</strong><br>" +
                    "Illustrative service area, not a verified Isipho Donations office."
                );

        } else {

            mapContainer.textContent =
                "The map could not load. Please use the OpenStreetMap link below.";

        }

    }


    /* =====================================
       6. ENQUIRY FORM GUIDANCE
       ===================================== */

    const enquiryType = document.getElementById("enq-type");
    const enquiryPreview = document.getElementById("enquiry-preview");

    if (enquiryType && enquiryPreview) {

        const guidance = {

            food:
                "Food enquiry: Tell us which items you would like to give, the approximate quantity and when they may be available. Availability is not confirmed automatically.",

            clothes:
                "Clothing enquiry: Mention the types and sizes of clean clothing available so arrangements can be discussed.",

            school:
                "School supplies: Tell us whether you have stationery, books or other learning materials.",

            volunteer:
                "Volunteer enquiry: Share the activities you enjoy and your general availability. No placement is guaranteed.",

            partner:
                "Partnership enquiry: Describe your school, business or community group and the support you have in mind."

        };


        enquiryType.addEventListener("change", function () {

            enquiryPreview.textContent =
                guidance[enquiryType.value] ||
                "Choose a topic to see some guidance.";

        });

    }


    /* =====================================
       7. FORM VALIDATION
       Based on WEDE5020 lecture material
       ===================================== */


    // Display an error underneath an incorrect field.

    function showError(form, field, message) {

        const error = form.querySelector(
            '[data-error-for="' + field.id + '"]'
        );

        if (error) {

            error.textContent = message;

        }

        field.setAttribute("aria-invalid", "true");

    }


    // Clear the error when the user corrects the value.

    function clearError(form, field) {

        const error = form.querySelector(
            '[data-error-for="' + field.id + '"]'
        );

        if (error) {

            error.textContent = "";

        }

        field.removeAttribute("aria-invalid");

    }


    // Check individual fields.

    function checkField(form, field) {

        const value = field.value.trim();

        let message = "";


        // Check if a required field was left empty.

        if (field.required && value === "") {

            message = "Please complete this field.";

        }


        // Check the minimum length of the text.

        else if (
            value !== "" &&
            field.minLength > 0 &&
            value.length < field.minLength
        ) {

            message =
                "Please enter at least " +
                field.minLength +
                " characters.";

        }


        // Check the email address format.

        else if (
            value !== "" &&
            field.type === "email" &&
            !field.checkValidity()
        ) {

            message = "Please enter a valid email address.";

        }


        // Check a phone number against its HTML pattern.

        else if (
            value !== "" &&
            field.validity.patternMismatch
        ) {

            message = "Please check the phone number format.";

        }


        // Check any other HTML validation rule.

        else if (
            value !== "" &&
            !field.checkValidity()
        ) {

            message = "Please check the information entered.";

        }


        if (message !== "") {

            showError(form, field, message);

            return false;

        } else {

            clearError(form, field);

            return true;

        }

    }


    // Check all required fields before submitting.

    function validateForm(form) {

        let isValid = true;

        const fields = form.querySelectorAll(
            'input:not([type="hidden"])[id], select[id], textarea[id]'
        );


        fields.forEach(function (field) {

            if (!checkField(form, field)) {

                isValid = false;

            }

        });

        return isValid;

    }


    /* =====================================
       8. CONTACT AND ENQUIRY SUBMISSIONS
       ===================================== */

    const contactForm = document.getElementById("contact-form");
    const enquiryForm = document.getElementById("enquiry-form");


    [contactForm, enquiryForm].forEach(function (form) {

        if (!form) {
            return;
        }


        const status = form.querySelector(".form-status");

        const fields = form.querySelectorAll(
            'input:not([type="hidden"])[id], select[id], textarea[id]'
        );


        // Validate fields when a visitor finishes typing.

        fields.forEach(function (field) {

            field.addEventListener("blur", function () {

                field.dataset.validationTouched = "yes";

                checkField(form, field);

            });


            // Remove errors as the user corrects their input.

            field.addEventListener("input", function () {

                if (field.dataset.validationTouched === "yes") {

                    checkField(form, field);

                }

            });


            // Validate dropdown selections.

            field.addEventListener("change", function () {

                field.dataset.validationTouched = "yes";

                checkField(form, field);

            });

        });


        // Clear old validation messages after resetting the form.

        form.addEventListener("reset", function () {

            fields.forEach(function (field) {

                clearError(form, field);

                delete field.dataset.validationTouched;

            });

        });


        // Submit event - prevent the browser's default action.

        form.addEventListener("submit", async function (event) {

            event.preventDefault();


            // Check the form before submission.

            const isValid = validateForm(form);

            if (!isValid) {

                if (status) {

                    status.textContent =
                        "Please correct the highlighted fields.";

                }

                const firstInvalid = form.querySelector(
                    '[aria-invalid="true"]'
                );

                if (firstInvalid) {

                    firstInvalid.focus();

                }

                return;

            }


            /* When testing locally, explain that a
               Netlify deployment is needed to actually
               send the information. */

            const isLocal =
                window.location.protocol === "file:" ||
                window.location.hostname === "localhost" ||
                window.location.hostname === "127.0.0.1";


            if (isLocal) {

                if (status) {

                    status.textContent =
                        "Your information is valid. To send this message, please use the published Netlify website.";

                }

                return;

            }


            // Prepare the form for Netlify.

            const submitButton = form.querySelector(
                'button[type="submit"]'
            );

            if (submitButton) {
                submitButton.disabled = true;
            }

            if (status) {

                status.textContent = "Sending your message...";

            }


            try {

                const formData = new FormData(form);

                const encodedData = new URLSearchParams(formData);


                // AJAX submission to Netlify.

                const response = await fetch("/", {

                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/x-www-form-urlencoded"
                    },

                    body: encodedData.toString()

                });


                if (!response.ok) {

                    throw new Error(
                        "The form could not be submitted."
                    );

                }


                // Only confirm delivery when the
                // hosting service accepted the request.

                if (status) {

                    status.textContent =
                        "Thank you! Your message has been sent successfully.";

                }


                form.reset();


            } catch (error) {

                console.error("Form submission error:", error);

                if (status) {

                    status.textContent =
                        "Your message could not be sent. Please try again.";

                }

            } finally {

                if (submitButton) {

                    submitButton.disabled = false;

                }

            }

        });

    });


    /* =====================================
       9. OPTIONAL EMAIL APP FUNCTION
       ===================================== */

    // Enter a verified email address if you want
    // visitors to prepare an email in their mail app.

    const CONTACT_EMAIL = "";

    const emailButton = document.getElementById("email-message");

    if (emailButton && contactForm) {

        emailButton.addEventListener("click", function () {

            const status = contactForm.querySelector(".form-status");


            if (!validateForm(contactForm)) {

                if (status) {

                    status.textContent =
                        "Please correct the form before preparing your email.";

                }

                return;

            }


            if (!CONTACT_EMAIL) {

                if (status) {

                    status.textContent =
                        "The recipient email address has not been configured.";

                }

                return;

            }


            const name =
                contactForm.elements.namedItem("name").value.trim();

            const email =
                contactForm.elements.namedItem("email").value.trim();

            const messageType =
                contactForm.elements.namedItem("type").value;

            const message =
                contactForm.elements.namedItem("message").value.trim();


            const subject = encodeURIComponent(
                "Isipho Donations: " + messageType
            );

            const body = encodeURIComponent(
                "Name: " + name + "\n" +
                "Email: " + email + "\n" +
                "Message type: " + messageType + "\n\n" +
                message
            );


            window.location.href =
                "mailto:" + CONTACT_EMAIL +
                "?subject=" + subject +
                "&body=" + body;


            if (status) {

                status.textContent =
                    "Your email application should open. Press Send in your email application to deliver the message.";

            }

        });

    }

});

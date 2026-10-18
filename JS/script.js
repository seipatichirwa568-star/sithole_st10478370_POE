
'use strict';

// Isipho Donations - WEDE5020 Part 3
// All the website's JavaScript is kept in this external file.

document.addEventListener('DOMContentLoaded', () => {

  // 1. Mobile navigation
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');

  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
      menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
      menuButton.firstChild.textContent = isOpen ? '✕ ' : '☰ ';
    });

    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('is-open');
        menuButton.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 2. Reveal animations when scrolling
  if ('IntersectionObserver' in window &&
      !matchMedia('(prefers-reduced-motion: reduce)').matches) {

    const elements = document.querySelectorAll('.reveal');
    document.body.classList.add('js-ready');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });

    elements.forEach(element => observer.observe(element));
  }

  // 3. Searchable and sortable service cards
  const serviceGrid = document.querySelector('#services-grid');

  if (serviceGrid) {
    const services = [
      {
        name: 'Food donations',
        category: 'Essentials',
        icon: '✿',
        colour: 'coral-icon',
        description: 'Collecting food parcels and pantry basics to support people experiencing food insecurity.'
      },
      {
        name: 'Clothing support',
        category: 'Essentials',
        icon: '♡',
        colour: 'gold-icon',
        description: 'Encouraging donations of clean, usable clothing for people who need them.'
      },
      {
        name: 'School supplies',
        category: 'Education',
        icon: '▤',
        colour: 'green-icon',
        description: 'Supporting access to books, stationery and learning materials for schoolchildren.'
      },
      {
        name: 'Volunteer opportunities',
        category: 'People',
        icon: '✦',
        colour: 'coral-icon',
        description: 'Helping community-minded people ask how their time and skills could make a difference.'
      },
      {
        name: 'Local partnerships',
        category: 'Community',
        icon: '✳',
        colour: 'green-icon',
        description: 'Bringing together schools, local businesses and community partners.'
      },
      {
        name: 'Donation enquiries',
        category: 'Get involved',
        icon: '↗',
        colour: 'gold-icon',
        description: 'Giving supporters a simple way to ask what items may be useful and how to contribute.'
      }
    ];

    const search = document.querySelector('#service-search');
    const sort = document.querySelector('#service-sort');
    const count = document.querySelector('#service-count');

    function renderServices() {
      const term = search.value.trim().toLowerCase();

      const items = services.filter(service =>
        `${service.name} ${service.category} ${service.description}`
          .toLowerCase().includes(term)
      );

      if (sort.value === 'az') {
        items.sort((a, b) => a.name.localeCompare(b.name));
      }

      if (sort.value === 'za') {
        items.sort((a, b) => b.name.localeCompare(a.name));
      }

      serviceGrid.replaceChildren();

      items.forEach(service => {
        const card = document.createElement('article');
        card.className = 'feature-card service-card';

        const badge = document.createElement('span');
        badge.className = `feature-icon ${service.colour}`;
        badge.textContent = service.icon;

        const category = document.createElement('span');
        category.className = 'tag';
        category.textContent = service.category;

        const name = document.createElement('h3');
        name.textContent = service.name;

        const description = document.createElement('p');
        description.textContent = service.description;

        const link = document.createElement('a');
        link.href = 'enquiry.html';
        link.textContent = 'Ask about this →';

        card.append(badge, category, name, description, link);
        serviceGrid.append(card);
      });

      if (items.length === 0) {
        const empty = document.createElement('p');
        empty.className = 'empty-state';
        empty.textContent = 'No matching services. Try food, school, or volunteering.';
        serviceGrid.append(empty);
      }

      count.textContent = `${items.length} of ${services.length} services shown`;
    }

    search.addEventListener('input', renderServices);
    sort.addEventListener('change', renderServices);
    renderServices();
  }

  // 4. Gallery lightbox
  const dialog = document.querySelector('#gallery-dialog');

  if (dialog) {
    const largeImage = document.querySelector('#lightbox-image');
    const caption = document.querySelector('#lightbox-caption');

    document.querySelectorAll('.gallery-tile').forEach(tile => {
      tile.addEventListener('click', () => {
        largeImage.src = tile.dataset.image;
        largeImage.alt = tile.dataset.alt;
        caption.textContent = tile.dataset.caption;
        dialog.showModal();
      });
    });

    document.querySelector('#close-lightbox')
      .addEventListener('click', () => dialog.close());

    dialog.addEventListener('click', event => {
      if (event.target === dialog) dialog.close();
    });
  }

  // 5. Interactive map with Leaflet
  const mapContainer = document.querySelector('#community-map');

  if (mapContainer) {
    if (typeof L !== 'undefined') {
      const map = L.map(mapContainer).setView([-25.7479, 28.2293], 12);

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      L.marker([-25.7479, 28.2293]).addTo(map)
        .bindPopup(
          '<strong>Pretoria city centre</strong><br>Illustrative service area, not a verified Isipho office.'
        );
    } else {
      mapContainer.textContent =
        'Map could not load. Use the OpenStreetMap link below.';
    }
  }

  // 6. Enquiry form guidance
  const interest = document.querySelector('#enq-type');
  const preview = document.querySelector('#enquiry-preview');

  if (interest && preview) {
    const guidance = {
      food: 'Food enquiry: Tell us which items you would like to give, the approximate quantity and when they may be available. Availability is not confirmed automatically.',
      clothes: 'Clothing enquiry: Mention the types and sizes of clean clothing available so arrangements can be discussed.',
      school: 'School supplies: Tell us whether you have stationery, books or other learning materials.',
      volunteer: 'Volunteer enquiry: Share the kinds of activities you enjoy and your general availability. No placement is guaranteed.',
      partner: 'Partnership enquiry: Describe your school, business or community group and the support you have in mind.'
    };

    interest.addEventListener('change', () => {
      preview.textContent =
        guidance[interest.value] || 'Choose a topic to see some guidance.';
    });
  }

  // 7. Form validation
  function validateForm(form) {
    let valid = true;

    form.querySelectorAll('input:not([type="hidden"]), select, textarea')
      .forEach(field => {

        const error = form.querySelector(`[data-error-for="${field.id}"]`);
        if (!error) return;

        field.setCustomValidity('');

        const value = field.value.trim();
        let message = '';

        if (field.required && !value) {
          message = 'Please complete this field.';
        } else if (
          value && field.type === 'email' && !field.validity.valid
        ) {
          message = 'Enter a valid email address.';
        } else if (value && field.validity.patternMismatch) {
          message = 'Check the phone number format.';
        } else if (
          value && field.minLength > 0 && value.length < field.minLength
        ) {
          message = `Use at least ${field.minLength} characters.`;
        } else if (
          value && field.maxLength > 0 && value.length > field.maxLength
        ) {
          message = `Use no more than ${field.maxLength} characters.`;
        }

        field.setAttribute('aria-invalid', String(Boolean(message)));
        error.textContent = message;

        if (message) valid = false;
      });

    return valid;
  }

  // 8. AJAX submissions using Netlify Forms
  document.querySelectorAll('#contact-form, #enquiry-form')
    .forEach(form => {

      const status = form.querySelector('.form-status');

      form.querySelectorAll('input,textarea,select')
        .forEach(field => {

          field.addEventListener('input', () => {
            if (field.id) {
              const error = form.querySelector(
                `[data-error-for="${field.id}"]`
              );

              if (error) {
                error.textContent = '';
                field.removeAttribute('aria-invalid');
              }
            }
          });
        });

      form.addEventListener('submit', async event => {
        event.preventDefault();

        if (!validateForm(form)) {
          status.textContent = 'Please fix the highlighted fields.';
          const invalid = form.querySelector('[aria-invalid="true"]');
          if (invalid) invalid.focus();
          return;
        }

        // Netlify must host the site to receive Netlify form submissions.
        if (
          location.protocol === 'file:' ||
          /^(localhost|127\.0\.0\.1)$/.test(location.hostname) ||
          location.hostname.endsWith('github.io')
        ) {
          status.textContent =
            'Your details are valid. Publish the site on Netlify and enable Forms before submitting.';
          return;
        }

        const button = form.querySelector('button[type="submit"]');
        button.disabled = true;
        status.textContent = 'Sending your message...';

        try {
          const data = new URLSearchParams(new FormData(form));

          const response = await fetch('/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: data.toString()
          });

          if (!response.ok) {
            throw new Error('Form service returned an error.');
          }

          if (!location.hostname.endsWith('.netlify.app')) {
            status.textContent =
              'Your request was sent to the server. Confirm that it appears in your Netlify Forms dashboard.';
          } else {
            status.textContent =
              'Form submitted. Please confirm it appears in the Netlify Forms dashboard.';
            form.reset();
          }

        } catch (error) {
          status.textContent =
            'The message was not sent. Please check the hosting and form settings, then try again.';
        } finally {
          button.disabled = false;
        }
      });
    });

  // 9. Optional email app functionality
  // Insert a real, verified email address before publishing.
  const CONTACT_EMAIL = 'st10478370@rcconnect.edu.za';

  const emailButton = document.querySelector('#email-message');

  if (emailButton) {
    emailButton.addEventListener('click', () => {
      const form = document.querySelector('#contact-form');
      const status = form.querySelector('.form-status');

      if (!validateForm(form)) {
        status.textContent = 'Please correct the form first.';
        return;
      }

      if (!CONTACT_EMAIL) {
        status.textContent =
          'Email recipient not configured. Add the verified address to CONTACT_EMAIL in JS/script.js.';
        return;
      }

      const name = form.elements.name.value.trim();
      const email = form.elements.email.value.trim();
      const type = form.elements.type.value;
      const message = form.elements.message.value.trim();

      const subject = encodeURIComponent(`Isipho Donations: ${type}`);
      const body = encodeURIComponent(
        `From: ${name}\nEmail: ${email}\nType: ${type}\n\n${message}`
      );

      location.href =
        `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

      status.textContent =
        'Your email app will open. You must press Send there to deliver the message.';
    });
  }

});

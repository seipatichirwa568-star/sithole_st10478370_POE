# Isipho Donations | WEDE5020 Part 3 POE
**Student:** Letlhogonolo Sithole  
**Module:** Web Development (Introduction) – WEDE5020  
**Project:** Isipho Donations – Community Giving Website  
**Project stage:** Part 3 – JavaScript Functionality, SEO and Deployment  
**Last updated:** 18 October 2026

**Live website:** https://illustrious-douhua-00713d.netlify.app/

**GitHub repository:** https://github.com/seipatichirwa568-star/sithole_st10478370_POE

**Deployment branch:** `master`

> **Project note:** Isipho Donations is a student-developed non-profit website concept based around Pretoria, South Africa. The images illustrate community giving and should not be treated as evidence of an operating charity or verified events.

---

## 1. Project Overview

Isipho Donations is a six-page website created to present the concept of a community-support organisation in South Africa.

The website focuses on helping communities through donations of food, clothing, school supplies and opportunities for volunteering.

For Part 3, I focused on improving the website based on the lecturer's feedback from Part 2, where I received 77%.

The changes included improving the layout, fixing the navigation menu, introducing JavaScript functionality, adding form validation, improving SEO and deploying the website through Netlify.

The website was developed using HTML5, external CSS and external JavaScript.

## 2. Website Pages

| Webpage | File Name | Description |
|---|---|---|
| Home | `index.html` | Introduces Isipho Donations with floating photographs, animated elements and community-support information. |
| About Us | `about us.html` | Explains the organisation concept, mission, vision, values and frequently asked questions. |
| Services | `services.html` | Displays donation services using JavaScript-generated cards, search and sorting features. |
| Gallery | `gallery.html` | Displays donation-related images with an interactive lightbox. |
| Enquiry | `enquiry.html` | Allows visitors to enquire about donations, volunteering and partnerships. |
| Contact Us | `contact us.html` | Contains a general contact form and an interactive map of Pretoria. |

The original filenames `about us.html` and `contact us.html` were retained. Their published URLs may show `%20` instead of spaces.

## 3. Technologies Used

### HTML5

HTML was used to create the structure of the website, including navigation menus, sections, headings, images, buttons and forms.

### CSS3

An external CSS stylesheet was used to provide consistent colours, typography, spacing, layout and responsive designs across the website.

CSS animations and transitions were used to create floating photographs, interactive buttons and smooth visual effects.

Responsive layouts were developed using media queries (MDN Web Docs, s.a.-a).

### JavaScript

JavaScript was added to improve user interaction, including:

- Responsive navigation.
- Gallery lightbox functionality.
- Dynamic service listings.
- Service search and sorting.
- Form validation.
- Error and submission feedback.
- Scroll animations.
- Interactive map integration.

JavaScript functionality was developed using DOM manipulation and event handling (MDN Web Docs, s.a.-b).

### Leaflet and OpenStreetMap

Leaflet was used to provide an interactive map showing the Pretoria area.

The map is included for demonstration purposes and does not represent a confirmed Isipho Donations office (Leaflet, s.a.).

### GitHub

GitHub was used to store the project files, maintain version control and record development changes.

### Netlify

Netlify was used to deploy the website and process submissions from the Contact and Enquiry forms (Netlify, s.a.).

## 4. Project Structure

```text
My Business Proposal/
│
├── index.html
├── about us.html
├── services.html
├── gallery.html
├── enquiry.html
├── contact us.html
│
├── CSS/
│   └── style.css
│
├── JS/
│   └── script.js
│
├── images/
│   └── Donation and community images
│
├── README.md
├── robots.txt
└── sitemap.xml
```

All required files must be correctly linked, and folder capitalisation must match the paths used in the HTML pages.

## 5. Part 2 Feedback and Improvements

My final mark for Formative 2 Part 2 was **77/100**.

After reviewing the lecturer's comments, I identified the areas that needed improvement before proceeding with Part 3.

| Assessment Criterion | Part 2 Mark | Improvements Made |
|---|---:|---|
| Feedback from Part 1 | 7/10 | Expanded the changelog and documented the improvements. |
| CSS Layout Structure | 2/5 | Corrected CSS layout problems, spacing, alignment and page structure. |
| Decoration and Colour | 4/5 | Introduced a consistent teal, coral and warm-cream colour scheme. |
| Responsive Layout | 4/5 | Improved the layout across desktop, tablet and mobile screens. |
| Responsive Typography | 4/5 | Improved heading sizes and text responsiveness. |
| Navigation Menu | 2/5 | Added a JavaScript-powered responsive navigation menu. |
| Responsive Images | 4/5 | Corrected image paths and improved image responsiveness. |
| GitHub Commits | 2/5 | Improved commit descriptions for subsequent development changes. |
| README Documentation | 4/5 | Expanded the project description and technical documentation. |
| Changelog | 2/5 | Added detailed records of changes made during development. |
| References | 2/5 | Updated in-text citations and references using IIE Harvard–Anglia style. |

### Strengths Retained from Part 2

The following areas received full marks and were retained during development:

- External CSS stylesheet: 10/10.
- CSS default styling: 5/5.
- Typography: 5/5.
- CSS pseudo-classes: 10/10.
- Media queries and breakpoints: 10/10.

The goal was to improve the weaker areas without removing features that already worked correctly.

## 6. Part 3 JavaScript Functionality

### 6.1 Responsive Navigation

The website uses JavaScript to control its mobile navigation menu.

On smaller screens, visitors can select the menu button to display or hide the navigation links.

This allows users to navigate between the six webpages.

### 6.2 Floating Images and Animations

The homepage contains animated photographs that create a floating effect.

These animations were implemented using CSS keyframes and transitions.

Scroll animations were also introduced to improve how content appears as visitors move through the website.

### 6.3 Interactive Gallery Lightbox

The gallery includes an interactive lightbox.

When a visitor selects a photograph, JavaScript displays the image in a larger view.

The lightbox can be closed using the close button or the Escape key.

### 6.4 Dynamic Content and Search

The Services page displays service information generated through JavaScript.

Visitors can:

- Search for donation-related services.
- Filter displayed content using keywords.
- Sort services alphabetically.
- Navigate to the Enquiry page.

The purpose of this feature is to help visitors find information without manually scrolling through every service.

### 6.5 Interactive Map

The Contact Us page includes an interactive map developed using Leaflet and OpenStreetMap.

Visitors can zoom and explore the Pretoria area.

The location is illustrative and does not indicate an actual Isipho Donations office.

## 7. Form Functionality and Validation

Two separate forms were implemented to meet the requirements of Part 3.

### 7.1 Enquiry Form

The Enquiry form allows visitors to ask questions about:

- Food donations.
- Clothing donations.
- School supplies.
- Volunteering.
- Partnerships.

The form collects relevant contact information and provides guidance based on the selected enquiry type.

### 7.2 Contact Form

The Contact form allows visitors to submit general messages, questions and feedback.

It includes fields for:

- Full name.
- Email address.
- Message type.
- Message content.

### 7.3 JavaScript Validation

Both forms use HTML5 and JavaScript validation.

The validation checks required fields, email formats and text lengths. Appropriate error messages are displayed when information is missing or invalid.

These checks improve the user experience before submission (MDN Web Docs, s.a.-c).

I used the WEDE5020 JavaScript Form Validation lecture material
to improve input checking, error messages and live validation
on the Contact and Enquiry forms (The IIE, 2026).


### 7.4 AJAX Form Submission

The forms use JavaScript's `fetch()` function to submit information asynchronously.

The data is processed through Netlify Forms, which stores received submissions in the project's dashboard.

This functionality allows visitors to submit information without needing a separate custom server (Netlify, s.a.).

## 8. Search Engine Optimisation (SEO)

SEO improvements were introduced to make the website easier for search engines and visitors to understand.

### On-Page SEO

The following improvements were implemented:

- Descriptive HTML page titles.
- Relevant meta descriptions.
- Proper heading structure.
- Image alternative text.
- Internal links between webpages.
- Mobile-friendly page layouts.
- Clear content about donations and community support.

These improvements were guided by Google Search Central (s.a.).

### Image Optimisation

Selected images were prepared in WebP format to reduce file size and improve loading performance.

Responsive image styling was also used to help photographs adapt to different screen sizes.

### Additional SEO Files

The website includes:

- `robots.txt` – provides instructions to search engine crawlers.
- `sitemap.xml` – lists website pages to help search engines discover them.

The sitemap now lists the six published Netlify page URLs. The robots.txt file points to the published sitemap.

### SEO Verification

Before final submission, the live sitemap, robots file, page-specific keywords and meta descriptions should be checked against the rubric.

## 9. Website Deployment

The Isipho Donations website was successfully deployed using Netlify on **18 October 2026**.

The deployment was connected to the GitHub repository using the `master` branch.

### Live Website

https://illustrious-douhua-00713d.netlify.app/

### GitHub Repository

https://github.com/seipatichirwa568-star/sithole_st10478370_POE

**Note to lecturer:** The updated Part 3 project is deployed from the `master` branch. Please select `master` in GitHub if the repository opens on another branch.

### Netlify Deployment

The deployment process included:

1. Connecting the GitHub repository to Netlify.
2. Selecting the `master` branch.
3. Configuring the website publishing directory.
4. Publishing the website.
5. Enabling Netlify form detection.
6. Redeploying the website.
7. Testing live form submissions.

## 10. Functionality Testing

The following tests and checks were recorded during Part 3 development.

| Feature | Testing Result |
|---|---|
| Website Deployment | Published successfully through Netlify. |
| Homepage | Displayed the redesigned layout and floating photographs. |
| Navigation | Implemented across all six pages. |
| Gallery Lightbox | Implemented and tested locally. |
| Services Search | Implemented and tested locally. |
| Responsive Design | Updated using CSS media queries. |
| Interactive Map | Implemented using Leaflet. |
| Contact Form | Test submission successfully received by Netlify. |
| Enquiry Form | Test submission successfully received by Netlify. |
| Form Submission Feedback | Enquiry page displayed a submission confirmation. |
| Netlify Form Detection | Both forms successfully detected. |
| SEO Files | Sitemap XML verified and robots.txt configured to point to the published sitemap; recheck after the final deployment. |

### Form Submission Results

During testing on 18 October 2026:

**Contact Form**

A test message was submitted through the published website and successfully appeared in the Netlify Forms dashboard.

**Enquiry Form**

A test enquiry was submitted through the live website and appeared under Verified submissions in the Netlify dashboard.

The enquiry page also displayed a confirmation message after submission.

These results confirm that Netlify received the test submissions. Further browser testing is recommended for different screen sizes and invalid input combinations.

## 11. Changelog

### Version 1.0 – Part 1: Initial Development

- Created the basic website using HTML.
- Developed the Home, About Us, Services, Gallery and Contact pages.
- Added navigation links.
- Included community-support information and images.
- Created the initial project documentation.

### Version 2.0 – Part 2: CSS Styling

- Implemented an external CSS stylesheet.
- Added typography styles, colours, margins and padding.
- Used CSS pseudo-classes for interactive elements.
- Added media queries for responsive layouts.
- Improved the appearance of the navigation menu.
- Received 77/100 and reviewed the lecturer's feedback.

### Version 3.0 – Part 3: Website Improvements

**Date: 18 October 2026**

**Layout and Styling**

- Corrected incomplete CSS.
- Redesigned the homepage with floating photographs.
- Improved colours and visual consistency.
- Corrected spacing and alignment.
- Redesigned and centred the Contact Us page.
- Improved mobile responsiveness.

**Navigation**

- Corrected broken page links.
- Retained the original About Us and Contact Us filenames.
- Added responsive navigation functionality.
- Improved the appearance of navigation links.

**JavaScript**

- Added mobile navigation functionality.
- Implemented dynamic service listings.
- Added search and sorting functionality.
- Implemented the gallery lightbox.
- Added scrolling animations.
- Integrated the interactive map.

**Forms**

- Created a separate Enquiry form.
- Improved the Contact form.
- Added JavaScript validation.
- Added error messages.
- Implemented AJAX form submission.
- Connected both forms to Netlify Forms.

**SEO**

- Improved webpage titles and descriptions.
- Added image alternative text.
- Improved internal navigation links.
- Added robots.txt and sitemap.xml.
- Improved selected image file formats.

**Documentation**

- Expanded the README.
- Recorded corrections based on Part 2 feedback.
- Added testing information.
- Updated the reference list.
- Added the live website link.

### Version 3.1 – Deployment and Testing

**Date: 18 October 2026**

- Connected the website to Netlify.
- Published the project from GitHub's `master` branch.
- Enabled automatic form detection.
- Redeployed the website.
- Confirmed successful Contact form submission.
- Confirmed successful Enquiry form submission.
- Recorded the final outstanding checks.

### Version 3.2 – Final file review

**Date: 18 October 2026**

- Matched all external CSS references to `CSS/style.css` and JavaScript references to `JS/script.js`, including the exact folder capitalisation.
- Corrected `robots.txt` to point to the published `sitemap.xml` rather than just the homepage.
- Confirmed that the sitemap parses as valid XML and lists all six webpages.
- Prepared a clean website package without the duplicate image folder or `.git` directory.

This changelog documents the website's development. The actual commit history remains available in the GitHub repository.

## 12. Running the Website Locally

To run the website:

1. Open the project folder in Visual Studio Code.
2. Ensure that the HTML, CSS, JavaScript and image files are in the correct directories.
3. Install the Live Server extension if necessary.
4. Right-click `index.html`.
5. Select **Open with Live Server**.
6. Use the navigation menu to access the other pages.
7. Test the interactive features and responsiveness.

To upload changes to GitHub, use the following commands in the VS Code terminal:

```bash
git status
git add .
git commit -m "Finalise Part 3 website and documentation"
git push origin master
```

Only create a new commit when actual changes have been made.

## 13. Outstanding Final Checks

Before the final assessment, the following items should be verified:

- Confirm that all six pages work on mobile and desktop.
- Check that the interactive map loads on the published website.
- Recheck the sitemap and robots file after the final Netlify deployment.
- Review page keywords, titles and meta descriptions against the rubric.
- Check that form validation and submission feedback work correctly.
- Verify permission to publish the photographs and add image attribution where needed.
- Configure a verified email recipient if the optional email-app feature is used.
- Confirm that the final changes are available on GitHub's `master` branch.

## 14. References

Google Search Central, s.a. *SEO starter guide*. [online] Available at: <https://developers.google.com/search/docs/fundamentals/seo-starter-guide> [Accessed 18 October 2026].

Leaflet, s.a. *Leaflet quick start guide*. [online] Available at: <https://leafletjs.com/examples/quick-start/> [Accessed 18 October 2026].

MDN Web Docs, s.a.-a. *Media query fundamentals*. [online] Available at: <https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Media_queries> [Accessed 18 October 2026].

MDN Web Docs, s.a.-b. *JavaScript guide*. [online] Available at: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide> [Accessed 18 October 2026].

MDN Web Docs, s.a.-c. *Using HTML form validation and the constraint validation API*. [online] Available at: <https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Constraint_validation> [Accessed 18 October 2026].

Netlify, s.a. *Forms setup*. [online] Available at: <https://docs.netlify.com/manage/forms/setup/> [Accessed 18 October 2026].

OpenStreetMap, s.a. *OpenStreetMap*. [online] Available at: <https://www.openstreetmap.org/> [Accessed 18 October 2026].

The Independent Institute of Education (The IIE). 2026.
JavaScript Form Validation: WEDE5020 Web Development.
Unpublished lecture slides.


**Image attribution note:** Photographs originally supplied with the student website must be checked for their sources and publishing permissions. Original photographers or licence details should be included where required. Unverified photo citations have not been invented.

---

*End of README – Isipho Donations WEDE5020 Part 3 POE*

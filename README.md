# Isipho Donations — Helping Communities Through Giving

## 1. Student information

| Item | Details |
| --- | --- |
| Student name | Letlhogonolo Mfumo Phillip Sithole |
| Student number | ST10478370 |
| Project | Website Project — Parts 1, 2 and 3 |
| Organisation | Isipho Donations |
| Website type | Non-profit / donation website |
| Documentation updated | 6 October 2026 |
| Current stage | Preparing Part 3 functionality and addressing Part 2 feedback |

## 2. Project overview

Isipho Donations is a website project based on supporting disadvantaged individuals and families in South Africa. It introduces the organisation, explains the support it offers and encourages visitors to donate, volunteer or enquire about getting involved. The project describes working with schools, churches, businesses and community members to identify people who need assistance.

The website uses HTML to organise page content and CSS to control appearance and layout (MDN Web Docs, 2025a; MDN Web Docs, 2025b). Part 3 will use JavaScript to update page content and respond to user actions (MDN Web Docs, 2026). Visual Studio Code is the development environment used for the project (Microsoft, n.d.).

This README separates work described in the earlier project documentation from Part 3 work that still needs to be implemented and tested. It does not claim that planned features are already working.

## 3. Goals and intended users

The website is intended for donors, volunteers, potential sponsors and community members looking for information or assistance.

- Explain the organisation's mission and community focus.
- Describe the support and donation opportunities available.
- Display donation activities in an image gallery.
- Allow visitors to make general contact and specific enquiries.
- Provide clear navigation and readable content on phones, tablets and computers.
- Improve accessibility, discoverability and usability as the project develops.

## 4. Pages and navigation

| Page | Purpose | Status |
| --- | --- | --- |
| `index.html` | Introduce the organisation and link to key pages. | Existing, according to Part 2 documentation |
| `about us.html` | Explain the mission, background and community focus. | Existing; proposed rename to `about.html` |
| `services.html` | Describe support offered and donation opportunities. | Existing; dynamic listing, search and sorting planned |
| `gallery.html` | Display donation photographs. | Existing; accessible lightbox planned |
| `contact us.html` | Provide contact information and a general message form. | Existing; proposed rename to `contact.html` and form improvements planned |
| `enquiry.html` | Handle volunteer, sponsor and service enquiries. | Planned for Part 3 |

The final navigation should include Home, About Us, Services, Gallery, Enquiry and Contact Us on every page. When renaming a file, update every navigation link and any references in the sitemap. Renaming is a planned change, not a change made by this README.

## 5. Technologies

| Technology | Use |
| --- | --- |
| HTML5 | Page structure, headings, links, images and form controls |
| External CSS | Colours, typography, responsive layouts and transitions |
| External JavaScript | Interactive controls, content updates and form validation |
| Visual Studio Code | Editing and organising project files |
| Git and GitHub | Version history and submission repository |
| Map library | Planned interactive map; document the selected library and attribution after implementation |

JavaScript is different from Java. The website uses `.js` files, not `.java` files.

## 6. Part 1 and Part 2 progress

Part 1 received **89/100**, with the grading date recorded in the previous README as 27 August 2026. Part 2 received **77/100**.

The earlier README records that the core pages, navigation, images, external stylesheet, comments and responsive styles were added. These descriptions still need to be checked against the actual project files before the final submission.

### Part 2 feedback correction plan

| Area | Correction to make | Evidence to record |
| --- | --- | --- |
| Layout structure | Use consistent containers, spacing and Flexbox/Grid where appropriate. | Files changed and desktop/mobile screenshots |
| Responsive navigation | Make the menu usable on smaller screens and with a keyboard. | Menu tests, including opening and closing |
| Images and typography | Prevent overflow, scale images and keep text readable. | Tests at narrow, tablet and desktop widths |
| Responsive adjustments | Check all pages, not just the home page. | Page-by-page test results |
| Code documentation | Keep useful comments that explain important sections and decisions. | Relevant HTML, CSS and JavaScript files |
| GitHub history | Commit completed changes in meaningful stages. | Actual commit messages and hashes |
| Changelog | Record dates, files changed, reasons and test results. | Dated entries below |
| References | Use matching in-text citations and reference entries; credit image sources. | Reference list and image attribution record |

These are pending corrections until the code has been reviewed and tested. A documentation update alone does not resolve a website issue.

## 7. Part 3 implementation checklist

### JavaScript and dynamic content

- [ ] Link `JS/script.js` externally on each page that uses it.
- [ ] Add an interactive element such as an FAQ accordion, tabs or a modal.
- [ ] Add an interactive map with appropriate location information and attribution.
- [ ] Use CSS transitions and JavaScript interactions; respect reduced-motion preferences.
- [ ] Use DOM manipulation to create or update meaningful page content.
- [ ] Generate service or donation-opportunity cards from JavaScript data.
- [ ] Add working search/filter and sorting controls, including a no-results message.
- [ ] Add a responsive gallery lightbox with a close button, Escape support and suitable keyboard focus handling.
- [ ] Ensure shared JavaScript checks that an element exists before using it on different pages.

### Enquiry form: `enquiry.html`

- [ ] Collect a name, email address, enquiry category and relevant details using labelled controls.
- [ ] Use suitable controls for volunteering, sponsorship or service enquiries.
- [ ] Check required fields, email format and appropriate input lengths; validate phone/date fields if included.
- [ ] Display specific, accessible errors near the relevant fields.
- [ ] Process valid input and display a useful response related to the chosen enquiry, such as next steps or a clearly labelled estimated sponsorship amount.
- [ ] Explain any assumptions behind calculations; do not invent confirmed availability or successful bookings.

### Contact form: `contact.html`

- [ ] Collect basic contact information, message type and a full message.
- [ ] Validate the input and show clear errors.
- [ ] Compile validated details into an email for the intended recipient stated in the code.
- [ ] If using `mailto:`, explain that it opens the visitor's email application and does not prove the message was sent.
- [ ] Set an appropriate form `action` and implement the AJAX submission required by the brief using a configured endpoint.
- [ ] Show loading, success and failure messages based on the actual server response; allow retry after failure.
- [ ] Test the endpoint on the published website. A placeholder URL is not a working submission service.

The brief includes both email-processing behaviour and AJAX submission. Document how the completed implementation meets each requirement. A front-end-only site needs a suitable form service or backend for AJAX delivery; browser JavaScript alone cannot confirm delivery of an email.

### SEO, performance and security

- [ ] Give each page a unique, descriptive title and meta description.
- [ ] Use relevant phrases naturally, such as community donations, volunteering and Isipho Donations; record the keyword research used.
- [ ] Use a logical heading structure and descriptive internal links.
- [ ] Rename images descriptively and update their paths; provide accurate alt text.
- [ ] Use clean page filenames and consistent links.
- [ ] Compress images and set appropriate image dimensions; lazy-load suitable below-the-fold images.
- [ ] Check mobile friendliness and page loading behaviour.
- [ ] Add `robots.txt` and `sitemap.xml` using the real published website URL.
- [ ] Document appropriate off-page SEO ideas without claiming backlinks or listings that do not exist.
- [ ] Use HTTPS hosting, avoid putting secret credentials in browser code and insert user text safely with `textContent`.
- [ ] Remember that client-side validation does not replace validation at the submission endpoint.

## 8. External JavaScript setup

Create `script.js` inside the existing `JS` folder. Add this inside the `<head>` of each HTML page, after the stylesheet link:

```html
<link rel="stylesheet" href="CSS/style.css">
<script src="JS/script.js" defer></script>
```

For a classic external script, `defer` allows execution after the HTML has been parsed, which makes page elements available to the script (MDN Web Docs, 2024).

This path assumes the HTML files are in the project root. Folder and filename capitalisation must match exactly when the website is published. Do not put `<script>` tags inside the `.js` file.

To check the link temporarily, put this in `JS/script.js`:

```javascript
// Temporary check that the external file is loading.
console.log("Isipho Donations JavaScript is connected.");
```

Open the page, press F12 and view the Console. Check that the message appears and that the Network panel does not show a 404 for `script.js`. Remove the temporary message after checking. This is a connection test, not the full Part 3 implementation.

## 9. File structure and sitemap

### Existing structure described in Part 2

| Location | Contents |
| --- | --- |
| Project root | `index.html`, `about us.html`, `services.html`, `gallery.html`, `contact us.html`, `README.md` |
| `CSS/` | `style.css` |
| `JS/` | JavaScript folder; functionality not verified |
| `images/` | `donation 1.jpg`, `donation 2.jpg`, `donation 3.jpg`, `donation 4.jpg`, `donation5.jpg`, `isipho.jpg` |

### Proposed final structure

| Location | Planned contents |
| --- | --- |
| Project root | `index.html`, `about.html`, `services.html`, `gallery.html`, `enquiry.html`, `contact.html`, `README.md`, `robots.txt`, `sitemap.xml` |
| `CSS/` | `style.css` |
| `JS/` | `script.js` |
| `images/` | Existing assets renamed according to what each image actually shows |

The Home page links to About Us, Services, Gallery, Enquiry and Contact Us. Each page includes the same main navigation so visitors can move between all six pages.

## 10. Testing record

No Part 3 test results have been recorded yet. Replace the pending status below with the actual outcome, date and browser after testing.

| Test | Expected result | Status |
| --- | --- | --- |
| Navigation on every page | Every link reaches the correct page. | Pending |
| External assets | CSS, JavaScript and images load without 404 errors. | Pending |
| Mobile layout | No unwanted horizontal scrolling; text and controls remain usable. | Pending |
| Mobile menu | Opens/closes reliably; keyboard users can operate it. | Pending |
| Service search and sort | Results match the query and selected order; empty results are explained. | Pending |
| Gallery lightbox | Opens correct image; close button and Escape work; focus returns correctly. | Pending |
| Interactive map | Map and marker load; attribution remains visible. | Pending |
| Invalid forms | Empty/incorrect values produce useful field errors. | Pending |
| Valid enquiry | Appropriate response matches the visitor's inputs. | Pending |
| Contact email | Correct recipient, subject and message are compiled. | Pending |
| AJAX submission | Real endpoint works; loading, success and failure states are accurate. | Pending |
| SEO files | Page metadata, sitemap URLs and robots rules match the deployed site. | Pending |
| Published website | All pages and features work over HTTPS. | Pending |

Record checks in at least two available browsers and at representative widths such as 360px, 768px and 1366px. Use real test outcomes rather than assuming a feature works because the code has been added.

## 11. Changelog

Historical dates are left unspecified where they were not recorded. Entries about website development below are carried forward from the supplied README; code has not been inspected during this documentation update.

| Version / date | Changes | Verification |
| --- | --- | --- |
| 0.1 — date not recorded | Created core HTML pages, organisation content, navigation and initial images. | Described in earlier README |
| 0.2 — date not recorded | Expanded About Us, Services, Gallery and Contact content; organised CSS and JS folders. | Described in earlier README |
| 1.0 — Part 1 graded 27 August 2026 | Recorded 89/100; earlier README reports comments and styling improvements following feedback. | Grade supplied; code review still needed |
| 2.0 — date not recorded | Earlier README reports external CSS, containers, colour styling and responsive rules. Part 2 result: 77/100. | Code review and feedback corrections still needed |
| 2.1 — 6 October 2026 | Corrected README Markdown, reorganised documentation, updated reference dates/citations and added Part 2 correction and Part 3 test checklists. | Documentation updated; no website functionality changed |

For each future completed change, record **the actual date, files changed, what changed, why it changed and the test outcome**. Add separate entries for responsive fixes, interactive features, forms, SEO and deployment after completing them.

## 12. Running and publishing the website

1. Open the project folder in Visual Studio Code.
2. Preview `index.html` through a local development server.
3. Test navigation, assets, forms and JavaScript using the browser developer tools.
4. Commit completed changes in logical stages using descriptive messages.
5. Push the changes to the GitHub repository.
6. Publish using a suitable free hosting platform and test every page again.
7. Add the actual repository and published website links below before submission.

- **GitHub repository:** Not supplied yet.
- **Published website:** Not supplied yet.

Suggested commit messages, to use only when the corresponding work has actually been completed:

- `Fix responsive navigation and page spacing after Part 2 feedback`
- `Add gallery lightbox and searchable service cards`
- `Add enquiry validation and contact submission handling`
- `Add page metadata and sitemap for published website`
- `Update README with test results and source references`

## 13. References

References use the IIE Harvard-Anglia format. MDN years below follow the visible page update dates checked on 6 October 2026. The letters distinguish sources by the same organisation in the same year. Microsoft is marked `n.d.` because no publication year was established for the documentation landing page.

MDN Web Docs, 2024. *HTMLScriptElement: defer property*. [online] Available at: <https://developer.mozilla.org/en-US/docs/Web/API/HTMLScriptElement/defer> [Accessed 6 October 2026].

MDN Web Docs, 2025a. *CSS: Cascading Style Sheets*. [online] Available at: <https://developer.mozilla.org/en-US/docs/Web/CSS> [Accessed 6 October 2026].

MDN Web Docs, 2025b. *HTML: Creating the content*. [online] Available at: <https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content> [Accessed 6 October 2026].

MDN Web Docs, 2026. *What is JavaScript?* [online] Available at: <https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/What_is_JavaScript> [Accessed 6 October 2026].

Microsoft, n.d. *Visual Studio Code documentation*. [online] Available at: <https://code.visualstudio.com/docs> [Accessed 6 October 2026].

### Image and additional source attribution

Image source details were not supplied, so image references cannot yet be completed accurately. Before submission, record the creator, year (or `n.d.` if unavailable), image title/description, source page URL, access date and licence for every externally sourced image. Identify original photographs as your own work where applicable. Do not invent a creator or URL.

Add references for the actual map library, map data provider, form service and other tutorials or code sources used during implementation. Include matching citations near the relevant explanations and attribution comments in adapted code. Update this list to reflect the sources you personally consulted and follow any module-specific referencing instructions from the lecturer.

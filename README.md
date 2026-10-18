# Isipho Donations | WEDE5020 Part 3 POE

**Website concept:** Community support and donations, based around Pretoria, South Africa  
**Student:** Letlhogonolo Sithole  
**Module:** Web Development (Introduction) – WEDE5020  
**Project stage:** Part 3 – functionality, SEO and feedback improvements  
**Important:** This is a student website concept. The photographs illustrate community giving; they should not be treated as proof of an operating charity or a verified event organised by Isipho Donations.

## About the project

I developed this six-page website to explain the idea of Isipho Donations and give visitors a way to explore community support, find donation information and enquire about taking part. I kept the Part 2 design concept, but updated the structure, colours and functionality using HTML, external CSS and external JavaScript.

## Website pages

| Page | Filename | Purpose |
|---|---|---|
| Home | `index.html` | Introducing Isipho, floating photos, featured donation areas |
| About Us | `about us.html` | The organisation concept, mission, values and FAQ |
| Services | `services.html` | Dynamic service cards with search and sorting |
| Gallery | `gallery.html` | Responsive photographs and click-to-enlarge lightbox |
| Enquiry | `enquiry.html` | A form for donation, partnership or volunteering questions |
| Contact Us | `contact us.html` | General message form, optional email-app link and interactive Pretoria map |

The spaces in **`about us.html`** and **`contact us.html`** are intentional and have been preserved as requested. The corresponding deployed URLs may display `%20` instead of spaces.

## Project structure

```text
Isipho_Donations_Part3/
├── index.html
├── about us.html
├── services.html
├── gallery.html
├── enquiry.html
├── contact us.html
├── CSS/style.css
├── JS/script.js
├── images/ (six optimised WebP photographs)
├── robots.txt
├── sitemap.xml
└── README.md
```

## Part 2 feedback and fixes

I received **77/100** for Part 2. The lecturer's feedback guided these corrections:

| Feedback | Previous mark | What was corrected |
|---|---:|---|
| Updates based on Part 1 feedback | 7/10 | Explained the changes and recorded them in the changelog |
| Desktop layout structure | 2/5 | Restored complete external CSS; corrected grids, spacing and alignment |
| Decoration and colour | 4/5 | Consistent teal, coral and warm cream colours, improved cards and hover effects |
| Responsive layout | 4/5 | Tablet/mobile CSS breakpoints and flexible containers |
| Responsive typography | 4/5 | Responsive headings with CSS `clamp()` |
| Mobile navigation | 2/5 | Collapsible menu with an accessible button and matching links |
| Responsive images | 4/5 | Renamed and optimised images, flexible image sizing and gallery paths |
| GitHub descriptive commits | 2/5 | Clear plan for committing actual updates in stages; see below |
| README | 4/5 | Added project description, pages, installation, testing and references |
| Changelog | 2/5 | Recorded specific file-level changes and areas still needing work |
| References | 2/5 | Added author-date in-text citations and a consistent Harvard–Anglia reference list |

The stylesheet, typography, pseudo-classes and responsive breakpoint setup build on earlier work rather than replacing the website with an unrelated project (MDN Web Docs, s.a.-a).

## Part 3 features

### JavaScript and user interaction

- **Mobile navigation:** the ☰ button opens and closes the menu at small screen sizes.
- **Gallery lightbox:** selecting an image opens an enlarged photo in a `<dialog>` element. Close with the X button or Escape key.
- **Dynamic services:** service cards are created in JavaScript. The visitor can search and sort them (MDN Web Docs, s.a.-b).
- **Reveal animations and floating images:** CSS animation and JavaScript intersection observation help add movement without making essential content depend on animation.
- **Interactive map:** the contact page uses Leaflet and OpenStreetMap to show central Pretoria. This is an illustrative map, not a verified office (Leaflet, s.a.).

### Forms and validation

- The **enquiry form** asks about food, clothing, school supplies, volunteering or partnership requests and displays guidance related to the selected topic.
- The **contact form** is for general messages. It asks for contact details, message type and message content.
- Both forms use HTML form controls and JavaScript validation for required values, email format, length and optional phone format (MDN Web Docs, s.a.-c).
- Both are prepared for **AJAX submission using Netlify Forms**. Form submissions must be tested on a live Netlify deployment. They **will not send** when using local VS Code Live Server (Netlify, s.a.-a).
- The optional Contact email-app button needs a recipient address the owner is authorised to use. Opening an email application does not send the email automatically.

### SEO and performance

Each page has a unique page title, description, relevant keywords, semantic headings and internal links. Image files have descriptive names and alternative text. Photos are saved as WebP to keep downloads small, and images below the first screen use lazy loading. The site includes `robots.txt` and a draft `sitemap.xml`. These files must be updated with the real deployment address (Google Search Central, s.a.).

**Off-page SEO still requires actual publication and outreach.** The site has not been promoted or linked from other websites as part of this code package. Only claim social promotion or backlinks after completing that work.

## Changelog

### Part 1 – initial HTML site

- Built Home, About Us, Services, Gallery and Contact pages.
- Added introductory content and donation-related imagery.

### Part 2 – CSS and responsive design

- Linked the same external stylesheet across pages.
- Developed typography, navigation, card layouts and media queries.
- Reviewed lecturer feedback after receiving 77/100.

### Part 3 – 18 October 2026: functionality and layout review

- **`CSS/style.css`:** fixed a truncated stylesheet that had stopped partway through a floating-photo rule, restored full layout styles and improved contact alignment and phone navigation.
- **`about us.html`:** replaced the accidental duplicate Contact page with the actual About Us page, its mission/vision/values and an FAQ accordion.
- **`contact us.html`:** replaced the older layout with the redesigned centred Contact page, six-page navigation, a general-message form and a Leaflet map.
- **All HTML pages:** corrected links for the real file names `about us.html` and `contact us.html`, including footer links.
- **`gallery.html`:** aligned each image's `src` and `data-image` so the image displayed in the lightbox matches the thumbnail.
- **`images/`:** created descriptively named WebP versions of selected supplied photos; left out an image with a visible stock watermark and an unrelated placeholder photograph.
- **`index.html`:** updated floating photographs and image references.
- **`services.html`:** retained dynamic JavaScript-generated cards and search/sort controls.
- **`enquiry.html` and `contact us.html`:** added Netlify honeypot fields and kept JavaScript validation.
- **`JS/script.js`:** retained the dynamic features and made submission messages clearer about needing Netlify verification.
- **SEO files:** corrected the proposed sitemap paths and documented the real-domain replacement step.
- **README:** updated the project structure, development record, rubric evidence and reference list.

### Remaining tasks (to be completed honestly, not marked as finished yet)

- Test the completed pages and interactive elements in a browser at desktop and mobile widths.
- Verify that you have permission to republish the supplied photos.
- Deploy the site to Netlify; turn on Netlify Forms and confirm messages reach the dashboard.
- Replace the placeholder domain in `sitemap.xml`, and uncomment/add the sitemap line in `robots.txt`.
- Verify the recipient email address and any claims about real community programmes.
- Make meaningful commits for your remaining actual edits, push to your existing **master** branch, and submit both the repository and deployed-site links required by the lecturer.

## Running the project

1. Copy the updated files **into the root of your existing Git repository**. Do not create an extra subfolder for the website.
2. Open that folder in VS Code.
3. Right-click `index.html` and open with Live Server.
4. Visit all six pages. Test their links and page responsiveness.
5. Test gallery enlargement, services search/sort, mobile navigation, forms and the Pretoria map.
6. Press **F12 → Console** and correct any JavaScript or missing-file errors.
7. Deploy the root website directory to Netlify. Configure Forms and verify real submissions.
8. Replace placeholder URLs in the SEO files before making your final commits.

### Suggested descriptive commits (only after each related change is actually made)

```bash
git status
git add index.html "about us.html" "contact us.html" gallery.html images/ CSS/style.css
git commit -m "Fix page navigation layout and gallery images"

git add services.html enquiry.html JS/script.js
git commit -m "Improve Part 3 search and form interactions"

git add README.md robots.txt sitemap.xml
git commit -m "Document feedback changes and SEO setup"

git push origin master
```

Do not invent or rewrite a historical Git commit record. New commits only document work made now.

## References (IIE Harvard–Anglia style)

Google Search Central, s.a. *SEO starter guide*. [online] Available at: <https://developers.google.com/search/docs/fundamentals/seo-starter-guide> [Accessed 18 October 2026].

Leaflet, s.a. *Leaflet quick start guide*. [online] Available at: <https://leafletjs.com/examples/quick-start/> [Accessed 18 October 2026].

MDN Web Docs, s.a.-a. *Media query fundamentals*. [online] Available at: <https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Media_queries> [Accessed 18 October 2026].

MDN Web Docs, s.a.-b. *JavaScript guide*. [online] Available at: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide> [Accessed 18 October 2026].

MDN Web Docs, s.a.-c. *Client-side form validation*. [online] Available at: <https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation> [Accessed 18 October 2026].

Netlify, s.a.-a. *Forms setup*. [online] Available at: <https://docs.netlify.com/manage/forms/setup/> [Accessed 18 October 2026].

For image attribution, add original photographer/source and licence details after permission has been verified. Do not make up a citation for photos you cannot attribute.

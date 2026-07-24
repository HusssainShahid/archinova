# ARCHINOVA STRUCTURES LTD — Website

Static marketing website for ARCHINOVA STRUCTURES LTD (architectural & structural engineering services).

## Stack

- HTML5
- Bootstrap 5.3 (CDN)
- Bootstrap Icons
- Custom CSS (`css/styles.css`) — white backgrounds, navy & royal blue brand colours
- Vanilla JS (`js/main.js`) — active nav + contact form validation / mailto

## Pages

| Page | File |
|------|------|
| Home | `index.html` |
| About | `about.html` |
| Contact | `contact.html` |
| Architectural | `services/architectural.html` |
| Structural | `services/structural.html` |
| Planning & Building Control | `services/planning.html` |
| Party Wall & Boundary | `services/party-wall.html` |
| Surveys & Inspections | `services/surveys.html` |
| Privacy / Cookies | `privacy.html` |
| Terms | `terms.html` |

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
npx serve .
```

## Notes

- Phone / WhatsApp numbers are placeholders (`+44 XX XXXX XXXX`).
- About page uses content from the Home brief (About US source doc was a Party Wall duplicate).
- Missing images use branded “Image coming soon” placeholders (e.g. House Extensions).
- Contact form opens a pre-filled `mailto:` to `info@archinovastructures.co.uk` (no server backend).
- Privacy and Terms are stubs pending legal review.

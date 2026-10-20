# Kanika — Balanced Professional Portfolio

A polished, production-ready personal portfolio website for **Kanika**, integrating both verified CV records:
1. **Child & Youth Support Worker, Caregiving & Healthcare CV**
2. **Bakery Production, Head Baker & Dietary Meal Service CV**

The website is designed with a warm, credible, and inclusive artisan-hospitality aesthetic (warm ivory `#F8F5EF`, espresso `#35251F`, terracotta `#B96F50`, and muted sage `#9AA58A`), paired with refined editorial typography (`DM Serif Display` + `Plus Jakarta Sans`).

---

## 🌟 Balanced Professional Areas

- **Childcare & After-School Care**: After-School Care Assistant at **Bee Haven / Bee Heaven** (North Vancouver, BC).
- **Child & Youth Support (Autism & Neurodiversity)**: Community & caregiving practice supporting emotional regulation, sensory activities, structured visual routines, and life skills.
- **Elderly Care & Dementia Support**: Caregiver / Community Support Worker at **ABC Home Support Ltd.** and Companion at **Little Mountain Place** (Vancouver, BC).
- **Hospital & Patient Care**: Health Support Worker at **Marwaha Hospital** (Amritsar, Punjab) assisting with mobility, feeding, hygiene, and vital signs.
- **Healthcare Food Service**: 2.5 years as a Dietary Aide at **WestCana Services — South Granville Park Lodge** (Vancouver, BC).
- **Commercial Bakery Production**: 8 months as Head Baker at **Fresh St. Market** (Vancouver, BC) managing daily scratch production, deck ovens, proofing, and retail displays.
- **Fast-Paced Kitchen Execution**: Team Member at **Shack Burger** (Vancouver, BC).
- **Higher Education**: **Capilano University** — Associate of Science (Biology), North Vancouver, BC.
- **Languages**: English, Hindi, Punjabi.

---

## 📄 Verified Certifications & Clearances

- **CPR & First Aid**
- **FoodSafe Level 1**
- **WHMIS**
- **Serving It Right**
- **Adult Handling / Safe Handling Certificate**
- **Criminal Record Check (Clear)**
- **TB Test Reports (Clinical Clearance)**

---

## 🛠 Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS 3
- **Icons**: Lucide React
- **Typography**: DM Serif Display & Plus Jakarta Sans
- **Deployment**: Zero runtime server required; static output in `dist/` ready for Vercel, Netlify, GitHub Pages, or Firebase Hosting.

---

## 🚀 Running the Project

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev

# Compile production build
npm run build

# Preview production build locally
npm run preview
```

---

## 📁 Key File Structure

```
kanika-portfolio/
├── public/
│   ├── favicon.svg                                # Brand monogram favicon
│   ├── Kanika_Healthcare_Youth_Resume.pdf         # Latest Child & Youth / Healthcare CV
│   ├── Kanika_Resume.pdf                          # Original Bakery & Food Service CV
│   ├── Kanika_Resume.docx                         # Original Word CV
│   └── images/                                    # 100% local, high-res photos
│       ├── hero-care-support.jpg
│       ├── childcare-activities.jpg
│       ├── youth-support.jpg
│       ├── elderly-companionship.jpg
│       ├── healthcare-clinical.jpg
│       ├── artisan-sourdough.jpg
│       ├── golden-croissants.jpg
│       └── commercial-deck-oven.jpg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx                             # Sticky nav with dual-CV download dropdown
│   │   ├── Hero.jsx                               # Balanced headline, shift pulse, care visuals
│   │   ├── About.jsx                              # Combined narrative across care, health & food
│   │   ├── Experience.jsx                         # 8 prioritized roles with category filtering
│   │   ├── Skills.jsx                             # 4 groups with care prominence
│   │   ├── Showcase.jsx                           # Work Environments & Practice Gallery with lightbox
│   │   ├── Certifications.jsx                     # 7 documented credentials across both CVs
│   │   ├── Education.jsx                          # Capilano University Associate of Science
│   │   ├── Contact.jsx                            # Direct email/phone & reference privacy note
│   │   └── Footer.jsx                             # Balanced descriptor & dual-CV download
│   ├── data/
│   │   └── portfolioData.js                       # Central data store strictly mirroring both CVs
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
└── README.md
```

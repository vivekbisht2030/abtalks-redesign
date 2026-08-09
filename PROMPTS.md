# AI Usage Log & Prompt History
**Project:** ABTalks Redesign  
**Developers:** Vivek Bisht, Yogesh Kumar, Vishavpreet Singh

---

This document tracks the prompts and AI assistance utilized during the development of this hackathon project. The AI was strictly used as a debugging assistant and development copilot.

---

### Date: 07 August 2026 (Night)

**1. Task: Project Initialization & Express Server Setup**
* **Context:** Setting up the foundational Node.js backend using Express and integrating EJS for server-side rendering.
* **Prompt Used:** "I am redesigning the ABTalks platform. Give me a basic `server.js` setup using express, cors, and `ejs-mate` for boilerplate layouts."
* **AI Assistance:** AI provided the standard boilerplate code for `server.js`, demonstrating how to set `app.engine('ejs', ejsMate)` and structure the views folder.
* **My Implementation:** I created the initial backend architecture and verified that the local server was running successfully on PORT 3000.

---

### Date: 08 August 2026

**2. Task: EJS Layouts & Data Integration**
* **Context:** Breaking down the UI into reusable components (`boilerplate.ejs`) and rendering dynamic user data into the dashboard.
* **Prompt Used:** "How do I pass user data from my backend to my EJS views and loop through past tasks?"
* **AI Assistance:** AI explained the `res.render()` data passing object and provided the EJS syntax (`<%= %>` for variables and `<% %>` for loops) to iterate over an array of `pastTasks`.
* **My Implementation:** I structured `dashboard.ejs` and `day.ejs` to dynamically display the user's name, streak, standing, and challenge progress based on a local data store.

---

### Date: 09 August 2026

**3. Task: Express Static Folder Cleanup**
* **Context:** I deleted the `public` CSS folder since I moved styling directly into the EJS files, but wasn't sure what to remove from the backend.
* **Prompt Used:** "public wala folder css thi jisme usko delete kr diya khali pdhi thi bs tooh ab inn mese kyamkyka hataun"
* **AI Assistance:** AI guided me to remove `app.use(express.static(path.join(__dirname, 'public')));` from `server.js` to prevent missing directory errors.
* **My Implementation:** Cleaned up the backend middleware for optimal performance.

**4. Task: Debugging Cross-User LocalStorage State Leak**
* **Context:** The task submission state ("Under Review" / "Completed") was persisting globally across different user accounts on the same browser.
* **Prompt Used:** "yr firse same issue aara hai active and unde review wala... jab ek user submit karta hai toh doosre account mein bhi wahi dikhta hai."
* **AI Assistance:** AI identified that `localStorage` was using a static global key. It suggested making the key dynamically user-specific using EJS templating (e.g., `day12_submitted_<%= user.id %>`) and provided the logout cleanup logic.
* **My Implementation:** Integrated the isolated keys to ensure distinct state management per user session.

**5. Task: Mobile UI Optimization & Viewport Scaling**
* **Context:** The `dashboard.ejs` and `day.ejs` templates rendered poorly on mobile. Elements were oversized, occupying too much screen real estate ("bhra-bhra lgra h").
* **Prompt Used:** "yr mujhe na ui bahot badha badha lgra h phoe ke hisab se ye... puri phone ki screen hi cover krli hai acha space hona chahiye na."
* **AI Assistance:** AI generated a `@media (max-width: 576px)` CSS block that aggressively shrank padding, fonts, and grid layouts.
* **My Implementation:** Upon testing, I realized the AI's CSS made the UI *too* compact, eliminating essential breathing room and breaking the intended aesthetics.

**6. Task: Refining UI to Match Original Vercel App Aesthetics**
* **Context:** Correcting the previous overly-compact mobile layout. I wanted to retain the generous padding, bold typography, and strategic "dead space" of the original platform.
* **Prompt Used:** "Ye dekho kitna chota chota likha hai aur kitni sari spaces hai bachi hui... bakiyyon ki website ki pic bhjta shyd kuvh smjh jao." (Provided screenshots of the original ABTalks web app).
* **AI Assistance:** AI analyzed the screenshots and provided a corrected `@media` query that retained the 24px card padding, used `flex-direction: column` to elegantly stack the stats cards, and increased mobile typography scales to 1.8rem for headings.
* **My Implementation:** I successfully applied the refined CSS block, achieving a mobile-responsive layout that strictly honors the original brand identity.
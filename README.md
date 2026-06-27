# 🚀 SpaceDMV  
A Futuristic Interplanetary Department of Motor Vehicles  
Built with Next.js • TypeScript • TailwindCSS

SpaceDMV is a dark, space‑government themed multi‑role platform for identity, vehicle registration, and orbital license scheduling.  
Designed as part of the LEAF Universe, it simulates a fully operational DMV for both Earth and Space operations.

---

## 🌌 Features

### 🔐 Multi‑Role Authentication
- Civilian  
- Examiner  
- DMV Officer  
- Insurance Agent  
- Admin  
Each role unlocks unique UI flows and permissions.

### 🚗 Vehicle Registration (SVIN & EVIN)
- SVIN (Space Vehicle Identification Number) workflow  
- EVIN (Earth Vehicle Identification Number) workflow  
- Multi‑step wizards  
- Preview cards  
- Submission confirmation  

### 🛰️ Orbital License Appointment Scheduling
- License classes O‑1 through EVA‑1  
- Calendar picker  
- Examiner selection  
- Booking summary & confirmation  

### 🖥️ Modular Component‑Driven UI
- Hero sections  
- News ticker  
- Quick actions  
- Stats bar  
- Status badges  
- Fully responsive layouts  

---

## 🗂️ Project Structure

---

## 6. 🔄 Pull Request Process

1. Ensure your branch is up to date with `dev`  
2. Provide a clear description of changes  
3. Link related issues  
4. Include screenshots for UI changes  
5. Request review from maintainers  
6. PRs must pass linting and build checks  

PRs that break existing flows (Auth, SVIN/EVIN, Scheduling) will be requested to revise.

---

## 7. 🧹 Coding Standards

### Language & Framework
- TypeScript required  
- React Server Components preferred  
- Next.js App Router only  

### Style
- Follow TailwindCSS conventions  
- Use semantic HTML  
- Keep components small and modular  

### File Naming
- Components: `PascalCase.tsx`  
- Hooks: `useSomething.ts`  
- Utility files: `camelCase.ts`  

---

## 8. 🧱 Component Architecture Rules

SpaceDMV uses a **strict modular architecture**:

### UI Components
- Must be reusable  
- Must not contain business logic  

### Feature Modules
- Authentication  
- Vehicle Registration  
- Appointment Scheduling  

Each module must contain:
- A controller component  
- Subcomponents  
- A wizard or workflow (if applicable)  

### Layout Components
- Must remain stateless  
- Must not depend on feature modules  

---

## 9. 📘 Documentation Standards

All major changes must update the `/docs` folder:

- Architecture changes → `ARCHITECTURE.md`  
- New components → `COMPONENT_MAP.md`  
- New workflows → `DATA_FLOW.md`  
- New API endpoints → `API_SPEC.md`  

Documentation must be:
- Clear  
- Concise  
- Consistent with LEAF Universe terminology  

---

## 10. 🔐 Security & Responsible Disclosure

If you discover a vulnerability:

1. **Do not open a public issue**  
2. Email the maintainers privately  
3. Provide steps to reproduce  
4. Allow time for a fix before public disclosure  

See `SECURITY.md` for full details.

---

## 11. 🆘 Getting Help

If you need assistance:
- Open a discussion thread  
- Ask questions in issues (tag as `question`)  
- Review the `/docs` folder  

Thank you for helping build the future of interplanetary civilian infrastructure.  
Your contributions make SpaceDMV stronger, safer, and more immersive.



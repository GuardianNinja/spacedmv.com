---

ARCHITECTURE.md — SpaceDMV System Architecture

1. Overview

SpaceDMV is a Next.js + TypeScript web application designed as a futuristic, interplanetary Department of Motor Vehicles.
It supports:

• Multi‑role authentication (Civilian, Examiner, Admin, DMV Officer, Insurance Agent)
• Vehicle registration (SVIN & EVIN workflows)
• Appointment scheduling (Orbital License Classes O‑1 through EVA‑1)
• A modular, component‑driven UI with a dark space‑government aesthetic


The system is built for scalability, role‑based access, and task‑driven workflows.

---

2. High‑Level Architecture

┌──────────────────────────────────────────────┐
│                  Client UI                   │
│  Next.js App Router • React Server Components│
└──────────────────────────────────────────────┘
                 │
                 ▼
┌──────────────────────────────────────────────┐
│              Application Layer               │
│  Auth Logic • Wizards • Scheduling Engine    │
└──────────────────────────────────────────────┘
                 │
                 ▼
┌──────────────────────────────────────────────┐
│               Domain Layer                   │
│  SVIN/EVIN Models • Appointment Models       │
└──────────────────────────────────────────────┘
                 │
                 ▼
┌──────────────────────────────────────────────┐
│                Data Layer                    │
│  API Routes • Database (future)              │
└──────────────────────────────────────────────┘


---

3. Directory Structure

/app
  /layout.tsx
  /page.tsx
  /sign-up-login-screen
  /vehicle-registration
  /appointment-scheduling

/components
  Topbar.tsx
  AppLayout.tsx
  NewsTicker.tsx
  HeroSection.tsx
  QuickActions.tsx
  StatsBar.tsx
  AboutSection.tsx
  HomeFooter.tsx

  AuthPageClient.tsx
  RoleSelector.tsx
  LoginForm.tsx
  SignUpForm.tsx
  CredentialsBox.tsx

  VehicleRegistrationClient.tsx
  WizardProgress.tsx
  SVINWizard.tsx
  SVINPreviewCard.tsx
  SubmissionSuccess.tsx
  EVINWizard.tsx

  AppointmentScheduling.tsx
  LicenseClassCards.tsx
  AppointmentCalendar.tsx
  ExaminerSelection.tsx
  BookingSummary.tsx
  BookingConfirmation.tsx

/ui
  StatusBadge.tsx

/styles
  tailwind.css

tailwind.config.js


---

4. Core Modules

4.1 Authentication Module

Handles identity, roles, and access control.

Components:

• AuthPageClient.tsx
• RoleSelector.tsx
• LoginForm.tsx
• SignUpForm.tsx
• CredentialsBox.tsx


Roles:

• Civilian
• Examiner
• DMV Officer
• Insurance Agent
• Admin


Responsibilities:

• Role‑based UI rendering
• Credential validation
• Session state management


---

4.2 Vehicle Registration Module

Supports SVIN (Space Vehicle Identification Number) and EVIN (Earth Vehicle Identification Number) workflows.

Components:

• VehicleRegistrationClient.tsx
• WizardProgress.tsx
• SVINWizard.tsx
• SVINPreviewCard.tsx
• EVINWizard.tsx
• SubmissionSuccess.tsx


Workflow:

1. Select vehicle type
2. Enter identification data
3. Validate fields
4. Preview registration
5. Submit to DMV backend (future API)


---

4.3 Appointment Scheduling Module

Handles orbital license appointments.

Components:

• AppointmentScheduling.tsx
• LicenseClassCards.tsx
• AppointmentCalendar.tsx
• ExaminerSelection.tsx
• BookingSummary.tsx
• BookingConfirmation.tsx


Workflow:

1. Select license class (O‑1 → EVA‑1)
2. Choose date/time
3. Select examiner
4. Confirm booking


---

4.4 UI Framework Module

Global layout, navigation, and thematic components.

Components:

• Topbar.tsx
• AppLayout.tsx
• StatusBadge.tsx
• NewsTicker.tsx
• HeroSection.tsx
• QuickActions.tsx
• StatsBar.tsx
• AboutSection.tsx
• HomeFooter.tsx


Responsibilities:

• Consistent visual identity
• Navigation
• Status indicators
• Thematic styling (dark navy, electric blue, teal, starfields)


---

5. Styling & Theming

SpaceDMV uses TailwindCSS with a custom theme.

Key design elements:

• Deep navy backgrounds
• Electric blue accents
• Teal glow effects
• Subtle starfield textures
• Rounded, futuristic UI components


---

6. Future Backend Integration

Planned API routes:

/api/auth
/api/vehicles
/api/appointments
/api/examiners
/api/users


Planned database models:

• User
• Vehicle
• Appointment
• Examiner
• Role


---

7. Security Model

• Role‑based access control (RBAC)
• Protected routes for DMV staff
• Client‑side validation (current)
• Server‑side validation (future)
• Optional integration with LEAF Identity Core


---

8. Roadmap

• Add backend API
• Add persistent database
• Add audit logs
• Add admin dashboard
• Add analytics
• Add SpaceGov integration


---

9. Credits

Designed and engineered by Captain Leif William Sogge
Built within the LEAF Universe
Powered by Next.js + TypeScript

---

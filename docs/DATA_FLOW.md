# Data Flow — SpaceDMV

This document explains how data moves through the system.

---

## 1. Authentication Flow
User → RoleSelector → LoginForm/SignUpForm → AuthPageClient → (future API) → Session

---

## 2. Vehicle Registration Flow
User → VehicleRegistrationClient → WizardProgress → SVIN/EVIN Wizard → Preview → Submit → Confirmation

---

## 3. Appointment Scheduling Flow
User → LicenseClassCards → AppointmentCalendar → ExaminerSelection → BookingSummary → BookingConfirmation

---

## 4. Planned Backend Flow
Client → /api/auth → DB  
Client → /api/vehicles → DB  
Client → /api/appointments → DB  


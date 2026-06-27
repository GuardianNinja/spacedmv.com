# 🔐 Security Policy — SpaceDMV

SpaceDMV is part of the LEAF Universe and is designed with a strong emphasis on safety, transparency, and civilian‑first engineering.  
This document outlines how to report vulnerabilities, how we handle security issues, and what you can expect from the maintainers.

---

## 🛡️ Supported Versions

Security updates apply to the following branches:

| Version | Supported |
|--------|-----------|
| main   | ✅ Active |
| dev    | ⚠️ Best‑effort |
| feature/* | ❌ Not supported |

Only the `main` branch receives guaranteed security patches.

---

## 🚨 Reporting a Vulnerability

If you discover a security vulnerability, **do not open a public issue**.

Instead, please contact the maintainers privately:

**Email:** security@spacedmv.leaf  
**Backup:** leaf-security@protonmail.com  

Include the following:

- Description of the vulnerability  
- Steps to reproduce  
- Potential impact  
- Any proof‑of‑concept code  
- Suggested mitigation (optional)  

We will acknowledge your report within **48 hours**.

---

## 🧪 Responsible Disclosure Process

1. You report the issue privately  
2. We confirm the vulnerability  
3. We create a private patch branch  
4. We prepare a fix and test it  
5. We release a security update  
6. We publicly disclose the issue after a safe window  

We will credit you unless you request anonymity.

---

## 🔒 Security Principles

SpaceDMV follows these core principles:

### **1. Least Privilege**
Every role (Civilian, Examiner, DMV Officer, Insurance Agent, Admin) receives only the permissions required for its tasks.

### **2. Defense in Depth**
Multiple layers of protection:

- UI validation  
- Workflow gating  
- Role‑based access control  
- Planned backend validation  
- Optional LEAF Identity Core integration  

### **3. Transparency**
Security decisions are documented in `/docs` and updated as the system evolves.

### **4. No Dark Patterns**
SpaceDMV is designed for clarity, safety, and user trust.

---

## 🧱 Current Security Model

### **Frontend Protections**
- Role‑based UI rendering  
- Client‑side validation  
- Protected routes (planned)  
- Sanitized user input  
- No sensitive data stored in local components  

### **Backend (Future)**
When backend APIs are added, they will include:

- Server‑side validation  
- Rate limiting  
- Session management  
- Audit logs  
- Encrypted storage  
- JWT or LEAF Identity Core tokens  

---

## 🧬 Dependencies & Updates

We regularly update:

- Next.js  
- React  
- TypeScript  
- TailwindCSS  
- Any security‑critical libraries  

If you find a vulnerable dependency, please report it using the process above.

---

## 🛰️ Scope of Security Testing

You may test:

- UI flows  
- Client‑side logic  
- Input validation  
- Role‑based access boundaries  

You may **not** test:

- Denial‑of‑service attacks  
- Social engineering  
- Physical attacks  
- Attacks on maintainers or contributors  
- Any activity violating applicable laws  

---

## 🧭 Final Notes

SpaceDMV is a civilian‑safe, transparent, and open project.  
We take security seriously and appreciate your help in keeping the system safe for everyone across Earth and orbit.

Thank you for supporting the LEAF Universe.


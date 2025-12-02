# TapR 🚕📦
Multi-role ride share & hotshot delivery app (Rider • Driver • Hotshot)

TapR is a React Native / Expo application that connects **riders**, **drivers**, and **hotshot couriers** in a single mobile experience. Riders can request trips, drivers can go online and accept rides, and hotshot users can request quick cargo deliveries.

---

## Features

### Rider
- Rider home dashboard
- Create ride requests with pickup and drop-off
- View live ride progress
- View fare estimates before confirming

### Driver
- Driver home dashboard
- Toggle online/offline status
- View active trip details
- Track daily/weekly earnings
- Multi-step driver onboarding and verification

### Hotshot (Cargo / Delivery)
- Hotshot home dashboard
- Create hotshot delivery requests
- Track delivery status in real time

### Shared
- Role-based navigation with separate stacks for Rider, Driver, and Hotshot
- Central root navigator to control app flow
- Ready to plug into a backend (REST, GraphQL, or Firebase)

---

## Tech Stack

- **Framework:** React Native
- **Runtime:** Expo
- **Language:** JavaScript (with JSX)
- **Navigation:** React Navigation (multiple role-based stacks)
- **Bundler:** Metro

> Exact library versions are defined in `package.json`.

---

## Getting Started

### Prerequisites

You should have:

- **Node.js** (LTS version recommended, e.g. 18+)
- **npm** or **yarn**
- **Expo CLI** (optional, you can also use `npx expo` commands)

Install Expo CLI globally (optional):

```bash
npm install -g expo-cli

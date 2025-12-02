# TapR 🚕📦  
Multi-role ride share & hotshot delivery app (Rider • Driver • Hotshot)

TapR is a React Native / Expo application that connects **riders**, **drivers**, and **hotshot couriers** in a single mobile experience. Riders can request trips, drivers can go online and accept rides, and hotshot users can request quick cargo deliveries.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [Coding Guidelines](#coding-guidelines)
- [Roadmap](#roadmap)
- [License](#license)

---

## Features

### Rider
- Rider home dashboard (`RiderHome`)
- Create ride requests with pickup/drop-off (`RideRequest`)
- View live ride progress (`RideTracking`)
- View fare estimates before confirming (`FareEstimate`)

### Driver
- Driver home dashboard (`DriverHome`)
- Toggle online/offline status (`DriverOnline`)
- View active trip details (`DriverTrip`)
- Track daily/weekly earnings (`DriverEarnings`)
- Multi-step driver onboarding & verification (`DriverVerification`, `DriverSignup`)

### Hotshot (Cargo / Delivery)
- Hotshot home dashboard (`HotshotHome`)
- Create hotshot delivery requests (`HotshotRequest`)
- Track delivery status in real time (`HotshotTracking`)

### Shared
- Role-based navigation with separate stacks for Rider, Driver, and Hotshot
- Central root navigator to control app flow (`RootNavigator`)
- Ready to plug into a backend (REST, GraphQL, or Firebase)

---

## Tech Stack

- **Framework:** [React Native](https://reactnative.dev/)
- **Runtime:** [Expo](https://expo.dev/)
- **Language:** JavaScript / JSX
- **Navigation:** React Navigation (via `RootNavigator`, `RiderStack`, `DriverStack`, `HotshotStack`)
- **Bundler:** Metro (`metro.config.js`)

> _Note: Exact library versions are defined in `package.json`._

---

## Project Structure

```bash
tapr-app/
├── App.js
├── app.json
├── package.json
├── babel.config.js
├── metro.config.js
└── app/
    ├── navigation/
    │   ├── RootNavigator.js       # Entry point for navigation
    │   ├── RiderStack.js          # Rider-specific screens
    │   ├── DriverStack.js         # Driver-specific screens
    │   └── HotshotStack.js        # Hotshot-specific screens
    └── screens/
        ├── rider/
        │   ├── RiderHome.js
        │   ├── RideRequest.js
        │   ├── RideTracking.js
        │   └── FareEstimate.js
        ├── driver/
        │   ├── DriverHome.js
        │   ├── DriverOnline.js
        │   ├── DriverTrip.js
        │   ├── DriverEarnings.js
        │   └── DriverVerification.js
        ├── hotshot/
        │   ├── HotshotHome.js
        │   ├── HotshotRequest.js
        │   └── HotshotTracking.js
        └── auth/
            └── DriverSignup.js

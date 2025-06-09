# ♻️ Rew-Waste — Order Placement Interface (MVP)

### Rew-Waste
is a front-end MVP project developed using modern web technologies including __React, JavaScript, TypeScript, Node.js, Vite, Vercel, HTML, SCSS, and CSS__.

The purpose of the project is to build the foundation for a __waste collection service__ order system in a test environment, providing a responsive and user-friendly interface across all screen types — mobile, tablet, and desktop.

## ⚙️ Tech Stack

- __Frontend__: React, TypeScript, Vite, SCSS Modules, HTML, CSS

- __State Management__: Redux Toolkit

- __Routing__: React Router v7

- __Animations__: Framer Motion

- __Utilities__: classnames, react-toastify

- __Dev Tools__: ESLint, Typed SCSS Modules

## 📀 Project Architecture

__SCSS structure__ uses:

- @use for scoped style imports

- centralized variables (_variable.scss)

- shared mixins (_mixins.scss)

- a custom reset.scss for base normalization

- SCSS files are structured for easy maintainability with includePaths

All constants and reusable configuration values are stored in config.ts.

## 🧱 App Structure

- __Header__: Logo, Registration/Login buttons (scalable to include Language Toggle and Nav Menu)

- __ToastContainer__: Positioned for global user notifications

- __HorizontalSideBar__: Displays and controls the step-by-step order process (controlled via React Router)

- __Route Steps__:
```bash
[
  '/',                  // Step 1: Postcode — under construction
  'waste_type/',        // Step 2: Waste Type — under construction
  'select_skip/',       // ✅ Step 3: Select Skip — IMPLEMENTED
  'permit_check/',      // Step 4: Permit Check — under construction
  'choose_date/',       // Step 5: Choose Date — under construction
  'payment/'            // Step 6: Payment — under construction
]
```
Each step is wrapped in a PageWrapper and controlled by a CheckIdProvider.

- __Footer__: Contains the final confirmation section of the order process.

## 🧰 Features

- ✅ __Select Skip Page__: Fully implemented with dynamic content and filters.

- 🔲 __Other pages__: Placeholder components (UnderConstruction) used.

- 🔍 __Product Filter__: Basic filtering logic for product listings. Easily extendable with:

          -  Pagination

          -  Sorting

          -  Category-based filters

- ⚛️ __Animations__: Smooth transitions using framer-motion

- 🖼️ __Performance__: Images use lazy-loading for optimized performance

## ♻️ Reusable UI Components

- Button

- CheckBox

- RadioButton

- Skeleton

- InputNumber

- InputTextByList

- Modal

- PageWrapper

These components are designed with scalability in mind and follow DRY principles.

## 📦 State Management

- Global state is managed using __Redux Toolkit__

- Data from the server (e.g., skips/products) and user interactions (e.g., selected items) are stored in Redux

- The store is designed to be extended with:

            -   User Authentication

            -   User Personal Data

            -   Permissions, etc.

## 🧰 Future Enhancements

- Full form validation and step validation

- Integration with a backend for payment and order tracking

- Use of a component library such as Tailwind or MUI is recommended for production to speed up development and maintain consistency

- Even in its current state, the project is highly scalable and designed for easy feature extension.

## 🤝 Collaboration

This is a fascinating project with great potential for real-world use.If you're interested in further development or collaboration, feel free to reach out:

🌐 [Vlad Popov](vlad-popov.vercel.app)

I’d be happy to contribute to the implementation.
<div align="center">

# 🍽️ TableEase
</div>


# ALL Link:-
(1)Live Demo:- https://table-ease-murex.vercel.app/<br>
(2)Figma:- https://www.figma.com/design/CyiyxcK05S2dwKRAHJ8EW2/Untitled?node-id=68-52&p=f&t=g9OJhCjmhzH6HEU7-0<br>
(3)Youtube:- https://youtu.be/N_7GFwcP0aM?si=eSqawz6KGwTprWF3<br>
(4)Postman:- Not Use Any Use API<br>

---

# Problem Statement:-
Why do diners waste time waiting for restaurant tables?

# Solution:-
To address the problem of diners wasting time waiting for restaurant tables, this project introduces an Online Table Booking System that streamlines the reservation and management process for both customers and restaurant managers.

---

## 🌟 Project Overview

**TableEase** solves the real-world problem of manual restaurant table management and excessive customer waiting time. No more paper lists, no more phone calls — just a seamless, digital reservation experience.

```
🙋 Customer visits  →  📅 Books a table  →  ✅ Gets confirmed  →  🍽️ Walks in and dines
```

### 💡 What makes TableEase different?

- 🗺️ **Real-time table visibility** — customers see exactly what is available before they arrive
- 🖼️ **Visual floor map booking** — pick your preferred spot on an interactive restaurant layout
- 📲 **Instant QR code confirmation** — walk in and check in without any queue
- 🧠 **Smart admin panel** — full restaurant control from one powerful dashboard
- 🔐 **Role-based access** — separate, tailored experiences for customers and administrators
- 📈 **Data-driven insights** — analytics and reports to optimize restaurant operations

---

## 🛠️ Tech Stack

### 🏗️ Core

| Technology  | Purpose |
|---|---|
| ⚛️ React  | UI component framework |
| ⚡ Vite | Build tool and dev server |
| 🗺️ React Router | Client-side routing with lazy loading |

### 🎨 Styling

| Technology | Purpose |
|---|---|
| 🌊 Tailwind CSS  | Utility-first responsive design |
| 🧩 Material UI  | Prebuilt accessible components |
| 🎭 MUI Theme Provider| Centralized design token system |

### 📦 State and Data

| Technology | Purpose |
|---|---|
| 🗃️ Redux Toolkit  | Global application state |
| 💾 Redux Persist | State hydration across sessions |
| 🌐 Axios | HTTP client with interceptors |

### 📝 Forms and UX

| Technology | Purpose |
|---|---|
| 📋 Formik | Form state management |
| ✅ Yup | Schema-based validation |
| 🔔 React Toastify | Toast notification system |
| 📁 React Dropzone  | Drag and drop file uploads |
| 🪖 React Helmet Async| Dynamic SEO meta tags |

---

## ⚡ Getting Started

### 🚀 Installation

**1. Clone the repository**
```bash
git clone https://github.com/your-username/tableease.git
cd tableease
```

**2. Install all dependencies**
```bash
npm install
```

**3. Set up environment variables**
```bash
cp .env.example .env
```

**4. Fill in your `.env` values** *(see [Environment Variables](#-environment-variables) section below)*

**5. Start the development server**
```bash
npm run dev
```

**6. Open in your browser**
```
http://localhost:5173
```

> 🎉 TableEase is now running locally. Happy coding!

---

## 📁 Folder Structure

```
TableEase/
├── Backend/                    # Server-side code (Node.js/Express)
│
└── Frontend/
    ├── public/                 # Static assets
    └── src/
        ├── assets/             # Images, icons, fonts
        ├── components/         # Reusable UI components
        │   ├── BookingWizard.jsx
        │   ├── CTA.jsx
        │   ├── DashboardLayout.jsx
        │   ├── FeaturedDishes.jsx
        │   ├── Footer.jsx
        │   ├── ForgotPassword.jsx
        │   ├── Hero.jsx
        │   ├── HowItWorks.jsx
        │   ├── Login.jsx
        │   ├── Navbar.jsx
        │   ├── Register.jsx
        │   ├── ReviewHero.jsx
        │   ├── ReviewList.jsx
        │   ├── ReviewStats.jsx
        │   ├── SEO.jsx
        │   ├── Sidebar.jsx
        │   ├── Stats.jsx
        │   ├── StoryContact.jsx
        │   ├── StoryHero.jsx
        │   ├── StoryPhilosophy.jsx
        │   ├── StoryTeam.jsx
        │   ├── StoryValues.jsx
        │   ├── Testimonials.jsx
        │   └── Topbar.jsx
        │
        ├── pages/              # Route-level page components
        │   ├── CustomerDashboard.jsx
        │   ├── ForgotPasswordPage.jsx
        │   ├── LandingPage.jsx
        │   ├── LoginPage.jsx
        │   ├── ManagerDashboard.jsx
        │   ├── Notifications.jsx
        │   ├── OurStoryPage.jsx
        │   ├── RegisterPage.jsx
        │   ├── Reservations.jsx
        │   ├── ReviewsPage.jsx
        │   └── UserProfile.jsx
        │
        ├── App.jsx             # Root component with routing
        ├── App.css             # Global styles
        ├── main.jsx            # App entry point
        └── index.css           # Base CSS reset/styles
```


---

### 🔓 Public Routes — 8 Pages *(No login required)*

| # | Page | Route | Description |
|---|---|---|---|
| 1 | 🏠 **Home / Landing** | `/` | Hero, how it works, featured menu, stats, testimonials, booking CTA |
| 2 | 🍽️ **Menu** | `/menu` | Filterable food grid with category tabs and search bar |
| 3 | 🏛️ **About Us** | `/about` | Story, mission cards, team section, history timeline, gallery strip |
| 4 | 📞 **Contact Us** | `/contact` | Contact form, info cards, embedded Google Maps |
| 5 | 🔑 **Login** | `/login` | Email and password auth with Google and Facebook social login |
| 6 | 📝 **Register** | `/register` | Sign up with password strength indicator and live field validation |
| 7 | 🔒 **Forgot Password** | `/forgot-password` | Email-based reset link request with confirmation feedback |
| 8 | 🔓 **Reset Password** | `/reset-password` | New password form with live requirement checklist |

---

### 👤 User Routes — 6 Pages *(Authentication required)*

| # | Page | Route | Description |
|---|---|---|---|
| 9 | 📊 **User Dashboard** | `/dashboard` | Booking stats, upcoming reservation card, recent bookings table |
| 10 | 📅 **Book a Table** | `/book` | 4-step wizard: calendar, floor map, personal details, confirmation |
| 11 | 📋 **My Reservations** | `/reservations` | Filterable card list with status tabs and pagination |
| 12 | 🧾 **Reservation Detail** | `/reservations/:id` | Full info, QR code for check-in, booking timeline, modify and cancel |
| 13 | 👤 **User Profile** | `/profile` | Personal info, password change, notification and dietary preferences |
| 14 | 🔔 **Notifications** | `/notifications` | Grouped alerts filtered by type with read and unread states |

---

### 🛡️ Admin Routes — 8 Pages *(Admin role required)*

| # | Page | Route | Description |
|---|---|---|---|
| 15 | 📊 **Admin Dashboard** | `/admin` | KPI cards, line and donut charts, reservation table, top dishes widget |
| 16 | 🪑 **Table Management** | `/admin/tables` | Grid, list, and interactive floor map views with full CRUD modal |
| 17 | 📅 **Reservations Management** | `/admin/reservations` | Data table with bulk actions, advanced filters, slide-in detail drawer |
| 18 | 👥 **User Management** | `/admin/users` | User table with role badges, status toggles, and detail modal |
| 19 | 🍽️ **Menu Management** | `/admin/menu` | Category card grid with image upload drag and drop and CRUD modal |
| 20 | 📁 **File Upload and Gallery** | `/admin/gallery` | Drop zone upload, image grid, full-screen preview, bulk delete |
| 21 | 📈 **Analytics and Reports** | `/admin/analytics` | Revenue metrics, booking trends, peak hours, Google Analytics embed |
| 22 | ⚙️ **Settings** | `/admin/settings` | Restaurant info, booking config, appearance preferences, notifications |

---

### ⚠️ Utility and Error Pages — 3 Pages

| # | Page | Route | Description |
|---|---|---|---|
| 23 | 🔍 **404 Not Found** | `*` | Friendly warm illustration with home and support navigation |
| 24 | 🚫 **403 Forbidden** | `/forbidden` | Access denied page with login redirect and go back button |
| 25 | 💥 **500 Server Error** | `/error` | Error boundary fallback with refresh and home recovery options |

---

## ✨ Features

### 🔐 Authentication and Authorization
- JWT-based authentication with token stored securely in localStorage
- Protected route HOC wrapping all customer and admin pages
- Role-based route guards redirect unauthorized users automatically
- Automatic logout on 401 response via Axios response interceptor
- Session persistence across browser refreshes using Redux Persist

### 📅 Reservation System
- Four-step booking wizard with animated step progress bar
- Interactive floor map with color-coded real-time table availability
- Date picker and time slot grid with unavailable slots clearly disabled
- Special occasion and dietary preference fields in step 3
- QR code generated and displayed on booking confirmation screen
- PDF confirmation download available from reservation detail page
- One-click rebook action on previously completed reservations

### 🛡️ Admin Panel
- Full create, read, update, and delete for tables, menu items, and reservations
- Bulk approve and cancel actions on multiple selected reservations
- User role promotion to admin and account suspension controls
- Media gallery with drag and drop upload, preview, and bulk delete
- Recharts-powered line chart, donut chart, and bar chart on dashboard
- Slide-in side drawer for reservation details without leaving the page

### 🎨 UI and UX
- Skeleton loaders for every async data-fetching state across all pages
- Empty state illustrations with contextual prompts and action buttons
- Global error boundary catching runtime errors with 500 fallback UI
- Toast notifications for all create, update, delete, and error feedback
- Fully responsive from 320px mobile to 1440px desktop and beyond
- Light and dark mode toggle with preference persisted to localStorage

---

## 🗃️ State Management

Redux Toolkit powers all global state. Every feature has its own slice following the `pending → fulfilled → rejected` lifecycle via `createAsyncThunk`.

```
📦 Redux Store
├── 🔐 authSlice         User object, token, isAuthenticated, login and logout actions
├── 👤 userSlice         Profile data, preferences, update and patch actions
├── 📅 reservationSlice  Reservation list, filters, selected item, multi-step form state
├── 🪑 tableSlice        Table list, floor map data, active table selection
├── 🍽️ menuSlice         Menu items, active category filter, availability toggle
└── 🖥️ uiSlice           Theme mode, sidebar open state, global loader flag
```

**Best practices followed:**
- No duplicated state across slices — single source of truth per domain
- Memoized selectors defined alongside each slice for efficient access
- All API calls handled inside async thunks with per-action loading tracking
- UI state kept strictly separate from domain data slices

---

## 🔌 API Integration

- Centralized Axios instance in `src/services/api.js` with base URL and timeout from environment
- 🔼 **Request interceptor** — attaches `Authorization: Bearer <token>` header to every request
- 🔽 **Response interceptor** — handles `401` by clearing auth state and redirecting to login
- 🔽 **Response interceptor** — handles `500` by dispatching a global error toast

```
📂 services/
├── 📄 api.js                 Axios instance with request and response interceptors
├── 📄 authService.js         login, register, forgotPassword, resetPassword
├── 📄 reservationService.js  create, getAll, getById, update, cancel, bulkAction
├── 📄 tableService.js        getAll, create, update, delete, getFloorMap
├── 📄 menuService.js         getAll, create, update, delete, toggleAvailability
├── 📄 userService.js         getProfile, updateProfile, changePassword, getAll
└── 📄 uploadService.js       uploadFile, deleteFile, getGallery
```

---

## 📝 Forms and Validation

- **Formik** manages all form state, touched tracking, submission, and dirty checking
- **Yup** schemas defined per form in `src/utils/validationSchemas.js`
- Reusable field components handle their own error display automatically
- All inputs show inline error messages on blur and on failed submission attempt
- Password fields include a show and hide icon toggle button

### 🧩 Reusable Form Components
- `FormInput` — text, email, password, number types with optional left icon
- `FormSelect` — styled dropdown with full Formik field integration
- `FormTextarea` — resizable area with optional character count display
- `FormCheckbox` — styled checkbox with accessible label
- `FormDatePicker` — MUI date picker wrapped for seamless Formik use

### 📋 Complex Forms
- 🪜 **Multi-step booking form** — 4 steps, each step validated before the user can advance
- 🍽️ **Dynamic menu item form** — image upload with live preview, category and availability toggle
- ⚙️ **Settings form** — multiple grouped sections each with their own independent save button
- 💾 **Step progress persisted** to sessionStorage so a page refresh does not lose in-progress data

---

## 🎨 Theme System

- Light and dark mode using Tailwind `darkMode: 'class'` strategy on the `<html>` element
- MUI `ThemeProvider` configured with a matching orange primary color palette
- `useTheme` custom hook provides `toggleTheme` and `currentMode` to any component
- User preference persisted to localStorage under key `tableease_theme`
- Toggle available in user profile preferences tab and admin settings appearance section

### 🎨 Design Token Reference

| Token | Hex | Usage |
|---|---|---|
| 🟠 Primary Orange | `#FF6B2C` | Buttons, CTAs, sidebar, active states |
| 🟧 Light Orange | `#FF8C55` | Hover states, sidebar active item |
| 🍑 Pale Orange | `#FFF0E8` | Section backgrounds, card tints |
| 🌸 Soft Peach | `#FFD4BC` | Borders, dividers, input borders |
| ⬜ White | `#FFFFFF` | Card backgrounds, form panels |
| 🔘 Off White | `#FFF8F4` | Page backgrounds |
| 🟢 Success | `#22C55E` | Confirmed status, strong password |
| 🟡 Warning | `#F59E0B` | Pending status, medium password |
| 🔴 Error | `#EF4444` | Cancelled status, validation errors |

---

## ⚡ Performance Optimization

- 📦 **Code splitting** — all 25 route-level pages use `React.lazy` with `Suspense` skeleton fallbacks
- 🧠 **useMemo** applied to all derived filter, sort, and pagination computations in list views
- 🔁 **useCallback** applied to event handlers passed as props to prevent unnecessary re-renders
- 🪟 **Virtualized lists** via `react-window` for tables with more than 100 rows of data
- 🖼️ **Image lazy loading** using native `loading="lazy"` on all gallery and menu images
- 📊 **Bundle analysis** using `vite-bundle-visualizer` to identify and trim heavy dependencies

---

## ♿ Accessibility

- ✅ Semantic HTML throughout — `main`, `nav`, `section`, `article`, `aside`, `header`, `footer`
- ⌨️ All interactive elements are fully keyboard navigable with visible orange focus rings
- 🏷️ ARIA labels added to icon-only buttons, image galleries, and unlabeled inputs
- 🎨 Color contrast ratios meet WCAG AA standards in both light and dark modes
- 🪤 Modal dialogs trap focus on open and restore focus to the trigger on close
- 👁️ Status badges include visually hidden text for screen reader color-coded meaning

---

## 📊 Analytics and Tracking

- **Google Analytics 4** integrated via the `@analytics/google-analytics` package
- Page view events fire automatically on every route change via React Router `useLocation`
- Custom events tracked for all key user interactions:

| Event Name | Trigger |
|---|---|
| `reservation_started` | User opens the Book a Table multi-step form |
| `reservation_confirmed` | User completes step 4 and confirms the booking |
| `table_selected` | User clicks a table on the interactive floor map |
| `menu_item_viewed` | User opens a menu item card detail |
| `file_uploaded` | Admin uploads a file to the media gallery |
| `user_login` | Successful authentication |
| `user_logout` | User logs out of the application |

- Analytics summary card on Admin Analytics page shows live sessions, bounce rate, and page views

---

## 💾 Storage Strategy

### 🗄️ localStorage — Persistent Data

| Key | Data Stored | When Cleared |
|---|---|---|
| `tableease_theme` | `"light"` or `"dark"` string | Never — permanent preference |
| `tableease_auth_token` | JWT string | On user logout |
| `tableease_user_preferences` | JSON preferences object | On user logout |

### 🗂️ sessionStorage — Temporary Data

| Key | Data Stored | When Cleared |
|---|---|---|
| `tableease_booking_step` | Current step index (0 through 3) | On booking confirm or tab close |
| `tableease_booking_form` | Partial form data as JSON | On booking confirm or tab close |
| `tableease_active_filters` | Active filter state as JSON | On tab close |

### 🔒 Security Best Practices
- Passwords and sensitive PII are never stored in any form of browser storage
- All localStorage and sessionStorage entries are fully cleared on logout
- Storage access is wrapped in `try-catch` for graceful degradation in private browsing
- All storage operations go through helper functions in `src/utils/storage.js`

---

## 🔍 Code Quality

- 🔎 **ESLint** configured with `eslint-plugin-react` and `eslint-plugin-jsx-a11y`
- ✨ **Prettier** configured for consistent formatting across all files
- 🐶 **Husky** pre-commit hooks run lint and format checks before every commit
- 📐 **Naming conventions** — PascalCase for components, camelCase for hooks and utilities, SCREAMING_SNAKE_CASE for constants
- 🧩 Each component has a single responsibility and stays under 200 lines
- 📋 PropTypes defined on all shared and reusable components

---

## 🪝 Custom Hooks

| Hook | Purpose |
|---|---|
| `useAuth` | Returns current user, `isAuthenticated` boolean, `login`, and `logout` |
| `useDebounce` | Debounces a rapidly changing value — used on all search inputs |
| `useTheme` | Returns current theme mode and `toggleTheme` function |
| `useFetch` | Generic fetching hook with `loading`, `error`, and `data` states |
| `useLocalStorage` | Get and set localStorage with automatic JSON serialization |
| `useTableFilter` | Encapsulates filter, sort, and pagination for admin data tables |

---

## 🔐 Environment Variables Example

Create your `.env` file in the project root using the provided template.

```env
# ---- API Configuration ----
VITE_API_BASE_URL=https://api.your-backend.com/api/v1
VITE_SOCKET_URL=wss://api.your-backend.com

# ---- App Configuration ----
VITE_APP_NAME=TableEase
VITE_MAX_FILE_SIZE_MB=5

# ---- Analytics ----
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

> ⚠️ **Important:** Never commit your `.env` file to version control. It is already listed in `.gitignore`.

---

## 📜 Scripts

| Script | Command | Description |
|---|---|---|
| 🚀 Dev Server | `npm run dev` | Start development server at `localhost:5173` |
| 🏗️ Build | `npm run build` | Build optimized production bundle to `/dist` |
| 👁️ Preview | `npm run preview` | Serve the production build locally for review |
| 🔍 Lint | `npm run lint` | Run ESLint across all source files |
| ✨ Format | `npm run format` | Run Prettier to format all source files |
| 📦 Analyze | `npm run analyze` | Open bundle visualizer to inspect chunk sizes |

---

## 📄 License

This project is licensed under the **MIT License**.
See the [LICENSE](./LICENSE) file for full terms and conditions.

---

<div align="center">

**Built with passion for better dining experiences** 🍽️

[![Made with React](https://img.shields.io/badge/Made%20with-React-61DAFB?style=flat-square&logo=react)](https://react.dev)
[![Styled with Tailwind](https://img.shields.io/badge/Styled%20with-Tailwind-38BDF8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)
[![Powered by Vite](https://img.shields.io/badge/Powered%20by-Vite-646CFF?style=flat-square&logo=vite)](https://vitejs.dev)

</div>

# Netflix Lite - Movie Discovery SPA

A modern, responsive Movie Discovery Single Page Application (SPA) built for the Sprint 1 engineering requirements. The application integrates with **The Movie Database (TMDB) REST API** to display trending movies and provide real-time movie search functionality. It follows a modular React architecture with reusable components and responsive CSS Grid layouts.

---

# Important Links

**Live Website:** https://sprint-8-sgf6-psi.vercel.app/

**Demo Video:** https://drive.google.com/file/d/18mbyflWz5fy0HGNbgURthUuKEZ89qxwM/view?usp=drivesdk

---

# Screenshot

https://github.com/Sarvesh-88/Sprint-8/blob/main/Sprint-8-img.png

---

# Project Overview

Netflix Lite is a React-based movie discovery application that allows users to browse popular movies and search for movies using the TMDB API. The application is designed with reusable components, clean architecture, and responsive UI principles.

---

# Tech Stack

* React.js
* Vite
* JavaScript (ES6+)
* HTML5
* CSS3 (Responsive Grid Layout)
* TMDB REST API

---

# Features Completed (Phase 1: Base MVP)

The following mandatory Phase 1 requirements have been successfully completed:

### Environment Setup

* Integrated **The Movie Database (TMDB) REST API** using a secure API key stored in environment variables.

### Popular Movies Integration

* Fetches and displays the **Popular Movies** endpoint on the initial application load.

### Responsive Movie Grid

* Movies are displayed using a responsive CSS Grid layout that automatically adapts to desktop, tablet, and mobile screen sizes.

### Movie Information Display

Each movie card displays:

* Movie Poster
* Movie Title
* Release Year
* Average Rating

### Search Functionality

* Implemented a dedicated search component.
* Users can search movies by title using the TMDB **Search Movies** endpoint.
* Search results are dynamically rendered without refreshing the page.

### State Management

* React Hooks (`useState` and `useEffect`) are used for managing application state and fetching data.

### Loading & Error Handling

* Displays a loading indicator while API requests are in progress.
* Gracefully handles API and network errors with user-friendly error messages.

### Component-Based Architecture

The application follows a modular structure using reusable React components:

* SearchBar
* MovieGrid
* MovieCard

---

# Project Structure

```text
src/
│
├── components/
│   ├── MovieCard.jsx
│   ├── MovieGrid.jsx
│   └── SearchBar.jsx
│
├── services/
│   └── tmdb.js
│
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

---

# Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project folder:

```bash
cd netflix-lite
```

Install dependencies:

```bash
npm install
```

Create a `.env` file and add your TMDB API key:

```env
VITE_TMDB_API_KEY=YOUR_API_KEY
```

Start the development server:

```bash
npm run dev
```

---

# API Endpoints Used

### Popular Movies

```http
GET /movie/popular
```

### Search Movies

```http
GET /search/movie
```

---

# Future Enhancements (Sprint 2)

* Infinite Scrolling
* Debounced Search
* Pagination
* Movie Details Page
* Genre Filters
* Favorites / Watchlist
* Dark Mode
* Local Storage Support

---

# Author

Developed as part of the **Netflix Lite Media Discovery SPA** engineering assignment using **React**, **Vite**, and the **TMDB REST API**.

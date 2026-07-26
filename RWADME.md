# 🚀 Space Explorer

A modern React application that lets users explore NASA's Astronomy Picture of the Day, search space images by date, track the International Space Station (ISS) in real time, and save favorite discoveries.

---

## 🌟 Features

- 🌌 NASA Astronomy Picture of the Day (APOD)
- 📅 Search NASA APOD by any date
- 🛰️ Live ISS Tracker with interactive map
- ❤️ Save favorite images/videos using Local Storage
- 🎥 Supports both NASA images and videos
- 📱 Responsive design
- ⚡ Fast performance with Vite
- 🎨 Modern UI with animations
- 🔄 Loading spinner while fetching data
- ❌ Error handling for API requests

---


### 🏠 Home Page



### 🌌 Picture of the Day



### 🛰️ ISS Tracker


### ❤️ Favorites



### 📅 Search by Date


---

## 🛠️ Built With

- React
- Vite
- React Router DOM
- Axios
- React Leaflet
- Leaflet
- React Icons
- CSS3
- NASA Open APIs

---

## 📂 Project Structure

```
src
│
├── components
│   ├── Navbar
│   ├── Footer
│   ├── Hero
│   ├── Loader
│   └── ISSMap
│
├── pages
│   ├── Home
│   ├── PictureDay
│   ├── SearchByDate
│   ├── Favorites
│   ├── FavoriteDetails
│   ├── ISS
│   └── NotFound
│
├── services
│   ├── nasaApi.js
│   └── issApi.js
│
├── styles
│
└── utils
    └── favorites.js
```

---

## 🚀 Installation

Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/space-explorer.git
```

Move into the project

```bash
cd space-explorer
```

Install dependencies

```bash
npm install
```

Start development server

```bash
npm run dev
```

---

## 🔑 Environment Variables

Create a file named

```
.env
```

Add your NASA API key

```env
VITE_NASA_API_KEY=YOUR_API_KEY
```

Get your free API key from:

https://api.nasa.gov/

---

## 📦 Build

```bash
npm run build
```

---

## 🌍 Deployment

This project can be deployed easily on:

- Vercel
- Netlify
- GitHub Pages

---

## 📡 APIs Used

### NASA APOD API

https://api.nasa.gov/

### ISS Location API

https://wheretheiss.at/

---

## ✨ Future Improvements

- 🌙 Dark / Light Mode
- 🌍 ISS Orbit Path
- 👨‍🚀 Astronauts Currently in Space
- 🔍 Search by Keyword
- 📥 Download HD Images
- 📤 Share on Social Media
- ⭐ User Authentication
- ☁️ Cloud Database for Favorites

---

## 👨‍💻 Author

**Amrit Singh**

GitHub:
https://github.com/amritsingh00

LinkedIn:
https://www.linkedin.com/in/amrit-singh-5a35b12a3/

---

## 📜 License

This project is licensed under the MIT License.

---

## ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub.

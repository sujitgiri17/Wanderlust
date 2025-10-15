# 🌍 Wanderlust - Travel Listing Platform

Wanderlust is a full-stack web application inspired by Airbnb.  
It allows users to explore, create, edit, and review travel destinations around the world.  
This project is built using **Node.js, Express, MongoDB, EJS**, and integrates with **Mapbox** for interactive maps.

---

## 🚀 Features

### 🧭 User Features
- Sign up and login securely using authentication.
- Add, edit, and delete travel listings.
- Upload images for each destination.
- View location on an interactive map (powered by Mapbox).
- Leave reviews and ratings for listings.
- View average ratings for each destination.
- Responsive design for mobile and desktop.

### 🔐 Admin/Owner Features
- Only logged-in users can create or edit listings.
- Users can edit or delete only their own listings and reviews.
- Image uploads are handled with **Cloudinary** for secure storage.
- Environment variables (`.env`) used for sensitive data like API keys and database URIs.

---

## 🏗️ Tech Stack

| Category | Technology |
|-----------|-------------|
| **Frontend** | EJS (Embedded JavaScript Templates), Bootstrap, CSS |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB (Mongoose ORM) |
| **Cloud Storage** | Cloudinary |
| **Map Integration** | Mapbox API |
| **Authentication** | Passport.js |
| **File Uploads** | Multer |
| **Validation** | Joi |

---

## ⚙️ Project Setup

### 1. Clone the repository
```bash
git clone https://github.com/<your-username>/wanderlust.git
cd wanderlust


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


2. Install dependencies
npm install

3. Run the server
node app.js

wanderlust/
│
├── models/              # Mongoose models (User, Listing, Review)
├── routes/              # Express route handlers
├── controllers/         # Business logic for routes
├── views/               # EJS templates for UI
├── public/              # Static files (CSS, JS, images)
├── utils/               # Helper functions and middleware
├── app.js               # Main Express application
├── .env                 # Environment variables (ignored by Git)
├── .gitignore           # Git ignore rules
├── package.json         # Node dependencies and scripts
└── README.md            # Project documentation

💾 Database
The project uses MongoDB Atlas (cloud-based) or local MongoDB for storing:
User data
Listings
Reviews

🧠 Future Enhancements
Add booking and payment integration.
Implement user profile pages.
Add image compression for faster uploads.
Introduce categories and tags for destinations.

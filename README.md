# React Twitter-Like Tweets

A simple Twitter/X-style tweets application built with **React**, **JSX**, and **Vite**, using **Strapi CMS** as the backend API and content management system.

## 🚀 Live Demo

**Demo:** https://react-twitter-like-tweets.vercel.app/

## 📖 Overview

This project demonstrates how to build a lightweight social feed application where users can view and interact with tweet-style posts. The frontend is developed with React and Vite for a fast development experience, while Strapi CMS provides the API and data storage layer.

## ✨ Features

* Display tweet-style posts
* Fetch data from Strapi CMS API
* Responsive user interface
* Fast development with Vite
* Component-based React architecture
* Modern JSX implementation
* Clean and minimal design

## 🛠️ Tech Stack

### Frontend

* React
* JSX
* Vite
* CSS

### Backend

* Strapi CMS
* REST API

## 📂 Project Structure

```bash
src/
├── components/
├── pages/
├── assets/
├── App.jsx
├── main.jsx
└── styles/
```

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/react-twitter-like-tweets.git
cd react-twitter-like-tweets
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the project root:

```env
VITE_API_URL=http://localhost:1337/api
```

Replace the URL with your Strapi API endpoint.

### 4. Start Development Server

```bash
npm run dev
```

The application will be available at:

```bash
http://localhost:5173
```

## 🔧 Strapi Setup

1. Install and create a Strapi project.
2. Create a collection type for Tweets.
3. Configure API permissions.
4. Add sample tweet data.
5. Update `VITE_API_URL` with your Strapi API URL.

## 📡 API Integration

The application fetches tweet data from Strapi using REST API endpoints.

Example:

```javascript
const response = await fetch(
  `${import.meta.env.VITE_API_URL}/tweets`
);
const data = await response.json();
```

## 🏗️ Build for Production

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## 🎯 Learning Objectives

This project demonstrates:

* React component architecture
* API integration with React
* State management using hooks
* Working with Strapi CMS
* Environment variables in Vite
* Building responsive UI components

## 🤝 Contributing

Contributions, suggestions, and improvements are welcome.

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Submit a pull request

## 📄 License

This project is available under the MIT License.

## 👨‍💻 Author

Built as a demo project using React + Vite and Strapi CMS.

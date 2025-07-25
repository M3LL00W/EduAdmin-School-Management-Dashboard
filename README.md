# EduAdmin - School Management Dashboard


This project is a modern, feature-rich Admin Dashboard for a School Management System, developed as part of the Full Stack Engineer assignment for the **DiGiLABS Internship 2025**.

## ✨ Live Demo

**Check out the live version deployed on Vercel:**

[**https://your-project-name.vercel.app**](https://your-project-name.vercel.app)

## 📸 Preview

![EduAdmin Dashboard Preview](https://i.imgur.com/your-screenshot.png)
*(**Note:** Please replace this with a screenshot of your actual running application!)*

## 🚀 Features

This dashboard goes beyond the basic requirements to showcase a polished and functional application:

* **📊 Interactive Dashboard:** A central hub with key statistics, performance analytics, and recent activity logs.
* **📄 Multi-Page Navigation:** State-managed views for Dashboard, Students, Teachers, and Classes without page reloads.
* **🎨 Dark Mode:** A sleek, user-friendly dark mode theme, toggleable from the sidebar.
* **🎬 Smooth Animations:** Seamless page transitions and component animations powered by Framer Motion.
* **📱 Progressive Web App (PWA):** Fully installable on desktop and mobile devices for an app-like experience.
* **🔔 Push Notifications:** Demonstrates a full push notification flow, from asking for permission to sending a notification from the server.
* **🔍 Search & Filtering:** Interactive search and filtering capabilities on the Students, Teachers, and Classes pages.
* **💯 Clean & Responsive UI:** Built with Tailwind CSS and shadcn/ui for a clean, modern, and fully responsive interface that looks great on all devices.
* **💀 Skeleton Loaders:** Elegant loading skeletons provide a better user experience while content is being prepared.

## 🛠️ Tech Stack

* **Framework:** [Next.js](https://nextjs.org/) (App Router)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
* **Animations:** [Framer Motion](https://www.framer.com/motion/)
* **PWA:** [next-pwa](https://www.npmjs.com/package/next-pwa)
* **Push Notifications:** [web-push](https://www.npmjs.com/package/web-push)
* **Deployment:** [Vercel](https://vercel.com/)

## ⚙️ Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

* Node.js (v18 or later)
* npm or yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-github-username/your-repo-name.git](https://github.com/your-github-username/your-repo-name.git)
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd your-repo-name
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```

### Environment Variables

This project requires environment variables for the push notification feature to work.

1.  Create a file named `.env.local` in the root of your project.
2.  Generate VAPID keys for push notifications by running:
    ```bash
    npx web-push generate-vapid-keys
    ```
3.  Copy the contents of `.env.example` into `.env.local` and paste your generated keys.

**`.env.example`**
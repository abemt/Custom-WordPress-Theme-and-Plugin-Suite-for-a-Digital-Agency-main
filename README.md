# Digital Agency Showcase

This is a modern, single-page website for a digital agency, designed to showcase their portfolio, services, and team. Built with React, TypeScript, and Tailwind CSS, it demonstrates technical excellence and provides a sleek, professional online presence. The application is fully responsive, interactive, and built with a clean, component-based architecture.

## ✨ Features

- **Fully Responsive Design**: Adapts seamlessly to all screen sizes, from mobile phones to desktop monitors.
- **Mobile-First Navigation**: Includes a slick, slide-out hamburger menu for smaller screens.
- **Smooth Scrolling SPA**: A single-page application experience with smooth navigation between sections.
- **Interactive Portfolio**: A filterable gallery to showcase projects by category, with elegant hover effects.
- **Dynamic Testimonials Carousel**: An auto-playing carousel for client testimonials with manual controls.
- **Modern & Clean UI**: A professional and visually appealing design built with Tailwind CSS.
- **Reusable Components**: Built with a modular structure for easy maintenance and scalability.

## 🚀 Tech Stack

- **[React](https://react.dev/)**: A JavaScript library for building user interfaces.
- **[TypeScript](https://www.typescriptlang.org/)**: A typed superset of JavaScript that compiles to plain JavaScript.
- **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework for rapid UI development.
- **HTML5 & CSS3**: For structure and styling, including custom keyframe animations.

## 📂 Project Structure

The project is organized into a clear and maintainable structure:

```
.
├── components/          # Reusable React components
│   ├── ui/              # Generic UI components (Section, SectionTitle)
│   ├── Header.tsx       # Site navigation
│   ├── Hero.tsx         # Hero section
│   ├── Services.tsx     # Services display
│   ├── Portfolio.tsx    # Filterable project portfolio
│   ├── Team.tsx         # Team member showcase
│   ├── Testimonials.tsx # Client testimonials carousel
│   ├── Contact.tsx      # Contact form
│   └── Footer.tsx       # Site footer
├── App.tsx              # Main application component, orchestrates layout
├── constants.tsx        # Static data (services, projects, team) and icons
├── index.html           # The main HTML file
├── index.tsx            # The entry point for the React application
├── metadata.json        # Project metadata
└── types.ts             # TypeScript type definitions
```

##  Getting Started

To run this project locally, you would typically follow these steps. (Note: This project is set up for a specific web-based development environment and may require adjustments for a standard local setup).

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/digital-agency-showcase.git
    cd digital-agency-showcase
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

This will start the development server, and you can view the application in your browser, usually at `http://localhost:5173`.
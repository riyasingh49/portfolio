import React, { useState } from "react";
import "./Projects.css";
import Freshmart from "../../assets/freshmart.webp";
import SMS from "../../assets/sms.webp";
import R49 from "../../assets/r49.webp";
import ImageSearchEngine from "../../assets/image-search-engine.webp";
import Portfolio from "../../assets/portfolio.webp";
import Air from "../../assets/air.webp";
import MazeGame from "../../assets/maze-game.webp";
import HostelAttendance from "../../assets/hostel-facial-attendance-system.webp";
import Chatbot from "../../assets/Chatbot.png"

const INITIAL_PROJECT_COUNT = 6;
const GITHUB_PROFILE_URL = "https://github.com/riyasingh49";

const projectItems = [
  {
    image: Freshmart,
    title: "E-commerce Website",
    description:
      "A responsive grocery e-commerce website with clean UI, built using HTML, CSS, and JavaScript for smooth browsing across all devices.",
    url: "https://riyasingh49.github.io/FreshMart/",
  },
  {
    image: SMS,
    title: "Student Management System",
    description:
      "Desktop app using Java Swing and MySQL for managing student records with CRUD operations and JDBC integration.",
    url: "https://github.com/riyasingh49/student-management-system.git",
  },
  {
    image: R49,
    title: "R49",
    description:
      "An interactive React and GSAP based web project with reusable components, Tailwind CSS, responsive layouts, and modern UI transitions.",
    url: "https://riyasingh49.github.io/R49/",
  },
  {
    image: ImageSearchEngine,
    title: "Image Search Engine",
    description:
      "An image search application with real-time Unsplash API integration, backend routing, keyword search, and responsive rendering.",
    url: "https://image-search-engine-one-eta.vercel.app",
  },
  {
    image: Portfolio,
    title: "Portfolio",
    description:
      "A responsive personal portfolio showcasing projects, skills, certifications, experience, and contact details in a clean dark theme.",
    url: "https://riyasingh49.github.io/Portfolio/",
  },
  {
    image: Chatbot,
    title: "AI Portfolio Chatbot",
    description: 
    "A personal AI chatbot that answers questions about me using Retrieval-Augmented Generation (RAG) — built with Next.js, Supabase (pgvector), and Groq, with real-time streaming, multi-thread conversations, and full authentication.",
    url: "https://ai-portfolio-chatbot-65kk.vercel.app",
  },
  {
    image: MazeGame,
    title: "Maze Game",
    description:
      "A Python/Pygame 2D maze adventure with DFS-generated mazes, diamonds, snakes, timer-based gameplay, themes, score tracking, replay screens, and an AI mode using A* pathfinding.",
    url: "https://github.com/riyasingh49/maze-game.git",
  },
  {
    image: Air,
    title: "Air Quality Forecast",
    description:
      "A forecasting project focused on analyzing air quality data and predicting pollution trends with a clean, data-driven workflow.",
    url: "https://github.com/riyasingh49/Air-Quality-Forecast.git",
  },
  {
    image: HostelAttendance,
    title: "Hostel Attendance System",
    description:
      "A hostel attendance system using facial recognition and OTP verification to automate student identity checks, attendance marking, and organized record management.",
    url: "https://github.com/riyasingh49/Facial_Recognition_Hostel_Attendance_System.git",
  },
];

const Projects = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const hasHiddenProjects = projectItems.length > INITIAL_PROJECT_COUNT;
  const visibleProjects = showAllProjects
    ? projectItems
    : projectItems.slice(0, INITIAL_PROJECT_COUNT);

  const handleMoreProjects = () => {
    if (hasHiddenProjects && !showAllProjects) {
      setShowAllProjects(true);
      return;
    }

    window.open(GITHUB_PROFILE_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="projects">
      <div className="project-title">
        <h1>My Projects</h1>
        <p>
          A showcase of projects demonstrating my skills in designing
          user-friendly interfaces and developing scalable backend solutions.
        </p>
      </div>

      <div className="project-gallery" aria-label="Project previews">
        {visibleProjects.map((project) => (
          <a
            className="project-showcase"
            href={project.url}
            key={project.title}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.title} project`}
          >
            <img
              src={project.image}
              alt={`${project.title} preview`}
              loading="lazy"
              decoding="async"
            />
            <div className="project-overlay">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
          </a>
        ))}
      </div>

      <button
        type="button"
        className="more-projects"
        onClick={handleMoreProjects}
      >
        More Projects
      </button>
    </div>
  );
};

export default Projects;

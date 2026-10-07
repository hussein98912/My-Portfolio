"use client";

import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  ExternalLink,
  Database,
  Bot,
  BrainCircuit,
  Car,
  BarChart3,
  HeartPulse,
  Mic,
  ClipboardList,
  Globe,
  X,
} from "lucide-react";

const projects = [
  {
    title: "Amra",
    category: "Backend / Full-Stack Platform",

    description:
      "A full-stack tourism and pilgrimage management platform connecting pilgrims, tourism companies, guides, and administrative teams through dedicated role-based workflows.",

    detailedOverview:
      "Amra is a multi-role tourism and pilgrimage management platform designed to centralize operational workflows between pilgrims, tourism companies, guides, finance teams, support staff, and administrators. The system provides dedicated dashboards and permissions for each role while maintaining a unified backend architecture.",

    role:
      "Designed and developed the backend architecture, REST APIs, authentication, role-based permissions, booking workflows, company management, real-time communication, notifications, and supporting infrastructure.",

    implementation: [
      "Designed JWT-based authentication and role-based authorization.",
      "Built REST APIs for companies, packages, bookings, payments, support, and notifications.",
      "Implemented filtering, searching, pagination, and custom API permissions.",
      "Implemented real-time chat and notifications using Django Channels and WebSockets.",
      "Integrated Redis for WebSocket communication and online presence.",
      "Implemented company verification, document management, and approval workflows.",
    ],

    image: "/Amra.jpg",
    icon: Database,

    features: [
      "JWT authentication & role-based access control",
      "Company, package, booking and payment workflows",
      "REST APIs with filtering, search and pagination",
      "Real-time chat and notifications",
      "File and document management",
      "WebSockets, Redis and online presence",
    ],

    technologies: [
      "Python",
      "Django",
      "DRF",
      "PostgreSQL",
      "Redis",
      "WebSockets",
    ],

    github: "https://github.com/hussein98912/Amra",
    live: "https://omrah-pilgrim.vercel.app/",
    liveLabel: "Pilgrim",

    extraLinks: [
      {
        label: "Company",
        url: "https://omrah-company.vercel.app/",
      },
      {
        label: "Admin",
        url: "https://omrah-admin.vercel.app/",
      },
    ],
  },

  {
    title: "Smplics AI",
    category: "AI / Automation / SaaS",

    description:
      "A scalable SaaS platform for AI-powered automation and multi-channel communication.",

    detailedOverview:
      "Smplics AI is a SaaS platform built around AI-powered customer communication and business automation. The platform connects social messaging channels with AI agents, workflows, subscriptions, payments, and business operations through a centralized backend.",

    role:
      "Worked on the Django backend, REST APIs, AI agent integrations, social messaging integrations, subscription workflows, Stripe payments, WebSockets, and n8n automation.",

    implementation: [
      "Built backend APIs for Instagram, Facebook, and Telegram integrations.",
      "Integrated OpenAI-powered agents for automated customer conversations.",
      "Implemented conversation memory and AI tool execution.",
      "Built subscription and payment workflows using Stripe.",
      "Integrated n8n for business workflow automation.",
      "Implemented real-time communication using WebSockets.",
      "Built backend workflows for orders, meetings, notifications, and customer interactions.",
    ],

    image: "/Smplicsai.jpg",
    imageClass: "project-image-contain",
    icon: Bot,

    features: [
      "Instagram & Facebook messaging automation",
      "Telegram bot integration",
      "AI agents with conversation memory",
      "Order and payment processing",
      "Workflow and meeting management",
      "Stripe subscriptions and payments",
      "n8n workflow automation",
    ],

    technologies: [
      "Python",
      "Django",
      "DRF",
      "PostgreSQL",
      "OpenAI",
      "n8n",
      "Stripe",
      "WebSockets",
    ],

    github: "https://github.com/hussein98912/automation-be",
    live: "https://smplicsai.com/",
  },

  {
    title: "M2P Innovation Website",
    category: "Web Development / Corporate Website",

    description:
      "A modern corporate website developed for M2P Innovation to showcase its Microsoft Power Platform, AI, and automation services.",

    detailedOverview:
      "A responsive corporate website created for M2P Innovation to present its technology services, Microsoft Power Platform capabilities, AI solutions, and automation offerings through a modern interactive experience.",

    role:
      "Developed the frontend architecture, reusable components, responsive layouts, interactive service sections, theme switching, animations, and production deployment configuration.",

    implementation: [
      "Built the website using reusable Next.js and React components.",
      "Implemented responsive layouts optimized for desktop and mobile devices.",
      "Created interactive service sections and animated UI elements.",
      "Implemented dark and light theme switching.",
      "Optimized the website for static deployment.",
      "Configured the application for production hosting and optimized image handling.",
    ],

    image: "/m2p.jpg",
    imageClass: "project-image-contain",
    icon: Globe,

    features: [
      "Responsive corporate website",
      "Reusable Next.js components",
      "Dynamic service sections",
      "Smooth animations and interactions",
      "Dark / light theme switching",
      "Mobile optimization",
      "Production-ready static deployment",
    ],

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],

    live:
      "http://understanding-gold-chinchilla.209-74-67-200.cpanel.site/",
  },

  {
    title: "Smart Driving Assistant",
    category: "AI / Computer Vision / Graduation Project",

    description:
      "An AI-powered driving assistant designed to improve road safety through real-time vehicle detection, driver monitoring, driving pattern analysis, and voice-controlled features.",

    detailedOverview:
      "Smart Driving Assistant is a graduation project combining computer vision, deep learning, natural language processing, and backend services to provide intelligent driving assistance. The system focuses on detecting road objects, monitoring driver behavior, analyzing driving patterns, and providing safety-oriented assistance.",

    role:
      "Developed backend services and REST APIs while working on the integration of computer vision, deep learning models, driver monitoring, and intelligent driving features.",

    implementation: [
      "Integrated YOLO-based object detection for vehicle and road-object recognition.",
      "Implemented driver drowsiness detection using computer vision techniques.",
      "Developed LSTM-based driving pattern analysis.",
      "Implemented image and video processing pipelines using OpenCV.",
      "Built Django REST APIs to connect AI services with application interfaces.",
      "Integrated voice-controlled functionality and NLP-based interaction.",
    ],

    image: "/Smart.jpg",
    icon: Car,

    features: [
      "Vehicle detection and classification",
      "Driver drowsiness detection",
      "Driving pattern analysis with LSTM",
      "Road and environment monitoring",
      "YOLO-based object detection",
      "Voice-controlled features",
      "Django backend and REST APIs",
    ],

    technologies: [
      "Python",
      "TensorFlow",
      "Keras",
      "YOLO",
      "LSTM",
      "OpenCV",
      "NLP",
      "Django",
      "DRF",
    ],

    github:
      "https://github.com/hussein98912/Smart_Car_System_Backend",

    extraLinks: [
      {
        label: "Vehicle Detection",
        url:
          "https://github.com/hussein98912/vehicle_detection_classification_yolo",
      },
      {
        label: "Drowsiness Detection",
        url:
          "https://github.com/hussein98912/Driver_Drowsiness_Detection",
      },
    ],
  },

  {
    title: "Nabd System",
    category: "AI / Healthcare / Academic Project",

    description:
      "An AI-powered cardiac monitoring platform combining wearable sensors, ECG data, machine learning, and web and mobile applications.",

    detailedOverview:
      "Nabd is an academic healthcare platform designed to support continuous cardiac monitoring by combining wearable sensor data, ECG signals, machine learning analysis, and connected web and mobile applications.",

    role:
      "Worked on the software and AI side of the project, including backend APIs, machine learning processing, data handling, and integration between monitoring components and application interfaces.",

    implementation: [
      "Processed ECG and wearable sensor data for monitoring workflows.",
      "Applied machine learning techniques for health data analysis.",
      "Built backend APIs for communication between application components.",
      "Supported real-time processing of health-related sensor data.",
      "Integrated patient and doctor interfaces for remote monitoring.",
      "Implemented alert-oriented workflows for abnormal monitoring results.",
    ],

    image: "/Nabd.jpg",
    imageClass: "project-image-contain",
    icon: HeartPulse,

    features: [
      "ECG and wearable sensor monitoring",
      "Machine learning based analysis",
      "Real-time health data processing",
      "Patient mobile application",
      "Doctor web dashboard",
      "Remote monitoring and alerts",
    ],

    technologies: [
      "Python",
      "Machine Learning",
      "ECG",
      "IoT",
      "Signal Processing",
      "Django",
      "DRF",
      "React",
    ],

    github:
      "https://github.com/hussein98912/Nabd-Heart-Monitoring-System",
  },

  {
    title: "Demand Forecasting AI System",
    category: "AI / Machine Learning / Full-Stack",

    description:
      "A full-stack machine learning application for analyzing historical data and generating demand forecasts through a Django backend and interactive web interface.",

    detailedOverview:
      "The Demand Forecasting AI System is a full-stack application designed to transform historical business data into demand forecasts. It combines data preprocessing and machine learning workflows with a Django REST backend and interactive frontend.",

    role:
      "Developed the backend API, data processing workflow, prediction integration, and communication between the machine learning layer and frontend application.",

    implementation: [
      "Implemented data preprocessing and preparation workflows.",
      "Integrated machine learning models for demand prediction.",
      "Built Django REST endpoints for prediction requests.",
      "Connected the prediction API with a React frontend.",
      "Handled historical data analysis and model input preparation.",
      "Created an interactive workflow for generating and viewing forecasts.",
    ],

    image: "/Demond.jpg",
    imageClass: "project-image-contain",
    icon: BarChart3,

    features: [
      "Machine learning based forecasting",
      "Django REST backend",
      "React frontend",
      "Data preprocessing and analysis",
      "Prediction API integration",
      "Interactive forecasting workflow",
    ],

    technologies: [
      "Python",
      "Django",
      "DRF",
      "React",
      "Machine Learning",
      "Pandas",
    ],

    github:
      "https://github.com/hussein98912/Demand-Forecasting-AI-System",
  },

  {
    title: "Vehicle Detection & Classification",
    category: "Computer Vision / Deep Learning",

    description:
      "A computer vision system focused on real-time vehicle detection and classification using YOLO-based object detection and image processing techniques.",

    detailedOverview:
      "A computer vision project focused on identifying and classifying vehicles from images and video streams. The system uses YOLO-based object detection to locate vehicles and classify detected objects in real-time scenarios.",

    role:
      "Developed the computer vision pipeline, model integration, image and video processing workflow, and detection logic.",

    implementation: [
      "Integrated a YOLO-based object detection model.",
      "Implemented vehicle detection across image and video inputs.",
      "Built preprocessing and image handling workflows using OpenCV.",
      "Implemented vehicle classification based on detected objects.",
      "Optimized the processing pipeline for real-time detection scenarios.",
    ],

    image: "/Detection.jpg",
    imageClass: "project-image-contain",
    icon: Car,

    features: [
      "Real-time vehicle detection",
      "Vehicle classification",
      "YOLO object detection",
      "Image and video processing",
      "Computer vision pipeline",
    ],

    technologies: [
      "Python",
      "YOLO",
      "OpenCV",
      "Deep Learning",
      "Computer Vision",
    ],

    github:
      "https://github.com/hussein98912/vehicle_detection_classification_yolo",
  },

  {
    title: "Driver Drowsiness Detection",
    category: "AI / Computer Vision",

    description:
      "A deep learning computer vision system for detecting signs of driver drowsiness and supporting real-time driver monitoring for improved road safety.",

    detailedOverview:
      "A computer vision and deep learning project focused on identifying visual indicators of driver fatigue and drowsiness. The system analyzes facial and eye-related features to support real-time driver monitoring.",

    role:
      "Developed the computer vision pipeline, preprocessing workflow, deep learning model integration, and real-time monitoring logic.",

    implementation: [
      "Processed facial and eye-state information using computer vision.",
      "Prepared image data for deep learning classification.",
      "Integrated a neural network model for drowsiness classification.",
      "Implemented real-time video processing using OpenCV.",
      "Designed the detection workflow for continuous driver monitoring.",
    ],

    image: "/Drownes.jpg",
    imageClass: "project-image-contain",
    icon: BrainCircuit,

    features: [
      "Real-time driver monitoring",
      "Facial and eye-state analysis",
      "Deep learning classification",
      "Computer vision processing",
      "Driver safety monitoring",
    ],

    technologies: [
      "Python",
      "TensorFlow",
      "OpenCV",
      "Deep Learning",
      "Computer Vision",
    ],

    github:
      "https://github.com/hussein98912/Driver_Drowsiness_Detection",
  },

  {
    title: "Speech Emotion Recognition",
    category: "AI / Deep Learning",

    description:
      "A deep learning system for recognizing human emotions from speech using audio feature extraction and neural network models trained on the RAVDESS dataset.",

    detailedOverview:
      "A speech-based emotion recognition system designed to classify human emotions from audio recordings. The project combines audio preprocessing, MFCC feature extraction, and deep learning models trained on the RAVDESS dataset.",

    role:
      "Developed the audio preprocessing pipeline, feature extraction workflow, model training process, and emotion classification components.",

    implementation: [
      "Processed raw speech recordings and prepared audio samples.",
      "Extracted MFCC features for model input.",
      "Experimented with CNN and LSTM architectures for classification.",
      "Trained deep learning models using the RAVDESS dataset.",
      "Built the inference workflow for predicting emotions from speech.",
    ],

    image: "/Speech.jpg",
    icon: Mic,

    features: [
      "Speech emotion classification",
      "MFCC feature extraction",
      "LSTM and CNN models",
      "RAVDESS dataset",
      "Audio preprocessing pipeline",
    ],

    technologies: [
      "Python",
      "TensorFlow",
      "Keras",
      "CNN",
      "LSTM",
      "MFCC",
    ],

    github:
      "https://github.com/hussein98912/Speech-Emotion-Recognition",
  },

  {
    title: "Purchase Request Management",
    category: "Microsoft Power Platform",

    description:
      "A business application for managing purchase requests, approvals, documents, notifications, and role-based workflows using Microsoft Power Platform.",

    detailedOverview:
      "Purchase Request Management is a business application designed to digitize and streamline internal purchasing workflows. The application allows employees to submit purchase requests while providing administrators and approvers with structured workflows for reviewing, approving, and tracking requests.",

    role:
      "Designed and implemented the application using Microsoft Power Platform, including the Canvas App interface, Dataverse data model, approval workflows, notifications, document generation, and Copilot Studio integration.",

    implementation: [
      "Designed the Dataverse data structure for purchase requests and related entities.",
      "Built a Canvas App for submitting and managing purchase requests.",
      "Implemented approval workflows using Power Automate.",
      "Implemented role-based access and request visibility.",
      "Automated PDF generation and email notifications.",
      "Integrated Copilot Studio to support users with purchase-related queries.",
      "Integrated SharePoint for supporting documents and ticket-related workflows.",
    ],

    image: "/Purchase.jpg",
    icon: ClipboardList,

    features: [
      "Purchase request management",
      "Role-based access control",
      "Approval workflows",
      "PDF generation",
      "Email notifications",
      "Copilot Studio integration",
    ],

    technologies: [
      "Power Apps",
      "Power Automate",
      "Dataverse",
      "Copilot Studio",
      "SharePoint",
    ],

    github:
      "https://github.com/hussein98912/Purchase-Request-Managment",
  },
];

function GithubIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-1.026-.014-1.861-2.782.605-3.369-1.342-3.369-1.342-.455-1.155-1.11-1.463-1.11-1.463-.908-.621.069-.608.069-.608 1.004.071 1.532 1.03 1.532 1.03.892 1.529 2.341 1.087 2.914.831.091-.646.349-1.087.635-1.338-2.22-.253-4.555-1.111-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844a9.56 9.56 0 0 1 2.504.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.841-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .268.18.579.688.481A10.002 10.002 0 0 0 22 12c0-5.523-4.477-10-10-10Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[number] | null
  >(null);

  useEffect(() => {
    if (!selectedProject) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <>
      <section id="projects" className="projects section">
        <div className="container">
          {/* HEADER */}
          <div className="section-label">Selected work</div>

          <div className="projects-header">
            <div>
              <h2>
                Things I&apos;ve
                <br />
                <span>built.</span>
              </h2>
            </div>

            <div className="projects-intro">
              <p>
                A collection of backend systems, AI applications,
                computer vision projects, and business automation
                solutions I&apos;ve worked on.
              </p>

              <div className="projects-meta">
                <span className="projects-count">
                  {projects.length.toString().padStart(2, "0")} — PROJECTS
                </span>

                <span className="projects-scroll-hint">
                  SCROLL TO EXPLORE
                  <span className="projects-scroll-line" />
                </span>
              </div>
            </div>
          </div>

          {/* EDITORIAL GALLERY */}
          <div className="projects-gallery">
            {projects.map((project, index) => {
              const Icon = project.icon;

              const isFeatured = index % 5 === 0;

              return (
                <article
                  key={project.title}
                  className={`gallery-project ${
                    isFeatured ? "gallery-project-featured" : ""
                  }`}
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="gallery-image-wrap">
                    <img
                      src={project.image}
                      alt={`${project.title} project preview`}
                      className={`gallery-image ${
                        project.imageClass || ""
                      }`}
                    />

                    <div className="gallery-image-overlay" />

                    <div className="gallery-top">
                      <span className="gallery-category">
                        <Icon size={14} />
                        {project.category}
                      </span>
                    </div>

                    <div className="gallery-open">
                      <span>VIEW</span>
                      <ArrowUpRight size={20} />
                    </div>

                    <div className="gallery-bottom">
                      <div>
                        <span className="gallery-label">
                          SELECTED PROJECT
                        </span>

                        <h3>{project.title}</h3>
                      </div>
                    </div>
                  </div>

                  <div className="gallery-caption">
                    <span>{project.category}</span>

                    <p>
                      {project.description.slice(0, 115)}
                      {project.description.length > 115 ? "..." : ""}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="projects-gallery-footer">
            <span>
              {projects.length.toString().padStart(2, "0")} PROJECTS
            </span>

            <span>
              BACKEND · AI · AUTOMATION · COMPUTER VISION
            </span>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROJECT VIEW
          ===================================================== */}

      {selectedProject && (
        <div
          className="project-modal"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedProject.title} project details`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedProject(null);
            }
          }}
        >
          {/* AMBIENT ANIMATION */}

          <div className="project-view-ambient" aria-hidden="true">
            <div className="ambient-orbit ambient-orbit-1" />
            <div className="ambient-orbit ambient-orbit-2" />
            <div className="ambient-orbit ambient-orbit-3" />

            <div className="ambient-glow ambient-glow-1" />
            <div className="ambient-glow ambient-glow-2" />

            <div className="ambient-beam ambient-beam-1" />
            <div className="ambient-beam ambient-beam-2" />

            <div className="ambient-particles">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>

          {/* PROJECT WINDOW */}

          <div className="project-modal-inner">
            <button
              type="button"
              className="project-modal-close"
              onClick={() => setSelectedProject(null)}
              aria-label="Close project details"
            >
              <X size={20} />
            </button>

            {/* IMAGE */}

            <div className="project-modal-image">
              <img
                src={selectedProject.image}
                alt={`${selectedProject.title} project preview`}
                className={selectedProject.imageClass || ""}
              />

              <div className="project-modal-image-overlay" />

              <div className="project-modal-category">
                {(() => {
                  const Icon = selectedProject.icon;

                  return (
                    <>
                      <Icon size={15} />
                      {selectedProject.category}
                    </>
                  );
                })()}
              </div>
            </div>

            {/* CONTENT */}

            <div className="project-modal-content">
              <div className="project-modal-heading">
                <span>SELECTED PROJECT</span>

                <h2>{selectedProject.title}</h2>
              </div>

              {/* OVERVIEW + ROLE */}

              <div className="project-modal-grid">
                <div className="project-modal-description">
                  <span className="modal-label">OVERVIEW</span>

                  <p>{selectedProject.detailedOverview}</p>
                </div>

                <div className="project-modal-description">
                  <span className="modal-label">MY ROLE</span>

                  <p>{selectedProject.role}</p>
                </div>
              </div>

              {/* TECHNICAL IMPLEMENTATION */}

              <div className="project-modal-implementation">
                <span className="modal-label">
                  TECHNICAL IMPLEMENTATION
                </span>

                <div className="modal-feature-list">
                  {selectedProject.implementation.map(
                    (item, index) => (
                      <div
                        className="modal-feature"
                        key={item}
                      >
                        <span>
                          {(index + 1)
                            .toString()
                            .padStart(2, "0")}
                        </span>

                        <p>{item}</p>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* KEY FEATURES */}

              <div className="project-modal-features-section">
                <span className="modal-label">
                  KEY FEATURES
                </span>

                <div className="modal-feature-list modal-feature-list-compact">
                  {selectedProject.features.map(
                    (feature, index) => (
                      <div
                        className="modal-feature"
                        key={feature}
                      >
                        <span>
                          {(index + 1)
                            .toString()
                            .padStart(2, "0")}
                        </span>

                        <p>{feature}</p>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* TECHNOLOGIES */}

              <div className="project-modal-stack-section">
                <span className="modal-label">
                  TECHNOLOGIES
                </span>

                <div className="project-modal-stack">
                  {selectedProject.technologies.map(
                    (technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* LINKS */}

              <div className="project-modal-actions">
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-action modal-action-primary"
                  >
                    <GithubIcon />

                    <span>View on GitHub</span>

                    <ArrowUpRight size={18} />
                  </a>
                )}

                {selectedProject.live && (
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-action"
                  >
                    <ExternalLink size={18} />

                    <span>
                      {selectedProject.liveLabel ||
                        "Live Project"}
                    </span>

                    <ArrowUpRight size={18} />
                  </a>
                )}

                {selectedProject.extraLinks?.map(
                  (link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="modal-action"
                    >
                      <ExternalLink size={18} />

                      <span>{link.label}</span>

                      <ArrowUpRight size={18} />
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
const mongoose = require('mongoose');
const Project = require('../models/Project');
const path = require('path');

// Load .env from the server directory (one level up from scripts)
require('dotenv').config({ path: path.join(__dirname, '../.env') });

// Debug: Check if MONGODB_URI is loaded
console.log('MONGODB_URI:', process.env.MONGODB_URI ? 'Found' : 'NOT FOUND');

const sampleProjects = [
  {
    title: "CrimeCast – Crime Arrest Prediction System ",
    description: "Machine learning model to predict Crime arrest probability with 84.9% accuracy ",
    longDescription: "Developed ML system to predict crime arrests using Chicago crime data. Engineered temporal,spatial, and categorical features and handled class imbalance with SMOTE.",
    category: "Machine Learning",
    technologies: ["Python", "FastAPI", "Scikit-learn", "Pandas", "Numpy","XGBoost",],
    toolsUsed: ["Google Colab", "Streamlit", "GitHub"],
    media: [
       {
        type: "image",
        url: "/images/PredictionDashboard.jpeg",
        caption: "Prediction Dashboard"
      },
      {
        type: "image",
        url: "/images/Performance.jpeg",
        caption: "Model Performance Metrics"
      },
    ],
    githubUrl: "https://github.com/Sithija2k03/CrimeCast",
    metrics: {
      accuracy: "84.9%",
      dataSize: "50K+ records",
      processingTime: "< 2 seconds",
      modelType: "XGBoost Ensemble"
    },
    featured: true,
    order: 1
  },
  {
    title: "AdventureWorks Sales Analytics Dashboard – Microsoft Excel ",
    description: "Interactive Excel dashboard analyzing sales trends of AdventureWorks Sales",
    longDescription: "Built an interactive Excel dashboard using PivotTables, Power Pivot, and slicers to analyze sales, profit trends, customer segments, and product performance. ",
    category: "Data Analysis",
    technologies: ["Microsoft Excel", "Macros", "PivotTables"],
    toolsUsed: ["Microsoft Excel"],
    media: [
       {
        type: "video",  
        url: "/videos/Excel-Dashboard.mp4",
        thumbnail: "/images/Excel_dashboard1.png",
        caption: "Interactive dashboard walkthrough"
      },
      {
        type: "image",
        url: "/images/Excel_dashboard1.png",
        caption: "Sales overview dashboard"
      },
      {
        type: "image",
        url: "/images/Excel_dashboard2.png",
        caption: "Sales overview dashboard"
      },
     
    ],
    githubUrl: "https://github.com/Sithija2k03/Excel-Dashboard_project-AdventureWorks",
    featured: true,
    order: 2
  },
  {
    title: "Inventory Performance Dashboard – Microsoft Excel ",
    description: "Interactive Excel dashboard analyzing Inventory performance metrics",
    longDescription: "Built an interactive Excel dashboard using PivotTables, Power Pivot, and slicers to analyze Inventory Performance metrics and answer key business questions. ",
    category: "Data Analysis",
    technologies: ["Microsoft Excel", "Macros", "PivotTables"],
    toolsUsed: ["Microsoft Excel"],
    media: [
      {
        type: "image",
        url: "/images/Inventory_dashboard.png",
        caption: "Inventory Performance dashboard"
      },
     
    ],
    githubUrl: "https://github.com/Sithija2k03/Inventory-Performance-Dashboard",
    featured: true,
    order: 2
  },
  {
    title: "Sales-and-Marketing-Call-Center-Dashboard – Microsoft Excel ",
    description: "Interactive Excel dashboard analyzing Call Center performance metrics",
    longDescription: "Built an interactive Excel dashboard using PivotTables, Power Pivot, and slicers to analyze Call Center performance metrics and answer key business questions. ",
    category: "Data Analysis",
    technologies: ["Microsoft Excel", "Macros", "PivotTables"],
    toolsUsed: ["Microsoft Excel"],
    media: [
       {
        type: "video",  
        url: "/videos/Excel-Dashboard-Call-Center.mp4",
        thumbnail: "/images/Call-Center_dashboard.png",
        caption: "Interactive dashboard walkthrough"
      },
      {
        type: "image",
        url: "/images/Call-Center_dashboard.png",
        caption: "Call Center analytics dashboard"
      },
     
    ],
    githubUrl: "https://github.com/Sithija2k03/Sales-and-Marketing-Call-Center-Dashboard---Microsoft-Excel",
    featured: true,
    order: 2
  },
  {
    title: "Blinkit Sales Performance Dashboard",
    description: "Interactive Power BI dashboard analyzing sales trends of Blinkit app",
    longDescription: "Built an interactive Power BI dashboard for Blinkit analyzing key KPIs, sales trends, and outlet performance using DAX, Power Query, and advanced visualizations. ",
    category: "Data Analysis",
    technologies: ["Power BI", "DAX", "Power Query"],
    toolsUsed: ["Power BI"],
    media: [
       {
        type: "video",
        url: "/videos/Blinkit-Dashboard.mp4",
        thumbnail: "/images/Blinkit_dashboard.png",
        caption: "Interactive dashboard walkthrough"
      },
      {
        type: "image",
        url: "/images/Blinkit_dashboard.png",
        caption: "Sales overview dashboard"
      },
     
    ],
    githubUrl: "https://github.com/Sithija2k03/Blinkit-Sales-Performance-Dashboard-Power-BI-Project",
    featured: true,
    order: 2
  },
  {
    title: "Electric Vehicle Data Analysis – Tableau Project ",
    description: "Interactive Tableau dashboard analyzing Electric Vehicle trends",
    longDescription: "Developed an interactive Tableau dashboard analyzing electric vehicle adoption, market share, and geographic trends using KPI-driven visualizations.  ",
    category: "Data Analysis",
    toolsUsed: ["Tableau"],
    media: [
      {
        type: "image",
        url: "/images/Tableau_dashboard.png",
        caption: "Electric Vehicle Data Analysis dashboard"
      },
     
    ],
    githubUrl: "https://github.com/Sithija2k03/Electric-Vehicle-Data-Analysis---Tableau-Project",
    featured: true,
    order: 2
  },
  {
    title: "AGENTFLOW – Multi-Agent AI Group Project Organizer ",
    description: "Multi-agent AI system for automated task allocation and project management ",
    longDescription: "Developed a multi-agent AI system for automated and fair task allocation using NLP and optimization techniques. Built agents for task planning, progress monitoring, deadline reminders and communication summarizer agent. ",
    category: ["AI Agents","Web Development"],
    technologies: ["FastAPI", "Next.js", "Python", "Hugging Face-API", "MongoDB"],
    toolsUsed: ["VS Code", "GitHub", "Postman"],
    media: [
       {
        type: "video",
        url: "/videos/AgentFlow_overview.mp4",
        thumbnail: "/images/AgentFlow_github.png",
        caption: "Complete system walkthrough"
      },
       {
        type: "video",
        url: "/videos/TaskAllocation-Video.mp4",
        thumbnail: "/images/AgentFlow_github.png",
        caption: "Complete system walkthrough"
      },
       {
        type: "video",
        url: "/videos/DeadLine-Reminder.mp4",
        thumbnail: "/images/AgentFlow_github.png",
        caption: "Complete system walkthrough"
      },
       {
        type: "video",
        url: "/videos/ProgressMonitor.mp4",
        thumbnail: "/images/AgentFlow_github.png",
        caption: "Complete system walkthrough"
      },
       {
        type: "video",
        url: "/videos/Communication-Agent.mp4",
        thumbnail: "/images/AgentFlow_github.png",
        caption: "Complete system walkthrough"
      },
      {
        type: "image",
        url: "/images/AgentFlow_github.png",
        caption: "AgentFlow GitHub Repository"
      },
     
    ],
    githubUrl: "https://github.com/Sithija2k03/group-project-organizer-ai",
    featured: true,
    order: 2
  },
];

async function addProjects() {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error('MONGODB_URI is not defined in .env file');
    }

    console.log('Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected successfully!');

    console.log('Clearing existing projects...');
    const deleteResult = await Project.deleteMany({});
    console.log(`Deleted ${deleteResult.deletedCount} existing projects`);

    console.log('Adding new projects...');
    const projects = await Project.insertMany(sampleProjects);
    console.log(`Successfully added ${projects.length} projects!`);

    console.log('\nProjects added:');
    projects.forEach((project, index) => {
      console.log(`${index + 1}. ${project.title} (${project.category})`);
    });

    await mongoose.connection.close();
    console.log('\nDatabase connection closed');
    process.exit(0);
  } catch (error) {
    console.error('Error adding projects:', error);
    if (mongoose.connection.readyState !== 0) {
      await mongoose.connection.close();
    }
    process.exit(1);
  }
}

addProjects();
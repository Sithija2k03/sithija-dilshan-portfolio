const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const Project = require('./models/Project');
const Skill = require('./models/Skill');

dotenv.config();
connectDB();

const sampleProjects = [
  {
    title: 'Customer Churn Prediction',
    description: 'Machine learning model to predict customer churn with 87% accuracy',
    longDescription: 'Built a predictive model using Random Forest and XGBoost to identify customers likely to churn. Implemented feature engineering and hyperparameter tuning to optimize performance.',
    category: 'Machine Learning',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib'],
    toolsUsed: ['Jupyter Notebook', 'Python', 'Scikit-learn'],
    imageUrl: 'https://via.placeholder.com/400x300',
    githubUrl: 'https://github.com/yourusername/project1',
    liveUrl: '',
    metrics: {
      accuracy: '87%',
      improvement: '23% reduction in churn',
      dataSize: '50,000 records'
    },
    featured: true,
    order: 1
  },
  {
    title: 'Sales Dashboard',
    description: 'Interactive Power BI dashboard for sales analytics',
    longDescription: 'Created an interactive dashboard to visualize sales trends, regional performance, and product analytics. Integrated with SQL database for real-time data updates.',
    category: 'Data Visualization',
    technologies: ['Power BI', 'SQL', 'DAX'],
    toolsUsed: ['Power BI', 'SQL Server'],
    imageUrl: 'https://via.placeholder.com/400x300',
    githubUrl: '',
    liveUrl: '',
    metrics: {
      improvement: '40% faster reporting',
      dataSize: '100,000+ transactions'
    },
    featured: true,
    order: 2
  },
  {
    title: 'Web Scraping E-commerce Prices',
    description: 'Automated price monitoring system for e-commerce products',
    longDescription: 'Developed a web scraper to monitor product prices across multiple e-commerce platforms. Implemented scheduling and email alerts for price drops.',
    category: 'Web Scraping',
    technologies: ['Python', 'BeautifulSoup', 'Selenium', 'MongoDB'],
    toolsUsed: ['Python', 'BeautifulSoup', 'Selenium'],
    imageUrl: 'https://via.placeholder.com/400x300',
    githubUrl: 'https://github.com/yourusername/project3',
    liveUrl: '',
    metrics: {
      dataSize: '10,000+ products tracked',
      improvement: 'Real-time price updates'
    },
    featured: true,
    order: 3
  }
];

const sampleSkills = [
  {
    category: 'Programming Languages',
    skills: [
      { name: 'Python', level: 90, icon: '🐍' },
      { name: 'R', level: 75, icon: '📊' },
      { name: 'SQL', level: 85, icon: '🗄️' },
      { name: 'JavaScript', level: 70, icon: '⚡' }
    ]
  },
  {
    category: 'Data Analysis & Visualization',
    skills: [
      { name: 'Pandas', level: 90, icon: '🐼' },
      { name: 'NumPy', level: 85, icon: '🔢' },
      { name: 'Tableau', level: 80, icon: '📈' },
      { name: 'Power BI', level: 75, icon: '📊' },
      { name: 'Matplotlib', level: 85, icon: '📉' }
    ]
  },
  {
    category: 'Machine Learning',
    skills: [
      { name: 'Scikit-learn', level: 85, icon: '🤖' },
      { name: 'TensorFlow', level: 70, icon: '🧠' },
      { name: 'XGBoost', level: 75, icon: '🚀' },
      { name: 'Feature Engineering', level: 80, icon: '⚙️' }
    ]
  },
  {
    category: 'Tools & Technologies',
    skills: [
      { name: 'Git', level: 80, icon: '🔧' },
      { name: 'Jupyter', level: 90, icon: '📓' },
      { name: 'Excel', level: 85, icon: '📊' },
      { name: 'MongoDB', level: 70, icon: '🍃' }
    ]
  }
];

const seedDatabase = async () => {
  try {
    // Wait for connection
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Clear existing data
    await Project.deleteMany({});
    await Skill.deleteMany({});

    // Insert sample data
    await Project.insertMany(sampleProjects);
    await Skill.insertMany(sampleSkills);

    console.log('✅ Database seeded successfully!');
    console.log(`📊 Added ${sampleProjects.length} projects`);
    console.log(`🎯 Added ${sampleSkills.length} skill categories`);
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
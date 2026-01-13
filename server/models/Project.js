const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  longDescription: String,
  category: {
    type: String,
    enum: ['Data Analysis', 'Machine Learning', 'Data Visualization', 'Web Scraping', 'Other'],
    required: true
  },
  technologies: [String],
  toolsUsed: [String], // Python, R, Tableau, Power BI, etc.
  imageUrl: String,
  githubUrl: String,
  liveUrl: String,
  metrics: {
    accuracy: String,
    improvement: String,
    dataSize: String
  },
  featured: {
    type: Boolean,
    default: false
  },
  order: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Project', ProjectSchema);
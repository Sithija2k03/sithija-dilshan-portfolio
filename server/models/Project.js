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
    enum: ['Data Analysis', 'Machine Learning', 'AI Agents', 'Web Development', 'Other'],
    required: true
  },
  technologies: [String],
  toolsUsed: [String],
  
  // Enhanced media support
  media: [{
    type: {
      type: String,
      enum: ['image', 'video'],
      required: true
    },
    url: {
      type: String,
      required: true
    },
    caption: String,
    thumbnail: String // For videos
  }],
  
  // Fallback for single image (backward compatibility)
  imageUrl: String,
  
  githubUrl: String,
  liveUrl: String,
  
  // Data science specific metrics
  metrics: {
    accuracy: String,
    improvement: String,
    dataSize: String,
    processingTime: String,
    modelType: String
  },
  
  // Project highlights/key features
  highlights: [String],
  
  // Results/outcomes
  results: [String],
  
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
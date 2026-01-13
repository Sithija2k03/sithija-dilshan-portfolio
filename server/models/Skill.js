const mongoose = require('mongoose');

const SkillSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true // e.g., "Programming", "Data Visualization", "Machine Learning"
  },
  skills: [{
    name: String,
    level: {
      type: Number,
      min: 0,
      max: 100
    },
    icon: String
  }]
});

module.exports = mongoose.model('Skill', SkillSchema);
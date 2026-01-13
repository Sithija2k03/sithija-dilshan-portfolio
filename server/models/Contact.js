const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  subject: String,
  message: {
    type: String,
    required: true
  },
  inquiryType: {
    type: String,
    enum: ['Internship', 'Freelance', 'Collaboration', 'Other'],
    default: 'Other'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  isRead: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Contact', ContactSchema);
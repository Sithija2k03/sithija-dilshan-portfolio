const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load env variables
dotenv.config();

// Connect to database
connectDB();

const app = express();


// FIXED CORS CONFIGURATION
const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps, Postman, curl)
    if (!origin) return callback(null, true);
    
    // List of allowed origins
    const allowedOrigins = [
      'http://localhost:3000',                    // Local development
      'http://localhost:5000',                    // Backend testing
      'https://your-portfolio.vercel.app',        // Your Vercel deployment
      'https://*.vercel.app',                     // All Vercel preview deployments
      /\.vercel\.app$/,                           // Regex for all Vercel domains
    ];
    
    // Check if origin is allowed
    const isAllowed = allowedOrigins.some(allowedOrigin => {
      if (typeof allowedOrigin === 'string') {
        return origin === allowedOrigin || allowedOrigin === '*';
      }
      if (allowedOrigin instanceof RegExp) {
        return allowedOrigin.test(origin);
      }
      return false;
    });
    
    if (isAllowed) {
      callback(null, true);
    } else {
      // For development: allow all origins
      // For production: uncomment the error below
      callback(null, true); // DEVELOPMENT: Allow all
      // callback(new Error('Not allowed by CORS')); // PRODUCTION: Use this
    }
  },
  credentials: true,
  optionsSuccessStatus: 200,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
};

app.use(cors(corsOptions));

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Add headers middleware (additional CORS handling)
app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (origin) {
    res.header('Access-Control-Allow-Origin', origin);
  }
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  
  // Handle preflight
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});


// ROUTES
app.use('/api/projects', require('./routes/projects'));
app.use('/api/contact', require('./routes/contact'));
app.use('/api/skills', require('./routes/skills'));

// Test route
app.get('/', (req, res) => {
  res.json({ 
    message: 'Portfolio API is running',
    cors: 'enabled',
    environment: process.env.NODE_ENV 
  });
});

// Health check route
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'healthy',
    timestamp: new Date().toISOString(),
    database: 'connected'
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err.message);
  console.error(err.stack);
  res.status(500).json({ 
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
  console.log(`✅ Environment: ${process.env.NODE_ENV}`);
  console.log(`✅ CORS enabled for all origins (development mode)`);
});

module.exports = app;
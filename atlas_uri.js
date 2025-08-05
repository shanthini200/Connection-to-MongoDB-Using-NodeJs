
require('dotenv').config(); // Load environment variables

const uri = process.env.MONGODB_URI;

module.exports = uri;

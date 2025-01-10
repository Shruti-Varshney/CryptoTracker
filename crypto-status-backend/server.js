const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const fetchCryptoData = require('./jobs/cryptoJob');
const cron = require('node-cron');

dotenv.config();

const app = express();
connectDB();

app.use(express.json());
app.use('/api', require('./routes/api'));

fetchCryptoData();
// Schedule the cron job to run every 2 hours
cron.schedule('0 */2 * * *', async () => {
    console.log('Running scheduled task: Fetching cryptocurrency data...');
    await fetchCryptoData();
  });

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

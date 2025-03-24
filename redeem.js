import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

async function redeemApiHat() {
  try {
    const response = await axios.post(
      'https://api.wolvesville.com/items/redeemApiHat',
      {},
      {
        headers: {
          Authorization: `Bot ${process.env.WOLVESVILLE_BOT_TOKEN}`,
          'Content-Type': 'application/json'
        }
      }
    );

    console.log('🎉 Erfolgreich eingelöst:', response.data);
  } catch (error) {
    console.error('❌ Fehler beim Einlösen:', error.response?.data || error.message);
  }
}

redeemApiHat();

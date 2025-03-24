import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const headers = {
  Authorization: `Bot ${process.env.WOLVESVILLE_BOT_TOKEN}`
};

export async function getUserStats(userId) {
  const stats = await axios.get(`https://api.wolvesville.com/v1/users/${userId}/stats`, { headers });
  return stats.data;
}

export async function getUserProfile(userId) {
  const profile = await axios.get(`https://api.wolvesville.com/v1/users/${userId}`, { headers });
  return profile.data;
}

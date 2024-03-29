const axios = require('axios');
require('../admin')
const apikey = global.apikey.lolhuman
async function stalkml(playerId, serverId) {
  const apiUrl = `https://api.lolhuman.xyz/api/mobilelegend/${playerId}/${serverId}?apikey=${apikey}`;

  try {
    const response = await axios.get(apiUrl);
    const data = response.data;
    if (data.status === 200) {
      if (data.result) {
        return data.result;
      } else {
        return 'Terjadi Kesalahan!!\nid tidak ditemukan';
      }
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
}


async function stalkff(userId) {
  const apiUrl = `https://api.lolhuman.xyz/api/freefire/${userId}?apikey=${apikey}`;

  try {
    const response = await axios.get(apiUrl);
    const data = response.data;

    if (data.status === 200 && data.message === 'success') {
      if (data.result) {
        return data.result;
      } else {
        throw new Error('ID tidak ditemukan');
      }
    } else {
      throw new Error('API request failed');
    }
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
}

module.exports = {
  stalkml,
  stalkff
};

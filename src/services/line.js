const axios = require('axios');
const config = require('../config');
const logger = require('../utils/logger');

class LineService {
  async sendNotification(message) {
    try {
      await axios.post(
        config.line.apiUrl,
        `message=${encodeURIComponent(message)}`,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Bearer ${config.line.token}`,
          },
        }
      );
      logger.info('LINE notification sent successfully');
    } catch (error) {
      logger.error('Failed to send LINE notification:', error);
      throw error;
    }
  }

  formatMessage({ title, date, url }) {
    return `
🔔 1ヶ月前の予定があります
タイトル: ${title}
日付: ${date.toISOString().split('T')[0]}
URL: ${url}
    `.trim();
  }
}

module.exports = new LineService();
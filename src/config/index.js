require('dotenv').config();

const config = {
  notion: {
    token: process.env.NOTION_TOKEN,
    databaseId: process.env.NOTION_DATABASE_ID,
    datePropertyName: '締切日', // NotionのDB内の日付プロパティ名
  },
  line: {
    token: process.env.LINE_NOTIFY_TOKEN,
    apiUrl: 'https://notify-api.line.me/api/notify',
  },
  notification: {
    // 通知のトリガーとなる日数（30日前）
    targetDays: 30,
    // 許容誤差（日）
    marginDays: 1,
  },
};

// 設定値の検証
const requiredEnvVars = ['NOTION_TOKEN', 'NOTION_DATABASE_ID', 'LINE_NOTIFY_TOKEN'];
for (const envVar of requiredEnvVars) {
  if (!process.env[envVar]) {
    throw new Error(`Missing required environment variable: ${envVar}`);
  }
}

module.exports = config;
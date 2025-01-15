# notion-reminder

# notion-reminder-bot

NotionデータベースのエントリーをモニタリングしてLINE通知を送信するボットです。  
A bot that monitors Notion database entries and sends notifications via LINE.

## 機能 / Features

- Notionデータベース内の日付フィールドを監視
- 指定された期間（デフォルト：1ヶ月前）の日付を検出
- LINE Notifyで通知を送信
- GitHub Actionsでの定期実行（毎日午前9時）

- Monitors date fields in Notion database
- Detects dates from specified period (default: 1 month ago)
- Sends notifications via LINE Notify
- Scheduled execution using GitHub Actions (daily at 9:00 AM JST)

## セットアップ / Setup

### 必要条件 / Prerequisites

- Node.js 18以上
- Notionインテグレーション
- LINE Notifyトークン
- GitHubアカウント

### インストール / Installation

1. リポジトリのクローン / Clone the repository
```bash
git clone https://github.com/yourusername/notion-reminder-bot.git
cd notion-reminder-bot
```

2. 依存関係のインストール / Install dependencies
```bash
npm install
```

3. 環境変数の設定 / Set up environment variables

GitHubリポジトリの Settings → Secrets and variables → Actions で以下の環境変数を設定してください。
Set the following environment variables in your GitHub repository (Settings → Secrets and variables → Actions):

- `NOTION_TOKEN`: NotionインテグレーションのAPIキー / API key for Notion integration
- `NOTION_DATABASE_ID`: 監視対象のNotionデータベースID / Target Notion database ID
- `LINE_NOTIFY_TOKEN`: LINE NotifyのAPIトークン / API token for LINE Notify

### Notionデータベースの準備 / Notion Database Setup

1. Notionインテグレーションの作成 / Create a Notion integration
   - [Notion Developers](https://developers.notion.com/) にアクセス
   - 新しいインテグレーションを作成

2. データベースの共有 / Share the database
   - 監視したいデータベースを開く
   - `Share`をクリック
   - 作成したインテグレーションを選択して`Invite`

3. データベースIDの取得 / Get the database ID
   - データベースのURLから取得
   - 例：`https://notion.so/myworkspace/{DATABASE_ID}?v=...`

## 設定変更 / Configuration

`src/config/index.js`で以下の設定を変更できます：
You can modify the following settings in `src/config/index.js`:

```javascript
{
  notion: {
    datePropertyName: 'Date', // Notionの日付プロパティ名 / Date property name in Notion
  },
  notification: {
    targetDays: 30,          // 通知する日数 / Days before notification
    marginDays: 1,           // 許容誤差（日） / Margin of error in days
  }
}
```

## 使用方法 / Usage

### 自動実行 / Automatic Execution

GitHub Actionsにより毎日午前9時（JST）に自動実行されます。
The bot automatically runs daily at 9:00 AM JST via GitHub Actions.

### 手動実行 / Manual Execution

GitHubリポジトリの"Actions"タブから手動で実行することもできます：
You can also run the bot manually from the "Actions" tab in your GitHub repository:

1. "Actions"タブを開く / Open the "Actions" tab
2. "Notion LINE Notification"ワークフローを選択 / Select "Notion LINE Notification" workflow
3. "Run workflow"をクリック / Click "Run workflow"


# hanbaikanri

販売管理アプリ (サンプル)

## セットアップ

1. 依存パッケージをインストールします。
   ```bash
   npm install
   ```
2. サーバーを起動します。
   ```bash
   npm start
   ```
3. ブラウザで `http://localhost:3000` にアクセスします。

フロントのフォームから送信されたデータは `/submit` エンドポイントで受信し、
サーバーコンソールに内容が表示されます。

## Firebase Hosting との連携

`firebase-tools` をインストールした後、下記コマンドを実行して GitHub Actions をセットアップします。

```bash
npx firebase init hosting:github
```

対話形式で Firebase プロジェクトと対象ブランチを選択すると、必要な設定ファイルが生成されます。本リポジトリでは初期設定済みの例として以下のファイルを同梱しています。

- `.firebaserc` – 使用する Firebase プロジェクト ID を記載
- `firebase.json` – Hosting の設定（公開ディレクトリなど）
- `.github/workflows/firebase-hosting-pull-request.yml` – PR 作成時のプレビュー用デプロイ
- `.github/workflows/firebase-hosting-merge.yml` – `main` ブランチへのマージ時の本番デプロイ

GitHub リポジトリの `Settings > Secrets and variables > Actions` に Firebase サービスアカウントキーを `FIREBASE_SERVICE_ACCOUNT` という名前で登録してください。これにより、PR 作成時にプレビューチャンネルが自動で作成・コメントされ、マージ/クローズ時には自動削除されます。

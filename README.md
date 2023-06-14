## Project setup

```
npm install
```

Add `.env` file with correct DB credentials.

```json
DB_ADDRESS =
DB_USER =
DB_PORT =
DB_NAME =
DB_PASSWORD =
CLIENT_ADDRESS =
CLIENT_PORT =
```

Add `config.json` file in `/app/config/`

```json
DB_ADDRESS =
DB_USER =
DB_PORT =
DB_NAME =
DB_PASSWORD =
CLIENT_ADDRESS =
CLIENT_PORT =
```

### Run

```
npm run dump //Run the migrations
npm run setup //Run the seeders
npm run start //start the project
```

## Project setup

```
npm install
```

Edit `app/config/config.json` with correct DB credentials.

Add `.env` file with correct DB credentials. (Temporary)

```json
DB_ADDRESS = localhost
DB_USER = postgres
DB_PORT = 5432
DB_NAME = p1store
DB_PASSWORD = postgres
CLIENT_ADDRESS = localhost
CLIENT_PORT = 8081
```

### Run

```
npm run setup //Run the seeders
npm run dump //Run the migrations
npm run start //start the project
```

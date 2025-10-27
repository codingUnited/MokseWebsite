// Creates a readWrite app user on first container start.
// Uses env from docker-compose via the official entrypoint.
const dbName = process.env.MONGO_INITDB_DATABASE || 'mokse';
const appUser = process.env.MONGO_APP_USER || 'appuser';
const appPass = process.env.MONGO_APP_PASS || 'apppass';

db = db.getSiblingDB(dbName);

db.createUser({
  user: appUser,
  pwd: appPass,
  roles: [
    { role: 'readWrite', db: dbName }
  ]
});

export default {
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "postgres",
    "password": "postgres",
    "database": "postgres",
    "logging": true,
    "synchronize": true,
    "entities": ["src/app/entity/**/*.ts"]
}


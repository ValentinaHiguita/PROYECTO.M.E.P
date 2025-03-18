const mysql = require("mysql");
const dotenv = require("dotenv");

dotenv.config(); // Carga variables de entorno desde .env

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

db.connect((err) => {
    if (err) {
        console.error("❌ Error al conectar a la base de datos:", err);
        return;
    }
    console.log("✅ Conectado a la base de datos MySQL");
});

module.exports = db;

require('dotenv').config();

import { createConnection } from 'mysql';

function connectToDatabase() {
    const connection = createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    });

    return connection;
}

function disconnectFromDatabase(connection) {
    connection.end();
}

function executeQuery(connection, query) {
    return new Promise((resolve, reject) => {
        connection.query(query, (error, results, fields) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
}

export default {
    connectToDatabase,
    disconnectFromDatabase,
    executeQuery
};
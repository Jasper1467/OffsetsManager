const database = require("./database").default;

let authTokenReturnCodes = {
  success: 200,
  invalidToken: 401,
  invalidCredentials: 403,
  error: 500,
  badRequest: 400,
};

function generateAuthToken() {
  return Math.random() * (0xFFFFFF - 0);
}

function isValidCredentials(username) {
  conn = database.connect();

  // TODO: Sanitize username

  database.executeQuery(
    conn,
    `SELECT * FROM users WHERE username = '${username}'`
  );

  if (conn.results.length > 0) {
    conn.end();
    return true;
  }

  if (conn.error) {
    conn.end();
    return false;
  }

  conn.end();

  return false;
}

export default {
  generateAuthToken,
  isValidCredentials,
  authTokenReturnCodes,
};

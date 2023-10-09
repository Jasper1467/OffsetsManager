const database = require("./database").default;

let authTokenReturnCodes = {
  success: 200,
  invalidToken: 401,
  invalidCredentials: 403,
  error: 500,
  badRequest: 400,
};

function generateAuthToken() {
  // TODO: Store the token temporarily in the database
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
}

function isValidCredentials(username, password) {
  conn = database.connect();

  // TODO: Validate username and password
  // TODO: hash the password
  database.executeQuery(
    conn,
    `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`
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
  authTokenReturnCodes,
};

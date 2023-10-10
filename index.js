require("dotenv").config();

import express from "express";
import database from "./database";

const app = express();

// authtoken is the token from the auth endpoint
app.get("/offsets/:authtoken", (req, res) => {
  // TODO: Return all offsets
});

// authtoken is the token from the auth endpoint
app.get("/offsets/:id/:authtoken", (req, res) => {
  let id = req.params.id;
  // TODO: Return offset based on id from database
});

app.post("/auth", (req, res) => {
  let username = req.body.username;
  if (isValidCredentials(username)) {
    let authToken = generateAuthToken();

    // Add token to database
    database.executeQuery(
      database.connect(),
      `INSERT INTO otp_auth_tokens VALUES ('${authToken}', '${new Date()}', '${
        new Date() + 60 * 60 * 1000
      }', '${username}')`
    );

    res.status(authTokenReturnCodes.success).send({
      authToken,
    });
  } else {
    res.status(authTokenReturnCodes.invalidCredentials).send({
      authToken: null,
    });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});

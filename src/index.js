const express = require("express");
const app = express();
const port = 3000;
const fetch = require("node-fetch");

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/home.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/about.html");
});

app.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/contact.html");
});

app.get("/keys", async (req, res) => {
  const api_url = "http://www.boredapi.com/api/activity/";
  const fetch_response = await fetch(api_url);
  const json = await fetch_response.json();
  res.json(json.activity);
});

app.get("/param/:activity", async (req, res) => {
  const activity = req.params.activity;
  const api_url = `http://www.boredapi.com/api/activity?type=${activity}`;
  const fetch_response = await fetch(api_url);
  const json = await fetch_response.json();
  res.json(json);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

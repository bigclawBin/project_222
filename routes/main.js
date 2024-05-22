const express = require('express');
const fs = require('fs').promises; // Correctly import the fs module with promises support

const mainRoute = express.Router();

mainRoute.get("/", async (req, res) => {
    try {
      const data = await fs.readFile("./public/index.html", "utf-8");
      res.header("Content-Type", "text/html").send(data);
    } catch (error) {
      console.error("Error reading index file:", error);  // Log error for server-side review
      res.status(500).send("Unable to load the page, please try again later.");  // Generic error message
    }
  });
  

module.exports = mainRoute;

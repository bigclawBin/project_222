const fs = require('fs').promises;

const readData = async (url) => {
  try {
    const data = await fs.readFile(url, 'utf-8');
    return JSON.parse(data); // Parse and return the data directly
  } catch (error) {
    console.error('Failed to read data:', error);
    return null; // Return null if there is an error
  }
};

const writeData = async (url, data) => {
  try {
    const json = JSON.stringify(data, null, 2); // Pretty print JSON for better readability
    await fs.writeFile(url, json);
  } catch (error) {
    console.error('Failed to write data:', error);
    throw error; // Rethrow the error to notify calling functions of the failure
  }
};

module.exports = { readData, writeData };

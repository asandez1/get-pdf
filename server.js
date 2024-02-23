const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

app.get('/get-pdf', (req, res) => {
  console.log(` name of the pdf = ${req.query.name}`);
  const fileName = req.query.name;
  
  if (!fileName) {
    return res.status(400).json({ error: 'File name is required in query parameters' });
  }

  const filePath = path.join(__dirname, fileName);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.error('Error reading PDF file:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    const base64PDF = data.toString('base64');

    res.json({ base64PDF });
  });
});

const port = process.env.PORT || 9900;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

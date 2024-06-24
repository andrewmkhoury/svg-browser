require('dotenv').config();
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

const svgFolder = process.env.SVG_FOLDER || process.argv[2] || 'svg_files';
const svgDirectory = path.resolve(svgFolder);

console.log(`Using SVG directory: ${svgDirectory}`);

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use('/svg_files', express.static(svgDirectory));

app.get('/', (req, res) => {
    fs.readdir(svgDirectory, (err, files) => {
        if (err) {
            console.error('Error reading directory:', err);
            return res.status(500).send('Error reading SVG files');
        }

        const svgFiles = files.filter(file => path.extname(file).toLowerCase() === '.svg');
        res.render('index', { svgFiles });
    });
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});

app.get('/download/:filename', (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(svgDirectory, filename);
  
  if (fs.existsSync(filePath)) {
      res.download(filePath, filename, (err) => {
          if (err) {
              res.status(500).send('Error downloading file');
          }
      });
  } else {
      res.status(404).send('File not found');
  }
});
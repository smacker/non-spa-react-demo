import fs from 'fs';
import path from 'path';
import express from 'express';

import renderContent from './renderContent';
import Page from './page';

const pageTemplate = fs.readFileSync(path.join(__dirname, 'page.html'), 'utf8');
const app = express();

app.use(express.static('build'));

app.get('/', (req, res) => {
    const initialDataFromDB = {counter: 1};

    const pageContent = renderContent(Page, initialDataFromDB);
    const scripts = ['bundle.js'];

    res.send(pageTemplate
        .replace('{styles}', '')
        .replace('{content}', pageContent)
        .replace('{state}', `<script>_initialState = ${JSON.stringify(initialDataFromDB)}</script>`)
        .replace('{scripts}', scripts.map(script => `<script src="${script}"></script>`)));
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});

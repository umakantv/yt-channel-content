

import express from 'express';
import { getUser, stringify } from './index.js';

const app = express();

app.get('/user', (req, res) => {

    return res.send({
        data: JSON.parse(stringify(getUser()))
    })
})

app.listen(3000, () => {
    console.log('http://localhost:3000/user')
})
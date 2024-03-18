const express = require('express');
const dotenv=require('dotenv')
const cors = require('cors');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));




app.listen(PORT, () => {
    console.log(`This port is running at ${PORT}.`)
})

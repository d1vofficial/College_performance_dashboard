const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 8000;

const static_path = path.join(__dirname,"./assets");

app.use(express.static(static_path));

app.listen(port, ()=> {
    console.log(`Server running at port ${port}`);
});

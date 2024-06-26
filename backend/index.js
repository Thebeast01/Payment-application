const express = require("express");
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const rootRouter = require('./routes/routes');
app.use('/api/v1', rootRouter);
app.listen(3000, console.log(`listening on 3000`));
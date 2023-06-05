const app = require('./server/server');
require("dotenv").config();
require('./database/db')

const PORT = process.env.PORT || 0007;

app.listen(8080, () => {
    console.log('Servidor UP!');
})


const dotenv = require('dotenv');
const mongoose = require('mongoose');


dotenv.config({ path: `${__dirname}/config.env` });

const port = process.env.PORT || 5000;

const app = require('./app');

//connect database
mongoose.connect(process.env.DATABASE_ONLINE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('DB connection successful!')).catch((err) => console.log(err));

// if (process.env.NODE_ENV == "production") {
//     app.use(express.static("client/build"));
// }


app.listen(port, () => {
    console.log('Running on port 5000.');
});

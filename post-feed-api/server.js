const app = require('./src/app'); //Import the express app
const connectDB = require('./src/db/db'); //Import the database connection function

//connect to the database
connectDB();

//start the server

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})


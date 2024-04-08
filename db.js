const mongoose= require('mongoose');

// Define the mongoDB connection URL

const mongoURL = 'mongodb://localhost:27017/hotels' // Replace mydatabasea with your database name

// Set up momgodb connection
mongoose.connect(mongoURL, {
     useNewUrlParser: true, //
     useUnifiedTopology: true  
})

const db = mongoose.connection;

db.on('connected',()=>{
     console.log("Connected to MongoDB server");
});
db.on('error',()=>{
     console.log("MongoDB connection Error");
});
db.on('disconnected',()=>{
     console.log("MongoDB server Disconnected");
});

// export the database connection
module.exports= db;

























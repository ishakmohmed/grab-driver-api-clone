import mongoose from "mongoose";

// Function to connect to MongoDB database.
// Make sure you have the following line of code in .env file at the root of your project:
// MONGO_URI=mongodb://localhost:27017/temporaryDB
// You need to have MongoDB installed locally on your machine because the above connection string is a local connection string for dev environment (data is stored only on your machine for development purpose, not in cloud like MongoDB Atlas).

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDb;

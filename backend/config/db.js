import mongose from "mongoose";
import colors from "colors";

// a mongoose stuf (mongoose.connect ....) return always a promise
const connectDB = async () => {
  try {
    const conn = await mongose.connect(
      process.env.MONGO_URI ||
        "mongodb+srv://karthik:karthik@cluster0.sj4fz.mongodb.net/EcommercePfe?retryWrites=true&w=majority",
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
      }
    );
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

export default connectDB;

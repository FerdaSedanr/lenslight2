import mongoose from "mongoose";
//vt bağlantısı
const conn = () => {
  mongoose
    .connect(process.env.DB_URI, {
      dbName: "lenslight",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("connected to DB succesfully ");
    })
    .catch((err) => {
      console.log("DB connection err:, ${err}");
    });
};

export default conn;

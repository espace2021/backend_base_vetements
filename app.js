const express=require('express');
const  mongoose =require("mongoose")
const dotenv =require('dotenv')
const cors = require('cors')
const typeRouter =require("./routes/type.route")
const categorieRouter =require("./routes/categorie.route")
const scategorieRouter =require("./routes/scategorie.route")
const articleRouter =require("./routes/article.route")

dotenv.config()
const app = express();

//Les cors 
app.use(cors())

//BodyParser Middleware
app.use(express.json()); 

// Connexion à la base données
mongoose.set('strictQuery', true)
const connect = async () => {
    try {
      await mongoose.connect(process.env.DATABASECLOUD);
      console.log("Connected to mongoDB.");
    } catch (error) {
      throw error;
    }
  };
  
  mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!");
  });

app.get("/",(req,res)=>{
res.send("bonjour");
});
app.use('/api/types', typeRouter);
app.use('/api/categories', categorieRouter);
app.use('/api/scategories', scategorieRouter);
app.use('/api/articles', articleRouter);

app.listen(process.env.PORT, () => {
    connect();
 console.log(`Server is listening on port ${process.env.PORT}`); });
module.exports = app;

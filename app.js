const express=require('express');
const  mongoose =require("mongoose")
const dotenv =require('dotenv')
const cors = require('cors')
const typeRouter =require("./routes/type.route")
const categorieRouter =require("./routes/categorie.route")
const scategorieRouter =require("./routes/scategorie.route")
const articleRouter =require("./routes/article.route")
const userRouter =require( "./routes/user.route.js")

dotenv.config()
const app = express();

//Les cors 
app.use(cors())

//BodyParser Middleware
app.use(express.json()); 

// Connexion à la base données
mongoose.set('strictQuery', true)
// Connexion à la base données
mongoose.connect(process.env.DATABASECLOUD,{
  useNewUrlParser: true,
  useUnifiedTopology: true
  })
  .then(() => {console.log("MongoDB connected to the database");
 }).catch(err => {
  console.log('Could not connect to the database. Exiting now...', err);
  process.exit();
 });

app.get("/",(req,res)=>{
res.send("bonjour");
});
app.use('/api/types', typeRouter);
app.use('/api/categories', categorieRouter);
app.use('/api/scategories', scategorieRouter);
app.use('/api/articles', articleRouter);
app.use('/api/users', userRouter);

app.listen(process.env.PORT, () => {
 
 console.log(`Server is listening on port ${process.env.PORT}`); });
module.exports = app;

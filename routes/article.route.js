const express = require('express');
const router = express.Router();
const Article=require("../models/article")

// afficher la liste des articles.
router.get('/', async (req, res, )=> {
    try {
        const articles = await Article.find().populate('scategorieID');
                
        res.status(200).json(articles);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }

});
// créer un nouvel article
router.post('/', async (req, res) =>  {
    
    const nouvarticle = new Article(req.body)

    try {
        await nouvarticle.save()
        
        const articles = await Article.findById(nouvarticle._id).populate('scategorieID');

        res.status(200).json(articles );
    } catch (error) {
        res.status(404).json({ message: error.message });
    }


});
// chercher un article
router.get('/:articleId',async(req, res)=>{
    try {
        const art = await Article.findById(req.params.articleId);
        
        res.status(200).json(art);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});
// modifier un article


router.put('/:articleId', async (req, res)=> {
   try {
    const art = await Article.findByIdAndUpdate(
        req.params.articleId,
        { $set: req.body },
      { new: true }
    );
    const articles = await Article.findById(art._id).populate('scategorieID');

    res.status(200).json(articles );
  
    } catch (error) {
    res.status(404).json({ message: error.message });
    }
});
// Supprimer un article
router.delete('/:articleId', async (req, res)=> {
    const  id  = req.params.articleId;
    await Article.findByIdAndDelete(id);

    res.json({ message: "article deleted successfully." });

});
module.exports = router;

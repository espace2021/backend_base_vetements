const express = require('express');
const router = express.Router();
const SCategorie=require("../models/scategorie")


// afficher la liste des scategories.
router.get('/', async (req, res, )=> {
    try {
        const scat = await SCategorie.find().populate("categorieID");
                
        res.status(200).json(scat);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }

});
// créer un nouvelle scatégorie
router.post('/', async (req, res) =>  {
    const nouvscateg = new SCategorie(req.body)

    try {
        await nouvscateg.save()
        
        const scategories = await SCategorie.findById(nouvscateg._id).populate('categorieID');

        res.status(200).json(scategories );
    } catch (error) {
        res.status(404).json({ message: error.message });
    }

});

// chercher une sous scatégorie 
router.get('/:scategorieId',async(req, res)=>{
    try {
        const scat = await SCategorie.findById(req.params.scategorieId);
        
        res.status(200).json(scat);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

// modifier une scatégorie
router.put('/:scategorieId', async (req, res)=> {
    try {
        const scateg = await SCategorie.findByIdAndUpdate(
            req.params.scategorieId,
            { $set: req.body },
          { new: true }
        );
        const scategories = await SCategorie.findById(scateg._id).populate('categorieID');
    
        res.status(200).json(scategories );
      
        } catch (error) {
        res.status(404).json({ message: error.message });
        }
});

// Supprimer une scatégorie
router.delete('/:scategorieId', async (req, res)=> {
    const  id  = req.params.scategorieId;
    await SCategorie.findByIdAndDelete(id);

    res.json({ message: "sous categorie deleted successfully." });

});
module.exports = router;

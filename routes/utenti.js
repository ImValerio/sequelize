const express = require("express");
const router = express.Router();
const db = require("../models");

router.post("/new",async (req,res)=>{
    try {
        const query = await db.Utenti.create({
            nome: req.body.nome,
            email: req.body.email,
            password: req.body.password,
            citta: req.body.citta,
            
        });
    
        res.json(query);
        
    } catch (error) {
        res.json({error});
    }
});

router.post("/del/:id",async (req,res)=>{
    if(!Number.isInteger(req.params.id)) return res.json({error:"Invalid id"})
    
    const query = await db.Utenti.destroy({
            where:{
                id: req.params.id
            }
    });

    res.json(query);
});


router.post("/all",async (req,res)=>{
    const query = await db.Utenti.findAll();

    res.json(query);
});

module.exports = router;
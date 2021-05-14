const express = require("express");
const router = express.Router();
const db = require("../models");

router.post("/new",async (req,res)=>{
    try {
        const query = await db.Pagamenti.create({
            nome: req.body.nome,
            valore: req.body.valore,
            UtentiId: req.body.id,
        });
    
        res.json(query);
        
    } catch (error) {
        res.json({error});
    }   
});

router.post("/del/:id",async (req,res)=>{
    if(!Number.isInteger(req.params.id)) return res.json({error:"Invalid id"})

    const query = await db.Pagamenti.destroy({
            where:{
                id: req.params.id
            }
    });

    res.json(query);
});

router.post("/all",async (req,res)=>{
    const query = await db.Pagamenti.findAll({
        include: [db.Utenti]
    });

    res.json(query);
});

module.exports = router;
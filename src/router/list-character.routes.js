import {Router} from "express"

const router = Router();

// ici nous sommes sur http://localhost:9000/liste-personnages

// Vue de la liste des personnages
router.get("/", (req, res) => {
    res.json({msg: "LISTE-PERSONNAGES"});
});

// vue de detail d'un personnage
// ...

export default router;
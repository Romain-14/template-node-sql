import {Router} from "express"

const router = Router();

// ici nous sommes sur http://localhost:9000/authentification

// Vue pour la connexion (formulaire)
router.get("/connexion", (req, res) => {
    res.json({msg: "CONNEXION"});
});

// Vue pour la creation de compte(formulaire)
// ...

export default router;
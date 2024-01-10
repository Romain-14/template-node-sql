import { Router } from "express";

import list_routes from "./list-character.routes.js";
import auth_routes from "./auth.routes.js";

const router = Router();

// accueil
router.get("/", (req, res) => {
    res.json({msg: "ACCUEIL"});
});

// middleware vers les routes liste-personnages
router.use("/liste-personnages", list_routes);

// middleware vers les routes liste-personnages
router.use("/authentification", auth_routes);

// gestion de la 404 (not found)

export default router;

const { Router } = require("express");
const DevController = require("./controllers/DevControllers");
const SearchController = require("./controllers/SearchController");

//Métodos HTTP: GET, POST, PUT, DELETE

//Tipos de parametro:
// Query params: request.query (Filtros, ordenação, paginação)
// Route Params: Request.params (Identificar um "recurso" na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração)
const routes = Router();

// GET
routes.get("/devs", DevController.index);
routes.get("/search", SearchController.index);

//POST
routes.post("/Devs", DevController.store);

module.exports = routes;
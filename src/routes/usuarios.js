var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

router.post("/votar", function (req, res) {
    usuarioController.votar(req, res);
});

router.post("/porcentagem", function (req, res) {
    usuarioController.porcentagem(req, res);
});

router.post("/exibir", function (req, res) {
    usuarioController.exibir(req, res);
});

module.exports = router;
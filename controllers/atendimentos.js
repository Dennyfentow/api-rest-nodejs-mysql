const modelAtendimento = require('../models/Atendimento');

module.exports = app => {
    app.get('/atendimentos', (req, res) => {
        modelAtendimento.lista(res);
    })

    app.get('/atendimentos/:id', (req, res) => {
        // O ParseInt funciona também como uma maneira de segurança
        const id = parseInt(req.params.id);
        console.log("id do sacana: " + id);
        modelAtendimento.buscaPorId(id, res);
    })

    app.post('/atendimentos', (req, res) => {
        const atendimento = req.body;
        modelAtendimento.adiciona(atendimento, res);
    })

    app.patch('/atendimentos/:id', (req, res) => {

        const id = parseInt(req.params.id);
        const valores = req.body;
        console.log(id);
        modelAtendimento.altera(id, valores, res);
    })

    app.delete('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)
        modelAtendimento.deleta(id, res);
    })
}
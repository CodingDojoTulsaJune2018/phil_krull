const animals = require('./../controllers/turkeys');

module.exports = (app) => {
    // ============================= get methods =======================
    app.get('/turkeys', animals.index),
    app.get('/turkeys/:id', animals.show),

    // ============================= post methods =======================
    app.post('/turkeys', animals.create),
    app.put('/turkeys/:id', animals.update),
    app.delete('/turkeys/:id', animals.delete)
}
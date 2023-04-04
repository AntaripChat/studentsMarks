const {getAllMarks,addMarks,getById} = require('../controller/student.controller');

module.exports = (app) =>{
    app.get('/api/marks',getAllMarks);
    app.get('/api/marks/:id',getById);
    app.post('/api/addmarks',addMarks);
}
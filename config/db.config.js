const mongo = require('mongoose');

mongo.connect('mongodb://127.0.0.1:27017/studentsmarks')
.then(()=>console.log('DB connected'))
.catch((e)=>console.log(e));

const app = require('./app');

require('./config/db.config');
require('./routes/students.routes')(app);
const {PORT} = require('./config/server.config');

app.listen(PORT,()=>console.log(`Running On ${PORT}`));
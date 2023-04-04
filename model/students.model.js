const mongo = require('mongoose');

const studentSchema = new mongo.Schema({
    schoolName:{
        type:String,
    },
    studentName:{
        type:String,
    },
    rollNumber:{
        type:Number,
    },
    marks:[{
        firstLanguage:{
            type:Number,
        },
        secondLanguage:{
            type:Number,
        },
        math:{
            type:Number,
        },
        science:{
            type:Number,
        }
    }],
});

const Student = mongo.model('StudentMarks',studentSchema);

module.exports = Student;


const Student = require('../model/students.model');

const addMarks = async (req,res) =>{
    const data = req.body;
    try{
        const studentdata =await Student.create(data);
        res.send(data);

    }catch(e){
        res.send(e);
    };
};

const getAllMarks = async (req,res) =>{
    const data = await Student.find();
    res.send(data);
};

const getById = async (req,res)=>{
    //const id = params.id;
    const data = await Student.findById({"_id":req.params.id});
    res.send(data);
}

module.exports = {
    addMarks,
    getAllMarks,
    getById
}


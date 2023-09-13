const mysqlConnect = require("../db/dbConn")


const createEmp = (req,res) => {
    try {
        let newEmp = req.body
        mysqlConnect.query('Insert into employee(name,email) values(?,?) ',[newEmp.name,newEmp.email],(errors,rows) => {
            if(errors){
                console.log(errors)
            }else{
                console.log(rows);
                res.status(200).json({message:'Employee Added Successful'})
            }
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({message:'Internal Server Error'})
    }
}

const getEmp = (req,res) => {
    try {
        mysqlConnect.query('Select * from employee',(errors,rows) => {
            if(errors){
                console.log(errors)
            }else{
                console.log(rows);
                res.status(200).json({message:rows})
            }
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({message:'Internal Server Error'})
    }
}

const updateEmp = (req,res) => {

    const emp = req.body
    try {
        mysqlConnect.query('Update employee SET ? where id='+emp.id,[emp],(errors,rows) => {
            if(errors){
                console.log(errors)
            }else{
                console.log(rows);
                res.status(200).json({message:rows})
            }
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({message:'Internal Server Error'})
    }
}

const specificEmp = (req,res) => {

    try {
        mysqlConnect.query('Select * from employee where id=?',[req.params.id],(errors,rows) => {
            if(errors){
                console.log(errors)
            }else{
                console.log(rows);
                res.status(200).json({message:rows})
            }
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({message:'Internal Server Error'})
    }
}

const deleteEmp = (req,res) => {

    try {
        mysqlConnect.query('Delete from employee where id=?',[req.params.id],(errors,rows) => {
            if(errors){
                console.log(errors)
            }else{
                console.log(rows);
                res.status(200).json({message:rows})
            }
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({message:'Internal Server Error'})
    }
}

module.exports = {
    createEmp,
    getEmp,
    specificEmp,
    updateEmp,
    deleteEmp
}
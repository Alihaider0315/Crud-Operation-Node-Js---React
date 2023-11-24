import userModel from "../model/userModel.js";

export const create = async(req,res) => {
    try {
        
        const userData = new userModel(req.body);
        if(!userData){
            return res.status(404).json({msg:"User Data Not Found"});
        }

        const saveData = await userData.save();
        res.status(200).json({msg:"User Created Successfully"});

    } catch (error) {   

        res.status(500).json({error : "Internal Server Error"});
    }
}

export const getAll = async(req,res) => {
    try {
        
        const usersData = await userModel.find();
        if(!usersData){
            return res.status(404).json({msg: "Record Not Found"});
        }
        res.status(200).json({usersData})

    } catch (error) {
        res.status(500).json({error: "Internal Server Error"});
    }
}

export const getUser = async (req,res) => {
    try {
        
        const id = req.params.id;
        const userData = await userModel.findById(id);
         if(!userData){
            return res.status(404).json({msg: "User Not Found"});
         }
         res.status(200).json({userData})


    } catch (error) {
        res.status(500).json({error: "Internal Server Error"});
    }
}

export const updateUser = async (req,res) => {
    try {
        
        const id = req.params.id;
        const userData = await userModel.findById(id);
         if(!userData){
            return res.status(404).json({msg: "User Updated Sucessfully"});
         }
         
         const updateData = await userModel.findByIdAndUpdate(id,req.body,{new : true}); 
         res.status(200).json({updateData})


    } catch (error) {
        res.status(500).json({error: "Internal Server Error"});
    }
}

export const deleteData = async (req,res) => {
    try {
        
       const id = req.params.id 
       const userExist = await userModel.findById(id);
       if(!userExist){
        return res.status(404).json({msg:"User Not Exist"});
       }

       await userModel.findByIdAndDelete(id);
       res.status(200).json({msg : "User Deleted Successfully"})


    } catch (error) {
        res.status(500).json({error: "Internal Server Error"});
    }
}
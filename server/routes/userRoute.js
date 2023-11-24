import express from "express";
import { create, deleteData, getAll, getUser, updateUser } from "../controller/userController.js";
const route = express.Router();

route.post("/create", create);
route.get("/getall",getAll);
route.get("/getuser/:id",getUser);
route.put("/updateuser/:id",updateUser);
route.delete("/delete/:id" , deleteData);


export default route;


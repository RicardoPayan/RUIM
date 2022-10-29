import {User} from "../models/adminModels/User.js"

const handleLogin = async (req, res) =>{
    try {
        console.log(req.params);
        //Buscamos si el usuario existe en la base de datos
        const result = await User.findAll({
            where: {
                usuario: req.body.username
            }
        });
        console.log(result);
        if(result.length != 0){
            console.log("in");
            if(result[0].contrasena === req.body.password){
                res.send(req.body.username);
            }
            else{
                res.send("n");
            }
        }else{
            res.send("n");
        }
    }catch (error){
        console.log(error);
    }
}

export {handleLogin};

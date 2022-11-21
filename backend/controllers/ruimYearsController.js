import { years } from "../models/yearsModels/years.js";

const AddYear = async (req,res) => {
    try{
        const nyear = req.body.year;
        const active = req.body.active;
        const year = await years.create({
            year: nyear,
            active: active
        })
        res.json(year);
    }catch{
        res.json("error");
    }
}
const SelectYears = async (req, res) => {
    try{
        const response = await years.findAll();
        res.json(response);
    }catch{
        res.json("error");
    }
}
const ActiveYear = async (req, res) => {
    try{
        const response = await years.findOne({where: {
            active: 1
        }})
        res.json(response);
    } catch{
        res.json("error")
    }
}

const ChangeActive = async (req, res) => {
    var oldyear= req.body.oldyear
    var newyear = req.body.newyear
    try{
        const response = await years.update({active: 0}, {where: {year: oldyear}})
        const newy = await years.update({active: 1}, {where: {year: newyear}})
        console.log("updated")
        res.json("updated");
    }catch{
        console.log("error")
        res.json("error")
    }
}
export{
    AddYear,
    SelectYears,
    ActiveYear,
    ChangeActive
}
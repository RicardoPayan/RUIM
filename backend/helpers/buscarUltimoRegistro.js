
export const ultimoRegistro =  (modelo) =>{
        return modelo.findOne({
        order: [ [ 'id', 'DESC' ]],
    });

}
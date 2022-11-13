
export const ultimoRegistro =  (modelo, limite) =>{
        return modelo.findAll({
        limit: limite,
        order: [ [ 'id', 'DESC' ]],
    });

}
const {magos} = require(`./models`)

const getMagos = async (req , res , next)=>{
    try {
        const buscar = await magos.find()

        res.status(200).json({message : `buscando a todos los magos` , data : buscar})
    } catch (error) {
        next(error)
    }
}
const getMagosById = async (req , res , next)=>{
    try {
        const {_id} = req.params
        const buscar = await magos.findById(_id)
        
        res.status(200).json({message : `Buscando al mago con id ${_id}` , data : buscar})
    } catch (error) {
        next(error)
    }
}

const getMagosByNombre = async (req , res , next)=>{
try {
    const { nombre } = req.params
    const buscar = await magos.find({nombre : nombre})
    res.status(200).json({message : `buscando al mago de nombre ${nombre}` , data : buscar})
} catch (error) {
    next(error)
}
}
const getMagosByEdad = async (req , res , next)=>{
    try {
        const { edad } = req.params
        const buscar = await magos.find({edad : edad})
        res.status(200).json({message : `buscando al mago con la edad ${edad}` , data: buscar}) 
    } catch (error) {
        next(error)
    }
}

const getMagosByEstado = async (req , res, next)=>{
    try {
        const {vivo} = req.params
        const buscar = await magos.find({vivo : vivo})
        res.status(200).json({message : `buscando a los magos con el valor ${vivo}` , data : buscar})
    } catch (error) {
        next(error)       
    }
}

const getMagosByCasa = async (req, res, next )=>{
    try {
        const {casa} = req.params
        const buscar = await magos.find({casa : casa})
        res.status(200).json({message : `buscando a los magos por las casa ${casa}` , data : buscar})
    } catch (error) {
        next(error)
    }
}

const postMagos = async (req , res , next)=>{
    try {
        const {nombre , casa , edad , vivo} = req.body
        const nuevo = new magos({
            nombre : nombre,
            casa : casa,
            edad : edad,
            vivo : vivo
        })
        await nuevo.save()

        const buscar = await magos.find()
        res.status(200).json({message: ` agregagndo al nuevo mago` , data : buscar})
    } catch (error) {
        next(error)
    }
}

const putMagos = async (req , res , next )=>{
    try {
        const {_id , ...datos} = req.body
        const actualizar = await magos.findByIdAndUpdate( _id , datos )

        const buscar = await magos.find()

        res.status(200).json({message : `actualizando el mago con el id ${_id}` , data : buscar})
    } catch (error) {
        next(error)
    }
}

const patchMagos = async (req , res , next )=>{
    try {
        const {_id , ...datos} = req.body
        const actualizar = await magos.findByIdAndUpdate( _id , datos )

        const buscar = await magos.find()

        res.status(200).json({message : `patching el mago con el id ${_id}` , data : buscar})
    } catch (error) {
        next(error)
    }
}

const deleteMagos = async (req , res , next)=>{
    try {
        const {_id} = req.params
        const buscar = await magos.findByIdAndDelete(_id)
        res.status(200).json({message : `Borrando al mago con el id ${_id}` , data : buscar})
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getMagos,
    getMagosById,
    getMagosByNombre,
    getMagosByEdad,
    getMagosByEstado,
    postMagos,
    putMagos, 
    patchMagos,
    deleteMagos,
    getMagosByCasa
}
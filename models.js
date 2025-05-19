const mongoose = require(`mongoose`)

const magoSchema = mongoose.Schema(
    {nombre : String , casa: String , edad: Number , vivo : Boolean},
    {collection : `magos`}
)

const magos = mongoose.model(`magos` , magoSchema)

module.exports = {
    magos
}
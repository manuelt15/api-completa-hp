const express = require(`express`)
const router = express.Router()
const {middleware404 , middleware500} = require(`./middlewares`)
const { getMagos, getMagosById, getMagosByNombre, getMagosByEdad, getMagosByEstado, postMagos, putMagos, patchMagos, deleteMagos, getMagosByCasa } = require("./controllers")

router.route(`/magos`)
.get(getMagos)
.post(postMagos)
.put(putMagos)
.patch(patchMagos)

router.route(`/magos/id/:_id`)
.get(getMagosById)

router.route(`/magos/:nombre`)
.get(getMagosByNombre)

router.route(`/magos/edad/:edad`)
.get(getMagosByEdad)

router.route(`/magos/vivo/:vivo`)
.get(getMagosByEstado)

router.route(`/magos/:_id`)
.delete(deleteMagos)

router.route(`/magos/casa/:casa`)
.get(getMagosByCasa)

router.all(`/{*splat}` , middleware404)
router.use(middleware500)

module.exports = {
    router
}
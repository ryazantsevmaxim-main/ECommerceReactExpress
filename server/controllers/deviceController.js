const uuid = require('uuid');
const path = require('path');
const {Device, DeviceInfo} = require("../models/models");
const ApiError = require("../error/ApiError");


class DeviceController {
    async create(req, res, next) {
        try {
            const {name, price, brandId, typeId, info} = req.body;
            const {img} = req.files;
            let fileName = uuid.v4() + ".jpg";

            img.mv(path.resolve(__dirname, '..', 'static', fileName));

            const device = await Device.create({name, price, brandId, typeId, img: fileName});

            if (info) {
                const infoJson = JSON.parse(info)
                infoJson.forEach(infoElement => DeviceInfo.create({
                    title: infoElement.title,
                    description: infoElement.description,
                    deviceId: device.id
                }))
            }

            return res.json(device);
        } catch (error) {
            next(ApiError.badRequest(error.message));
        }
    }

    async getAll(req, res) {
        const {brandId, typeId, limit = 9, page = 1} = req.query;
        let offset = page * limit - limit;
        let devices;

        if (!brandId && !typeId) {
            devices = await Device.findAndCountAll({limit, offset});
        }

        if (brandId && !typeId) {
            devices = await Device.findAndCountAll({where: {brandId}, limit, offset});
        }

        if (!brandId && typeId) {
            devices = await Device.findAndCountAll({where: {typeId}, limit, offset});
        }

        if (brandId && typeId) {
            devices = await Device.findAndCountAll({where: {brandId, typeId}, limit, offset});
        }

        return res.json(devices);
    }

    async getOne(req, res) {
        const {id} = req.params;

        const device = await Device.findOne({
            where: {id},
            include: [{model: DeviceInfo, as: 'info'}]
        })

        return res.json(device);
    }
}

module.exports = new DeviceController();
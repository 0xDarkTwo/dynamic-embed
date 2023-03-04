import { drawPNG } from "./draw.mjs";
import axios from "axios"

export const handler = async (event, context, callback) => {
    let ip, geolocation
    try {
        ip = event['requestContext']['identity']['sourceIp']
    }
    catch {
        ip = '8.8.8.8'
    }
    try {
        geolocation = (await axios.get(`https://json.geoiplookup.io/${ip}`)).data
    }
    catch (err) {
        console.log(err)
        geolocation = null
    }
    const canvas = drawPNG(ip, geolocation)
    const buffer = canvas.toBuffer("image/png")

    const response = {
        'headers': { "Content-Type": "image/png" },
        'statusCode': 200,
        'body': buffer.toString('base64'),
        'isBase64Encoded': true
    };
    callback(null, response);
};
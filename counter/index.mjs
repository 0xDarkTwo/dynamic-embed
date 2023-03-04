import { drawPNG } from "./draw.mjs";

export const handler = async (event, context, callback) => {
    let response
    try {
        const canvas = await drawPNG()
        const buffer = canvas.toBuffer("image/png")

        response = {
            'headers': { "Content-Type": "image/png" },
            'statusCode': 200,
            'body': buffer.toString('base64'),
            'isBase64Encoded': true
        };
    }
    catch (err) {
        response = {
            'statusCode': 500,
            'body': err.message,
        };
    }
    callback(null, response);
};
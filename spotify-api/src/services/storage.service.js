const { ImageKit } = require('@imagekit/nodejs');
require('dotenv').config();

const client = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
})

async function uploadFile(file) {
    const result = await client.files.upload({
        file,
        fileName: "music_" + Date.now()
    })
    return result;
}

module.exports = { uploadFile }; 
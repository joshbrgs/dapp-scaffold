const objectMapper = require('../model/EmailDTO');
const base = process.env.OMNI_API
const OmnisendKey = process.env.OMNI_KEY
const axios = require('axios').create({
    baseURL: `${base}`,
    headers: {
        "Content-type": "application/json",
        "x-api-key": `${OmnisendKey}`
    }
});

const AddSubscriber = async (email) => {
    let newSubscriber = objectMapper(email);

    let res = await axios.post(`/contacts`, newSubscriber);

    return res;
}

module.exports=AddSubscriber;
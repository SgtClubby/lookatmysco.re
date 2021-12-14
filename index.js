const axios = require('axios')

// Fucntion to check supplied json string
function isJson(item) {
    item = typeof item !== "string"
        ? JSON.stringify(item)
        : item;

    try {
        item = JSON.parse(item);
    } catch (e) {
        return false;
    }

    if (typeof item === "object" && item !== null) {
        return true;
    }
    return false;
}

const lookatmyscore = async function (json) {
    // Check if supplied param is a json object
    if(isJson(json) != true) {
        const error = new Error("Supplied parameter must be JSON")
        throw error
    }

    // lookatmyscor.re API Url
    const url = "https://lookatmysco.re/api/submit"

    // axios post to url with param
    const post = await axios.post(url, json).then(res => {
        if (res.status === 400) {
            throw new Error("Invalid JSON Object supplied")
        } else {
            return res.data
        }   
    })
    return post
}

module.exports = lookatmyscore
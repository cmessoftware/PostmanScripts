// commonFunctions.js

/**
 * Example common function to generate a random string.
 */
function generateRandomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

/**
 * Example common function to get a timestamp.
 */
function getCurrentTimestamp() {
    return new Date().toISOString();
}

// Export functions
module.exports = {
    generateRandomString,
    getCurrentTimestamp
};

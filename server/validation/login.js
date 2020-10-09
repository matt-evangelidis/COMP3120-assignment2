const Validator = require('validator')

module.exports = function (data) {
    let errors = {}
    // Username Fields
    if (Validator.isEmpty(data.username)) {
        errors.username = 'Username field is required'
    }
    // Password Fields
    if (Validator.isEmpty(data.password)) {
        errors.password = 'Password field is required'
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}

// placeholder
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
    if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
        errors.password = 'Password must be between than 6 & 30 Characters'
    }
    // Match both password fields
    if (Validator.isEmpty(data.password2)) {
        errors.password2 = 'Please Confirm Password'
    }
    if (!Validator.equals(data.password, data.password2)) {
        errors.password2 = 'Password must match'
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}
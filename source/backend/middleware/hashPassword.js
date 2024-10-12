// băm mật khẩu với salt gồm 10 chữ số
const bcrypt = require('bcryptjs');

const hashPassword = async function(next) {
    if (!this.isModified('password')) {
        return next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
};

module.exports = hashPassword;
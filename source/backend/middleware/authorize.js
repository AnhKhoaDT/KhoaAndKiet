// để kiểm tra vai trò của người dùng trước khi đi vào các route
const authorize = (roles = []) => {
    if (typeof roles === 'string') {
        roles = [roles];
    }

    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({ success: false, message: 'Forbidden. You do not have permission to access this resource.' });
        }
        next();
    };
};

module.exports = authorize;
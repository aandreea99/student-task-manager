const { getAuth } = require("firebase-admin/auth");

const auth = async (req, res, next) => {

    try {

        const token = req.headers.authorization;

        if (!token) {
            return res.status(401).json({
                message: "Nu ești autentificat."
            });
        }

        await getAuth().verifyIdToken(token);

        next();

    } catch (error) {

        return res.status(401).json({
            message: "Token invalid."
        });

    }

};

module.exports = auth;
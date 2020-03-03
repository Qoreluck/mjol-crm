const User = require("../models/user.model");

module.exports.fetchUsers = async( req, res ) => {
    try {
        const users = await User.find( )
        const usersDate = users.map(user => ({
            media: user.media,
            _id: user._id
        }))
        res.json( usersDate )
    } catch ( e ) {
        res.status( 500 ).json( e )
    }
}
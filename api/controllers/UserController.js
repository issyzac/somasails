/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	'userview': function (req, res) {
        res.view();
    },

    create: function (req, res, next) {

        User.create(req.params.all(), function UserCreated(err, user) {
            //If There's an error
            if (err) return next(err);

            //After successfully registering the user redirect them to the users page to show details
            res.json(user);

        });

    },

    list: function (req, res) {
        User.find().exec(function foundUsers (err, users) {
            if (err) return next(err);

            res.view({
                users: users
            });

        });
    },
    
    appUsersList: function (req, res) {
        User.find().exec(function foundUsers(err, userlist){
            if (err) return next(err);
            
            res.json(userlist);
            
        });
    }
    

};

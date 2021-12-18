const userInfo = require('../models/user_info');

exports.create = function(req, res){
    var newUser = new userInfo(req.body);
    console.log(req.body);

    console.log(newUser);
    newUser.save(function(err){
        if(err){
            console.log(err);
            res.send('unable to create user, please try again!!');
        }
        else{
            res.send('user registered success');
        }
    });
}


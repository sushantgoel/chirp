var express = require('express');
var router = express.Router();


router.use(function(req,res,next){
    if(req.method == 'GET'){
        return next();
    }
    if(!req.isAuthenticated()){
        return res.redirect('/#login');
    }
});


router.route('/posts')

//return all posts
    .get(function(req, res){
        res.send({ message:'TODO return all posts'});
    })

    .post(function(req,res){
        res.send({message:'TODO Create a new post'});
    });

router.route('/posts/:id')

    .get(function(req, res){
        res.send({message:'TODO return with post with ID '+ req.params.id});
    })

    .put(function(req, res){
        res.send({message:'TODO modify with post with ID '+ req.params.id});
    })

    .delete(function(req, res){
        res.send({message:'TODO delete with post with ID '+ req.params.id});
    });
module.exports = router; 
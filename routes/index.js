var express = require('express');
var router = express.Router();
var Project=require('..Model/Project');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/project/create',function(req,res,next){
  res.render('createProject',{title:'Project Form'});

});
router.get('/project/create',function(req,res,next){
  Project.title=req.body.title;
  Project.description=req.body.description;
  Project.save()
.then((value)=>{
  console.log('project Saved');
})
.catch((err)=>{
  console.log('Error Ocurred while saving')
})
});

module.exports = router;

var express = require('express');
var router = express.Router();
var scrap=require('../lib/scrap');

router.get('/api/:text',function(req,res,next)
{
	var text=req.params.text;
	if(text){
		scrap.movieDetails(text)
				.then(function(resp)
				{
					res.json(resp);
				}).catch(function(err)
				{
					res.status(404).send({err:err});
				})	
	}
})
module.exports = router;

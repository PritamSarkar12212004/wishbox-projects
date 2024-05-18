const express= require('express');
const router = express.Router();

router.get('/Delete', async (req, res) => {
  res.send("hello")
}); 
module.exports=router;
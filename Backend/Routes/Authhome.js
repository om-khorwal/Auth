const router = require('express').Router();

router.get('/',(req,res)=>{
    res.status(200).json([
        {
            name:"mobile",        
            price:"5000"  
        },   
        {
            name:"drone",        
            price:"500000"  
        }      
    ])

})

module.exports = router;
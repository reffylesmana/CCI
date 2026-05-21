function role(req,res,next){
    const role = req.headers['role'];
    if(role === 'admin'){
        next();
    }else{
        res.status(403).json({message: 'Forbidden Admin Only'});
    }
}

export default role;
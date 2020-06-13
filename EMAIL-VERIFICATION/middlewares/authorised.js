module.exports = (req, res, next)=>{
    if(!req.session.userId){
        req.flash('error', `You're not authorised to access this page`)
        res.redirect('/users/login')
    }else{
        next()
    }
}
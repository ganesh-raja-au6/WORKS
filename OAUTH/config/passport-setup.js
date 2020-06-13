const [passport, GoogleStrategy] = [require('passport'), require('passport-google-oauth20')]

passport.use(new GoogleStrategy({
    clientID : '152951064738-boljdmt029vof3i4ko290cb6vqtofleo.apps.googleusercontent.com',
    clientSecret : 'AIzaSyCffax-IPZg3lYYEr7UdWEs0mxo-DFB2-c'
})),()=>{
    
}
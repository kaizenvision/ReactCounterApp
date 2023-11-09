
class AuthenticationService{
    registerSuccessfulLogin(username,password){
        console.log("authentication Service")
        sessionStorage.setItem('authenticatedUser',username)
    }

    logout(){
        sessionStorage.removeItem('authenticatedUser')
    }

    isUserLoggedIn(){
        if(sessionStorage.getItem('authenticatedUser') === null) return false
        return true
    }
}

export default new AuthenticationService()
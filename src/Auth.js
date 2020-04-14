class Auth {
    constructor() {
        this.authenticated = false;
    }

    // Token setten en boolean op true zetten
    login(token) {
        console.log(token);
        window.sessionStorage.setItem("token", token);
        this.authenticated = true;
    }

    // Token removen en boolean op false zetten
    logout() {
        window.sessionStorage.removeItem("token");
        this.authenticated = false;
    }

    isAuthenticated() {
        if (window.sessionStorage.getItem("token") != null) {
            return true;
        } else {
            return false;
        }
    }
}

export default new Auth();
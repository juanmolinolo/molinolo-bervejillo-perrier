export default class usuario {
    /**
     * @param {string} user 
     * @param {string} mail 
     * @param {string} contraseña  
     */
    constructor(user, mail, contraseña) {
      this.user = user;
      this.mail = mail;
      this.contraseña = contraseña;
    }

    getUsername() {
        return this.user;
    }

    getMail() {
        return this.mail;
    }

    getPassword() {
        return this.contraseña;
    }
  }
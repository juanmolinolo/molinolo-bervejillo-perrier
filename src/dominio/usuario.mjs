export default class usuario {

    /**
     * Creates a new user 
     * @param {string} user 
     * @param {string} mail 
     * @param {string} contraseña  
     */
    constructor(user, mail, contraseña) {
      this.user = user;
      this.mail = mail;
      this.contraseña = contraseña;
    }
  }
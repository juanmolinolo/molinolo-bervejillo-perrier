/* eslint-disable linebreak-style */
/** Constructor de clase Usuario
 * @constructor
 */
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

  /** retorna el nombre de usuario
   * @return {string}
   */
  getUsername() {
    return this.user;
  }

  /** retorna el mail de usuario
   * @return {string}
   */
  getMail() {
    return this.mail;
  }

  /** retorna la contrasena del usuario
   * @return {string}
   */
  getPassword() {
    return this.contraseña;
  }
}

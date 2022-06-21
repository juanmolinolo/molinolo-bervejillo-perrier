/* eslint-disable linebreak-style */
/** Constructor de clase Usuario
 * @constructor
 */
export default class usuario {
  /**
     * @param {string} user
     * @param {string} mail
     * @param {string} contraseña
     * @param {array} favoritos
     */
  constructor(user, mail, contraseña, favoritos) {
    this.user = user;
    this.mail = mail;
    this.contraseña = contraseña;
    this.favoritos = favoritos;
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

  /** retorna la lista favoritos del usuario
   * @return {array}
   */
  getListaFavs() {
    return this.favoritos;
  }
}

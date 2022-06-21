/* eslint-disable linebreak-style */
import NFT from './nft.mjs';
import Usuario from './usuario.mjs';

/** Constructor de clase Sistema
 * @constructor
 */
export default class Sistema {
/**
 */
  constructor() {
    this.listaNFTS = [];
    this.listaUsuarios = [];
  }

  /** agrega un nft a la lista
   * @param {string} tit
   * @param {string} prec
   * @param {string} desc
   * @param {string} cread
   * @param {string} prop
   */
  addNFT(tit, prec, desc, cread, prop) {
    const nftAgregar = new NFT(tit, prec, desc, cread, prop);
    this.listaNFTS.push(nftAgregar);
  }

  /** agrega un usuario a la lista
   * @param {*} user
   * @param {*} mail
   * @param {*} contraseña
   */
  addUsuario(user, mail, contraseña) {
    const usuarioAgregar = new Usuario(user, mail, contraseña);
    this.listaUsuarios.push(usuarioAgregar);
  }

  /** retorna el array de usuarios
   * @return {array}
   */
  getListaUsuarios() {
    return this.listaUsuarios;
  }

  /** recorre la lista usuarios y retorna el objeto con nombre = user
   * @param {string} user
   * @return {Usuario}
   */
  getUsuarioByUser(user) {
    for (let i=0; i < this.listaUsuarios.length; i++) {
      if (this.listaUsuarios[i].getUsername() == user) {
        return this.listaUsuarios[i];
      }
    }
    return null;
  }

  /** carga los datos predeterminados
   */
  cargarSistemaPredet() {
    this.addUsuario('moli', 'moli@', 'prueba');
  }
}


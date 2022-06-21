/* eslint-disable linebreak-style */
/* eslint-disable max-len */
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
   * @param {string} categoria
   * @param {string} pathImg
   */
  addNFT(tit, prec, desc, cread, categoria, pathImg) {
    const nftAgregar = new NFT(tit, prec, desc, cread, categoria, pathImg);
    this.listaNFTS.push(nftAgregar);
  }

  /** agrega un usuario a la lista
   * @param {*} user
   * @param {*} mail
   * @param {*} contraseña
   * @param {array} listaFavs
   */
  addUsuario(user, mail, contraseña, listaFavs) {
    const usuarioAgregar = new Usuario(user, mail, contraseña, listaFavs);
    this.listaUsuarios.push(usuarioAgregar);
  }

  /** retorna el array de usuarios
   * @return {array}
   */
  getListaUsuarios() {
    return this.listaUsuarios;
  }

  /** retorna el array de nfts
   * @return {array}
   */
  getListaNFTs() {
    return this.listaNFTS;
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

  /** recorre la lista nfts y retorna el objeto con titulo = titulo
   * @param {string} titulo
   * @return {NFT}
   */
  getNFTByTitulo(titulo) {
    for (let i=0; i<this.listaNFTS.length; i++) {
      if (this.listaNFTS[i].getTitulo() == titulo) {
        return this.listaNFTS[i];
      }
    }
    return null;
  }

  /** recorre la lista nfts y retorna el objeto con path = path
   * @param {string} path
   * @return {NFT}
   */
  getNFTByPath(path) {
    for (let i=0; i<this.listaNFTS.length; i++) {
      if (this.listaNFTS[i].getPath() == path) {
        return this.listaNFTS[i];
      }
    }
    return null;
  }

  /** carga los datos predeterminados
   */
  cargarSistemaPredet() {
    this.addNFT('Cubo rubiks', 500, 'Imagen represantiva de un cubo rubiks', 'Juan', 'Otros', '../imagenes/rubiks.jpg');
    this.addNFT('Auto', 500, 'Imagen represantiva de un auto rapido', 'Juan', 'Arte', '../imagenes/auto.jpg');
    this.addNFT('Cubo rubiks', 500, 'Imagen represantiva de un cubo rubiks', 'Juan', 'Otros', '../imagenes/rubiks.jpg');
    this.addNFT('Cubo rubiks', 500, 'Imagen represantiva de un cubo rubiks', 'Juan', 'Otros', '../imagenes/rubiks.jpg');
    this.addNFT('Cubo rubiks', 500, 'Imagen represantiva de un cubo rubiks', 'Juan', 'Otros', '../imagenes/rubiks.jpg');
    this.addNFT('Cubo rubiks', 500, 'Imagen represantiva de un cubo rubiks', 'Juan', 'Otros', '../imagenes/rubiks.jpg');
    this.addNFT('Cubo rubiks', 500, 'Imagen represantiva de un cubo rubiks', 'Juan', 'Otros', '../imagenes/rubiks.jpg');
    this.addNFT('Cubo rubiks', 500, 'Imagen represantiva de un cubo rubiks', 'Juan', 'Otros', '../imagenes/rubiks.jpg');
    this.addNFT('Cubo rubiks', 500, 'Imagen represantiva de un cubo rubiks', 'Juan', 'Otros', '../imagenes/rubiks.jpg');
    this.addNFT('Cubo rubiks', 500, 'Imagen represantiva de un cubo rubiks', 'Juan', 'Otros', '../imagenes/rubiks.jpg');
    this.addNFT('Cubo rubiks', 500, 'Imagen represantiva de un cubo rubiks', 'Juan', 'Otros', '../imagenes/rubiks.jpg');
    this.addNFT('Cubo rubiks', 500, 'Imagen represantiva de un cubo rubiks', 'Juan', 'Otros', '../imagenes/rubiks.jpg');
    this.addNFT('Cubo rubiks', 500, 'Imagen represantiva de un cubo rubiks', 'Juan', 'Otros', '../imagenes/rubiks.jpg');
    this.addNFT('Cubo rubiks', 500, 'Imagen represantiva de un cubo rubiks', 'Juan', 'Otros', '../imagenes/rubiks.jpg');
    this.addNFT('Cubo rubiks', 500, 'Imagen represantiva de un cubo rubiks', 'Juan', 'Otros', '../imagenes/rubiks.jpg');
    this.addNFT('Cubo rubiks', 500, 'Imagen represantiva de un cubo rubiks', 'Juan', 'Otros', '../imagenes/rubiks.jpg');
    this.addNFT('Cubo rubiks', 500, 'Imagen represantiva de un cubo rubiks', 'Juan', 'Otros', '../imagenes/rubiks.jpg');
    this.addNFT('Cubo rubiks', 500, 'Imagen represantiva de un cubo rubiks', 'Juan', 'Otros', '../imagenes/rubiks.jpg');
    this.addNFT('Cubo rubiks', 500, 'Imagen represantiva de un cubo rubiks', 'Juan', 'Otros', '../imagenes/rubiks.jpg');
    this.addNFT('Cubo rubiks', 500, 'Imagen represantiva de un cubo rubiks', 'Juan', 'Otros', '../imagenes/rubiks.jpg');
    this.addNFT('Cubo rubiks', 500, 'Imagen represantiva de un cubo rubiks', 'Juan', 'Otros', '../imagenes/rubiks.jpg');
  }
}


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
    this.addNFT('Gran nft, gira', 500, 'Comidita girando', 'Juan', 'Otros', '../imagenes/nftSupper.jpg');
    this.addNFT('Cubo rubiks', 500, 'Imagen represantiva de un cubo rubiks', 'Juan', 'Otros', '../imagenes/rubiks.jpg');
    this.addNFT('Auto', 500, 'Imagen represantiva de un auto rapido', 'Juan', 'Arte', '../imagenes/auto.jpg');
    this.addNFT('Coffee', 100, 'Granos de cafe', 'Juan', 'Fotografia', '../imagenes/coffee.jpg');
    this.addNFT('Cono mcDonalds', 40, 'cono del mcdonalds bien riko', 'Juan', 'Otros', '../imagenes/conoRico.jpg');
    this.addNFT('El Bicho', 500, 'Imagen represantiva de un bicho en su habitat', 'Juan', 'Otros', '../imagenes/cr7.jpg');
    this.addNFT('Paisaje', 500, 'Paisaje de un bosque', 'Juan', 'Otros', '../imagenes/firwatch.jpg');
    this.addNFT('Mbappe preso', 500, 'Mbappe ficha por la real', 'Juan', 'Otros', '../imagenes/mbappe.jpg');
    this.addNFT('Muchas pizzas, creo', 500, 'NFT que va cambiando de pizza', 'Juan', 'Otros', '../imagenes/muchasPizzas.jpg');
    this.addNFT('McFlury', 500, 'Un buen helado del mc', 'Juan', 'Otros', '../imagenes/mcFlurry.jpg');
    this.addNFT('Un buen car', 500, 'Foto artistica de un mercedes', 'Juan', 'Otros', '../imagenes/mercedes.jpg');
    this.addNFT('McNuggets', 500, 'Nunca vienen mal unas nuggets', 'Juan', 'Otros', '../imagenes/nuggets.jpg');
    this.addNFT('El mejor dt', 500, 'Pablo repetto, gran hombre', 'Juan', 'Otros', '../imagenes/repetto.jpg');
    this.addNFT('Osito', 500, 'Un oso fachero', 'Juan', 'Otros', '../imagenes/oso.jpg');
    this.addNFT('Pizza', 500, 'Una pizza bien rica', 'Juan', 'Otros', '../imagenes/pizza.jpg');
    this.addNFT('Un cactus esponjoso', 500, 'shake it', 'Juan', 'Otros', '../imagenes/bootycall.jpg');
    this.addNFT('dia de Playa', 500, 'Un lindo paisaje de una playa', 'Juan', 'Otros', '../imagenes/playa.jpg');
    this.addNFT('Atardecer con oleos', 500, 'Un lindo retrato de un atardecer', 'Juan', 'Otros', '../imagenes/atardecerOleo.jpg');
    this.addNFT('Una jirafa muy fachera', 500, 'foto de perfil de una jirafa', 'Juan', 'Otros', '../imagenes/girafa.jpg');
    this.addNFT('Hopper te banco', 500, 'El bueno de Hopper', 'Juan', 'Otros', '../imagenes/hopper.jpg');
    this.addNFT('Una chica', 500, 'Ilustracion de una chica', 'Juan', 'Otros', '../imagenes/ilustracion1.jpg');
    this.addNFT('NFT persona', 500, 'Es un NFT de una persona, bien feo', 'Juan', 'Otros', '../imagenes/nftPersona.jpg');
    this.addNFT('Gatito feo', 500, 'Otro gato mas', 'Juan', 'Otros', '../imagenes/nftCat2.jpg');
    this.addNFT('Una pizza, creo', 500, 'Algo que parece ser una pizza', 'Juan', 'Otros', '../imagenes/nftPizza.jpg');

    this.addUsuario('Juan', 'moli@', 'prueba', []);
  }
}


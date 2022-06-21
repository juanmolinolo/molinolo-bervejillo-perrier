/* eslint-disable linebreak-style */
/** Constructor de clase NFT
 * @constructor
 */
export default class NFT {
  /**
     * @param {string} titulo
     * @param {int} precio
     * @param {string} descripcion
     * @param {string} creador
     * @param {string} categoria
     * @param {string} pathImg
     */
  constructor(titulo, precio, descripcion, creador, categoria, pathImg) {
    this.titulo = titulo;
    this.precio = precio;
    this.descripcion = descripcion;
    this.creador = creador;
    this.categoria = categoria;
    this.pathImg = pathImg;
  }

  /** retorna el path de la imagen
   * @return {string}
   */
  getPath() {
    return this.pathImg;
  }

  /** retorna el titulo de la imagen
   * @return {string}
   */
  getTitulo() {
    return this.titulo;
  }
}

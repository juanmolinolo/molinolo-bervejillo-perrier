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

  /** retorna el titulo del nft
   * @return {string}
   */
  getTitulo() {
    return this.titulo;
  }

  /** retorna el precio del nft
   * @return {int}
   */
  getPrecio() {
    return this.precio;
  }

  /** retorna la descripcion del nft
     * @return {string}
     */
  getDescripcion() {
    return this.descripcion;
  }

  /** retorna el creador del nft
     * @return {string}
     */
  getCreador() {
    return this.creador;
  }

  /** retorna la categoria del nft
   * @return {string}
   */
  getCategoria() {
    return this.categoria;
  }

  /** retorna el path del nft
   * @return {string}
   */
  getPath() {
    return this.pathImg;
  }
}

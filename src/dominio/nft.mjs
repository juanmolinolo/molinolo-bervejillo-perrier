export default class NFT {
    /**
     * @param {string} titulo 
     * @param {int} precio 
     * @param {string} descripcion 
     * @param {string} creador 
     * @param {string} propietario 
     */
    constructor(titulo, precio, descripcion, creador, propietario) {
      this.titulo = titulo;
      this.precio = precio;
      this.descripcion = descripcion;
      this.creador = creador;
      this.propietario = propietario;
    }
  }
export default class listaNFTs {

  constructor() {
    this.nfts = [];
  }

  agregar(nft) {
    let nuevoNFT = this.nfts.some(m => m.titulo == nft.titulo);
    if (!nuevoNFT) {
      this.nfts.push(nft);
    } else {
      throw new Error(`No se pudo agregar. ${nft.titulo} ya existe.`);
    }
  }

  getNFTs() {
    return this.nfts;
  }
}
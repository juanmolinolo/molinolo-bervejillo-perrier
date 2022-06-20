import NFT from "./nft.mjs"
import Usuario from "./usuario.mjs"

export default class Sistema {

    constructor() {
        this.listaNFTS = [];
        this.listaUsuarios = [];
    }

    addNFT(titulo, precio, descripcion, creador, propietario){
        const nftAgregar = new NFT(titulo, precio, descripcion, creador, propietario);
        let existe = this.listaNFTS.some(m => m.titulo == nftAgregar.titulo);
        if (!existe) {
            this.listaNFTS.push(nftAgregar);
        } else {
            throw new Error(`Un NFT con ese titulo ya existe.`);
        }
    }

    addUsuario(user, mail, contraseña){
        const usuarioAgregar = new Usuario(user, mail, contraseña);
        let existe = this.listaUsuarios.some(m => m.user == usuarioAgregar.user);
        if (!existe) {
            this.listaUsuarios.push(usuarioAgregar);
        } else {
            throw new Error(`Un perfil con ese usuario ya existe.`);
        }
    }

    getUsuarioByUser(user) {
        for (var i=0; i < this.listaUsuarios.length; i++) {
            if (this.listaNFTS[i].getUsername() == user) {
                return this.listaNFTS[i];
            }
        }
    }
    
    /*
    cargarSistemaPredet(){
        this.addNFT("Verano", 200, "El verano azul", "Milagros", "Perri");
        this.addNFT("Punta del este", 400, "Un maravilloso paisaje", "JuanXD", "Perri");
        this.addNFT("Criaturas I", 700, "Creaciones de la coleccion Criaturas", "Perri", "JuanXD");
        this.addNFT("Criaturas II", 750, "Creaciones de la coleccion Criaturas", "Perri", "JuanMoli");
    }
    */
}


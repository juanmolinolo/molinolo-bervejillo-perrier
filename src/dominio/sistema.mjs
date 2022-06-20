import NFT from "./nft.mjs"
import Usuario from "./usuario.mjs"

export default class Sistema {

    constructor() {
        this.listaNFTS = [];
        this.listaUsuarios = [];
    }

    //funciones NFT
    addNFT(titulo, precio, descripcion, creador, propietario){
        const nftAgregar = new NFT(titulo, precio, descripcion, creador, propietario);
        this.listaNFTS.push(nftAgregar);
    }

    //funciones usuarios
    addUsuario(user, mail, contraseña){
        const usuarioAgregar = new Usuario(user, mail, contraseña);
        this.listaUsuarios.push(usuarioAgregar);
    }

    getListaUsuarios() {
        return this.listaUsuarios;
    }

    getUsuarioByUser(user) {
        for (var i=0; i < this.listaUsuarios.length; i++) {
            if (this.listaUsuarios[i].getUsername() == user) {
                return this.listaUsuarios[i];
            }
        }
        return null;
    }

    //funciones aux
    cargarSistemaPredet(){
        this.addUsuario("moli", "moli@", "prueba");
    }
}


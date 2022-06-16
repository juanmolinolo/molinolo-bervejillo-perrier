import Categoria from "./categoria.mjs";

export class Sistema{

    //crea nuevo sistema
    constructor(){
        this.listaNFTS = [];
        this.listaUsuarios = [];
        this.listaCategorias = [];
    }

    addCategoria(nombre){
        const catAgregar = new Categoria(nombre);
        let existe = this.listaCategorias.some(m => m.nombreCat == catAgregar.nombre);
        if (!existe) {
         this.listaCategorias.push(catAgregar);
        } else {
        throw new Error(`Una categoria con ese nombre ya existe.`);
        }
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

    cargarSistemaPredet(){
        this.addCategoria("Musica");
        this.addCategoria("Fotografia");
        this.addCategoria("Ilustraciones");

        this.addNFT("Verano", 200, "El verano azul", "Milagros", "Perri");
        this.addNFT("Punta del este", 400, "Un maravilloso paisaje", "JuanXD", "Perri");
        this.addNFT("Criaturas I", 700, "Creaciones de la coleccion Criaturas", "Perri", "JuanXD");
        this.addNFT("Criaturas II", 750, "Creaciones de la coleccion Criaturas", "Perri", "JuanMoli");

    }
}
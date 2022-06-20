import { MDCRipple } from '@material/ripple';
import { MDCTopAppBar } from '@material/top-app-bar';
import { MDCTabBar } from '@material/tab-bar';
import { MDCTextField } from '@material/textfield';
import { MDCSelect } from '@material/select';
import {MDCSnackbar} from '@material/snackbar';
import listaNFTs from '../../dominio/listaNFTs.mjs';
import NFT from '../../dominio/nft.mjs';
//import Sistema from '../../dominio/sistema.mjs';

//let sistema = new Sistema();

const listaNFT = new listaNFTs();

const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);
const fabRipple = new MDCRipple(document.querySelector('.mdc-fab'));

const tabBar = new MDCTabBar(document.querySelector(".mdc-tab-bar"));
tabBar.listen("MDCTabBar:activated", (activatedEvent) => {
  document.querySelectorAll(".content").forEach((element, index) => {
    if (index === activatedEvent.detail.index) {
      element.classList.remove("sample-content--hidden");
    } else {
      element.classList.add("sample-content--hidden");
    }
  });
});

function inicio() {
  document.getElementById("btnAgregar").addEventListener("click", agregarNFT);
}

function agregarNFT() {
    let titulo = document.getElementById("idTitulo").value;
    let precio = document.getElementById("idPrecio").value;
    let descripcion = document.getElementById("idDescripcion").value;
    let categoria = document.getElementById("idCategoria").value;
    let imagen = document.getElementById("idImagen").value;
    //let creador = document.getElementById("idUsuario").value;

    let nft = new NFT(titulo, precio, descripcion, categoria, imagen);
    sistema.agregarDonante(donante);
    var x = document.getElementById("idDonante");
    var option = document.createElement("option");
    option.text = nombre;
    x.add(option);

    document.getElementById("idNombre").value = "";
		document.getElementById("idDirec").value = "";
		document.getElementById("idTel").value = "";
}


const select = new MDCSelect(document.querySelector('.mdc-select'));

const addButton = new MDCRipple(document.getElementById('addButton'));
addButton.listen('click', () => {
  let title = textFieldTitle.value;
  let year = textFieldYear.value;
  let genre = selectGenre.value;
  try {
    let newNFT = new NFT(title, genre, year);
    listaNFT.agregar(newNFT);
  } catch (error) {
    const snackbar = new MDCSnackbar(document.querySelector('.mdc-snackbar'));
    snackbar.labelText = error.message;
    snackbar.open();
  } finally {
    let nfts = listaNFT.getNFTs();
    console.log(nfts);
  }
})
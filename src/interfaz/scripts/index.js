import { MDCRipple } from '@material/ripple';
import { MDCTopAppBar } from '@material/top-app-bar';
import { MDCTabBar } from '@material/tab-bar';
import { MDCTextField } from '@material/textfield';
import { MDCSelect } from '@material/select';
import {MDCSnackbar} from '@material/snackbar';
import Sistema from "../../dominio/sistema.mjs";

window.addEventListener("load", inicio);

//varibles de referencia
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);

//funcionamiento de tabs
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

let sistema = new Sistema();
sistema.cargarSistemaPredet();

function inicio() {
  document.getElementById("btnAgregarNFT").addEventListener("click", agregarNFT);
  document.getElementById("btnCrearUsuario").addEventListener("click", agregarUsuario);
  document.getElementById("btnLogin").addEventListener("click", login);
}

function agregarNFT() {
  let titulo = document.getElementById("idTitulo").value;
  let precio = document.getElementById("idPrecio").value;
  let descripcion = document.getElementById("idDescripcion").value;
  let categoria = document.getElementById("idCategoria").value;
  let imagen = document.getElementById("idImagen").value;
  //let creador = document.getElementById("idUsuario").value;

  //let nft = new NFT(titulo, precio, descripcion, categoria, imagen);
}

function login(){
  let user = document.getElementById("txtUsuarioLogin").value;
  let password = document.getElementById("txtPasswordLogin").value;

  let currentUser = sistema.getUsuarioByUser(user);

  if (currentUser != null && currentUser.getPassword() == password) {
    document.getElementById("usernameActual").innerHTML = currentUser.getUsername();
  }
  
}

function agregarUsuario() {
  if(document.getElementById("idCrearUsuario").reportValidity()){
    let user = document.getElementById("txtUsuarioCrear").value;
    let mail = document.getElementById("txtMail").value;
    let password = document.getElementById("txtPasswordCrear").value;

    //let usuario = new Usuario(user, mail, contraseña);
    if (sistema.getUsuarioByUser(user) == null) {
      sistema.addUsuario(user, mail, password);
    }

    document.getElementById("txtUsuarioCrear").value = "";
    document.getElementById("txtMail").value = "";
    document.getElementById("txtPasswordCrear").value = "";
    }
  
}



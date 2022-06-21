/* eslint-disable linebreak-style */
/* eslint-disable max-len */
import {MDCTabBar} from '@material/tab-bar';
import NFT from '../../dominio/nft.mjs';
import Sistema from '../../dominio/sistema.mjs';

window.addEventListener('load', inicio);

const tabBar = new MDCTabBar(document.querySelector('.mdc-tab-bar'));
tabBar.listen('MDCTabBar:activated', (activatedEvent) => {
  document.querySelectorAll('.content').forEach((element, index) => {
    if (index === activatedEvent.detail.index) {
      element.classList.remove('sample-content--hidden');
    } else {
      element.classList.add('sample-content--hidden');
    }
  });
});

const sistema = new Sistema();
sistema.cargarSistemaPredet();
/**
 */
function inicio() {
  document.getElementById('btnAgregarNFT').addEventListener('click', agregarNFT);
  document.getElementById('btnCrearUsuario').addEventListener('click', agregarUsuario);
  document.getElementById('btnLogin').addEventListener('click', login);
  mostrarCartas('lista_nfts_interna', (new NFT('juan', 500, 'prueba', 'juan', 'juan', '../imagenes/prueba.jpeg')));
}

/** muestra la carta del NFT parametro
 * @param {string} nombreLista
 * @param {NFT} nft
 */
function mostrarCartas(nombreLista, nft) {
  // accedo a la lista principal
  const lista = document.getElementById(nombreLista);

  // <div class="mdc-card my-card">
  const divCarta = document.createElement('div');
  divCarta.className = 'mdc-card my-card';
  lista.appendChild(divCarta);

  // <div class="mdc-card__primary-action" tabindex="0">
  const divAction = document.createElement('div');
  divAction.className = 'mdc-card__primary-action';
  divAction.tabIndex = '0';
  divCarta.appendChild(divAction);

  // <div class="mdc-card__media mdc-card__media--square my-card__media">
  const divMedia = document.createElement('div');
  divMedia.className = 'mdc-card__media mdc-card__media--square my-card__media';
  divAction.appendChild(divMedia);

  // <div class="mdc-card__media-content my-card-content">
  const divContent = document.createElement('div');
  divContent.className = 'mdc-card__media-content my-card-content';
  divMedia.appendChild(divContent);

  // <a> img </a>
  const imgHolder = document.createElement('a');
  divContent.appendChild(imgHolder);

  // <img class="mdc-image-list__image" src="./imagenes/prueba.jpg">
  const img = document.createElement('img');
  img.className = 'mdc-image-list__image';
  img.src = nft.getPath();
  imgHolder.appendChild(img);

  // <div class="mdc-card mdc-card--outlined">
  const divOutline = document.createElement('div');
  divOutline.className = 'mdc-card mdc-card--outlined';
  divCarta.appendChild(divOutline);

  // <div class="mdc-card__actions">
  const divAction2 = document.createElement('div');
  divAction2.className = 'mdc-card__actions';
  divOutline.appendChild(divAction2);

  // <div class="mdc-card__action-buttons">
  const divActionButtons = document.createElement('div');
  divActionButtons.className = 'mdc-card__action-buttons';
  divAction2.appendChild(divActionButtons);

  // <button class="mdc-button mdc-card__action mdc-card__action--button">
  const button1 = document.createElement('button');
  button1.className = 'mdc-button mdc-card__action mdc-card__action--button';
  divActionButtons.appendChild(button1);

  // <div class="mdc-button__ripple">
  const anim1 = document.createElement('div');
  anim1.className = 'mdc-button__ripple';
  button1.appendChild(anim1);

  // <span class="mdc-button__label">
  const label1 = document.createElement('span');
  label1.className = 'mdc-button__label';
  label1.innerText = 'Datos';
  button1.appendChild(label1);

  // <div class="mdc-card__action-icons">
  const icon = document.createElement('div');
  icon.className = 'mdc-card__action-icons';
  divAction2.appendChild(icon);

  // <button class="material-icons mdc-icon-button mdc-card__action mdc-card__action--icon" title="favorite">favorite
  const buttonFav = document.createElement('button');
  buttonFav.className = 'material-icons mdc-icon-button mdc-card__action mdc-card__action--icon';
  buttonFav.title = 'favorite';
  buttonFax.innerText = 'favorite';
  divAction2.appendChild(buttonFav);
}

/** agrega el NFT
 */
function agregarNFT() {
  const titulo = document.getElementById('idTitulo').value;
  const precio = document.getElementById('idPrecio').value;
  const descripcion = document.getElementById('idDescripcion').value;
  const categoria = document.getElementById('idCategoria').value;
  const imagen = document.getElementById('idImagen').value;


  // let creador = document.getElementById("idUsuario").value;

  // let nft = new NFT(titulo, precio, descripcion, categoria, imagen);
}

/** logea el usuario
 */
function login() {
  const user = document.getElementById('txtUsuarioLogin').value;
  const password = document.getElementById('txtPasswordLogin').value;

  const currentUser = sistema.getUsuarioByUser(user);

  if (currentUser != null && currentUser.getPassword() == password) {
    document.getElementById('usernameActual').innerHTML = currentUser.getUsername();
  }
}
/** agrega el usuario
 */
function agregarUsuario() {
  if (document.getElementById('idCrearUsuario').reportValidity()) {
    const user = document.getElementById('txtUsuarioCrear').value;
    const mail = document.getElementById('txtMail').value;
    const password = document.getElementById('txtPasswordCrear').value;

    // let usuario = new Usuario(user, mail, contraseña);
    if (sistema.getUsuarioByUser(user) == null) {
      sistema.addUsuario(user, mail, password);
    }

    document.getElementById('txtUsuarioCrear').value = '';
    document.getElementById('txtMail').value = '';
    document.getElementById('txtPasswordCrear').value = '';
  }
}

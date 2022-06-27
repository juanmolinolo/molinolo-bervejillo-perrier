/* eslint-disable linebreak-style */
/* eslint-disable max-len */
import {MDCTabBar} from '@material/tab-bar';
import {MDCSelect} from '@material/select';
import Sistema from '../../dominio/sistema.mjs';

window.addEventListener('load', inicio);
const sistema = new Sistema();
sistema.cargarSistemaPredet();

/** codigo funcional del dropdown categoria
 */
const select = new MDCSelect(document.querySelector('.mdc-select'));
select.listen('MDCSelect:change', () => {});

/** codigo funcional de los tabs
 */
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

/** crea los event listeners necesarios y carga las cards
 */
function inicio() {
  document.getElementById('btnAgregarNFT').addEventListener('click', agregarNFT);
  document.getElementById('btnCrearUsuario').addEventListener('click', agregarUsuario);
  document.getElementById('btnLogin').addEventListener('click', login);
  actualizaFeeds();
  creaActionListeners();
}

/**
 */
function creaActionListeners() {
  for (let i=0; i<sistema.getListaNFTs().length; i++) {
    const nft = sistema.getListaNFTs()[i];
    document.getElementById('btnDatos' + nft.getTitulo()).addEventListener('click', function() {
      funcionAlert(nft);
    });
  }
  for (let i=0; i<sistema.getListaNFTs().length; i++) {
    const nft = sistema.getListaNFTs()[i];
    document.getElementById('btnFav' + nft.getTitulo()).addEventListener('click', function() {
      agregaNFTFavoritos(nft);
    });
  }
}

/** actualiza los feeds
 */
function actualizaFeeds() {
  document.getElementById('lista_nfts_interna').innerHTML = '';
  document.getElementById('lista_nfts_interna_favs').innerHTML = '';
  for (let i=0; i<sistema.getListaNFTs().length; i++) {
    mostrarCartas('lista_nfts_interna', sistema.getListaNFTs()[i]);
  }

  const curr = document.getElementById('usernameActual').innerHTML;
  if (curr != null) {
    const user = sistema.getUsuarioByUser(curr);
    if (user != null) {
      for (let i = 0; i < user.getListaFavs().length; i++) {
        mostrarCartas('lista_nfts_interna_favs', user.getListaFavs()[i]);
      }
    }
  }
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
  button1.id = 'btnDatos' + nft.getTitulo();
  button1.name = nft.getTitulo();
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

  // <button class="material-icons mdc-icon-button mdc-card__action mdc-card__action--icon">favorite
  const buttonFav = document.createElement('button');
  buttonFav.className = 'material-icons mdc-icon-button mdc-card__action mdc-card__action--icon';
  buttonFav.id = 'btnFav' + nft.getTitulo();
  buttonFav.innerText = 'favorite';
  divAction2.appendChild(buttonFav);
}

/** agrega el NFT
 */
function agregarNFT() {
  if (document.getElementById('idAgregarNFT').reportValidity()) {
    const tit = document.getElementById('txtAgregar').value;
    const prec = document.getElementById('txtPrecio').value;
    const desc = document.getElementById('txtDescripcion').value;
    const cat = select.value;
    const cread = document.getElementById('usernameActual').innerHTML;
    console.log(cread);
    const fakepath = document.getElementById('imagen').value;
    const path = '../imagenes/' + (fakepath.substring(12, fakepath.length));

    if (cread != null) {
      if (sistema.getNFTByTitulo(tit) == null && sistema.getNFTByPath(path) == null) {
        sistema.addNFT(tit, prec, desc, cread, cat, path);
        document.getElementById('txtAgregar').value = '';
        document.getElementById('txtPrecio').value = '';
        document.getElementById('txtDescripcion').value = '';
        console.log(path);
        actualizaFeeds();
        creaActionListeners();
      } else {
        if (sistema.getNFTByTitulo(tit) != null) {
          alert('Ya existe un NFT con ese titulo. Intente otro titulo.');
        }
        if (sistema.getNFTByPath(path) != null) {
          alert('Ya existe un NFT con ese nombre de archivo. Intente otro.');
        }
      }
    } else {
      alert('No hay un usuario logeado. Intente nuevamente luego de iniciar sesion.');
    }
  }
}

/** agrega el usuario
 */
function agregarUsuario() {
  if (document.getElementById('idCrearUsuario').reportValidity()) {
    const user = document.getElementById('txtUsuarioCrear').value;
    const mail = document.getElementById('txtMail').value;
    const password = document.getElementById('txtPasswordCrear').value;
    const listaFavs = [];

    if (sistema.getUsuarioByUser(user) == null) {
      sistema.addUsuario(user, mail, password, listaFavs);
      document.getElementById('txtUsuarioCrear').value = '';
      document.getElementById('txtMail').value = '';
      document.getElementById('txtPasswordCrear').value = '';
      alert('El usuario ha sido agregado correctamente.');
    } else {
      alert('Ya existe un usuario con ese nombre. Intente con uno diferente.');
    }
  }
}

/** logea el usuario
 */
function login() {
  const user = document.getElementById('txtUsuarioLogin').value;
  const password = document.getElementById('txtPasswordLogin').value;

  const currentUser = sistema.getUsuarioByUser(user);

  if (currentUser != null && currentUser.getPassword() == password) {
    document.getElementById('usernameActual').innerHTML = currentUser.getUsername();
    actualizaFeeds();
    creaActionListeners();
  } else {
    alert('El usuario o contraseña son incorrectos. Intente nuevamente.');
  }
}

/**
 * @param {NFT} nft
 */
function agregaNFTFavoritos(nft) {
  const curr = document.getElementById('usernameActual').innerHTML;
  if (curr != '') {
    const user = sistema.getUsuarioByUser(curr);
    let existe = false;
    for (let i=0; i<user.getListaFavs().length; i++) {
      if (user.getListaFavs()[i] == nft) {
        existe = true;
      }
    }
    if (existe) {
      alert('El NFT ya esta marcado como favorito!');
    } else {
      user.getListaFavs().push(nft);
      alert('Se agrego el NFT a la lista de favoritos');
    }
  } else {
    alert('No hay un usuario logeado. Para agregar a favoritos debe iniciar sesion.');
  }
  actualizaFeeds();
  creaActionListeners();
}

/** alerta con los datos del nft
 * @param {NFT} nft
 */
function funcionAlert(nft) {
  alert('Titulo: ' + nft.getTitulo() + '\nPrecio: ' + nft.getPrecio() + '\nDescripcion: ' + nft.getDescripcion() + '\nCreador: ' + nft.getCreador() + '\nCategoria: ' + nft.getCategoria());
}

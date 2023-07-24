const burgerMenuOpenBtn = document.querySelector('.burger-btn')
const burgerMenuOpenBtnMobile = document.querySelector('.mobile-header__menu-btn')
const burgerMenuCloseBtn = document.querySelector('.header__menu-close-btn')
const burgerMenu = document.querySelector('.header__menu')
const mobileSearchBtn = document.querySelector('.header-btn-catalog-mob')
const mobileCatalogCloseBtn = document.querySelector('.mobile-catalog__btn-close ')
const mobileCatalog = document.querySelector('.mobile-catalog')
const scrollBtn = document.querySelector('.scroll-btn')
const modalCloseBtn = document.querySelector('.modal-qw__close-btn')
const modalQuicView = document.querySelector('.modal-qw')
const modalOverlay = document.querySelector('.modal-qw__overlay')
const modalOpenBtn = document.querySelectorAll('.product__hover-btn')
const InputWrap = document.querySelector('.hedaer-input-wrap')
const headerInput = document.querySelector('.header-input')
const headerInputBtn = document.querySelector('.heaedr-input-btn')
const accordionBtn = document.getElementsByClassName('accordion__btn')
const articlesBtn = document.querySelector('.btn-all-articles')
const articlesMenu = document.querySelector('.all-articles-menu')
const subscribeInputWrap = document.querySelector('.aside-block__input-wrapper')
const subscribeInput = document.querySelector('.aside-block__input')

function toggleArticelsMenu () {
  articlesMenu.classList.toggle('all-articles-menu_active')
}
if (articlesBtn !== null){
  articlesBtn.addEventListener('click', toggleArticelsMenu)
}
if (subscribeInput !== null) {
  subscribeInput.onfocus = function () {
    subscribeInputWrap.style.backgroundColor = 'rgba(57, 101, 214, 0.04)'
  }

  subscribeInput.onblur = function () {
    subscribeInputWrap.removeAttribute("style")
  }

}


if (accordionBtn.length !== 0) {
  for ( let i = 0;  i < accordionBtn.length; i++ ) {
    accordionBtn[i].addEventListener("click", function() {
      this.classList.toggle("accordion__btn_active");
      let panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    })
  }
}



if (headerInput !== null) {
  headerInput.onfocus = function () {
    InputWrap.style.backgroundColor = 'rgba(57, 101, 214, 0.04)'
    headerInputBtn.style.backgroundImage = "url(/images/search-blue.svg)";
  }
  headerInput.onblur = function () {
    InputWrap.removeAttribute("style")
    headerInputBtn.removeAttribute("style")
  }
}

function openModal () {
  modalQuicView.classList.add('modal-qw_open')
}
function closeModal () {
  modalQuicView.classList.remove('modal-qw_open')
}

function onMobileCatalogOpen () {
  mobileCatalog.classList.add('mobile-catalog_open')
}

function onMobileCatalogClose () {
  mobileCatalog.classList.remove('mobile-catalog_open')
}

function onBurgerMenuOpen () {

  burgerMenu.classList.add('header__menu_active')
}

function onBurgerMenuClose () {
  burgerMenu.classList.remove('header__menu_active')
}

for (let i= 0; i < modalOpenBtn.length; i++) {
  modalOpenBtn[i].addEventListener('click', openModal)
};


burgerMenuOpenBtn.addEventListener('click', onBurgerMenuOpen)
burgerMenuCloseBtn.addEventListener('click', onBurgerMenuClose)
mobileSearchBtn.addEventListener('click', onMobileCatalogOpen)
mobileCatalogCloseBtn.addEventListener('click', onMobileCatalogClose)
scrollBtn.addEventListener('click', () => {
  window.scrollTo(0,0)
})
if (modalCloseBtn && modalOverlay !== null) {
  modalCloseBtn.addEventListener('click', closeModal)
  modalOverlay.addEventListener('click', closeModal)
}


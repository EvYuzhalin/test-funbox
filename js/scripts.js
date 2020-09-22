
function func() {
  let cardsProduct = document.querySelectorAll('.catalog_item_card');
  let btnCardsProduct = document.querySelectorAll('.catalog_btn_text');
  let soldProduct = document.querySelector('.catalog_item_card_disabled');

  for (let i = 0; i < cardsProduct.length; i++) {
    cardsProduct[i].addEventListener('click', onCardProductClick);
    cardsProduct[i].addEventListener('keydown', onCardProductKeyDown);
    btnCardsProduct[i].addEventListener('click', btnСardsProductClick);
  }

  function btnСardsProductClick(evt) {
    let element = evt.target.parentNode.previousElementSibling;
    element.classList.toggle('catalog_item_card_selected');
  }

  function onCardProductClick(evt) {
    this.classList.toggle('catalog_item_card_selected');
  }

  function onCardProductKeyDown(evt) {
    let KEY_CODE = {
      TAB: 0,
      ENTER: 0
    };

    if (evt.keyCode === KEY_CODE.TAB) return;
    if (evt.keyCode === KEY_CODE.ENTER) {
      this.classList.toggle('catalog_item_card_selected');
    }
  }
};
func();

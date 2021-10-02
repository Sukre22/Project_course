


let tooltipElem;

document.onmouseover = function(event) {
  let target = event.target;

  // если у нас есть подсказка...
  let tooltipHtml = target.dataset.tooltip;
  if (!tooltipHtml) return;

  // ...создадим элемент для подсказки

  tooltipElem = document.createElement('div');
  tooltipElem.className = 'arrow-5 arrow-5-left';
  tooltipElem.innerHTML = tooltipHtml;
  document.body.append(tooltipElem);

  // спозиционируем его сверху от аннотируемого элемента (top-center)
 let coords = target.getBoundingClientRect();

  /*let left = coords.left 
  if (left < 0) left = 0; // не заезжать за левый край окна*/


  let top;

  if (tooltipElem.textContent.length < 23) {
     top = coords.top - 67; 
  }
  else if (tooltipElem.textContent.length > 45) {
     top = coords.top - tooltipElem.offsetHeight;
  }
  else {
      top = coords.top - tooltipElem.offsetHeight - 10;
  }


 
  if (top < 0) { // если подсказка не помещается сверху, то отображать её снизу
    top = coords.top + target.offsetHeight + 5;
  }

  tooltipElem.style.left = 15 + 'px';
  tooltipElem.style.top = top + 'px';
};

document.onmouseout = function(e) {

  if (tooltipElem) {
    tooltipElem.remove();
    tooltipElem = null;
  }
  
};



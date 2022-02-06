/*
 * Компонент UI
 * Функции: отрисовка данных на страницы на соновании массива settings.innerHTML и добавление обработчиков
 * Входящий аргумент - settings
 * Исходящего аргумента нет.
 * 
*/

export function runUI(settings) {
  settings.forEach( settingElement => {
    const entryPoint = document.getElementById(settingElement.entryPoint);
    let greetings = generateElement('div', settingElement);
  
    userListeners(entryPoint, greetings, settingElement);
    
    entryPoint.append(greetings);
  })
};

function generateElement(el, settings) {
  let innerHTML = '';
  let element = document.createElement(el);
  element.classList.add(settings.classList);
  element.id = settings.id;
  settings.innerHTML.forEach(value => innerHTML = innerHTML+`<div>${value}</div>`);
  element.innerHTML = innerHTML;
  return element;
}

function userListeners(rootEl, element, settings) {
  element.addEventListener('click', () => element.classList.toggle('hidden'));
  document.addEventListener('keydown',  (event) => {
    if(event.code === 'Space') {
      document.getElementById(settings.id) === null ? rootEl.append(element): document.getElementById(settings.id).remove();
    }
  });
}
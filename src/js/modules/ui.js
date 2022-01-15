/*
 * Компонент UI
 * Функции: отрисовка данных на страницы на соновании массива settings.innerHTML и добавление обработчиков
 * Входящий аргумент - settings
 * Исходящего аргумента нет.
 * 
*/

export function runUI(settings) {
  const entryPoint = document.getElementById('root');
  let greetings = generateElement('div', settings);

  userListeners(entryPoint,greetings, settings);
  
  entryPoint.append(greetings);
};

function generateElement(el, settings) {
  let innerHTML = '';
  let greetings = document.createElement(el);
  greetings.classList.add(settings.classList);
  greetings.id = settings.id;
  settings.innerHTML.forEach(value => innerHTML = innerHTML+`<div>${value}</div>`);
  greetings.innerHTML = innerHTML;
  return greetings;
}

function userListeners(rootEl, element, settings) {
  element.addEventListener('click', () => element.classList.toggle('hidden'));
  document.addEventListener('keydown',  (event) => {
    if(event.code === 'Space') {
      const searchEl = document.getElementById(settings.id);
      searchEl === null ? rootEl.append(element): searchEl.remove();
    }
  });
}
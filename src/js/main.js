import '../css/style.css';
import {runUI} from './modules/ui';

const settings = [{
  entryPoint: 'root',
  classList: 'text_container__box',
  id: 'activeElement',
  innerHTML: ['Ефимов Кирилл Константинович','Начинающий web-программист / Junior Frontend Developer'],
}];

runUI(settings)
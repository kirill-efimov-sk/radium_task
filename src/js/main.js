import '../css/style.css';
import {runUI} from './modules/ui';

const settings = {
  classList: 'text_container__header',
  id: 'activeElement',
  innerHTML: ['Ефимов Кирилл Константинович','Начинающий web-программист / Junior Frontend Developer'],
}

runUI(settings)
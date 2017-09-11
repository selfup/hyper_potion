import devtools from 'hyperapp-redux-devtools';
import { app } from 'hyperapp';
import actions from './actions';
import state from './state';
import view from './views/counter';

const env = process.env.NODE_ENV;
const mixins = [];
if (env !== 'production') mixins.push(devtools());

const pageData = document
  .querySelector('.page-data')
  .dataset
  .page;

switch (pageData) {
  case '/':
    app({
      state,
      actions,
      view,
      mixins,
    });
    break;
  default:
    (() => {})();
    break;
}

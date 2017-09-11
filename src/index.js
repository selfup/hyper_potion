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
  /**
   * you can either remove the switch statement and make this a single page app
   * or have each view load in a new app with bundles
   * TODO: add code splitting to ensure the least amount of JS is send over the wire
   */
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

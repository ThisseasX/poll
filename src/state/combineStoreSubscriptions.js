import { makeCombineSubscriptions } from 'helpers';
import store from './store';

const combineStoreSubscriptions = makeCombineSubscriptions(store);

export { combineStoreSubscriptions };

import {
  flow,
  reject,
  eq,
  concat,
  cond,
  includes,
  stubTrue,
  compact,
  keys,
  find,
  every,
} from 'lodash/fp';

const toggleValueInList = (value, list) =>
  flow(
    cond([
      [includes(value), reject(eq(value))],
      [stubTrue, concat(value)],
    ]),
    compact,
  )(list);

const rejectValueFromList = (value, list) => reject(eq(value), list);

const findPartialObjInList = (obj, list) =>
  find(item => every(key => eq(obj[key], item[key]), keys(obj)))(
    list,
  );

export {
  toggleValueInList,
  rejectValueFromList,
  findPartialObjInList,
};

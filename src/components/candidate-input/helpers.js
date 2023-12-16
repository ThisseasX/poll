import {
  flow,
  split,
  compact,
  cond,
  constant,
  stubTrue,
} from 'lodash/fp';

const testRegex = regex => value => regex.test(value);

const NEWLINE_SEPARATOR = cond([
  [testRegex(/Windows/i), constant('\r\n')],
  [testRegex(/Mac/i), constant('\n')],
  [testRegex(/Linux/i), constant('\n')],
  [stubTrue, constant('\n')],
])(navigator.userAgent);

const splitPastedText = pastedText =>
  flow(split(NEWLINE_SEPARATOR), compact)(pastedText);

export { splitPastedText };

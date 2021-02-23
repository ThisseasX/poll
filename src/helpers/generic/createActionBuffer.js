import { identity } from 'lodash/fp';
import { Subject } from 'rxjs';
import { buffer, debounceTime } from 'rxjs/operators';

const createActionBuffer = (action, prepare = identity) => {
  const debouncer = new Subject().pipe(debounceTime(100));
  const actionBuffer = new Subject().pipe(buffer(debouncer));

  actionBuffer.subscribe(action);

  return payload => {
    debouncer.next();
    actionBuffer.next(prepare(payload));
  };
};

export { createActionBuffer };

import namor from 'namor';

const generateId = () =>
  namor.generate({ words: 1, saltLength: 5, saltType: 'number' });

export { generateId };

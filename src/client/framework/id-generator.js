import uuid from 'node-uuid';

export default () => uuid.v1().replace(/\-/g, '');
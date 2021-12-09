const me = {};
const nameKey = 'name';
const nameValue = 'Lucas';

const createObject = (object, key, value) => {
  object[key] = value;

  return object;
}

console.log(createObject(me, nameKey, nameValue));
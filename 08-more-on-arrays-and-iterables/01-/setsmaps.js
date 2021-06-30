// CREATE A NEW SET
const ids = new Set(['WOAH', 'IT', 'WORKS']);
//this will not add anything if it is already in the Set
// If you add a duplicate or delete something not in the SET it will not throw an error
ids.add(2);
ids.delete('asiduhf');

if (ids.has('WOAH')) {
  ids.delete('WOAH');
}
//entries returns an iterable of arrays with the value twice.
// This is to align with map.entries() which will return two different items in the returned arrays
for (const entry of ids.entries()) {
  console.log(entry);
}

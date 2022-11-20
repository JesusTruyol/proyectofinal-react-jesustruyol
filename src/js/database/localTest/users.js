import { validName,validEmail, validPassword } from '../../../js/Regex';

const collection = new Map();




function printMap() {
  console.log(mapToObj(collection));
}

function mapToObj(map){
  var obj = {}
  map.forEach(function(v, k){
    obj[k] = v
  })
  return obj
}

export function userExistsByEmail(email) {
  return [...collection.values()].some(user => user.email === email);
}

export function createUser(props) {
  if (userExistsByEmail(props.email)) return false;
  const id = Date.now();
  console.log(id)
  collection.set(id, props);
  printMap()
  return true;
}

export function getUser(email, password) {
  console.log(email)
  console.log(collection)
  // const user = [...collection.entries()].find(([id, doc]) => doc.email === email);
  const user = [...collection.entries()].find(([id, doc]) => doc.email === email && doc.password === password);
  console.log(user)
  if (!user) return;
  return {
    id: user[0],
    ...user[1]
  }
}

export function updateUser(userId, props) {
  if (!collection.has(userId)) return false;
  const user = getUser(userId);
  collection.set(userId, { ...user, ...props });
  printMap()
  return true;
}

// Validación de formularios de usuarios
// Validación del Nombre
export function validNameForm (value){

}

export function validEmailForm (value){
  return validEmail.test(value)
}

export function validPasswordForm (value){
  return validPassword.test(value)
}
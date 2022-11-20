import { validName,validEmail, validPassword } from '../Regex';


const dbUsers = new Map();

export  function getData(){
  const response= fetch('./assets/json/users.json');
  dbUsers= response.json();
  console.log(dbUsers)
  return dbUsers
}

export function userExistsByEmail(email) {
  return [...dbUsers.values()].some(user => user.email === email);
}

export function createUser(props) {
  if (userExistsByEmail(props.email)) return false;
  dbUsers.set(props);
  return true;
}



export function getUser(email, password){
  const user = [...dbUsers.entries()].find(([doc]) => doc.email === email && doc.password === password);
  console.log(user)
  if (!user) return;
  return {
    id: user[0],
    ...user[1]
  }
}

export function updateUser(userId, props) {
  if (!dbUsers.has(userId)) return false;
  const user = getUser(userId);
  dbUsers.set(userId, { ...user, ...props });
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
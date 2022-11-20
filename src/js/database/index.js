import { createUser as firebaseCreateUser } from './firebase/users';
import { createUser as localCreateUser, getUser as localGetUser, updateUser as localUpdateUser, validNameForm,validEmailForm, validPasswordForm } from './localTest/users';


export default { 
  createUser: localCreateUser,
  getUser: localGetUser,
  updateUser: localUpdateUser,
  validNameForm: validNameForm,
  validEmailForm: validEmailForm, 
  validPasswordForm: validPasswordForm
}

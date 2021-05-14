import app from "firebase/app";
import firebaseConfig from "./config";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
class Firebase {
  constructor() {
    if (!app.apps.length) {
      app.initializeApp(firebaseConfig);
    }
    this.auth = app.auth();
    this.db = app.firestore();
    this.storage = app.storage();
  }
  //método para crear una nueva cuenta
  async createAcount(name, email, password) {
    const newUser = await this.auth.createUserWithEmailAndPassword(
      email,
      password
    );
    return await newUser.user.updateProfile({
      displayName: name,
    });
  }
  // método para hacer login
  async login(email, password) {
    return await this.auth.signInWithEmailAndPassword(email, password);
  }
  //método para cerrar sesion
  async logout() {
    return await this.auth.signOut();
  }
}

const firebase = new Firebase();

export default firebase;

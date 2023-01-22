import { getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyBF-OvqaoPVGW3oXN6eRBved3q-he4vo7Q',
  authDomain: 'todo-app-5a6f9.firebaseapp.com',
  projectId: 'todo-app-5a6f9',
  storageBucket: 'todo-app-5a6f9.appspot.com',
  messagingSenderId: '764050344103',
  appId: '1:764050344103:web:d3d1cdf864950ca16e3382',
};

const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

export { app, database };

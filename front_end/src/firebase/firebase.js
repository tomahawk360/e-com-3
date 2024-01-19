import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';


//Configuracion de la Firebase de la web app
const firebaseConfig = {
	apiKey: "AIzaSyASOFbt7uE4trDhB5xnZ17gZWui_EjlD40",
	authDomain: "e-com-3-987de.firebaseapp.com",
	projectId: "e-com-3-987de",
	storageBucket: "e-com-3-987de.appspot.com",
	messagingSenderId: "475170262708",
	appId: "1:475170262708:web:68636fe22872dee3be91e1",
	measurementId: "G-9W7XTMVEN0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Exports
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);

export default app;

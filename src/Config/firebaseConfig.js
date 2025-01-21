import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREASE_MESSAGIN_SENDER_ID,
  appId: process.env.REACT_APP_FIREASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app };









//const recaptchaV3SiteKey = "6LcyHbsqAAAAAKnej_MgHlcbhQEiBOinazjdQ4wn"; // Replace with your actual site key

// const appCheck = initializeAppCheck(app, {
//   provider: new ReCaptchaV3Provider(recaptchaV3SiteKey),
//   isTokenAutoRefreshEnabled: true
// });

/*
 apiKey: process.env.REACT_APP_FIREASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREASE_MESSAGIN_SENDER_ID,
  appId: process.env.REACT_APP_FIREASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREASE_MEASUREMENT_ID
*/

/* 
apiKey: "AIzaSyBdDULH4P4EhHRCA2bublFeTJz16X05S1M",
  authDomain: "db-tecnica.firebaseapp.com",
  databaseURL: "https://db-tecnica-default-rtdb.firebaseio.com",
  projectId: "db-tecnica",
  storageBucket: "db-tecnica.firebasestorage.app",
  messagingSenderId: "801491787288",
  appId: "1:801491787288:web:8eda961e758f93337e2d6d",
  measurementId: "G-M0YZP0C8KH"
*/
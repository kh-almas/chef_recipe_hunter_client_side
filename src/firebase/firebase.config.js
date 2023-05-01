import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: import.meta.env.API_KEY,
    authDomain: import.meta.env.AUTH_DOMAIN,
    projectId: import.meta.env.PROJECT_ID,
    storageBucket: import.meta.env.STORAGE_BUCKETS,
    messagingSenderId: import.meta.env.MESSAGE_SENDER_ID,
    appId: import.meta.env.APP_ID
};

const app = initializeApp(firebaseConfig);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import axios from "axios"

const firebaseConfig = {
  apiKey: "AIzaSyBjhH4AJQ8NWxAmG3VjemRqFDTDGtrL6uA",
  authDomain: "cloud-challenges-a9ae0.firebaseapp.com",
  projectId: "cloud-challenges-a9ae0",
  storageBucket: "cloud-challenges-a9ae0.appspot.com",
  messagingSenderId: "262506729753",
  appId: "1:262506729753:web:c3c566522e91cc8646b588",
  measurementId: "G-175255624X",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const analytics = getAnalytics(app)

//appel API pour le CRUD

const urlGetPostChallenge = `https://firestore.googleapis.com/v1/projects/${firebaseConfig.projectId}/databases/(default)/documents/challenge?key=${firebaseConfig.apiKey}`

export const createChallenge = async (challengeData) => {
  try {
    let bodyPostChallenge = {
      fields: {
        titre: {
          stringValue: challengeData.titre,
        },
        description: {
          stringValue: challengeData.description,
        },
        urlRepository: {
          stringValue: challengeData.urlRepository,
        },
        createurId: {
          stringValue: "e3p3dvwEYOWWiSjW8zbzjwwpg0S2",
        },
      },
    }
    const response = await axios.post(urlGetPostChallenge, bodyPostChallenge)

    return response.data
  } catch (error) {
    console.log(error)
  }
}

// export { createChallenge }

//--------------------------------

export { app, auth, analytics, firebaseConfig }

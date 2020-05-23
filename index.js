 // Your web app's Firebase configuration
 let firebaseConfig = {
    apiKey: "AIzaSyBV68VDUtfg_k2emzgjFhl1TEPdtfr-Rko",
    authDomain: "fir-auth-on-the-web.firebaseapp.com",
    databaseURL: "https://fir-auth-on-the-web.firebaseio.com",
    projectId: "fir-auth-on-the-web",
    storageBucket: "fir-auth-on-the-web.appspot.com",
    messagingSenderId: "376777438995",
    appId: "1:376777438995:web:704778df6811396c264ce6"
  };
   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

 document.getElementById('btnLogin').addEventListener('click',submitForm);
 document.getElementById('btnSignUp').addEventListener('click',submitForm);
 document.getElementById('btnLogout').addEventListener('click',() => {
     firebase.auth().signOut();
 })
//  submit form
function submitForm(e) {
    e.preventDefault();

    // get all fields
    const email = getInputVal('email');
    const pass = getInputVal('pass');
    const auth = firebase.auth();
    // Sign in
    const promise = auth.signInWithEmailAndPassword(email,pass);
    promise.catch(error => console.log(error.message));
    const promise2 = auth.createUserWithEmailAndPassword(email,pass);

    // sign up
    promise2.auth.createUserWithEmailAndPassword(email,pass);
}

// get input values
const getInputVal = (id) => {
    return document.getElementById(id).value;
} 

// add realtime event listener
firebase.auth().onAuthStateChanged(firebaseUser => {
    if( firebaseUser ) {
        console.log(firebaseUser)
        document.getElementById('btnLogout').classList.remove('logout')
    }
    else{
        console.log('not logged in');
        document.getElementById('btnLogout').classList.add('logout')
    }
})
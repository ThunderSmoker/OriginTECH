
// Just change your firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyCoRLTOd51Y7c7Z7oMfZaHwJDGsF9Bin3w",
    authDomain: "origintechindia-29.firebaseapp.com",
    databaseURL: "https://origintechindia-29-default-rtdb.asia-southeast1.firebasedatabase.app",

    projectId: "origintechindia-29",
    storageBucket: "origintechindia-29.appspot.com",
    messagingSenderId: "100677463041",
    appId: "1:100677463041:web:ffc64afc16c444ea00a400",
    measurementId: "G-42B1W019ZB"
};

//initialize firebase
firebase.initializeApp(firebaseConfig);

//reference your database
let contactFormDb = firebase.database().ref('InternshipForm')

document.getElementById('InternshipForm').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    let fullname = getElementVal('fullname')
    let company = getElementVal('company')
    let department = getElementVal('department')
    let experience = getElementVal('experience')
    let email = getElementVal('email')
    let phone = getElementVal('phone')
    let message = getElementVal('message')

    saveMessage(fullname,company, department, experience, email, phone, message);

    // enable alert
    document.querySelector('.alert').style.display = 'block';

    setTimeout(()=>{
        document.querySelector('.alert').style.display = 'none';
    }, 3000)

    // reset the form
    document.getElementById('InternshipForm').reset()
}

const saveMessage = (fullname,company, department, experience, email, phone, message) => {
    var newContactForm = contactFormDb.push();
    newContactForm.set({
        fullname: fullname,
        company: company,
        department: department,
        experience: experience,
        email:email,
        phone:phone,
        message:message
    })
};

const getElementVal  = (id)=>{
    return document.getElementById(id).value;
}




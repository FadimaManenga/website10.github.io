import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js"; 
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
import { getFirestore, collection, addDoc, doc, updateDoc, deleteDoc, Timestamp, setDoc, getDocs, getDoc } from 'https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js'; 

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  /*
    apiKey: "AIzaSyDcQZrAfiDzy5cPiVMttvE1L0N4xq-Vq58",
    authDomain: "website10-7ec6c.firebaseapp.com",
    projectId: "website10-7ec6c",
    storageBucket: "website10-7ec6c.firebasestorage.app",
    messagingSenderId: "801451482090",
    appId: "1:801451482090:web:7fe3368ee234773d2cf093",
    measurementId: "G-KCNZS3D2DV"
  */
  apiKey: "AIzaSyDcQZrAfiDzy5cPiVMttvE1L0N4xq-Vq58",
  authDomain: "website10-7ec6c.firebaseapp.com",
  databaseURL: "https://website10-7ec6c-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "website10-7ec6c",
  storageBucket: "website10-7ec6c.firebasestorage.app",
  messagingSenderId: "801451482090",
  appId: "1:801451482090:web:ae9b5b0fa4ddc5922cf093",
  measurementId: "G-DX5HBGR8XF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// if analytics is enabled
const analytics = getAnalytics(app);
// Get the auth instance *after* initializing the app
const auth = getAuth(app);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

let html,body,menuComponent,footerComponent,footer02,mainHeader,userHeader,nav,nav02,btnMenuFocus,btnMenuFocus02,a,ic,h1,h2,h3,h4,h5,strong,div,p,td,textarea;
let today01,tdoay02,displayMonth,btnLeftDate,btnRightDate,date,year,month,days02,day04,options,yearSelect,monthSelect;
let intervalId,intervalSlider;
let inputSearch,inputSearch02,resultSearch,result02Search;
let inputEmailConnect,inputPasswordConnect;
let input,inputContactId,inputContactId02,inputContactEmail,textareaContact,inputContactEmail02,messageContact,messageContact02;
let inputUserId,inputUserId02;
let inputUpdateUserEmail,inputUpdateUserPassword,inputReadUserEmail,inputReadUserPassword;
let inputproductId,inputproductId02,inputAddProductImg,inputAddProductTitle,inputAddProductSubtitle,inputAddProductPrice,inputAddProductText;
let inputAddEventDate,inputAddEventTitle,inputAddEventText;
let btnHome,btnPrev,btnNext,btnStopInterval,btnStartInterval,btnUser,btnAddUser,btnCloseModal01,btnCloseModal02,content;
let iconUser;
let dialog,dialogReadContact,dialogUpdateContact,dialogReadUser,dialogUpdateUser,dialogReadProduct,dialogUpdateProduct; 
let connectBlock,connectSpace,registerSpace,alert01,alert02,mySlide;
let blockBanner01,blockBanner02,banner01,banner02,sliderImg,caption01,caption02,bannerThumb,bannerTab,bannerTitle01,bannerTitle02;
let demo,sitemapBlock;
let contactsList,usersList,productsList,userTitle,shoppingList,shoppingCardsList,wishList,eventsList;
let userTitleModal,userTitleModal02,productTitleModal,productTitleModal02;
// Arrays
let contacts,users,products,events;

let connexion = true;

html = document.querySelector("html");
body = document.querySelector("body");
mainHeader = document.querySelector("#mainHeader");
userHeader = document.querySelector("#userHeader");
h1 = document.getElementsByTagName("h1");
h2 = document.getElementsByTagName("h2");
h3 = document.getElementsByTagName("h3");
h4 = document.getElementsByTagName("h4");
h5 = document.getElementsByTagName("h5");
div = document.getElementsByTagName("div");
p = document.getElementsByTagName("p");
td = document.getElementsByTagName("td");
// textarea = document.getElementsByTagName("textarea");
input = document.getElementsByTagName("input");
let inputs = document.getElementsByTagName("input");
let textareas = document.getElementsByTagName("textarea");
strong = document.getElementsByTagName("strong");
nav = document.getElementById("nav");
nav02 = document.getElementById("nav02");
menuComponent = document.querySelector("#menuComponent");
footerComponent = document.querySelector("#footerComponent");
footer02 = document.querySelector("#footer02");
ic = document.getElementsByTagName("i");
a = document.getElementsByTagName("a");
// dataConnexion = document.querySelector('[data-connexion="${connexion}"]');
btnMenuFocus = document.querySelector('[data-btn="btnMenuFocus"]');
btnMenuFocus02 = document.querySelector('[data-btn="btnMenuFocus02"]');
blockBanner01 = document.getElementById("blockBanner01");
blockBanner02 = document.getElementById("blockBanner02");
banner01 = document.getElementById("banner01");
banner02 = document.getElementById("banner02");
bannerTitle01 = document.getElementById("bannerTitle01");
bannerTitle02 = document.getElementById("bannerTitle02");
sliderImg = document.querySelector(".sliderImg");
caption01 = document.querySelector(".caption01");
caption02 = document.querySelector(".caption02");
bannerThumb = document.getElementById("bannerThumb");
demo = document.getElementsByClassName("demo");
let tableFooter = document.querySelector("#footerComponent");
iconUser = document.querySelector("#iconUser");
const forms = document.getElementsByTagName("form");

// formSearch
resultSearch = document.getElementById("resultSearch");
let resultSearch02 = document.getElementById("resultSearch02");
// formContact
inputContactId = document.getElementById("inputContactId");
inputContactId02 = document.getElementById("inputContactId02");
inputContactEmail = document.getElementById("inputContactEmail");
textareaContact = document.getElementById("textareaContact");
inputContactEmail02 = document.getElementById("inputContactEmail02");
messageContact = document.getElementById("messageContact");
messageContact02 = document.getElementById("messageContact02");
// formUser
inputReadUserEmail = document.getElementById("inputReadUserEmail"); 
inputReadUserPassword = document.getElementById("inputReadUserPassword"); 
inputUpdateUserEmail = document.querySelector("#inputUpdateUserEmail");
inputUpdateUserPassword = document.querySelector("#inputUpdateUserPassword");
inputUserId = document.querySelector("#inputUserId");
inputUserId02 = document.querySelector("#inputUserId02");
// formProduct
let inputProductId = document.querySelector("#inputProductId");
let inputProductId02 = document.querySelector("#inputProductId02");
/*
  inputAddProductImg = document.getElementById("inputAddProductImg");
  inputAddProductTitle = document.getElementById("inputAddProductTitle");
  inputAddProductSubtitle = document.getElementById("inputAddProductSubtitle");
  inputAddProductPrice = document.getElementById("inputAddProductPrice");
  inputAddProductText = document.getElementById("inputAddProductText");
  */
// formEvent
let inputEventId = document.querySelector("#inputEventId");
let inputEventtId02 = document.querySelector("#inputEventtId02");
let inputAddEventImg = document.getElementById("inputAddEventImg");
inputAddEventDate = document.getElementById("inputAddEventDate");
inputAddEventTitle = document.getElementById("inputAddEventTitle");
inputAddEventText = document.getElementById("inputAddEventText");

// contactsList
contactsList = document.getElementById("contactsList");
// usersList
usersList = document.getElementById("usersList");
let usersListTable = document.getElementById("usersListTable");
userTitle = document.getElementById("userTitle");
// productsList
productsList = document.getElementById("productsList");
// shoppingCardList
shoppingList = document.getElementById("shoppingList");
shoppingCardsList = document.getElementById("shoppingCardsList")
// wishsList
wishList = document.getElementById("wishList");
// cartsList
let cartsBody = document.querySelectorAll("tr.cart-body");
let cartTotal = document.getElementById("cartTotal");
let montants = document.getElementsByClassName("montant"); 
// eventsList
eventsList = document.getElementById("eventsList");
let tdEventDate = document.getElementsByClassName("tdEventDate");
let tdEventImg = document.getElementsByClassName("tdEventImg");
let tdEventTitle = document.getElementsByClassName("tdEventTitle");
let tdEventSubtitle = document.getElementsByClassName("tdEventSubtitle");
let tdEventText = document.getElementsByClassName("tdEventText");
let cardImgTop02 = document.getElementsByClassName("cardImgTop02");
// feateredList
let feateredList = document.getElementById("feateredList");
// Featered
let feateredUl = document.querySelector('#feateredUl');
let feateredCard = document.querySelector('.feateredCard');

// sitemap
sitemapBlock = document.getElementById("sitemapBlock");

// modal
dialog = document.querySelector("dialog");
dialogReadContact = document.querySelector("#dialogReadContact");
dialogUpdateContact = document.querySelector("#dialogUpdateContact");
dialogReadUser = document.querySelector("#dialogReadUser");
dialogUpdateUser = document.querySelector("#dialogUpdateUser");
dialogReadProduct = document.querySelector("#dialogReadProduct");
dialogUpdateProduct = document.querySelector("#dialogUpdateProduct");
userTitleModal = document.getElementById("userTitleModal");
userTitleModal02 = document.getElementById("userTitleModal02");
productTitleModal = document.getElementById("productTitleModal");
productTitleModal02 = document.getElementById("productTitleModal02");

// times
today01 = document.querySelector(".today01");
let today02 = document.querySelector(".today02");

// calendar
let container02 = document.querySelector(".container02");
displayMonth = document.querySelector(".displayMonth");
let BtnLeftDate = document.querySelector(".BtnLeftDate");
btnRightDate = document.querySelector(".btnRightDate");
days02 = document.getElementById("days02")
day04 = document.getElementsByClassName("day04");
let selected01 = document.querySelector(".selected01");
let selected02 = document.querySelector(".selected02");
let selected020 = document.querySelector(".selected02");
let selected0200 = document.querySelector(".selected02");
let selected03 = document.querySelector(".selected03");
let selected02Img = document.querySelector(".selected02Img");
yearSelect = document.getElementById("yearSelect");
monthSelect = document.getElementById("monthSelect");
let eventCard = document.querySelector(".eventCard");
let eventTitle10 = document.querySelector(".eventTitle10");
let eventSubtitle10 = document.querySelector(".eventSubtitle10");
let eventDate10 = document.querySelector(".eventDate10");
let eventText10 = document.querySelector(".eventText10");

// alert
let alertTable = document.querySelector("#alertTable");
alert01 = document.querySelector("#alert01");
alert02 = document.querySelector("#alert02");

// Initialisation
mainHeader.classList.add("grid05");
mainHeader.style.cssText = "z-index:100";
userHeader.classList.add("grid05");
userHeader.style.opacity = 0;
// mainHeader.setAttribute("data-connexion",connexion);
// userHeader.setAttribute("data-connexion",!connexion);
let url = "https://static.staticsave.com/ajax/banner.json";
let intervalSlider01;
let intervalSliderEvent;
/*
  let unConnected = function() {
  }
  let connected = function() {
      btnHome.disabled;
    btnHome.style.color='red';
  }
  */
// connexion == true ? btnHome.disabled = true : btnHome.disabled = false;
/* btnHome.classList.add("active"); */
// thx.style.display = "none";
let id = 0;
let total = 0;
let qte = 1;
let totalPanier = 0;
bannerTab  = [];
contacts = [];
users = [];
products = [];
events = [];
date = new Date(); // get local current date
year = date.getFullYear(); // getFullYear() renvoie l'année d'une date donnée, ou en temps local
month = date.getMonth(); // getMonth() renvoie l'index du mois (compris entre 0 et 11) d'une date donnée, ou en temps local, 0 == january

options = {
  month: 'long',
  year: 'numeric',
};
let options02 = {
  day: 'numeric',
  month: 'numeric',
  year: 'numeric',
};
let options03 = {
  weekday: 'long',
};
let options04 = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};
let currentDate = date.toLocaleDateString("default",options02);
console.log('currentDate : '+currentDate);
let day = date.getDate();

// btn
btnPrev = document.getElementById("btnPrev");
btnNext = document.getElementById("btnNext");
btnUser = document.querySelector("#btnUser");
btnStopInterval = document.getElementById("btnStopInterval");
btnStartInterval = document.getElementById("btnStartInterval");
btnHome = document.querySelector(".btnHome");
let toggleBgOff = document.getElementById("toggleBgOff");
let toggleBgOn = document.getElementById("toggleBgOn");

BtnLeftDate.onclick = previousDate;
btnRightDate.onclick = nextDate;
monthSelect.onchange = jump;
yearSelect.onchange = jump;

// Day & times functions
setInterval(interval,100);

generate_month_range();
generate_year_range(1970,2051);
displayCalendar();

// rond 
let rondsGroup = document.createElement('div');
let rond01 = document.createElement("div");
let rond02 = document.createElement("div");
// let rond03 = document.createElement("div");
rondsGroup.setAttribute("id","rondsGroup");
rond01.setAttribute("class","pseudo02");
rond02.setAttribute("class","pseudo02");
// rond03.setAttribute("class","pseudo02");
rond01.innerHTML = "jusqu'à <br> -20% -30%";
rond02.innerHTML = "Code promo<br> 123PROMO";
// rond03.textContent = "-50%";
rond01.style.cssText = "background-color:rgba(144, 162, 18, 1);";
// rondsGroup.append(rond01);
// caption.insertAdjacentElement("beforebegin",rondsGroup);
eventCard.insertAdjacentElement("beforebegin",rond02);
feateredCard.insertAdjacentElement("beforebegin",rond01);

// Set calendar
function generate_year_range(start,end) {
  yearSelect.innerHTML = "";
  for(let y=start;y<=end;y++) {
    y == year ? selected01="selected" : selected01="";
    yearSelect.innerHTML += `<option value=${y} ${selected01}>${y}</option>`;
  }
}
function generate_month_range() {
  monthSelect.innerHTML = "";
  for(let m = 0;m<=11;m++) {
    m == month ? selected02="selected" : selected02="";
    let month02 = new Date(year,m,1).toLocaleString("default",{month:"long"});
    monthSelect.innerHTML += `<option value=${m} ${selected02}>${month02}</option>`;
  }
  return monthSelect;
}
function displayCalendar() {
  days02.innerHTML = "";
  let firstDate = new Date(year,month,1);  // 2024 9  1 => 9 = oct
  let lastDate = new Date(year,month+1,0); // 2024 9 31 => 9 = oct
  let lastDateLastMonth = new Date(year,month,0);
  let firstDateIndex = firstDate.getDay(); // 2
  let lastDateInt = lastDate.getDate(); // 31
  let lastDateIndex = lastDate.getDay(); // 4
  let lastDateLastMonthInt = lastDateLastMonth.getDate();
  let lastDateLastMonthIndex = lastDateLastMonth.getDay();

  // Loop to add the previous month dates 
  for(let z=0;z<firstDateIndex;z++) {
    let cont = (z-firstDateIndex)+1;
    let contDate = new Date(year,month,0+cont).getDate();
    let div = document.createElement('a');
    div.innerHTML = contDate;
    div.classList.add("inactive");
    days02.appendChild(div);
  }

  // Loop to add the dates of the current month
  for(let y=1;y<=lastDateInt;y++) {
    let monthDate = new Date(year,month,y);
    let dataset = monthDate.toLocaleDateString("default",options02);
    let div = document.createElement('a');
    div.dataset.date = dataset;
    div.setAttribute("class","day04");
    div.textContent = monthDate.getDate();
    days02.appendChild(div);
    dataset == currentDate ? (div.classList.add("current-date"),console.log('dataset : '+dataset)):"";
    intervalSliderEvent = setInterval(slideEvents,8000,1,div,dataset);
    btnStopInterval.onclick = () => stopSlideEvents(intervalSliderEvent);
    // btnStopInterval.onclick = stopSlideEvents;
    // btnStartInterval.onclick = resetSlideEvents;
    btnStartInterval.onclick = () => intervalSliderEvent;
  }
  // Loop to add the first dates of the next month
  for(let i=lastDateIndex;i<6;i++) {
    let cont = i-lastDateIndex+1;
    let div = document.createElement("a");
    div.innerHTML = cont;
    div.classList.add("inactive");
    days02.appendChild(div);
  }
}
function slideEvents(sens,div,dataset) {
  id+=sens;
  if (id<0) {
    id = tdEventDate.length-1; // id = 1
  }
  if (id>tdEventDate.length-1) {
    id=0;
  }
  displayEvents(id,div,dataset);
}
function displayEvents(id,div,dataset) {
  let eventDate = tdEventDate[id].textContent;
  eventDate10.textContent = eventDate;
  eventTitle10.textContent = tdEventTitle[id].textContent;
  eventSubtitle10.textContent = tdEventSubtitle[id].textContent;
  eventText10.innerHTML = "<strong>"+tdEventText[id].textContent+"</strong>";
  selected020.style.cssText = `background-image:url(${cardImgTop02[id].src})`;
  let eventTitle100 = eventTitle10.textContent;
  dataset == eventDate && dataset >= currentDate ? div.classList.add("pastille") : "";
  div.onclick = () => displayAlertEvent(eventDate,eventTitle100);
}
function displayAlertEvent(eventDate,eventTitle100) {
  alertTable.style.cssText = "display:table";
  alertMsg.style.cssText = "display:contents";
  alertError.style.display = "none";
  alertSuccess.innerHTML = eventDate+" - <srong>"+eventTitle100+"</strong>";
  alertSuccess.style.cssText = "font-size:initial;margin: 0 0 0.5rem 0;";
  container02.insertAdjacentElement("beforeend",alertMsg);
  setTimeout(undisplayedAlert, 6000);
}
function stopSlideEvents(intervalSliderEvent) {
  // function stopSlideEvents() {
  clearInterval(intervalSliderEvent);
  intervalSliderEvent = null;
  console.log('Hello Word000 !');
}
function stopSlideEvents02() {
  clearInterval(intervalSliderEvent);
  intervalSliderEvent = null;
  console.log('Hello Word2222 !');
}
/*
function resetSlideEvents() { 
  intervalSlider = setInterval(setIntervalSlider,6000,1,li,...bannerTab);
}
*/

function previousDate() {
  if(month<0) {
    month=11;
    year-=1;
  } 
  month-=1;
  date.setMonth(month);
  date.setYear(year);
  monthSelect.value = month;
  yearSelect.value = year;
  displayCalendar();
}
function nextDate() {
  if(month>11) {
    month=0;
    year+=1;
  }
  month+=1;
  date.setMonth(month);
  date.setYear(year);
  monthSelect.value = month;
  yearSelect.value = year;
  displayCalendar();
}
function jump() {
  month = parseInt(monthSelect.value);
  year = parseInt(yearSelect.value);
  displayCalendar();
}

getJSON();

// localStorage
/*
  getLocalStorageContacts();
  getLocalStorageUsers();
  getLocalStorageProducts();
  getLocalStorageEvents();

  function setLocalStorageContacts() {
    try {
      localStorage.setItem("contactsList",JSON.stringify(contacts));
      // getLocalStorageContacts();
    } catch(err) {
      console.log("setLocalStorageContacts, invalid JSON provided : "+err.message);
    }
  }
  function setLocalStorageUsers(users) { 
    try { localStorage.setItem("usersList",JSON.stringify(users));
         // getLocalStorageUsers();
        } catch(err) {
          console.log("setLocalStorageUsers, invalid JSON provided : "+err.message);
        }
  }
  function setLocalStorageProducts() { 
    try { localStorage.setItem("productsList",JSON.stringify(products));
         // getLocalStorageProducts();
        } catch(err) {
          console.log("setLocalStorageProducts, invalid JSON provided : "+err.message);
        }
  }
  function setLocalStorageEvents() { 
    try { localStorage.setItem("eventsList",JSON.stringify(events));
         // getLocalStorageEvents();
        } catch(err) {
          console.log("setLocalStorageEvents, invalid JSON provided : "+err.message);
        }
  }
  function getLocalStorageContacts() {
    const ref = localStorage.getItem("contactsList");
    if(ref) {
      contacts = JSON.parse(ref);
      // listContacts(contacts);
    } else {
      console.log("getLocalStorageContacts : invalid JSON provided");
    }
  }
  function getLocalStorageUsers() {
    const ref = localStorage.getItem("usersList");
    if(ref) {
      users = JSON.parse(ref);
      // listUsers(users);
    } else {
      console.log("getLocalStorageUsers : invalid JSON provided");
    }
  }
  function getLocalStorageProducts() {
    const ref = localStorage.getItem("productsList");
    if(ref) {
      products = JSON.parse(ref);
      // listProducts(products);
      // listShopping(products);
    } else {
      console.log("getLocalStorageProducts : invalid JSON provided");
    }
  }
  function getLocalStorageEvents() {
    const ref = localStorage.getItem("eventsList");
    if(ref) {
      events = JSON.parse(ref);
      // listEvents(events);
      // displayCalendar(events);
      // displayEvent(events);
    } else {
      console.log("getLocalStorageEvents invalid JSON provided");
    }
  }
  */
/*
  // firebase
  // https://github.com/firebase/firebaseui-web/blob/master/demo/public/app.js
  // https://www.geeksforgeeks.org/getting-started-with-firebase-email-password-authentication/
  // https://dev.to/maasak/sign-up-login-logout-users-with-firebase-authentication-3oa9
  // https://dev.to/devstoriesplayground/firebase-authentication-made-simple-detailed-code-examples-2h8l
  // https://medium.com/@aysunitai/creating-email-and-password-authentication-with-firebase-and-vanilla-javascript-668aa73868a0
  // https://www.educative.io/courses/complete-guide-firebase-web/email-and-password-authentication
  // https://bootstrapped.app/guide/how-to-implement-firebase-authentication-with-username-and-password
  */
firestoreGetContacts();
firestoreGetUsers();
firestoreGetProducts();
// firestoreGetShopping(); 
firestoreGetEvents();

async function firebaseCreateContact(contact) {
  const contactId = contact.id;
  await setDoc(doc(db,"contactsList",contactId), {
    date: contact.date,
    contact: contact.email,
    message: contact.message,
  });
  firestoreGetContacts();
}
async function firebaseReadContact(t) {
  const tr = t.closest("tr").getAttribute("data-id");
  const docRef = doc(db,"contactsList",tr);
  const docSnap = await getDoc(docRef);
  for (let i = 0; i < forms.length; i++) {
    const formId = forms[i].getAttributeNode("id");
    const inputs = forms[i].getElementsByTagName("input");
    const textareas = forms[i].getElementsByTagName("textarea");
    if (formId.value == "formReadContact" || formId.value == "formUpdateContact") {
      if (docSnap.exists()) {
        inputs[0].value = docSnap.id;
        inputs[1].value = docSnap.data().date;
        inputs[2].value = docSnap.data().contact;
        textareas[0].value = docSnap.data().message;  
      }
    }
  } 
}
async function firebaseUpdateContact(inputs,textareas) {
  const docId = inputs[0].value;
  const docSnap = doc(db,"contactsList",docId);
  await updateDoc(docSnap, {
    contact:inputs[2].value.trim(),
    message:textareas[0].value.trim()
  });
  closeModalUpdateContact();
  firestoreGetContacts();
}
async function firebaseMoveContact(e) {
  e.preventDefault();
  let t = e.target;
  let tr = t.closest('tr').getAttribute("data-id");
  if(confirm("êtes-vous de vouloir supprimer l'article ?") == true) {
    await deleteDoc(doc(db,"contactsList",tr));
    firestoreGetContacts();
  }
}
async function firestoreGetContacts() {
  contactsList.innerHTML = "";
  const contacts = await getDocs(collection(db,"contactsList"));
  contacts.forEach((doc) => {
    let tr = document.createElement("tr");
    let tdContactDate = document.createElement("td");
    let tdContactEmail = document.createElement("td");
    let tdContactMessage = document.createElement("td");
    let btnContactsList = document.createElement("td");
    let btnEspace08 = document.createElement("text");
    let btnEspace09 = document.createElement("text");
    tdContactDate.setAttribute("colspan","1");
    tdContactDate.setAttribute('id',"tdContactDate");
    tdContactEmail.setAttribute("colspan","1");
    tdContactEmail.setAttribute("id","tdContactEmail");
    tdContactMessage.setAttribute("colspan","2");
    tdContactMessage.setAttribute("id","tdContactMessage");
    btnContactsList.setAttribute("colspan","2");
    btnContactsList.setAttribute("id","btnUsersList");
    btnEspace08.innerHTML = "&nbsp";
    btnEspace09.innerHTML = "&nbsp";
    let btnReadContact = document.createElement('button');
    btnReadContact.setAttribute("type","button");
    btnReadContact.setAttribute("class","btn btn-outline-primary btn-lg");
    btnReadContact.setAttribute("id","btnReadContact");
    btnReadContact.innerHTML = '<i class="far fa-eye"></i>';
    let btnUpdateContact = document.createElement('button');
    btnUpdateContact.setAttribute("type","button");
    btnUpdateContact.setAttribute("class","btn tn-outline-success btn-lg");
    btnUpdateContact.setAttribute("id","btnUpdateContact");
    btnUpdateContact.innerHTML = '<i class="fas fa-edit"></i>';
    let btnRemoveContact = document.createElement('button');
    btnRemoveContact.setAttribute("type","button");
    btnRemoveContact.setAttribute("class","btn btn-outline-danger btn-lg");
    btnRemoveContact.setAttribute("id","btnRemoveContact");
    btnRemoveContact.innerHTML= '<i class="far fa-trash-alt" aria-hidden="true"></i>';
    tr.dataset.id = doc.id;
    tdContactDate.append(doc.data().date);
    tdContactEmail.append(doc.data().contact);
    tdContactMessage.append(doc.data().message); 
    btnContactsList.append(btnReadContact,btnEspace08,btnUpdateContact,btnEspace09,btnRemoveContact);
    tr.append(tdContactDate,tdContactEmail,tdContactMessage,btnContactsList);
    contactsList.append(tr);
    btnReadContact.onclick=editeFormReadContact;
    btnUpdateContact.onclick=editeFormUpdateContact;
    btnRemoveContact.onclick=firebaseMoveContact;
  });
}

async function firestoreCreateUser(user) {
  const userId = user.id;
  await setDoc(doc(db,"usersList",userId), {
    email: user.email,
    password: user.password
  });
  firestoreGetUsers();
}
async function firebaseReadUser(t) {
  const tr = t.closest("tr").getAttribute("data-id");
  const docRef = doc(db,"usersList",tr);
  const docSnap = await getDoc(docRef);
  for (let i = 0; i < forms.length; i++) {
    const formId = forms[i].getAttributeNode("id");
    const inputs = forms[i].getElementsByTagName("input");
    if (formId.value == "formReadUser" || formId.value == "formUpdateUser") {
      if (docSnap.exists()) {
        inputs[0].value = docSnap.id;
        inputs[1].value = docSnap.data().email;
        inputs[2].value = docSnap.data().password;
      } 
    }
  }
}
async function firebaseMoveUser(e) {
  e.preventDefault();
  let t = e.target;
  let tr = t.closest('tr').getAttribute("data-id");
  if(confirm("êtes-vous de vouloir supprimer l'article ?") == true) {
    await deleteDoc(doc(db,"usersList",tr));
    moveUser();
    firestoreGetUsers();
  }
}
async function firestoreGetUsers() {
  usersList.innerHTML = "";
  const users = await getDocs(collection(db,"usersList"));
  users.forEach((doc) => {
    let tr = document.createElement("tr");
    let tdUserEmail = document.createElement("td");
    let tdUserPassword = document.createElement("td");
    let btnUsersList = document.createElement("td");
    let btnEspace01 = document.createElement("text");
    let btnEspace02 = document.createElement("text");
    tr.dataset.id = doc.id;
    tdUserEmail.setAttribute("colspan","1");
    tdUserEmail.setAttribute("id","tdUserEmail");
    tdUserPassword.setAttribute("colspan","2");
    tdUserPassword.setAttribute("id","tdUserPassword");
    btnUsersList.setAttribute("colspan","3");
    btnUsersList.setAttribute("id","btnUsersList");
    btnEspace01.innerHTML = "&nbsp";
    btnEspace02.innerHTML = "&nbsp";
    let btnReadUser = document.createElement('a');
    btnReadUser.setAttribute("type","button");
    btnReadUser.setAttribute("class","btn btn-outline-primary btn-lg");
    btnReadUser.setAttribute("id","btnReadUser");
    btnReadUser.innerHTML = '<i class="far fa-eye"></i>';
    let btnUpdateUser = document.createElement('a');
    btnUpdateUser.setAttribute("type","button");
    btnUpdateUser.setAttribute("class","btn tn-outline-success btn-lg");
    btnUpdateUser.setAttribute("id","btnUpdateUser");
    btnUpdateUser.innerHTML = '<i class="fas fa-edit"></i>';
    let btnRemoveUser = document.createElement('a');
    btnRemoveUser.setAttribute("type","button");
    btnRemoveUser.setAttribute("class","btn btn-outline-danger btn-lg");
    btnRemoveUser.setAttribute("id","btnRemoveUser");
    btnRemoveUser.innerHTML= '<i class="far fa-trash-alt" aria-hidden="true"></i>';
    tdUserEmail.append(doc.data().email);
    tdUserPassword.append(doc.data().password); btnUsersList.append(btnReadUser,btnEspace01,btnUpdateUser,btnEspace02,btnRemoveUser);
    tr.append(tdUserEmail,tdUserPassword,btnUsersList);
    usersList.append(tr);
    btnReadUser.onclick = editeFormReadUser;
    btnUpdateUser.onclick = editeFormUpdateUser;
    btnRemoveUser.onclick = firebaseMoveUser;
  }); 
}

function firebaseSignup(email,password) {
  createUserWithEmailAndPassword(auth,email,password)
    .then((userCredential) => { 
    // Signed up
    const user = userCredential.user; 
    console.log('Inscrit réussi ! Email : ', user.email);
  }) 
    .catch((error) => { 
    console.error("Erreur d'inscription :", error.message); 
  }); 
}
function firebaseSignin(email,password,i,formId,inputs,li,...bannerTab) {
  signInWithEmailAndPassword(auth, email, password)
  // Signed in
    .then((userCredential) => {
    // Connect succefull
    const user = userCredential.user;
    console.log("Connect successfully as :",user.email);
    connectUser(user,i,formId,inputs,li,...bannerTab);
    alertTable.style.display = 'table';
    alertMsg.style.cssText = "display:flex";
    alertSuccess.style.display = "block";
    alertError.style.display = "none";
    alertSuccess.textContent = "Connect successfully as "+user.email;
  })
    .catch((error) => {
    alertSuccess.style.display = "none";
    alertError.style.display = "block";
    alertError.textContent = "Your are failed connected, please try again !";
    alertError.style.cssText = "display:block;text-align: center;width: 100%;background-color: #ff000070;";
    console.error("Connect issue : ",error.message);
    // setTimeout(undisplayedAlert, 6000);
  });
  formConnect.insertAdjacentElement("afterend",alertError);
  setTimeout(undisplayedAlert, 6000);
}
function firebaseSignout() {
  // firebase.auth.signOut();
  // auth.signOut();
  signOut(auth);
  console.log("Logged out.");
}

async function firebaseCreateProduct(product) {
  const productId = product.id;
  await setDoc(doc(db,"productsList",productId), {
    productImg:product.productImg,
    productTitle:product.productTitle,
    productSubtitle:product.productSubtitle,
    productPrice:product.productPrice,
    productText:product.productText,
    inStored:product.inStored,
    inShelved:product.inShelved,
    isFeatured:product.isFeatured,
    isCompletedCart:product.isCompletedCart,
    isCompletedWish:product.isCompletedWish
  });
  firestoreGetProducts();
}
async function firebaseReadProduct(t) {
  let tr = t.closest("tr").getAttribute("data-id") || t.closest("article").getAttribute("data-id") || t.closest("card").getAttribute("data-id");
  // const tr = t.closest("article").getAttribute("data-id");
  const docRef = doc(db,"productsList",tr);
  const docSnap = await getDoc(docRef);
  for (let i = 0; i < forms.length; i++) {
    const formId = forms[i].getAttributeNode("id");
    const inputs = forms[i].getElementsByTagName("input");
    const textareas = forms[i].getElementsByTagName("textarea");
    const imgs = forms[i].getElementsByTagName("img");
    if (formId.value == "formReadProduct" || formId.value == "formUpdateProduct") {
      if (docSnap.exists()) {
        imgs[0].src = docSnap.data().productImg;
        inputs[0].value = docSnap.id;
        inputs[1].value = docSnap.data().productImg;
        inputs[2].value = docSnap.data().productTitle;
        inputs[3].value = docSnap.data().productSubtitle;
        inputs[4].value = docSnap.data().productPrice;
        textareas[0].value = docSnap.data().productText;
        if(docSnap.data().isFeatured == false) {
          inputs[5].checked = "checked";
        } else {
          inputs[5].checked = "";

        }
      }
    }
  }
}
async function firebaseUpdateProduct(inputs,textareas) {
  const docId = inputs[0].value;
  const docSnap = doc(db,"productsList",docId);
  await updateDoc(docSnap, {
    productImg:inputs[1].value.trim(),
    productTitle:inputs[2].value.trim(),
    productSubtitle:inputs[3].value.trim(),
    productPrice:inputs[4].value.trim(),
    productText:textareas[0].value.trim(),
    isFeatured:inputs[5].value
  });
  closeModalUpdateProduct();
  firestoreGetProducts();
  // firestoreGetShopping();
}
async function firebaseMoveProduct(e) {
  e.preventDefault();
  let t = e.target;
  let tr = t.closest('tr').getAttribute("data-id");
  if(confirm("êtes-vous de vouloir supprimer l'article ?") == true) {
    await deleteDoc(doc(db,"productsList",tr));
    firestoreGetProducts();
    // firestoreGetShopping();
  }
}
async function firestoreGetProducts() {
  productsList.innerHTML = "";
  shoppingList.innerHTML = "";
  wishList.innerHTML = "";
  cartsList.innerHTML = "";
  feateredUl.innerHTML = "";
  feateredCard.innerHTML = "";
  const products = await getDocs(collection(db,"productsList"));
  products.forEach((doc) => {
    let tr = document.createElement("tr");
    let tdCardImg = document.createElement("td");
    let tdCardTitle = document.createElement("td");
    let tdCardSubtitle = document.createElement("td");
    let tdCardPrice = document.createElement("td");
    let tdCardText = document.createElement("td");
    let tdCardFooter = document.createElement("td");
    let btnEspace03 = document.createElement("text");
    let btnEspace04 = document.createElement("text");
    let btnEspace05 = document.createElement("text");
    let btnEspace06 = document.createElement("text");
    let btnEspace07 = document.createElement("text");
    let btnEspace08 = document.createElement("text");
    let btnEspace09 = document.createElement("text");
    tdCardImg.setAttribute("class","cardImg01");
    tdCardTitle.setAttribute("class","card-text01");
    tdCardSubtitle.setAttribute("class","cardSubtitle");
    tdCardPrice.setAttribute("class","card-price01");
    tdCardText.setAttribute("class","card-text01");
    tdCardFooter.setAttribute("class","cardFooter");
    btnEspace03.innerHTML = "&nbsp";
    btnEspace04.innerHTML = "&nbsp";
    btnEspace05.innerHTML = "&nbsp";
    btnEspace06.innerHTML = "&nbsp";
    btnEspace07.innerHTML = "&nbsp";
    btnEspace08.innerHTML = "&nbsp";
    btnEspace09.innerHTML = "&nbsp";
    let btnReadProduct = document.createElement('a');
    btnReadProduct.setAttribute("type","button");
    btnReadProduct.setAttribute("class","btn btn-outline-primary btn-lg");
    btnReadProduct.setAttribute("id","btnReadProduct");
    btnReadProduct.innerHTML = '<i class="far fa-eye"></i>';
    let btnUpdateProduct = document.createElement('a');
    btnUpdateProduct.setAttribute("type","button");
    btnUpdateProduct.setAttribute("class","btn tn-outline-success btn-lg");
    btnUpdateProduct.setAttribute("id","btnUpdateProduct");
    btnUpdateProduct.innerHTML = '<i class="fas fa-sliders-h"></i>';
    let btnRemoveProduct = document.createElement('a');
    btnRemoveProduct.setAttribute("type","button");
    btnRemoveProduct.setAttribute("class","btn btn-outline-danger btn-lg"); 
    btnRemoveProduct.setAttribute("id","btnRemoveProduct");
    btnRemoveProduct.innerHTML= '<i class="far fa-trash-alt" aria-hidden="true"></i>';
    let btnToggleStored = document.createElement('a');
    btnToggleStored.setAttribute("type","button");
    btnToggleStored.setAttribute("class","btn btn-outline-secondary btn-lg icon offStore");
    btnToggleStored.setAttribute("id","btnToggleStored");
    doc.data().inStored == !false ? btnToggleStored.classList.add("onStore") : btnToggleStored.classList.remove("onStore");
    let btnToggleShelved = document.createElement('a');
    btnToggleShelved.setAttribute("type","button");
    btnToggleShelved.setAttribute("class","btn btn-outline-warning btn-lg icon offShelve");
    btnToggleShelved.setAttribute("id","btnToggleShelved");
    doc.data().inShelved == !false ? btnToggleShelved.classList.add("onShelve") : btnToggleShelved.classList.remove("onShelve");
    listShopping(doc);
    let btnToggleFeatered = document.createElement('a');
    btnToggleFeatered.setAttribute("type","button");
    btnToggleFeatered.setAttribute("class","btn btn-outline-info btn-lg icon offFeatered");
    btnToggleFeatered.setAttribute("id","btnToggleFeatered");
    doc.data().isFeatured == !false ? btnToggleFeatered.classList.add("onFeatered") : btnToggleFeatered.classList.remove("onFeatered");
    listFeateredThumbs(doc);
    let btnToggleCart = document.createElement('a');
    btnToggleCart.setAttribute("type","button");
    btnToggleCart.setAttribute("class","btn btn-outline-dark btn-lg icon offCart");
    btnToggleCart.setAttribute("id","btnToggleCart");
    doc.data().isCompletedCart == !false ? btnToggleCart.classList.add("onCart") : btnToggleCart.classList.remove("onCart");
    // listCarts(products);
    listCarts(doc);
    let btnToggleWish = document.createElement('a');
    btnToggleWish.setAttribute("type","button");
    btnToggleWish.setAttribute("class","btn btn-outline-light btn-lg icon offWish");
    btnToggleWish.setAttribute("id","btnToggleWish");
    doc.data().isCompletedWish == !false ? btnToggleWish.classList.add("onWish"): btnToggleWish.classList.remove("onWish");
    // listWishs(products);
    listWishs(doc);
    tdCardImg.innerHTML = `<img class="card-img-top top02" src="${doc.data().productImg}" alt="product+${doc.data().productImg}"/>`;
    tr.dataset.id = doc.id;
    tdCardTitle.append(doc.data().productTitle); 
    tdCardSubtitle.append(doc.data().productSubtitle);
    tdCardPrice.append(doc.data().productPrice+" €"); 
    tdCardText.append(doc.data().productText); 
    tdCardFooter.append(btnReadProduct,btnEspace03,btnUpdateProduct,btnEspace04,btnRemoveProduct,btnEspace05,btnToggleStored,btnEspace08,btnToggleShelved,btnEspace09,btnToggleFeatered,btnEspace06,btnToggleCart,btnEspace07,btnToggleWish);
    tr.append(tdCardImg,tdCardTitle,tdCardSubtitle,tdCardText,tdCardPrice,tdCardFooter);
    productsList.append(tr);
    btnReadProduct.onclick = editeFormReadProduct;
    btnUpdateProduct.onclick = editeFormUpdateProduct;
    btnRemoveProduct.onclick = firebaseMoveProduct;
    btnToggleShelved.onclick = toggleShopping;
    btnToggleFeatered.onclick = toggleFeatered;
    btnToggleCart.onclick = toggleCart;
    btnToggleWish.onclick = toggleWish;
  });
}

// Initialization feateredCard before clicked on imgThumb
function editeFeateredCard(doc) {
  let btnToggleCart = document.createElement('a');
  btnToggleCart.setAttribute("id","btnToggleCart");
  btnToggleCart.setAttribute("class","btn btn-outline-danger fa-2x icon offCart");
  let btnToggleWish = document.createElement("a");
  btnToggleWish.setAttribute("id","btnToggleWish");
  btnToggleWish.setAttribute("class","btn btn-outline-success fa-2x icon offWish");
  let readProduct = "editeFormReadProduct(event)";
  let toggleCart = "toggleCart03(event)";
  let toggleWish = "toggleWish03(event)";
  let testCart = doc.data().isCompletedCart == !false ? btnToggleCart.classList.add("onCart") : btnToggleCart.classList.remove("onCart");
  let testWish = doc.data().isCompletedWish == !false ? btnToggleWish.classList.add("onWish"): btnToggleWish.classList.remove("onWish");
  feateredCard.innerHTML = `
        <article data-id="${doc.id}">
          <div class="selected03">
            <img src="${doc.data().productImg}" alt="ImgCard" class="selected03Img02">
          </div>
          <h3 class="eventTitle20">${doc.data().productTitle}</h3>
          <div class="card-header">
            <h4 class="eventSubtitle20">${doc.data().productSubtitle}</h4>
          </div>
          <div class="card-body event-body">
            <p class="eventText20">${doc.data().productText}</p>
          </div>
          <div class="card-footer cardFooter">
            <a type="button" class="btn btn-outline-primary btn-lg" id="btnReadProduct" onclick="${readProduct}">
              <i class="far fa-eye fa-2x" aria-hidden="true"></i>
            </a>
            <a type="button" class="${btnToggleCart.classList} ${testCart}" id="${btnToggleCart.id}" onclick="${toggleCart}"></a>
            <a type="button" class="${btnToggleWish.classList} ${testWish}" id="${btnToggleWish.id}" onclick="${toggleWish}"></a>
          </div>
        </article>
  `;
}
// Display imgThumb clicked in feateredCard
async function firestoreReadFeateredCard(event) {
  let e=event;
  e.preventDefault();
  const t = e.target
  const tId = t.dataset.id;
  let btnToggleCart = document.createElement('a');
  btnToggleCart.setAttribute("id","btnToggleCart");
  btnToggleCart.setAttribute("class","btn btn-outline-danger fa-2x icon offCart");
  let btnToggleWish = document.createElement("a");
  btnToggleWish.setAttribute("id","btnToggleWish");
  btnToggleWish.setAttribute("class","btn btn-outline-success fa-2x icon offWish");
  const readProduct = "editeFormReadProduct(event)";
  const toggleCart = "toggleCart(event)";
  const toggleWish = "toggleWish(event)";
  let docRef = doc(db,"productsList",tId);
  let docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    let testCart = docSnap.data().isCompletedCart == !false ? btnToggleCart.classList.add("onCart") : btnToggleCart.classList.remove("onCart");
    let testWish = docSnap.data().isCompletedWish == !false ? btnToggleWish.classList.add("onWish"): btnToggleWish.classList.remove("onWish");
    feateredCard.innerHTML = `
      <article data-id="${docSnap.id}">
        <div class="selected03">
          <img src="${docSnap.data().productImg}" alt="ImgCard" class="selected03Img02">
        </div>
        <h3 class="eventTitle20">${docSnap.data().productTitle}</h3>
        <div class="card-header">
          <h4 class="eventSubtitle20">${docSnap.data().productSubtitle}</h4>
        </div>
        <div class="card-body event-body">
          <p class="eventText20">${docSnap.data().productText}</p>
        </div>
        <div class="card-footer cardFooter">
          <a type="button" class="btn btn-outline-primary btn-lg" id="btnReadProduct" onclick="${readProduct}">
            <i class="far fa-eye fa-2x" aria-hidden="true"></i>
          </a>
          <a type="button" class="${btnToggleCart.classList} ${testCart}" id="${btnToggleCart.id}" onclick="${toggleCart}"></a>
          <a type="button" class="${btnToggleWish.classList} ${testWish}" id="${btnToggleWish.id}" onclick="${toggleWish}"></a>
        </div>
      </article>
    `;
  } 
}

async function firebaseCreateEvent(event) {
  const eventId = event.id;
  await setDoc(doc(db,"eventsList",eventId), {
    img:event.img,
    date:event.date,
    title:event.title,
    subTitle:event.subTitle,
    description:event.description,
    isCompletedEvent:false
  });
  firestoreGetEvents();
}
async function firebaseReadEvent(t) {
  const tr = t.closest("tr").getAttribute("data-id");
  const docRef = doc(db,"eventsList",tr);
  const docSnap = await getDoc(docRef);
  for (let i = 0; i < forms.length; i++) {
    const formId = forms[i].getAttributeNode("id");
    const inputs = forms[i].getElementsByTagName("input");
    const textareas = forms[i].getElementsByTagName("textarea");
    const imgs = forms[i].getElementsByTagName("img");
    if (formId.value == "formReadEvent" || formId.value == "formUpdateEvent") {
      if (docSnap.exists()) {
        imgs[0].src = docSnap.data().img;
        inputs[0].value = docSnap.id;
        inputs[1].value = docSnap.data().img;
        inputs[2].value = docSnap.data().date;
        inputs[3].value = docSnap.data().title;
        inputs[4].value = docSnap.data().subTitle;
        textareas[0].value = docSnap.data().description;
      }
    }
  }
}
async function firebaseUpdateEvent(inputs,textareas) {
  const docId = inputs[0].value;
  const docSnap = doc(db,"eventsList",docId);
  await updateDoc(docSnap, {
    img:inputs[1].value.trim(),
    date:inputs[2].value.trim(),
    title:inputs[3].value.trim(),
    subTitle:inputs[4].value.trim(),
    description:textareas[0].value.trim()
  });
  closeModalUpdateEvent();
  firestoreGetEvents();
}
async function firebaseMoveEvent(e) {
  e.preventDefault();
  let t = e.target;
  let tr = t.closest('tr').getAttribute("data-id");
  if(confirm("êtes-vous de vouloir supprimer l'article ?") == true) {
    await deleteDoc(doc(db,"eventsList",tr));
    firestoreGetEvents();
  }
}
async function firestoreGetEvents() {
  eventsList.innerHTML = "";
  const events = await getDocs(collection(db,"eventsList"));
  events.forEach((doc) => {
    let tr = document.createElement("tr");
    let tdEventDate = document.createElement("td");
    let tdEventImg = document.createElement("td");
    let tdEventTitle = document.createElement("td");
    let tdEventSubtitle = document.createElement("td");
    let tdEventText = document.createElement("td");
    let cardFooter = document.createElement("td");
    let btnEspace01 = document.createElement("text");
    let btnEspace02 = document.createElement("text");
    tdEventImg.setAttribute("class","tdEventImg");
    tdEventDate.setAttribute("colspan","1");
    tdEventDate.setAttribute("class","tdEventDate");
    tdEventTitle.setAttribute("colspan","1");
    tdEventTitle.setAttribute("class","tdEventTitle");
    tdEventSubtitle.setAttribute("colspan","1");
    tdEventSubtitle.setAttribute("class","tdEventSubtitle");
    tdEventText.setAttribute("colspan","1");
    tdEventText.setAttribute("class","tdEventText");
    cardFooter.setAttribute("colspan","2");
    cardFooter.setAttribute("class","cardFooter");

    btnEspace01.innerHTML = "&nbsp";
    btnEspace02.innerHTML = "&nbsp";

    let btnReadEvent = document.createElement('a');
    btnReadEvent.setAttribute("type","button");
    btnReadEvent.setAttribute("class","btn btn-outline-primary btn-lg");
    btnReadEvent.setAttribute("id","btnReadEvent");
    btnReadEvent.innerHTML = '<i class="far fa-eye"></i>';
    let btnUpdateEvent = document.createElement('a');
    btnUpdateEvent.setAttribute("type","button");
    btnUpdateEvent.setAttribute("class","btn tn-outline-success btn-lg"); btnUpdateEvent.setAttribute("id","btnUpdateEvent");
    btnUpdateEvent.innerHTML = '<i class="fas fa-edit"></i>';
    let btnRemoveEvent = document.createElement('a');
    btnRemoveEvent.setAttribute("type","button");
    btnRemoveEvent.setAttribute("class","btn btn-outline-danger btn-lg"); btnRemoveEvent.setAttribute("id","btnRemoveUser");
    btnRemoveEvent.innerHTML= '<i class="far fa-trash-alt" aria-hidden="true"></i>';

    tr.dataset.id = doc.id;
    const eventDate = new Date(doc.data().date).toLocaleDateString("default",options02); 
    tdEventDate.append(eventDate);
    tdEventImg.innerHTML = `<img class="card-img-top top02 cardImgTop02" src="${doc.data().img}" alt="event+${doc.data().img}"/>`;
    tdEventTitle.append(doc.data().title); 
    tdEventSubtitle.append(doc.data().subTitle); 
    tdEventText.append(doc.data().description); 
    cardFooter.append(btnReadEvent,btnEspace01,btnUpdateEvent,btnEspace02,btnRemoveEvent); 
    tr.append(tdEventImg,tdEventDate,tdEventTitle,tdEventSubtitle,tdEventText,cardFooter);
    eventsList.append(tr);
    btnReadEvent.onclick = editeFormReadEvent;
    btnUpdateEvent.onclick = editeFormUpdateEvent;
    btnRemoveEvent.onclick = firebaseMoveEvent;
    editeEventCard(doc);
    // editeEventCard(0);
  });
}
// Initialization eventCard before slideEvents
function editeEventCard(doc) {
  const eventDate = new Date(doc.data().date).toLocaleDateString("default",options02); 
  eventDate10.textContent = eventDate;
  eventTitle10.textContent = doc.data().title; 
  eventSubtitle10.textContent = doc.data().subTitle; 
  eventText10.innerHTML = "<strong>"+doc.data().description+"</strong>";
  selected0200.style.cssText = `background-image:url(${doc.data().img})`;
}

// Lists
/*
    function listContacts(contacts) {
    contactsList.innerHTML = "";
    for(let i=0; i<contacts.length;i++){ 
      let tr = document.createElement("tr");
      let tdContactEmail = document.createElement("td");
      let tdContactMessage = document.createElement("td");
      let btnContactsList = document.createElement("td");
      let btnEspace08 = document.createElement("text");
      let btnEspace09 = document.createElement("text");
      tr.dataset.id = contacts[i].id;
      tdContactEmail.setAttribute("colspan","1");
      tdContactEmail.setAttribute("id","tdContactEmail");
      tdContactMessage.setAttribute("colspan","2");
      tdContactMessage.setAttribute("id","tdContactMessage");
      btnContactsList.setAttribute("colspan","3");
      btnContactsList.setAttribute("id","btnUsersList");
      btnEspace08.innerHTML = "&nbsp";
      btnEspace09.innerHTML = "&nbsp";
      let btnReadContact = document.createElement('button');
      btnReadContact.setAttribute("type","button");
      btnReadContact.setAttribute("class","btn btn-outline-primary");
      btnReadContact.setAttribute("id","btnReadContact");
      btnReadContact.innerHTML = '<i class="far fa-eye"></i>';
      let btnUpdateContact = document.createElement('button');
      btnUpdateContact.setAttribute("type","button");
      btnUpdateContact.setAttribute("class","btn tn-outline-success");
      btnUpdateContact.setAttribute("id","btnUpdateContact");
      btnUpdateContact.innerHTML = '<i class="fas fa-edit"></i>';
      let btnRemoveContact = document.createElement('button');
      btnRemoveContact.setAttribute("type","button");
      btnRemoveContact.setAttribute("class","btn btn-outline-danger");
      btnRemoveContact.setAttribute("id","btnRemoveContact");
      btnRemoveContact.innerHTML= '<i class="far fa-trash-alt" aria-hidden="true"></i>';
      tdContactEmail.append(contacts[i].email);
      tdContactMessage.append(contacts[i].message); btnContactsList.append(btnReadContact,btnEspace08,btnUpdateContact,btnEspace09,btnRemoveContact);
      tr.append(tdContactEmail,tdContactMessage,btnContactsList);
      contactsList.append(tr);
      btnReadContact.onclick=editeFormReadContact;
      btnUpdateContact.onclick=editeFormUpdateContact;
      btnRemoveContact.onclick=moveContact;
    }
    }
    function listUsers(users){
    usersList.innerHTML = "";
    for(let i=0; i<users.length;i++){ 
      let tr = document.createElement("tr");
      let tdUserEmail = document.createElement("td");
      let tdUserPassword = document.createElement("td");
      let btnUsersList = document.createElement("td");
      let btnEspace01 = document.createElement("text");
      let btnEspace02 = document.createElement("text");
      tr.dataset.id = users[i].id;
      tdUserEmail.setAttribute("colspan","1");
      tdUserEmail.setAttribute("id","tdUserEmail");
      tdUserPassword.setAttribute("colspan","2");
      tdUserPassword.setAttribute("id","tdUserPassword");
      btnUsersList.setAttribute("colspan","3");
      btnUsersList.setAttribute("id","btnUsersList");
      btnEspace01.innerHTML = "&nbsp";
      btnEspace02.innerHTML = "&nbsp";
      let btnReadUser = document.createElement('a');
      btnReadUser.setAttribute("type","button");
      btnReadUser.setAttribute("class","btn btn-outline-primary");
      btnReadUser.setAttribute("id","btnReadUser");
      btnReadUser.innerHTML = '<i class="far fa-eye"></i>';
      let btnUpdateUser = document.createElement('a');
      btnUpdateUser.setAttribute("type","button");
      btnUpdateUser.setAttribute("class","btn tn-outline-success");
      btnUpdateUser.setAttribute("id","btnUpdateUser");
      btnUpdateUser.innerHTML = '<i class="fas fa-edit"></i>';
      let btnRemoveUser = document.createElement('a');
      btnRemoveUser.setAttribute("type","button");
      btnRemoveUser.setAttribute("class","btn btn-outline-danger");
      btnRemoveUser.setAttribute("id","btnRemoveUser");
      btnRemoveUser.innerHTML= '<i class="far fa-trash-alt" aria-hidden="true"></i>';
      tdUserEmail.append(users[i].email);
      tdUserPassword.append(users[i].password); btnUsersList.append(btnReadUser,btnEspace01,btnUpdateUser,btnEspace02,btnRemoveUser);
      tr.append(tdUserEmail,tdUserPassword,btnUsersList);
      usersList.append(tr);
      btnReadUser.onclick = editeFormReadUser;
      btnUpdateUser.onclick = editeFormUpdateUser;
      btnRemoveUser.onclick = moveUser;
    }
    }
    function listProducts(products){
    productsList.innerHTML = "";
    for(let i=0; i<products.length;i++) { 
      let tr = document.createElement("tr");
      let tdCardImg = document.createElement("td");
      let tdCardTitle = document.createElement("td");
      let tdCardSubtitle = document.createElement("td");
      let tdCardPrice = document.createElement("td");
      let tdCardText = document.createElement("td");
      let tdCardFooter = document.createElement("td");
      let btnEspace03 = document.createElement("text");
      let btnEspace04 = document.createElement("text");
      let btnEspace05 = document.createElement("text");
      let btnEspace06 = document.createElement("text");
      tr.dataset.id = products[i].id;
      tdCardImg.setAttribute("class","cardImg01");
      tdCardTitle.setAttribute("class","card-text01");
      tdCardSubtitle.setAttribute("class","cardSubtitle");
      tdCardPrice.setAttribute("class","card-price01");
      tdCardText.setAttribute("class","card-text01");
      tdCardFooter.setAttribute("class","cardFooter");
      btnEspace03.innerHTML = "&nbsp";
      btnEspace04.innerHTML = "&nbsp";
      btnEspace05.innerHTML = "&nbsp";
      btnEspace06.innerHTML = "&nbsp";
      let btnReadProduct = document.createElement('a');
      btnReadProduct.setAttribute("type","button");
      btnReadProduct.setAttribute("class","btn btn-outline-primary");
      btnReadProduct.setAttribute("id","btnReadProduct");
      btnReadProduct.innerHTML = '<i class="far fa-eye btn-lg"></i>';
      let btnUpdateProduct = document.createElement('a');
      btnUpdateProduct.setAttribute("type","button");
      btnUpdateProduct.setAttribute("class","btn tn-outline-success");
      btnUpdateProduct.setAttribute("id","btnUpdateProduct");
      btnUpdateProduct.innerHTML = '<i class="fas fa-edit"></i>';
      let btnRemoveProduct = document.createElement('a');
      btnRemoveProduct.setAttribute("type","button");
      btnRemoveProduct.setAttribute("class","btn btn-outline-danger"); btnRemoveProduct.setAttribute("id","btnRemoveProduct");
      btnRemoveProduct.innerHTML= '<i class="far fa-trash-alt" aria-hidden="true"></i>';
      let btnToggleCart = document.createElement('a');
      btnToggleCart.setAttribute("type","button");
      btnToggleCart.setAttribute("class","btn btn-outline-danger btn-lg icon offCart");
      btnToggleCart.setAttribute("id","btnToggleCart");
      products[i].isCompletedCart == !false ? btnToggleCart.classList.add("onCart") : btnToggleCart.classList.remove("onCart");
      listCarts(products);
      let btnToggleWish = document.createElement('a');
      btnToggleWish.setAttribute("type","button");
      btnToggleWish.setAttribute("class","btn btn-outline-danger btn-lg icon offWish");
      btnToggleWish.setAttribute("id","btnToggleWish");
      products[i].isCompletedWish == !false ? btnToggleWish.classList.add("onWish"): btnToggleWish.classList.remove("onWish");
      listWishs(products);
      tdCardImg.innerHTML = `<img class="card-img-top" src="${products[i].productImg}" alt="product+${i}"/>`;
      tdCardTitle.append(products[i].productTitle); 
      tdCardSubtitle.append(products[i].productSubtitle);
      tdCardPrice.append(products[i].productPrice+" €"); 
      tdCardText.append(products[i].productText); tdCardFooter.append(btnReadProduct,btnEspace03,btnUpdateProduct,btnEspace04,btnRemoveProduct,btnEspace05,btnToggleCart,btnEspace06,btnToggleWish); tr.append(tdCardImg,tdCardTitle,tdCardSubtitle,tdCardText,tdCardPrice,tdCardFooter);
      productsList.append(tr);
      btnReadProduct.onclick = editeFormReadProduct;
      btnUpdateProduct.onclick = editeFormUpdateProduct;
      btnRemoveProduct.onclick = moveProduct;
      btnToggleCart.onclick = toggleCart;
      btnToggleWish.onclick = toggleWish;
      // total !== 0 ? cartTotal.innerHTML = "<h5>"+total.toFixed(2)+"&nbsp"+"<i class=\"fas fa-euro-sign\"></i></h5>" : cartTotal.innerHTML = "<h5>Don't leave your cart empty, please fill it !</h5>";
    }
  }
    function listCarts(products) {
    try {
      cartsList.innerHTML = "";
      total = 0;
      for(let i=0; i<products.length;i++) {
        if(products[i].isCompletedCart == true) {
          let cartBody = document.createElement("tr");
          cartBody.setAttribute("class","cart-body");
          cartBody.setAttribute("data-id",products[i].id);
          let formCart = document.createElement("form");
          formCart.setAttribute("id","formCart");
          let inputCart = document.createElement("input");
          inputCart.setAttribute('value',1);
          inputCart.setAttribute("id","inputCart");
          let btnReadProduct = document.querySelector('a');
          btnReadProduct.setAttribute("type","button");
          btnReadProduct.setAttribute("id","btnReadProduct");
          let btnToggleCart = document.createElement('a');
          btnToggleCart.setAttribute("type","button");
          btnToggleCart.setAttribute("id","btnToggleCart");
          btnToggleCart.setAttribute("class","btn btn-outline-danger btn-lg icon offWish");
          let testCart = products[i].isCompletedCart == !false ? btnToggleCart.classList.add("onCart") : btnToggleCart.classList.remove("onCart");
          let btnToggleWish = document.createElement('a');
          btnToggleWish.setAttribute("type","button");
          btnToggleWish.setAttribute("id","btnToggleWish");
          btnToggleWish.setAttribute("class","btn btn-outline-danger btn-lg icon offWish");
          let testWish = products[i].isCompletedWish == !false ? btnToggleWish.classList.add("onWish") : btnToggleWish.classList.remove("onWish");
          let result01 = inputCart.value*products[i].productPrice;
          total +=result01;
          let editeFormReadProduct = "editeFormReadProduct(event)";
          inputCart
          let toggleCart = "toggleCart(event)";
          let toggleWish = "toggleWish(event)";
          cartBody.innerHTML = ` <td colspan="2">
                  <div class="cart">
                  <div id="cartImg">
                <img class="card-img-top" src="${products[i].productImg}" alt="cartImg01">
                </div>
                <div class="cartBody">
                <h5 class="cart-title">${products[i].productTitle}</h5>
                </div>
                </div>
                </td>
                <td>                                                       <form id="${formCart.id}" class="flex01">
                <input type="number" size="2" min="1" max="10" id="${inputCart.id}" value="${inputCart.value}" class="form-control">&nbsp;
                <button type="submit" class="btn btn-outline-primary btn-lg"><i class="fas fa-check"></i></button>&nbsp;
                <button type="reset" class="btn btn-outline-primary btn-lg"><i class="fas fa-undo"></i></button>
                </form>                                                     </td>
                <td>
                <div class="flex01"><p class="cont01">${products[i].productPrice}</p>&nbsp<i class=\"fas fa-euro-sign\"></i></div>
                </td>
                <td>
                <div class="flex01"><p class="cont02">${result01}</p>&nbsp<i class=\"fas fa-euro-sign\"></i></div>
                </td>
                <td colspan="2">
                <div class="card-footer">
                <a href="#" type="${btnReadProduct.type}" id="${btnReadProduct.id}" class="btn btn-outline-primary btn-lg" onclick="${editeFormReadProduct}"><i class="far fa-eye fa-2x"></i></a>
                <a href="#" type="${btnToggleWish.type}" id="${btnToggleWish.id}" class="${btnToggleWish.classList} ${testWish}" onclick="${toggleWish}"></a>
                <a href="#" type="${btnToggleCart.type}" id="${btnToggleCart.id}" class="${btnToggleCart.classList}" ${testCart}" onclick="${toggleCart}"></a>                   </div>                                                   </td>
                </tr>`;
          cartsList.append(cartBody);
          total !== 0 || cartsList !== "" ? cartTotal.innerHTML = `<h5>${total.toFixed(2)}&nbsp<i class="fas fa-euro-sign"></i></h5>` : cartTotal.textContent = "Don't leave your cart empty, please fill it !"; 
        }
      } 
    } catch(err) {
      console.error(message.err);
    }
    }
    function listWishs(products){
    wishList.innerHTML = "";
    for(let i=0; i<products.length;i++) { 
      if(products[i].isCompletedWish == true ) {
        let tr = document.createElement("tr");
        let tdCardImg = document.createElement("td");
        let tdDescription = document.createElement("td");
        let tdCardPrice = document.createElement("td");
        let tdCardFooter = document.createElement("td");
        let btnEspace01 = document.createElement("text");
        let btnEspace02 = document.createElement("text");
        btnEspace01.innerHTML = "&nbsp";
        btnEspace02.innerHTML = "&nbsp";
        tr.dataset.id = products[i].id;
        tdCardImg.setAttribute("class","cardImg01");
        tdDescription.setAttribute("class","wishDescription");
        tdDescription.setAttribute("colspan","2");
        tdCardPrice.setAttribute("class","card-price01"); tdCardFooter.setAttribute("class","cardFooter");
        tdCardFooter.setAttribute("colspan","3");
        let btnReadProduct = document.createElement('a');
        btnReadProduct.setAttribute("type","button");
        btnReadProduct.setAttribute("class","btn btn-outline-primary btn-lg");
        btnReadProduct.setAttribute("id","btnReadProduct");
        btnReadProduct.innerHTML = '<i class="far fa-eye" aria-hidden="true"></i>';

        let btnToggleCart = document.createElement('a');
        btnToggleCart.setAttribute("type","button");
        btnToggleCart.setAttribute("id","btnToggleCart");
        btnToggleCart.setAttribute("class","btn btn-outline-danger btn-lg icon offCart");
        products[i].isCompletedCart == !false ? btnToggleCart.classList.add("onCart") : btnToggleCart.classList.remove("onCart");

        let btnToggleWish = document.createElement('a');
        btnToggleWish.setAttribute("type","button");
        btnToggleWish.setAttribute("id","btnToggleWish");
        btnToggleWish.setAttribute("class","btn btn-outline-danger btn-lg icon offWish");
        btnToggleWish.classList.add("onWish");

        tdDescription.innerHTML = `<div>${products[i].productTitle}</div><div>${products[i].productSubtitle}</div> <div>${products[i].productText}</div>`;
        tdCardImg.innerHTML = `<img class="card-img-top" src="${products[i].productImg}" alt="product+${i}"/>`;
        tdCardPrice.append(products[i].productPrice+" €");    tdCardFooter.append(btnReadProduct,btnEspace01,btnToggleCart,btnEspace02,btnToggleWish);

        tr.append(tdCardImg,tdDescription,tdCardPrice,tdCardFooter);
        wishList.append(tr);

        btnReadProduct.onclick = editeFormReadProduct;
        btnToggleCart.onclick = toggleCart;
        btnToggleWish.onclick = toggleWish;
      }
    }
    }
    function listEvents(events){
    eventsList.innerHTML = "";
    for(let i=0; i<events.length;i++){ 
      let tr = document.createElement("tr");
      let tdEventDate = document.createElement("td");
      let tdEventImg = document.createElement("td");
      let tdEventTitle = document.createElement("td");
      let tdEventSubtitle = document.createElement("td");
      let tdEventText = document.createElement("td");
      let btnEventsList = document.createElement("td");
      let btnEspace01 = document.createElement("text");
      let btnEspace02 = document.createElement("text");
      tr.dataset.id = events[i].id;
      tdEventImg.setAttribute("class","tdEventImg");
      tdEventDate.setAttribute("colspan","1");
      tdEventDate.setAttribute("class","tdEventDate");
      tdEventTitle.setAttribute("colspan","1");
      tdEventTitle.setAttribute("class","tdEventTitle");
      tdEventSubtitle.setAttribute("colspan","1");
      tdEventSubtitle.setAttribute("class","tdEventSubtitle");
      tdEventText.setAttribute("colspan","1");
      tdEventText.setAttribute("class","tdEventText");
      btnEventsList.setAttribute("colspan","2");

      btnEspace01.innerHTML = "&nbsp";
      btnEspace02.innerHTML = "&nbsp";

      let btnReadEvent = document.createElement('a');
      btnReadEvent.setAttribute("type","button");
      btnReadEvent.setAttribute("class","btn btn-outline-primary btn-lg");
      btnReadEvent.setAttribute("id","btnReadEvent");
      btnReadEvent.innerHTML = '<i class="far fa-eye"></i>';
      let btnUpdateEvent = document.createElement('a');
      btnUpdateEvent.setAttribute("type","button");
      btnUpdateEvent.setAttribute("class","btn tn-outline-success btn-lg"); btnUpdateEvent.setAttribute("id","btnUpdateEvent");
      btnUpdateEvent.innerHTML = '<i class="fas fa-edit"></i>';
      let btnRemoveEvent = document.createElement('a');
      btnRemoveEvent.setAttribute("type","button");
      btnRemoveEvent.setAttribute("class","btn btn-outline-danger btn-lg"); btnRemoveEvent.setAttribute("id","btnRemoveUser");
      btnRemoveEvent.innerHTML= '<i class="far fa-trash-alt" aria-hidden="true"></i>';

      let eventDate = new Date(events[i].date).toLocaleDateString("default",options04);
      tdEventDate.append(eventDate);
      tdEventImg.innerHTML = `<img class="card-img-top" src="${events[i].img}" alt="event+${i}"/>`;
      tdEventTitle.append(events[i].title); 
      tdEventSubtitle.append(events[i].subTitle); 
      tdEventText.append(events[i].description); 
      btnEventsList.append(btnReadEvent,btnEspace01,btnUpdateEvent,btnEspace02,btnRemoveEvent); tr.append(tdEventImg,tdEventDate,tdEventTitle,tdEventSubtitle,tdEventText,btnEventsList);
      eventsList.append(tr);
      btnReadEvent.onclick = editeFormReadEvent;
      btnUpdateEvent.onclick = editeFormUpdateEvent;
      btnRemoveEvent.onclick = moveEvent;
      }
    }
    function listShopping(products) {
      shoppingList.innerHTML = "";
      for(let i=0;i<products.length;i++) {
        let card = document.createElement("article");
        let cardImg = document.createElement("div");
        let cardHeader = document.createElement("div");
        let cardBody = document.createElement("div");
        let cardFooter = document.createElement("div");
        card.setAttribute("class","card");
        cardImg.setAttribute("class","cardImg");
        cardHeader.setAttribute("class","card-header");
        cardBody.setAttribute("class","card-body");
        cardFooter.setAttribute("class","card-footer");
        card.dataset.id = products[i].id;
        cardImg.innerHTML = `<img class="card-img-top" src="${products[i].productImg}" id="shoImg01" alt="shopImg01">`;
        cardHeader.innerHTML = `<h5 class="card-title">${products[i].productTitle}</h5>                                                           <h6 class="card-subtitle mb-2 text-muted">${products[i].productSubtitle}</h6>                                                         <h4 class="card-subtitle mb-2 text-muted">${products[i].productPrice} €</h4>`;

        let btnReadProduct = document.querySelector('a');
        btnReadProduct.setAttribute("type","button");
        btnReadProduct.setAttribute("id","btnReadProduct");
        btnReadProduct.setAttribute("class","btn btn-outline-primary btn-lg");

        let btnToggleCart = document.createElement('a');
        btnToggleCart.setAttribute("type","button");
        btnToggleCart.setAttribute("id","btnToggleCart");
        btnToggleCart.setAttribute("class","btn btn-outline-danger btn-lg icon offCart");
        let testCart = products[i].isCompletedCart == !false ? btnToggleCart.classList.add("onCart") : btnToggleCart.classList.remove("onCart");

        let btnToggleWish = document.createElement('a');
        btnToggleWish.setAttribute("type","button");
        btnToggleWish.setAttribute("id","btnToggleWish");
        btnToggleWish.setAttribute("class","btn btn-outline-danger btn-lg icon offWish");
        let testWish = products[i].isCompletedWish == !false ? btnToggleWish.classList.add("onWish") : btnToggleWish.classList.remove("onWish");

        let editeFormReadProduct = "editeFormReadProduct02(event)";
        let toggleCart = "toggleCart02(event)";
        let toggleWish = "toggleWish02(event)";

        cardBody.innerHTML = `<p class="card-text">${products[i].productText}.</p>`;

        cardFooter.innerHTML = `<a href="#" type="${btnReadProduct.type}" id="${btnReadProduct.id}" class="${btnReadProduct.classList}" onclick="${editeFormReadProduct}"><i class="far fa-eye fa-2x"></i></a>&nbsp;
                  <a href="#" type="${btnToggleWish.type}" id="${btnToggleWish.id}" class="${btnToggleWish.classList} ${testWish}" onclick="${toggleWish}"></a>&nbsp;
                  <a href="#" type="${btnToggleCart.type}" id="${btnToggleCart.id}" class="${btnToggleCart.classList}" ${testCart}" onclick="${toggleCart}"></a>`;

        card.append(cardImg,cardHeader,cardBody,cardFooter);
        shoppingList.append(card);
      }
    }
  */
function listFeateredThumbs(doc) {
  // feateredUl.innerHTML = "";
  let isFeatured = doc.data().isFeatured;
  if (isFeatured == true) {
    let imgThumb = document.createElement("img");
    imgThumb.setAttribute("src","");
    imgThumb.setAttribute("class","imgThumb");
    imgThumb.dataset.id = doc.id;
    imgThumb.src = doc.data().productImg;
    feateredUl.append(imgThumb);
    /* feateredList.append(feateredUl); 
      feateredList.append(imgThumb); */
    // display feateredCard on event
    imgThumb.onclick = firestoreReadFeateredCard;
    // display one feateredCard without event
    editeFeateredCard(doc);
  }
}
function listShopping(doc) {
  if(doc.data().inShelved == true && doc.data().inStored == true) {
    let card = document.createElement("tr");
    let cardImg = document.createElement("div");
    let cardHeader = document.createElement("div");
    let cardBody = document.createElement("div");
    let cardFooter = document.createElement("div");
    card.setAttribute("class","card");
    cardImg.setAttribute("class","cardImg");
    cardHeader.setAttribute("class","card-header");
    cardBody.setAttribute("class","card-body");
    cardFooter.setAttribute("class","card-footer");
    card.dataset.id = doc.id;
    cardImg.innerHTML = `<img class="card-img-top" src="${doc.data().productImg}" id="shoImg01" alt="shopImg01">`;
    cardHeader.innerHTML = `<h5 class="card-title">${doc.data().productTitle}</h5>                                                           
      <h6 class="card-subtitle mb-2 text-muted">${doc.data().productSubtitle}</h6>                                                         
      <h4 class="card-subtitle mb-2 text-muted">${doc.data().productPrice} €</h4>`;

    let btnReadProduct = document.querySelector('a');
    btnReadProduct.setAttribute("type","button");
    btnReadProduct.setAttribute("id","btnReadProduct");
    btnReadProduct.setAttribute("class","btn btn-outline-primary btn-lg");

    let btnToggleCart = document.createElement('a');
    btnToggleCart.setAttribute("type","button");
    btnToggleCart.setAttribute("id","btnToggleCart");
    btnToggleCart.setAttribute("class","btn btn-outline-danger btn-lg icon offCart");

    let btnToggleWish = document.createElement('a');
    btnToggleWish.setAttribute("type","button");
    btnToggleWish.setAttribute("id","btnToggleWish");
    btnToggleWish.setAttribute("class","btn btn-outline-danger btn-lg icon offWish");

    let editeFormReadProduct = "editeFormReadProduct(event)";
    let toggleCart = "toggleCart(event)";
    let toggleWish = "toggleWish(event)";
    let testCart = doc.data().isCompletedCart == !false ? btnToggleCart.classList.add("onCart") : btnToggleCart.classList.remove("onCart");
    let testWish = doc.data().isCompletedWish == !false ? btnToggleWish.classList.add("onWish"): btnToggleWish.classList.remove("onWish");

    cardBody.innerHTML = `<p class="card-text">${doc.data().productText}.</p>`;

    cardFooter.innerHTML = `
      <a href="#" type="${btnReadProduct.type}" id="${btnReadProduct.id}" class="${btnReadProduct.classList}" onclick="${editeFormReadProduct}">
      <i class="far fa-eye fa-2x"></i>
      </a>&nbsp;
      <a href="#" type="${btnToggleWish.type}" id="${btnToggleWish.id}" class="${btnToggleWish.classList} ${testWish}" onclick="${toggleWish}">
      </a>&nbsp;
      <a href="#" type="${btnToggleCart.type}" id="${btnToggleCart.id}" class="${btnToggleCart.classList}" ${testCart}" onclick="${toggleCart}">
      </a>`;

    card.append(cardImg,cardHeader,cardBody,cardFooter);
    shoppingList.append(card);
  }
}
function listCarts(doc) {
  let isCompletedCart = doc.data().isCompletedCart;
  if (isCompletedCart == true) {
    let cartBody = document.createElement("tr");
    cartBody.setAttribute("class","cart-body");
    cartBody.setAttribute("data-id",doc.id);
    let formCart = document.createElement("form");
    formCart.setAttribute("id","formCart");
    let inputCart = document.createElement("input");
    inputCart.setAttribute('value',qte);
    inputCart.setAttribute("class","form-control inputCart");
    let btnReadProduct = document.querySelector('a');
    btnReadProduct.setAttribute("type","button");
    btnReadProduct.setAttribute("id","btnReadProduct");
    let btnToggleCart = document.createElement('a');
    btnToggleCart.setAttribute("type","button");
    btnToggleCart.setAttribute("id","btnToggleCart");
    btnToggleCart.setAttribute("class","btn btn-outline-danger btn-lg icon offWish");
    let testCart = doc.data().isCompletedCart == !false ? btnToggleCart.classList.add("onCart") : btnToggleCart.classList.remove("onCart");
    let btnToggleWish = document.createElement('a');
    btnToggleWish.setAttribute("type","button");
    btnToggleWish.setAttribute("id","btnToggleWish");
    btnToggleWish.setAttribute("class","btn btn-outline-danger btn-lg icon offWish");
    let testWish = doc.data().isCompletedWish == !false ? btnToggleWish.classList.add("onWish") : btnToggleWish.classList.remove("onWish");
    let montant = inputCart.value*doc.data().productPrice;
    total += montant;
    let formUpdateCartValidator = "formUpdateCartValidator(event)";
    let editeFormReadProduct = "editeFormReadProduct(event)";
    let toggleCart = "toggleCart(event)";
    let toggleWish = "toggleWish(event)";
    cartBody.innerHTML += ` 
        <td colspan="2">
          <div class="cart">
          <div id="cartImg">
          <img class="card-img-top" src="${doc.data().productImg}" alt="cartImg01">
          </div>
          <div class="cartBody">
          <h5 class="cart-title">${doc.data().productTitle}</h5>
          </div>
          </div>
        </td>
        <td>                                                       
          <form id="${formCart.id}" class="flex01" onsubmit="${formUpdateCartValidator}">
          <input type="number" size="2" min="1" max="10" value="${inputCart.value}" class="${inputCart.classList}">&nbsp;
          <button type="submit" class="btn btn-outline-primary btn-lg"><i class="fas fa-check"></i></button>&nbsp;
          <button type="reset" class="btn btn-outline-primary btn-lg"><i class="fas fa-undo"></i></button>
          </form>                                                     
        </td>
        <td>
          <div class="flex01"><p class="prix">${doc.data().productPrice}</p>&nbsp<i class=\"fas fa-euro-sign\"></i></div>
        </td>
        <td>
          <div class="flex01"><p class="montant">${montant}</p>&nbsp<i class=\"fas fa-euro-sign\"></i></div>
        </td>
          <td colspan="2">
          <div class="card-footer">
          <a href="#" type="${btnReadProduct.type}" id="${btnReadProduct.id}" class="btn btn-outline-primary btn-lg" onclick="${editeFormReadProduct}"><i class="far fa-eye fa-2x"></i></a>
          <a href="#" type="${btnToggleWish.type}" id="${btnToggleWish.id}" class="${btnToggleWish.classList} ${testWish}" onclick="${toggleWish}"></a>
          <a href="#" type="${btnToggleCart.type}" id="${btnToggleCart.id}" class="${btnToggleCart.classList}" ${testCart}" onclick="${toggleCart}"></a>                   
          </div>                                                   
        </td>
      `;
    cartsList.append(cartBody);
    total !== 0 || cartsList !== "" ? cartTotal.innerHTML = `<h5>${total.toFixed(2)}&nbsp<i class="fas fa-euro-sign"></i></h5>` : cartTotal.textContent = "Don't leave your cart empty, please fill it !"; 
  }
} 
function listWishs(doc){
  let isCompletedWish = doc.data().isCompletedWish;
  if (isCompletedWish == true) {
    let tr = document.createElement("tr");
    let tdCardImg = document.createElement("td");
    let tdDescription = document.createElement("td");
    let tdCardPrice = document.createElement("td");
    let tdCardFooter = document.createElement("td");
    let btnEspace01 = document.createElement("text");
    let btnEspace02 = document.createElement("text");
    btnEspace01.innerHTML = "&nbsp";
    btnEspace02.innerHTML = "&nbsp";
    tr.dataset.id = doc.id;
    tdCardImg.setAttribute("class","cardImg01");
    tdDescription.setAttribute("class","wishDescription");
    tdDescription.setAttribute("colspan","2");
    tdCardPrice.setAttribute("class","card-price01"); 
    tdCardFooter.setAttribute("class","cardFooter");
    tdCardFooter.setAttribute("colspan","3");
    let btnReadProduct = document.createElement('a');
    btnReadProduct.setAttribute("type","button");
    btnReadProduct.setAttribute("class","btn btn-outline-primary btn-lg");
    btnReadProduct.setAttribute("id","btnReadProduct");
    btnReadProduct.innerHTML = '<i class="far fa-eye" aria-hidden="true"></i>';

    let btnToggleCart = document.createElement('a');
    btnToggleCart.setAttribute("type","button");
    btnToggleCart.setAttribute("id","btnToggleCart");
    btnToggleCart.setAttribute("class","btn btn-outline-danger btn-lg icon offCart");
    doc.data().isCompletedCart == !false ? btnToggleCart.classList.add("onCart") : btnToggleCart.classList.remove("onCart");

    let btnToggleWish = document.createElement('a');
    btnToggleWish.setAttribute("type","button");
    btnToggleWish.setAttribute("id","btnToggleWish");
    btnToggleWish.setAttribute("class","btn btn-outline-danger btn-lg icon offWish");
    btnToggleWish.classList.add("onWish");

    tdDescription.innerHTML = `
      <div>${doc.data().productTitle}</div>
      <div>${doc.data().productSubtitle}</div>
      <div>${doc.data().productText}</div>
      `;
    tdCardImg.innerHTML = `<img class="card-img-top" src="${doc.data().productImg}" alt="product+${doc.data().productImg}"/>`;
    tdCardPrice.append(doc.data().productPrice+" €");    
    tdCardFooter.append(btnReadProduct,btnEspace01,btnToggleCart,btnEspace02,btnToggleWish);

    tr.append(tdCardImg,tdDescription,tdCardPrice,tdCardFooter);
    wishList.append(tr);

    btnReadProduct.onclick = editeFormReadProduct;
    btnToggleCart.onclick = toggleCart;
    btnToggleWish.onclick = toggleWish;
  }
}
/*
  async function firestoreReadFeateredCard() {
    // e.preventDefault();
    const t = e.target
    const tId = t.dataset.id;
    let docRef = doc(db,"productsList",tId);
    let docSnap = await getDoc(docRef);
    if (docSnap.exists()) { 
      feateredCard.innerHTML = `
        <div class="selected03">
          <img src="${docSnap.data().productImg}" alt="ImgCard" class="selected03Img02">
        </div>
        <h3 class="eventTitle20">${docSnap.data().productTitle}</h3>
        <div class="card-header">
          <h4 class="eventSubtitle20">${docSnap.data().productSubtitle}</h4>
        </div>
        <div class="card-body event-body">
          <p class="eventText20">${docSnap.data().productText}</p>
        </div>
        <div class="card-footer cardFooter">
          <a type="button" class="btn btn-outline-primary btn-lg" id="btnReadProduct">
            <i class="far fa-eye fa-2x" aria-hidden="true"></i>
          </a>
          <text>&nbsp;</text>
          <a type="button" class="btn btn-outline-danger fa-2x icon offCart" id="btnToggleCart"></a>
          <text>&nbsp;</text>
          <a type="button" class="btn btn-outline-danger fa-2x icon offWish" id="btnToggleWish"></a>
        </div>
      `;
    } 
  }
  */

function getJSON() {
  fetch(url)
    .then(result => result.json())
    .then((output) => {
    bannerTab = output.bannerImg;
    controller(bannerTab);
  })
    .catch(err => console.error("Error message : "+err.message));
}

function controller(bannerTab) {
  for(let i=0;i<bannerTab.length;i++) { 
    bannerTab[i].id = i+Date.now().toString().slice(10);
    let li = document.createElement("li");
    li.setAttribute("class","demo");
    li.style.opacity = 0.25;
    li.dataset.id = bannerTab[i].id;
    li.style.backgroundImage = `url(${bannerTab[i].url})`;
    bannerThumb.append(li);

    li = document.querySelectorAll('.demo');

    // Initialize slider
    nav.classList.add("noDisplay");
    nav02.classList.add("noDisplay");
    blockBanner01.style.display = "none";
    setSlider02(id,...bannerTab);
    toggleBgOn.style.display = "none";
    // setSlider02(id,...bannerTab);
    // banner.style.display="none";
    // caption.style.display="none";
    li[id].style.opacity = 1;
    // display homePage      
    // toggleThumbs(1,li);
    setTable(2);

    for(let i=0;i<li.length;i++) {
      li[i].onclick = (e) => {
        caption.style.display = "display";
        e.preventDefault();
        let t = e.target;
        let dataId = t.getAttribute("data-id");
        if(dataId == li[i].dataset.id) {
          if (i<3 || i == 6) {
            setTable(2);
          } else {
            setTable(i);
          }
          setSlider(i,...bannerTab);        
          toggleThumbs(i,li);
        }
      }
    }

    let links = document.querySelectorAll(".nav-link");
    for(let i=0;i<links.length;i++) {
      links[i].onclick = (e) => {
        e.preventDefault();
        let t = e.target;
        let btnId = t.getAttribute("id");
        console.log("t : "+t);
        if(btnId == links[i].id) {
          console.log("btnId : "+btnId+" - links[i].id : "+links[i].id);
          toggleLinks(i,t,btnId,li,...bannerTab);
        }
      }
    }

    let inputsRadio = document.querySelectorAll(".form-check-input");
    for (let i=0;i<inputsRadio.length;i++) {
      inputsRadio[i].onclick = (e) => {
        // e.preventDefault();
        let t = e.target;
        let id = t.getAttribute("id");
        if(id == inputsRadio[i][type="id"]) {
          console.log("t.getAttribute('value') : "+t.getAttribute("value"));
          setWishs(t);
        }
      }
    } 

    let forms = document.querySelectorAll("form");
    for(let i=0;i<forms.length;i++) {
      forms[i].onsubmit = (e) => {
        e.preventDefault();
        let t = e.target;
        let form00 = t.closest("form");
        let form01 = form00.nodeName;
        let formAttr = form00.getAttributeNode("id");
        let formId = formAttr.nodeValue;
        if(formId == forms[i].id) {
          console.log("formId xx : "+formId);
          toggleForms(i,t,form00,formId,li,...bannerTab);
        } 
      }
    }
    // btnPrev.onclick = () => changeSlider(-1,li,...bannerTab);
    // btnNext.onclick = () => changeSlider(1,li,...bannerTab);
    intervalSlider = setInterval(setIntervalSlider,4000,1,li,...bannerTab);
    // btnStopInterval01.onclick = stopIntervalSlider;
    // btnStopInterval01.onclick = (intervalSlider) => stopIntervalSlider(intervalSlider);
    // btnStartInterval01.onclick = () => resetIntervalSlider(1,li,...bannerTab);
    // btnStartInterval01.onclick = resetIntervalSlider;
  }
}

function setSlider(i,...bannerTab) {
  // sliderImg.src = bannerTab[i].url;
  // sliderImg.alt = bannerTab[i].alt;
  banner01.style.cssText = `background-image:url(${bannerTab[i].url});background-repeat:no-repeat;background-size:cover;background-position-y:center`;
  bannerTitle01.textContent = bannerTab[i].alt;
}
function setSlider02(i,...bannerTab) {
  banner02.style.cssText = `background-image:url(${bannerTab[i].url});background-repeat:no-repeat;background-size:cover;background-position-y:center`;
  bannerTitle02.textContent = bannerTab[i].alt;
}
function setTable(x) {
  let tables = document.querySelectorAll(".table");;
  for(let i=0;i<tables.length;i++) {
    tables[i].style.display = "none";
    if(tables[i].id == tables[x].id || tables[i].id == "menuComponent" || tables[i].id == "bannerComponent" || tables[i].id == "footerComponent") { 
      tables[i].style.display = "table";
    } else if(tables[x].id  == "homePage") {
      tables[2].style.display = "table";
    } 
  }
}
function setWish(t) {
  let tr = inputProductId.value;
  for(let q=0;q<products.length;q++) {
    if(tr == products[q].id) {
      if(t.getAttribute("value") == products[q].isCompleted) {
        products[q].isCompleted = products[q].isCompleted;
      } else {
        products[q].isCompleted = !products[q].isCompleted;
      }
      products.splice(q,1,products[q]);
      setLocalStorageProducts();
    }
  } 
}
function setCart(t) {
  let tr = t.closest('tr').getAttribute("data-id");
  let cartBody = t.closest(".cart-body");
  let td = cartBody.getElementsByTagName("td");
  let p = cartBody.getElementsByTagName("p");
  let input01 = t.firstChild;
  total =0;
  for(let i=0;i<products.length;i++) {
    let productId = products[i].id;
    if(tr == productId) {
      for(let q=0;q<td.length;q++) {
        if(q == 3) {
          let result02 = td[q].getElementsByTagName("p")[0];
          let result01 = products[i].productPrice*input01.value;
          result02.innerHTML = `${result01.toFixed(2)}`;
          for(let k=0;k<totalCart.length;k++) {
            let result03 = Number(totalCart[k].firstChild.nodeValue);
            total += result03;
            // console.log("total : "+total);
            cartTotal.innerHTML = `<h5> ${total.toFixed(2)} <i class=\"fas fa-euro-sign\"></i></h5>`;
          }
        } 
      }
    }
  }
}

function setIntervalSlider(sens,li,...bannerTab) {
  id+=sens;
  if(id < 0) {
    id = 5;
  } else if(id > 5) {
    id=0;
  }
  setSlider02(id,...bannerTab);
  // toggleThumbs(id,li);
}
function stopIntervalSlider(intervalSlider) {
  if(intervalSlider) {
    clearInterval(intervalSlider);
    intervalSlider = null;
    // toggleLinks(i,btnId,li,...bannerTab);
  }
}
function resetIntervalSlider(sens,li,...bannerTab) { 
  intervalSlider = setInterval(setIntervalSlider,4000,1,li,...bannerTab);
}
function changeSlider(sens,li,...bannerTab) {
  id += sens;
  if(id < 0) {
    id = 6;
  } else if(id > 6) {
    id=0;
  }
  setSlider02(id,...bannerTab);
  toggleThumbs(id,li);
  setTable(id);
}
/*
  function toggleThumbs(i,li) {
  li = document.querySelectorAll('.demo');
  li.forEach(child => {child.style.opacity=0.25});
  li[i].style.opacity = 1;
  } 
  */
function toggleLinks(i,t,btnId,li,...bannerTab) {
  if( btnId == 'btnMenu') {
    toggleMenu();
  } else if(btnId == "btnMenu02") {
    toggleMenu02();
  } else if (btnId == "btnHome") {
    i=0;
    btnMenuFocus.id = t.getAttribute("id");
    btnMenuFocus.textContent = t.textContent;
    nav.classList.add("noDisplay");
    blockBanner01.style.display="none";
    blockBanner02.style.display="block";
    setSlider02(i,...bannerTab);
    setTable(2);
  } else if (btnId == "btnAbout") {
    i=4;
    btnMenuFocus.id = t.getAttribute("id");
    btnMenuFocus.textContent = t.textContent;
    nav.classList.add("noDisplay");
    // btnHome.classList.remove('active');
    blockBanner01.style.display="block";
    blockBanner02.style.display="none";
    setSlider(i,...bannerTab);
    setTable(i);
  } else if (btnId == "btnShop") {
    i=3;
    btnMenuFocus.id = t.getAttribute("id");
    btnMenuFocus.textContent = t.textContent;
    nav.classList.add("noDisplay");
    // btnHome.classList.remove('active');
    blockBanner01.style.display="block";
    blockBanner02.style.display="none";
    setSlider(i,...bannerTab);
    setTable(i);
  } else if (btnId == "btnShop02") {
    i=3;
    btnMenuFocus02.id = t.getAttribute("id");
    btnMenuFocus02.textContent = t.textContent;
    nav02.classList.add("noDisplay");
    // btnHome.classList.remove('active');
    blockBanner01.style.display="block";
    blockBanner02.style.display="none";
    setSlider(i,...bannerTab);
    setTable(i);
  } else if (btnId == "btnConnect") {
    i=5;
    btnMenuFocus.id = t.getAttribute("id");
    btnMenuFocus.textContent = t.textContent;
    nav.classList.add("noDisplay");
    // btnHome.classList.remove('active');
    blockBanner01.style.display="block";
    blockBanner02.style.display="none";
    setSlider(i,...bannerTab);
    setTable(i);
  } else if (btnId == "btnUser") {
    i=6;
    bannerTab[i].alt = "Admin dashboard...";
    setTable(i);
  } else if (btnId == "btnLogOut") {
    i=0;
    connexion = false;
    btnMenuFocus.id = "";
    btnMenuFocus.textContent = "home";
    nav.classList.add("noDisplay");
    mainHeader.style.cssText = "opacity:1;z-index:100";
    mainHeader.setAttribute("data-connexion",connexion);
    userHeader.style.cssText = "opacity:0;z-index:-1";
    userHeader.setAttribute("data-connexion",!connexion);
    blockBanner01.style.display="none";
    blockBanner02.style.display="block";
    setSlider02(i,...bannerTab);
    setTable(2);
    firebaseSignout();
    alertTable.style.display = 'table';
    alertSuccess.style.display = "block";
    alertError.style.display = "none";
    alertSuccess.textContent = "You disconnected, see you soon !";
    setTimeout(undisplayedAlert, 6000);
  } else if (btnId == "btnContact") {
    i=9;
    // btnHome.classList.remove('active');
    blockBanner01.style.display="block";
    nav.classList.add("noDisplay");
    blockBanner02.style.display="none";
    setSlider(i,...bannerTab);
    setTable(8);
  } else if (btnId == "btnConditions") {
    i=10;
    btnMenuFocus.id = t.getAttribute("id");
    btnMenuFocus.textContent = t.textContent;
    nav.classList.add("noDisplay");
    // btnHome.classList.remove('active');
    blockBanner01.style.display="block";
    blockBanner02.style.display="none";
    setSlider(i,...bannerTab);
    setTable(9);
  } else if (btnId == "toggleBgOff") {
    toggleBgOff01();
  } else if (btnId == "toggleBgOn") {
    toggleBgOn01();
  } else if (btnId == "btnRgpd") {
    i=11;
    btnMenuFocus.id = t.getAttribute("id");
    btnMenuFocus.textContent = t.textContent;
    nav.classList.add("noDisplay");
    // btnHome.classList.remove('active');
    blockBanner01.style.display="block";
    blockBanner02.style.display="none";
    setSlider(i,...bannerTab);
    setTable(10);
  } else if (btnId == "btnCopyright") {
    i=12;
    btnMenuFocus.id = t.getAttribute("id");
    btnMenuFocus.textContent = t.textContent;
    nav.classList.add("noDisplay");
    // btnHome.classList.remove('active');
    blockBanner01.style.display="block";
    blockBanner02.style.display="none";
    setSlider(i,...bannerTab);
    setTable(11);
  } else if (btnId == "btnCart") {
    i=6;
    btnMenuFocus.id = t.getAttribute("id");
    btnMenuFocus.textContent = "Cart";
    nav.classList.add("noDisplay");
    bannerTab[i].alt = "Check your cart...";
    setTable(12);
  } else if (btnId == "btnWish") {
    i=6;
    btnMenuFocus.id = t.getAttribute("id");
    btnMenuFocus.textContent = "Wish";
    nav.classList.add("noDisplay");
    bannerTab[i].alt = "Your favorite items...";
    setTable(13);
  } else if (btnId == "btnCart02") {
    i=6;
    btnMenuFocus02.id = t.getAttribute("id");
    btnMenuFocus02.textContent = t.textContent;
    nav02.classList.add("noDisplay");
    bannerTab[i].alt = "Check your cart...";
    setTable(12);
  } else if (btnId == "btnWish02") {
    i=6;
    btnMenuFocus02.id = t.getAttribute("id");
    btnMenuFocus02.textContent = t.textContent;
    nav02.classList.add("noDisplay");
    bannerTab[i].alt = "Your favorite items...";
    setTable(13);
  } else if (btnId == "btnCalendar01" || btnId == "btnCalendar02") {
    i=15;
    bannerTab[0].alt = "Check your agenda...";
    setTable(i);
  } else if(btnId == "btnShop02") {
    i=6;
    btnMenuFocus02.id = t.getAttribute("id");
    btnMenuFocus02.textContent = t.textContent;
    nav02.classList.add("noDisplay");
    bannerTab[i].alt = "Get shopping...";
    setTable(3);
  } else if(btnId == "btnStartInterval") {
    resetIntervalSlider;
  } else if(btnId == "btnStopInterval") {
    stopIntervalSlider;
  } else if(btnId == "btnCloseModalUpdateProduct") {
    // i=6;
    // setTable(i);
    closeModalUpdateProduct();
  } else if(btnId == "btnCloseModalReadContact") {
    closeModalReadContact();
  } else if(btnId == "btnCloseModalUpdateContact") {
    closeModalUpdateContact();
  } else if(btnId == "btnCloseModalReadUser") {
    closeModalReadUser();
  } else if(btnId == "btnCloseModalUpdateUser") {
    closeModalUpdateUser();
  } else if(btnId == "btnCloseModalReadProduct") {
    closeModalReadProduct();
  } else if(btnId == "btnCloseModalReadEvent") {
    closeModalReadEvent();
  } else if(btnId == "btnCloseModalUpdateEvent") {
    closeModalUpdateEvent();
  } else if(btnId == "btnSortContactEmailDown") {
    sortContactEmailDown();
  } else if(btnId == "btnSortContactEmailUp") {
    sortContactEmailUp();
  } else if(btnId == "btnSortUserEmailDown") {
    sortUserEmailDown();
  } else if(btnId == "btnSortUserEmailUp") {
    sortUserEmailUp();
  } else if(btnId == "btnSortProductTitleDown") {
    sortProductTitleDown();
  } else if(btnId == "btnSortProductTitleUp") {
    sortProductTitleUp();
  } else if(btnId == "btnSortProductPriceDown") {
    sortProductPriceDown();
  } else if(btnId == "btnSortProductPriceUp") {
    sortProductPriceUp();
  } else if(btnId == "btnSortEventDateUp") {
    sortEventDateUp();
  } else if(btnId == "btnSortEventDateDown") {
    sortEventDateDown();
  } else if(btnId == "btnSortEventTitleUp") {
    sortEventTitleUp();
  } else if(btnId == "btnSortEventTitleDown") {
    sortEventTitleDown();
  }
  // setSlider(i,...bannerTab);
  // toggleThumbs(i,li);
}
function toggleBgOff01() {
  toggleBgOff.style.display = "none";
  toggleBgOn.style.display = "block";
  html.style.cssText = 'background-image:linear-gradient(to right, rgba(0, 0, 0, 0.94), rgba(0, 0, 0, 0.9) 75%), url(https://img.freepik.com/free-vector/abstract-decorative-circular-stripes-seamless-pattern-design_1035-25453.jpg);background-repeat:repeat';
  body.style.cssText = 'background-image:linear-gradient(to right, rgba(0, 0, 0, 0.94), rgba(0, 0, 0, 0.9) 75%), url(https://img.freepik.com/free-vector/abstract-decorative-circular-stripes-seamless-pattern-design_1035-25453.jpg);background-repeat:repeat;color:white';
  menuComponent.style.cssText = 'background-image:linear-gradient(to right, rgba(0, 0, 0, 0.94), rgba(0, 0, 0, 0.9) 75%), url(https://img.freepik.com/free-vector/abstract-decorative-circular-stripes-seamless-pattern-design_1035-25453.jpg);background-repeat:repeat';
  bannerTitle01.style.cssText = 'background-image: linear-gradient(to left, rgb(255 255 255 / 50%), rgba(0, 0, 0, 0.57) 90%);color: rgb(255 255 255);';
  bannerTitle02.style.cssText = 'background-image: linear-gradient(to left, rgb(255 255 255 / 50%), rgba(0, 0, 0, 0.57) 90%);color: rgb(255 255 255);';
  caption01.style.cssText = "background-image:linear-gradient(to right, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.85) 75%);color:white;box-shadow:initial;";
  caption02.style.cssText = "background-image:linear-gradient(to right, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.85) 75%);color:white;box-shadow:initial;";
  footerComponent.style.cssText = 'background-image:linear-gradient(to right, rgba(0, 0, 0, 0.94), rgba(0, 0, 0, 0.9) 75%), url(https://img.freepik.com/free-vector/abstract-decorative-circular-stripes-seamless-pattern-design_1035-25453.jpg);background-repeat:repeat;color:white';
  footer02.style.cssText = 'background-image:linear-gradient(to right, rgba(0, 0, 0, 0.94), rgba(0, 0, 0, 0.9) 75%), url(https://img.freepik.com/free-vector/abstract-decorative-circular-stripes-seamless-pattern-design_1035-25453.jpg);background-repeat:repeat;color:white';
  today01.style.color = "white";
  today02.style.color = "white";
  console.log("HW_Off");
  // i.style.cssText = "color:rgb(129, 143, 32); !important";
  // i.style.color = "rgb(129, 143, 32); !important";
  for(let z=0;z<selected02.length;z++) {
    selected02[z].style.cssText = 'background-image:linear-gradient(to right, rgb(0, 0, 0), rgb(255, 255, 255) 100%);';
  }
  for(let z=0;z<a.length;z++) {
    a[z].style.color = "white";
  }
  
  for(let z=0;z<inputs.length;z++) {
    inputs[z].classList.add("brown");
  }
  
  for(let z=0;z<textareas.length;z++) {
    textareas[z].classList.add("brown");
  }
  for(let z=0;z<ic.length;z++) {
    ic[z].style.color = "white";
  }
  for(let z=0;z<h2.length;z++) {
    h2[z].style.color = "white";
  }
  for(let z=0;z<h3.length;z++) {
    h3[z].style.color = "white";
  }
  for(let z=0;z<h4.length;z++) {
    h4[z].style.color = "white";
  }
  for(let z=0;z<h5.length;z++) {
    h5[z].style.color = "white";
  }
  for(let z=0;z<strong.length;z++) {
    strong[z].style.color = "white";
  }
  for(let z=0;z<input.length;z++) {
    input[z].style.color = "white";
  }
  for(let z=0;z<p.length;z++) {
    p[z].style.color = "white";
  }
  for(let z=0;z<td.length;z++) {
    td[z].style.color = "white";
  }
  /*
    for(let z=0;z<textarea.length;z++) {
      textarea[z].style.color = "white";
    */
  // a.style.cssText = "color:rgb(129, 143, 32); !important";
}
function toggleBgOn01() {
  toggleBgOff.style.display = "block";
  // toggleBgOff.style.color = "";
  // toggleBgOff.style.color = "rgba(144,162,18,1) !important";
  toggleBgOff.classList.add("green");
  // toggleBgOff.style.color = "initial";
  toggleBgOn.style.display = "none";
  html.style.cssText = "background-image:inherit,url:inherit;";
  body.style.cssText = "background-image:inherit,url:inherit;";
  menuComponent.style.cssText = "background-image:inherit,url:inherit;color:inherit";
  bannerTitle01.style.cssText = 'background-image:linear-gradient(to right, rgba(178 201 12 / 50%), rgba(0, 0, 0, 0.57) 90%);color:inherit;';
  bannerTitle02.style.cssText = 'background-image:linear-gradient(to right, rgba(178 201 12 / 50%), rgba(0, 0, 0, 0.57) 90%);color:inherit;';
  caption01.style.cssText = "background-image:inherit,url:inherit;color:rgb(178 201 12);box-shadow:inherit;";
  caption02.style.cssText = "background-image:inherit,url:inherit;color:rgb(178 201 12);box-shadow:inherit;";
  footerComponent.style.cssText = "background-image:background-image:inherit;";
  footer02.style.cssText = "background-image:background-image:inherit;";
  today01.style.color = "rgb(0 0 0 / 55%)";
  today02.style.color = "rgb(0 0 0 / 55%)";
  /*
    for(let z=0;z<a.length;z++) {
      a[z].style.color = "rgb(0 0 0 / 55%)";
      ic[z].style.color = "rgb(0 0 0 / 55%)";
      h2[z].style.color = "rgb(0 0 0 / 55%)";
      h3[z].style.color = "rgb(0 0 0 / 55%)";
      h4[z].style.color = "rgb(0 0 0 / 55%)";
      h5[z].style.color = "rgb(0 0 0 / 55%)";
      strong[z].style.color = "rgb(0 0 0 / 55%)";
      input[z].style.color = "rgb(0 0 0 / 55%)";
      p[z].style.color = "rgb(0 0 0 / 55%)";
      td[z].style.color = "rgb(0 0 0 / 55%)";
      textarea[z].style.color = "rgb(0 0 0 / 55%)";
      console.log("textarea.length : "+textarea.length);
      console.log("td.length : "+td.length);
      console.log("p.length : "+p.length);
      console.log("input.length : "+input.length);
      console.log("h2.length : "+h2.length);
      console.log("h5.length : "+h5.length);
      console.log("h4.length : "+h4.length);
      console.log("h3.length : "+h3.length);
      console.log("h2.length : "+h2.length);
      console.log("ic.length : "+ic.length);
      console.log("selected02.length : "+selected02.length);
      console.log("a.length : "+a.length);
    selected02[z].style.cssText = 'background-image: linear-gradient(to right, rgb(120 137 4), rgb(164 185 14) 100%);';
    }
  */
  for(let z=0;z<selected02.length;z++) {
    selected02[z].style.cssText = 'background-image: linear-gradient(to right, rgb(120 137 4), rgb(164 185 14) 100%);';
    console.log("selected02.length : "+selected02.length);
  }
  for(let z=0;z<a.length;z++) {
    a[z].style.color = "rgb(0 0 0 / 55%)";
    console.log("a.length : "+a.length);
  }
  for(let z=0;z<inputs.length;z++) {
    inputs[z].classList.remove("brown");
    inputs[z].classList.add("white");
  }
  for(let z=0;z<textareas.length;z++) {
    textareas[z].classList.remove("brown");
    inputs[z].classList.add("white");
  }
  for(let z=0;z<ic.length;z++) {
    ic[z].classList.add("green");
    console.log("ic.length : "+ic.length);
  }
  for(let z=0;z<h2.length;z++) {
    h2[z].style.color = "rgb(0 0 0 / 55%)";
    console.log("h2.length : "+h2.length);
  }
  for(let z=0;z<h3.length;z++) {
    h3[z].style.color = "rgb(0 0 0 / 55%)";
    console.log("h3.length : "+h3.length);
  }
  for(let z=0;z<h4.length;z++) {
    h4[z].style.color = "rgb(0 0 0 / 55%)";
    console.log("h4.length : "+h4.length);
  }
  for(let z=0;z<h5.length;z++) {
    h5[z].style.color = "rgb(0 0 0 / 55%)";
    console.log("h5.length : "+h5.length);
  }
  for(let z=0;z<strong.length;z++) {
    strong[z].style.color = "rgb(0 0 0 / 55%)";
    console.log("h2.length : "+h2.length);
  }
  for(let z=0;z<input.length;z++) {
    input[z].style.color = "rgb(0 0 0 / 55%)";
    console.log("input.length : "+input.length);
  }
  for(let z=0;z<p.length;z++) {
    p[z].style.color = "rgb(0 0 0 / 55%)";
    console.log("p.length : "+p.length);
  }
  for(let z=0;z<td.length;z++) {
    td[z].style.color = "rgb(0 0 0 / 55%)";
    console.log("td.length : "+td.length);
  }
  /*
    for(let z=0;z<textarea.length;z++) {
      textarea[z].style.color = "rgb(0 0 0 / 55%)";
      console.log("textarea.length : "+textarea.length);
    }
    */
  console.log("HW_On");
}
function toggleForms(i,t,form00,formId,li,...bannerTab) {
  if(formId == "formSearch") {
    formSearchValidator(i,t,formId,li,...bannerTab);
  } else if(formId == "formSearch02") { 
    formSearch02Validator(i,t,formId,li,...bannerTab);
  } else if(formId == "formConnect") { 
    formConnectValidator(i,t,formId,li,...bannerTab);
  } else if(formId == "formAddContact") { 
    formAddContactValidator(t,formId);
  } else if(formId == 'formUpdateContact') {
    formUpdateContactValidator(t,formId);
  } else if(formId == 'formAddUser') {
    formAddUserValidator(t,formId);
  } else if(formId == 'formUpdateUser') {
    formUpdateUserValidator();
  } else if(formId == 'formAddProduct') {
    formAddProductValidator(t,formId);
  } else if(formId == 'formUpdateProduct') {
    formUpdateProductValidator(t,formId);
  } else if(formId == "formAddEvent") {
    formAddEventValidator(formId,t);
  } else if(formId == "formUpdateEvent") {
    formUpdateEventValidator(t,formId);
  } else if(formId == 'formInput01') {
    setCart(t);
  } /* else if(formId == "formCart") {
      formUpdateCartValidator(t,formId);
    } */
}
async function toggleShopping(event) {
  shoppingList.innerHTML = "";
  let e = event;
  e.preventDefault();
  const t = e.target;
  const tr = t.closest('tr').getAttribute("data-id");
  t.classList.toggle("onShelve");
  let result = t.classList.contains("onShelve") ? true : false;
  const docSnap = doc(db,"productsList",tr);
  await updateDoc(docSnap, {
    inShelved:result
  });
  firestoreGetProducts();
}
async function toggleFeatered(event) {
  // feateredList.innerHTML = "";
  feateredUl.innerHTML = "";
  let e = event;
  e.preventDefault();
  let t =e.target
  let tr = t.closest("tr");
  let trId = tr.getAttribute("data-id");
  t.classList.toggle("onFeatered");
  let result = t.classList.contains("onFeatered") ? true : false;
  let docRef = doc(db,"productsList",trId);
  await updateDoc(docRef, {
    isFeatured:result
  });
  firestoreGetProducts();
}
function toggleMenu() {
  nav.classList.toggle("noDisplay");
}
function toggleMenu02() {
  nav02.classList.toggle("noDisplay");
}
// window => with template literal and event (onclick)
window.toggleCart = async (event) => {
  let e = event;
  e.preventDefault();
  const t = e.target;
  cartsList.innerHTML = "";
  feateredUl.innerHTML  = "";
  total = 0;
  total == 0 ? cartTotal.innerHTML = "<h5>Please, don't leave your cart empty, fill it !</h5>" :  cartTotal.innerHTML = `<h5>${total.toFixed(2)}&nbsp<i class="fas fa-euro-sign"></i></h5>`;
  // cartTotal.textContent = "Don't leave your cart empty, please fill it !";
  const tr = t.closest("tr").getAttribute("data-id") || t.closest("article").getAttribute("data-id");
  t.classList.toggle("onCart");
  let result = t.classList.contains("onCart") ? true : false;
  const docSnap = doc(db,"productsList",tr);
  await updateDoc(docSnap, {
    isCompletedCart:result
  });
  firestoreGetProducts();
}
// window => with template literal ans event (onclick)
window.toggleWish = async (event) => {
  wishList.innerHTML = "";
  let e = event;
  e.preventDefault();
  const t = e.target;
  const tr = t.closest("tr").getAttribute("data-id") || t.closest("article").getAttribute("data-id");
  t.classList.toggle("onWish");
  let result = t.classList.contains("onWish") ? true : false;
  const docSnap = doc(db,"productsList",tr);
  await updateDoc(docSnap, {
    isCompletedWish:result
  });
  firestoreGetProducts();
  /*  
    for(let q=0;q<products.length;q++) {
      if(tr == products[q].id) {
        // console.log("tr : "+tr);
        // console.log("products[q].id : "+products[q].id);
        t.classList.contains("onWish") ? products[q].isCompletedWish = !result : products[q].isCompletedWish = result;
        products.splice(q,1,products[q]);
        setLocalStorageProducts();
      }
    } 
  */
}

function formConnectValidator(i,t,formId,li,...bannerTab) {
  formId = t.closest("#formConnect");
  let inputs = t.querySelectorAll("input");
  let email = inputs[0].value;
  let password = inputs[1].value;
  firebaseSignin(email,password,i,formId,inputs,li,...bannerTab);
  /*
    for(let p=0;p<users.length;p++) {
      if(email == users[p].email && password == users[p].password) {
        connectUser(i,formId,inputs,li,...bannerTab);
      } else { 
        alert("The email or password you entered is incorrect, please try again.");
      }
    }
  */
}

function formSearchValidator(i,t,formId,li,...bannerTab) {
  resultSearch02.textContent = "";
  try {
    let formId = t.getAttribute("id");
    console.log("formId : "+formId);
    let inputSearch = document.getElementById("inputSearch");   
    let body01 = document.querySelector("body");
    if(inputSearch.value == "") {
      alert("Please enter any caractere !");
      inputSearch.focus();
    } else {
      i=7;
      setTable(i);
      setSlider(i,...bannerTab);
      toggleThumbs(i,li);
      resultSearch.textContent = inputSearch.value;
      // let position = body01.textContent.search(inputSearch.value);
      let pattern = new RegExp(inputSearch.value,"gi");
      console.log("pattern : "+pattern);
      resultSearch02.textContent = body01.textContent.match(pattern.toString());
      t.reset(); 
    }
  } catch(err) {
    console.error(err.message);
  }
}
function formSearch02Validator(i,t,formId,li,...bannerTab) {
  let inputs = t.querySelectorAll("input");
  formId = t.closest("#formSearch02");
  if(inputs[0].value == "") {
    alert("Please enter any caractere !");
    inputs[0].focus();
  } else {
    i=6;
    setTable(16);
    setSlider(i,...bannerTab);
    thumbsToggle(i,li);
    result02Search.textContent = inputSearch02.value;
  } 
}

function formAddContactValidator(t,formId) {
  formId = t.closest("#formAddContact");
  let inputs = t.querySelectorAll("input");
  let textareas = t.querySelectorAll("textarea");
  if(inputs[0].value == "" || textareas[0].value == "") {
    alert("The email or textarea you entered is incorrect, please try again.");
    inputs[0].focus();
  } else {
    alert("Thanck your "+inputs[0].value+" we will contact your soon.");
    console.log("formId : "+formId);
    createContact(formId,inputs,textareas);
  } 
}
function formAddUserValidator(t,formId) {
  formId = t.closest("#formAddUser");
  let inputs = t.querySelectorAll("input");
  if(inputs[0].value == "" || inputs[1].value == "" || inputs[2].value == "") {
    alert("Please fill all fields correctly."); 
  } else {
    console.log("formId Ok : "+formId);
    createUser(formId,inputs);
  }
}
function formAddProductValidator(t,formId) {
  formId = t.closest("#formAddProduct");
  let inputs = t.querySelectorAll("input");
  let textareas = t.querySelectorAll("textarea");
  if(inputs[0].value == "" || inputs[1].value == "" || inputs[2].value == "" || inputs[3].value == "" || textareas[0].value == "") {
    alert("Please fill all fields correctly."); 
  } else {
    console.log("formId Ok : "+formId);
    createProduct(formId,inputs,textareas);
  }
}
/*
  function formAddEventValidator(formId,t) {
    try {
      formId = t.closest("#formAddEvent");
      let date03 = new Date(inputAddEventDate.value).getDate();
      let testDate = date03 <= day ? true : !true;
      if(testDate == true || inputAddEventImg.value == "" && inputAddEventDate.value == "" && inputAddEventTitle.value == "" && inputAddEventSubtitle.value == "" && inputAddEventText.value == "") {
        alert("Date is over or too close or fields are not correcty fill. Please try again.");
        formId.reset();
        inputAddEventDate.focus();
      } else {
        createEvent(formId);
      } 
    } catch(err) {
      console.error(err.message);
    }
  }
  */
function formAddEventValidator(formId,t) {
  formId = t.closest("#formAddEvent");
  if(inputAddEventDate.value == "" && inputAddEventImg.value == "" && inputAddEventTitle.value == "" && inputAddEventSubtitle.value == "" && inputAddEventText.value == "") {
    alert("Date is over or too close or fields are not correcty fill. Please try again.");
    formId.reset();
    inputAddEventDate.focus();
  } else {
    createEvent(formId);
  } 
}
function editeFormReadContact(e) {
  e.preventDefault();
  let t = e.target;
  dialogReadContact.showModal();
  // readContact(t);
  firebaseReadContact(t);
}
function editeFormReadUser(e) {
  e.preventDefault();
  let t = e.target;
  openModalReadUser();
  // readUser(t);
  firebaseReadUser(t);
}
window.editeFormReadProduct = (event) => {
  let e=event;
  e.preventDefault();
  let t = e.target;
  openModalReadProduct();
  // readProduct(t);
  firebaseReadProduct(t);
}
function editeFormReadEvent(e) {
  e.preventDefault();
  let t = e.target;
  dialogReadEvent.showModal();
  // readContact(t);
  firebaseReadEvent(t);
}

function editeFormUpdateContact(e) {
  e.preventDefault();
  let t = e.target;
  let tr = t.closest('tr').getAttribute("data-id");
  console.log("tr : "+tr);
  openModalUpdateContact();
  // readContact(t);
  firebaseReadContact(t);
}
function editeFormUpdateUser(e) {
  e.preventDefault();
  let t = e.target;
  // let tr = t.closest('tr').getAttribute("data-id");
  // console.log("tr : "+tr);
  openModalUpdateUser();
  // readUser(t);
  firebaseReadUser(t);
}
function editeFormUpdateProduct(e) {
  e.preventDefault();
  let t = e.target;
  let tr = t.closest('tr').getAttribute("data-id");
  console.log("tr : "+tr);
  openModalUpdateProduct();
  // readProduct(t);
  firebaseReadProduct(t);
}
function editeFormUpdateEvent(e) {
  e.preventDefault();
  let t = e.target;
  let tr = t.closest('tr').getAttribute("data-id");
  openModalUpdateEvent();
  // readEvent(t);
  firebaseReadEvent(t);
}

function formUpdateContactValidator(t,formId) {
  formId = t.closest("#formUpdateContact");
  let inputs = t.querySelectorAll("input");
  let textareas = t.querySelectorAll("textarea");
  if(inputs[2].value == "" || textareas[0].value == ""){
    alert("Please fill all fields.");
  } else {
    // updateContact(formId,inputs,textareas);
    firebaseUpdateContact(inputs,textareas);
    formId.reset();
  }
}
function formUpdateUserValidator() {
  if(inputUpdateUserEmail.value == "" && inputUpdateUserPassword.value == ""){
    alert("Please fill all fields.");
  } else {
    updateUser();
  }
}
function formUpdateProductValidator(t,formId) {
  formId = t.closest("#formUpdateProduct");
  let inputs = t.querySelectorAll("input");
  let textareas = t.querySelectorAll("textarea");
  if(inputs[1].value == "" || inputs[2].value == "" || inputs[3].value == "" || textareas[0].value == "") {
    alert("Please fill all fields correctly."); 
  } else {
    // updateProduct();
    firebaseUpdateProduct(inputs,textareas);
    formId.reset();
  }
}
function formUpdateEventValidator(t,formId) {
  formId = t.closest("#formUpdateEvent");
  let inputs = t.querySelectorAll("input");
  let textareas = t.querySelectorAll("textarea");
  if(inputs[1].value == "" || inputs[2].value== "" || inputs[3].value== "" || inputs[4].value == "" || textareas[0].value == ""){
    alert("Please fill all fields.");
  } else {
    // updateEvent();
    firebaseUpdateEvent(inputs,textareas);
    formId.reset();
  }
}
window.formUpdateCartValidator = (event) => {
  let e=event;
  e.preventDefault();
  let t = e.target;
  let tr = t.closest("tr");
  let form00 = t.closest("form");
  let formAttr = form00.getAttributeNode("id");
  let formId = formAttr.nodeValue;
  total = 0;
  cartTotal.innerHTML = "";
  try {
    if(formId == "formCart") {
      console.log("montants.length : "+montants.length);
      let inputCart = tr.querySelector(".inputCart");
      let prix= tr.querySelector(".prix");
      let montant = tr.querySelector(".montant");
      let cont = inputCart.value*prix.textContent;
      montant.textContent = Number(cont).toFixed(2);
      for(let z=0;z<montants.length;z++) {
        let mt02 = Number(montants[z].textContent);
        console.log("montant type of : "+typeof montant02);
        total += mt02;
        cartTotal.innerHTML = `<h5>${total.toFixed(2)}&nbsp<i class="fas fa-euro-sign"></i></h5>`;
      }
      console.log("inputCart.value : "+inputCart.value);
      console.log('prix : '+prix.textContent);
      console.log("montant.textContent : "+montant.textContent);
      console.log("montant type of : "+typeof montant.textContent);
      console.log("montant : "+montant);
      console.log("total ; "+total);
    }
  } catch(err) {
    console.error(err.message);
  }
}

function createContact(formId,inputs,textareas) {
  const contact = {
    id:Date.now().toString().slice(8),
    date:date.toLocaleString("en-GB",{timeZone:"UTC"}),
    email:inputs[0].value.trim(),
    message:textareas[0].value.trim(),
    isCompleted:false
  } 
  // console.log(contact);
  contacts.push(contact);
  // setLocalStorageContacts();
  firebaseCreateContact(contact);
  formId.reset(); 
}
function readContact(t) {
  let tr = t.closest('tr').getAttribute("data-id");
  console.log("tr : "+tr);
  for(let i=0;i<contacts.length;i++){
    let contactId = contacts[i].id;
    if(tr == contactId) {
      // formReadContact
      inputContactId.value = contacts[i].id;
      inputContactEmail.value = contacts[i].email;
      messageContact.value = contacts[i].message;
      // formUpdateContact
      inputContactId02.value = contacts[i].id;
      inputContactEmail02.value = contacts[i].email;
      messageContact02.value = contacts[i].message;
    }
  }
}
function updateContact(){
  let tr = inputContactId02.value;
  console.log("tr : "+tr);
  for(let i=0;i<contacts.length;i++){
    let contactId = contacts[i].id;
    console.log("contactId : "+contactId);
    if(tr == contactId){
      contacts[i].email = inputContactEmail02.value;
      contacts[i].message = messageContact02.value;
      contacts.splice(i,1,contacts[i]);
      // setLocalStorageContacts();
      closeModalUpdateContact();
      // formUpdateContact.reset();
    } 
  }
}
function moveContact(e) {
  e.preventDefault();
  let t = e.target;
  let tr = t.closest('tr').getAttribute("data-id");
  console.log("tr : "+tr);
  if(confirm("êtes-vous de vouloir supprimer l'article ?") == true) {
    for(let i=0;i<contacts.length;i++){
      let contactId = contacts[i].id;
      if(tr == contactId){
        contacts.splice(i,1);
        setLocalStorageContacts();
        console.log(tr,contactId);
      } 
    } 
  }
}

function createUser(formId,inputs) {
  let email = inputs[0].value.trim();
  let password = inputs[1].value.trim();
  const user = {
    id:Date.now().toString().slice(8),
    email:email,
    password:password
  } 
  users.push(user);
  // setLocalStorageUsers(users);
  firebaseSignup(email,password);
  firestoreCreateUser(user);
  formId.reset();
}
function readUser(t) {
  let tr = t.closest('tr').getAttribute("data-id");
  console.log("tr : "+tr);
  for(let i=0;i<users.length;i++){
    console.log(users);
    let userId = users[i].id;
    console.log("userId : "+userId);
    if(tr == userId) {
      // formReadUser
      inputUserId.value = users[i].id;
      inputReadUserEmail.value = users[i].email;
      inputReadUserPassword.value = users[i].password;
      // formUpdateUser
      inputUserId02.value = users[i].id;
      inputUpdateUserEmail.value = users[i].email;
      inputUpdateUserPassword.value = users[i].password;
    }
  }
}
function updateUser(){
  let tr = inputUserId.value;
  console.log("tr : "+tr);
  for(let i=0;i<users.length;i++){
    let userId = users[i].id;
    console.log("userId "+userId);
    if(tr == userId){
      users[i].email = inputUpdateUserEmail.value;
      users[i].password = inputUpdateUserPassword.value;
      users.splice(i,1,users[i]);
      // setLocalStorageUsers();
      // formUpdateUser.reset();
      closeModalUpdateUser();
    } 
  }
}
function moveUser(e) {
  e.preventDefault();
  let t = e.target;
  let tr = t.closest('tr').getAttribute("data-id");
  //console.log("tr : "+tr);
  // if(confirm("êtes-vous de vouloir supprimer l'article ?") == true) {
  for(let i=0;i<users.length;i++){
    let userId = users[i].id;
    if(tr == userId){
      users.splice(i,1);
      setLocalStorageUsers();
      // console.log(tr,userId);
    } 
  } 
  // }
}

function connectUser(user,i,formId,inputs,li,...bannerTab) {
  console.log('Hello word !');
  i=6;
  setSlider(i,...bannerTab);
  setTable(i);
  // toggleThumbs(i,li);
  connexion = true;
  mainHeader.style.opacity = 0;
  mainHeader.setAttribute("data-connexion",!connexion);
  userHeader.style.cssText = "opacity:1;z-index:100";
  userHeader.setAttribute("data-connexion",connexion);
  btnControllers01.style.display = "none";
  // demo02.style.cursor = "none";
  // btnUser.innerHTML = `<i class="fas fa-user-check fa-2x" id="iconUser"></i>&nbsp${inputs[0].value}`;
  btnUser.innerHTML = `<i class="fas fa-user-check fa-2x" id="iconUser"></i>&nbsp${user.email}`;
  formId.reset();
}

function createProduct(formId,inputs,textareas) {
  try {
    const product = {
      id:Date.now().toString().slice(8),
      // id:Timestamp.fromDate(Date.now().toSgring().slice(8)),
      productImg:inputs[0].value.trim(),
      productTitle:inputs[1].value.trim(),
      productSubtitle:inputs[2].value.trim(),
      productPrice:inputs[3].value.trim(),
      productText:textareas[0].value.trim(),
      inStored:true,
      inShelved:false,
      isFeatured:false,
      isCompletedCart:false,
      isCompletedWish:false
    } 
    // console.log(product);
    products.push(product);
    // setLocalStorageProducts();
    firebaseCreateProduct(product);
    formId.reset();
  } catch (error) {
    console.error(error.message);
  }
}
function readProduct(t) {
  let tr = t.closest('tr').getAttribute("data-id");
  console.log("tr : "+tr);
  for(let i=0;i<products.length;i++){
    let productId = products[i].id;
    if(tr == productId) {
      // formReadProduct
      inputProductId.value = products[i].id;
      inputReadProductImg.src = products[i].productImg;
      inputReadProductTitle.value = products[i].productTitle;
      inputReadProductSubtitle.value = products[i].productSubtitle;
      inputReadProductPrice.value = products[i].productPrice;
      inputReadProductText.value = products[i].productText;
      if(products[i].isCompletedWish == false) {
        inputReadProductIsCompleted.checked = "checked";
        inputReadProductIsCompleted02.checked = "";
      } else {
        inputReadProductIsCompleted.checked = "";
        inputReadProductIsCompleted02.checked = "checked";
      }
      // formUpdateProduct
      inputProductId02.value = products[i].id;
      inputUpdateProductImg.src = products[i].productImg;
      inputUpdateProductImgUrl.value = products[i].productImg;
      inputUpdateProductTitle.value = products[i].productTitle;
      inputUpdateProductSubtitle.value = products[i].productSubtitle;
      inputUpdateProductPrice.value = products[i].productPrice;
      inputUpdateProductText.value = products[i].productText;
      if(products[i].isCompletedWish == false) {
        inputUpdateProductIsCompleted.checked = "checked";
        inputUpdateProductIsCompleted02.checked = "";
      } else {
        inputUpdateProductIsCompleted.checked = "";
        inputUpdateProductIsCompleted02.checked = "checked";
      } 
    }
  }
}
function readProduct02(t) {
  let card = t.closest('article');
  console.log("card : "+card);
  for(let i=0;i<products.length;i++){
    let productId = products[i].id;
    if(card.dataset.id == productId) {
      // formReadProduct
      inputReadProductImg.src = products[i].productImg;
      inputProductId.value = products[i].id;
      inputReadProductTitle.value = products[i].productTitle;
      inputReadProductSubtitle.value = products[i].productSubtitle;
      inputReadProductPrice.value = products[i].productPrice;
      inputReadProductText.value = products[i].productText;
      if(products[i].isCompletedWish == false) {
        inputReadProductIsCompleted.checked = "checked";
        inputReadProductIsCompleted02.checked = "";
      } else {
        inputReadProductIsCompleted.checked = "";
        inputReadProductIsCompleted02.checked = "checked";
      }
    }
  }
}
function updateProduct(formId,inputs,textareas) {
  for(let i=0;i<products.length;i++){
    let productId = products[i].id;
    if(inputs[0].value == productId){
      products[i].productImg = inputs[1].src;
      products[i].productImg = inputs[1].value;
      products[i].productTitle = inputs[2].value;
      products[i].productSubtitle = inputs[3].value;
      products[i].productPrice =  inputs[4].value;
      products[i].productText = textareas[0].value;  
      products.splice(i,1,products[i]);
      // setLocalStorageProducts();
      // formId.reset();
      // closeModalUpdateProduct();
    } 
  }
}
function moveProduct(tr) {
  for(let i=0;i<products.length;i++){
    if(tr == products[i].id){
      products.splice(i,1);
      setLocalStorageProducts();
    } 
  } 
}

function createEvent(formId) {
  const event = {
    id:Date.now().toString().slice(8),
    date:inputAddEventDate.value.trim(),
    img:inputAddEventImg.value.trim(),
    title:inputAddEventTitle.value.trim(),
    subTitle:inputAddEventSubtitle.value.trim(),
    description:inputAddEventText.value.trim(),
    isCompletedEvent:false
  } 
  events.push(event);
  // setLocalStorageEvents();
  firebaseCreateEvent(event);
  formId.reset();
} 
function readEvent(t) {
  try {
    let tr = t.closest('tr').getAttribute("data-id");
    for(let i=0;i<events.length;i++){
      let eventId = events[i].id;
      console.log("eventId : "+eventId);
      if(tr == eventId) {
        // formReadEvent
        inputEventId.value = events[i].id;
        inputReadEventImg.src = events[i].img;
        inputReadEventDate.value = events[i].date;
        inputReadEventTitle.value = events[i].title;
        inputReadEventSubtitle.value = events[i].subTitle;
        inputReadEventText.value = events[i].description;
        // formUpdateEvent
        inputEventId02.value = events[i].id;
        inputUpdateEventImg.src = events[i].img;
        inputUpdateEventImgUrl.value = events[i].img;
        inputUpdateEventDate.value = events[i].date;
        inputUpdateEventTitle.value = events[i].title;
        inputUpdateEventSubtitle.value = events[i].subTitle;
        inputUpdateEventText.value = events[i].description;
      }
    }
  } catch(err) {
    console.error(err.message);
  }
}
function updateEvent() {
  let tr = inputEventId02.value;
  for(let i=0;i<events.length;i++){
    let eventId = events[i].id;
    if(tr == eventId){
      events[i].img = inputUpdateEventImg.src;
      events[i].date = inputUpdateEventDate.value;
      events[i].title =  inputUpdateEventTitle.value.trim();
      events[i].subTitle =  inputUpdateEventSubtitle.value.trim();
      events[i].description = inputUpdateEventText.value.trim(); 
      events.splice(i,1,events[i]);
      // setLocalStorageEvents();
      formUpdateEvent.reset();
      closeModalUpdateEvent();
    } 
  }
}
function moveEvent(e) {
  try {
    e.preventDefault();
    let t = e.target;
    let tr = t.closest('tr');
    if(confirm("êtes-vous de vouloir supprimer l'article ?") == true) {
      for(let i=0;i<events.length;i++){
        if(tr.dataset.id == events[i].id) {
          events.splice(i,1);
          setLocalStorageEvents();
        } 
      } 
    } 
  } catch(err) {
    console.error(err.message);
  }
}
/*
  if(userHeader.dataset.connexion == connexion) {
    today02.style.color = "red";
    console.log("Hi Fadima !");
  }
  */
function interval() {
  let currentTime = new Date().toLocaleTimeString();
  let currentDate = new Date().toLocaleDateString("default",options02);
  let currentDay = new Date().toLocaleDateString("default",options03);
  today01.innerHTML = currentDay+"<br>"+currentDate+"<br>"+currentTime;
  today02.innerHTML = currentDay+"<br>"+currentDate+"<br>"+currentTime;
}

function undisplayedAlert() {
  alertTable.style.display = 'none';
  alertSuccess.style.display = "none";
  alertError.style.display = "none";
}

function sortContactEmailDown() {
  listContacts(
    contacts.sort(function compare(a,b) {
      if(a.email<b.email) return -1;
      if(a.email>b.email) return 1;
      return 0;
    })
  );
}
function sortContactEmailUp() {
  listContacts(
    contacts.sort(function compare(a,b) {
      if(a.email<b.email) return 1;
      if(a.email>b.email) return -1;
      return 0;
    })
  );
}
function sortUserEmailDown() {
  listUsers(
    users.sort(function compare(a,b) {
      if(a.email<b.email) return -1;
      if(a.email>b.email) return 1;
      return 0;
    })
  )
}
function sortUserEmailUp() {
  listUsers(
    users.sort(function compare(a,b) {
      if(a.email<b.email) return 1;
      if(a.email>b.email) return -1;
      return 0;
    })
  )
} 
function sortProductTitleDown() {
  listProducts(
    products.sort(function compare(a,b) {
      if(a.productTitle<b.productTitle) return -1;
      if(a.productTitle>b.productTitle) return 1;
      return 0;
    })
  );
}
function sortProductPriceDown() {
  listProducts(
    products.sort(function compare(a,b) {
      if(a.productPrice<b.productPrice) return -1;
      if(a.productPrice>b.productPrice) return 1;
      return 0;
    })
  )
}
function sortProductTitleUp() {
  listProducts(
    products.sort(function compare(a,b) {
      if(a.productTitle<b.productTitle) return 1;
      if(a.productTitle>b.productTitle) return -1;
      return 0;
    })
  )
}
function sortProductPriceUp() {
  listProducts(
    products.sort(function compare(a,b) {
      if(a.productPrice<b.productPrice) return 1;
      if(a.productPrice>b.productPrice) return -1;
      return 0;
    })
  )
}
function sortEventDateUp() {
  listEvents (
    events.sort(function compare(a,b) {
      if(a.date<b.date) return 1;
      if(a.date>b.date) return -1;
      return 0;
    })
  )
}
function sortEventTitleUp() {
  listEvents (
    events.sort(function compare(a,b) {
      if(a.title<b.title) return 1;
      if(a.title>b.title) return -1;
      return 0;
    })
  )
}
function sortEventDateDown() {
  listEvents(
    events.sort(function compare(a,b) {
      if(a.date<b.date) return -1;
      if(a.date>b.date) return 1;
      return 0;
    })
  )
}
function sortEventTitleDown() {
  listEvents(
    events.sort(function compare(a,b) {
      if(a.title<b.title) return -1;
      if(a.title>b.title) return 1;
      return 0;
    })
  )
}

function openModalReadContact() {
  dialogReadContact.showModal();
}
function openModalUpdateContact() {
  dialogUpdateContact.showModal();
}
function openModalReadUser() {
  dialogReadUser.showModal();

}
function openModalUpdateUser() {
  dialogUpdateUser.showModal();
}
function openModalReadProduct() {
  dialogReadProduct.showModal();
}
function openModalUpdateProduct() {
  dialogUpdateProduct.showModal();
}
function openModalReadEvent() {
  dialogReadEvent.showModal();
}
function openModalUpdateEvent() {
  dialogUpdateEvent.showModal();
}

function closeModalReadContact() {
  dialogReadContact.close();
}
function closeModalUpdateContact() {
  dialogUpdateContact.close();
}
function closeModalReadUser() {
  dialogReadUser.close();
}
function closeModalUpdateUser() {
  dialogUpdateUser.close();
} 
function closeModalReadProduct() {
  dialogReadProduct.close();
}
function closeModalUpdateProduct() {
  dialogUpdateProduct.close();
}
function closeModalReadEvent() {
  dialogReadEvent.close();
}
function closeModalUpdateEvent() {
  dialogUpdateEvent.close();
}

class Elt {
  constructor(elt1){
    this.elt1 = document.createElement(elt1);
  }
  setAttr(attr1,val1){
    this.elt1.setAttribute(attr1,val1);
  }
  setContent(text1){
    this.elt1.textContent = text1;
  }
  setinnerHTML(inner1){
    this.elt1.innerHTML = inner1;
  }
  onclickElt(ft){
    this.elt1.onclick = ft;
  }
}

// -------------------------------------------------


/*--------GIT----------- */
// https://www.w3schools.com/git/default.asp
// https://www.w3schools.com/git/exercise.asp?filename=exercise_new_files1
// https://git-scm.com/

/*--------------------- */

// https://www.igensia-education.fr/mentions-legales


// https://medium.com/@aysunitai/creating-email-and-password-authentication-with-firebase-and-vanilla-javascript-668aa73868a0
// https://bootstrapped.app/guide/how-to-implement-firebase-authentication-with-username-and-password


/* 
  products = [
  {"productImg":"https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg?auto=compress&cs=tinysrgb&w=600","productTitle":"Women's Pumps","productSubtitle":"Sexy High Heel Shoes","productPrice":"185.45","productText":"Colour: Daim Red","isCompleted":false},
  {"productImg":"https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=600","productTitle":"Sunglasses for Women","productSubtitle":"Retro Mirrored Lenses","productPrice":"175.55","productText":"Anti Glare UVA UVB","isCompleted":false},
  {"productImg":"https://images.pexels.com/photos/313707/pexels-photo-313707.jpeg?auto=compress&cs=tinysrgb&w=600","productTitle":"Girl bridal Wedding Shoes","productSubtitle":"Eraser/Synthetic","productPrice":"375.99","productText":"Colour : White","isCompleted":false},
  {"productImg":"https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600","productTitle":"Oxfords man Shoes","productSubtitle":"Wedding man's shoes","productPrice":"1500.99","productText":"Cuir","isCompleted":false},
  {"productImg":"https://images.unsplash.com/photo-1565084888279-aca607ecce0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDYwM3wwfDF8cmFuZG9tfHx8fHx8fHx8MTcxMzgyMjU2MHw&ixlib=rb-4.0.3&q=80&w=1080","productTitle":"Texas men jeans","productSubtitle":"Classic 5-pocket construction","productPrice":"150.45","productText":""99% Cotton"","isCompleted":false},
  {"productImg":"https://images.pexels.com/photos/39716/pexels-photo-39716.jpeg?auto=compress&cs=tinysrgb&w=600","productTitle":"Man glasses","productSubtitle":"Vision Beyond Eye Glasses","productPrice":"250.45","productText":"Brown color","isCompleted":false},
  {"productImg":"https://images.pexels.com/photos/1327689/pexels-photo-1327689.jpeg?auto=compress&cs=tinysrgb&w=600","productTitle":"Cosmetics Makeup","productSubtitle":"Palette set 10 coloris","productPrice":"186.89","productText":"light, medium, and dark colors","isCompleted":false},
  {"productImg":"https://images.pexels.com/photos/1395306/pexels-photo-1395306.jpeg?auto=compress&cs=tinysrgb&w=600","productTitle":"Women's Ring","productSubtitle":"925 Sterling Silver Ring,","productPrice":"256.99","productText":"Engagement Ring","isCompleted":false}
  ] 
  */

// => https://www.toutjavascript.com/reference/ref-array.php
// => https://www.toutjavascript.com/savoir/savoir15.php3

// recherche => html table calculate total
// https://stackoverflow.com/questions/64385333/how-can-i-sum-elements-in-a-html-table-after-filtering-by-class

// https://www.aliasdmc.fr/courshtml/cours_html32.html

// https://randomimagegen.com/

// trait vertical => https://waytolearnx.com/2019/07/comment-creer-une-ligne-verticale-en-html.html

// https://picsum.photos/images
// https://unsplash.com/fr/s/photos/random

// https://www.w3schools.com/js/
// https://www.aliasdmc.fr/coursjavas/cours_javascript76.html
// https://yard.onl/sitelycee/cours
// js/_Js.html?RcuprerlespropritsCSS.html
// https://developer.mozilla.org/fr
//# sourceURL=pen.js



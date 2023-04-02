const PrintNum = document.querySelector(".loading-num");
const LoadingPage = document.querySelector(".Loading-page");
const LoadingTxt = document.querySelector(".Loading-txt");
const BodyHidden = document.getElementsByTagName("body")[0];
const MainWrapper = document.getElementsByClassName("main-wrapper")[0];
const li = document.querySelectorAll(".li");


const RandomArray = ["active1", "active2"];

const AddRandomClass = () => {
    LoadingTxt.classList.add(`${RandomArray[Math.floor(Math.random() * 2)]}`)
}
let loadNum = 0;


const NumPlus = () => {
    loadNum++;
    PrintNum.innerHTML = loadNum;
    if (loadNum === 100) {
        clearInterval(id)
        LoadingPage.style.opacity = ".5"
        setTimeout(() => {
            LoadingPage.style.opacity = ".2";
            LoadingPage.style.display = "none";
            BodyHidden.classList.remove("body-hidden")
            MainWrapper.style.display = "flex";


        }, 350)
    }
}

let id = setInterval(NumPlus, 15)

AddRandomClass();

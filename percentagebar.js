const unsuccessfulBarEl = document.querySelector(".unsuccessful-bar");
const successfulBarEl = document.querySelector(".successful-bar");

let idx = 0;
let idx2 = 0; 

updateBar();
updateBar2();

function updateBar() {
    unsuccessfulBarEl.style.width = idx + "%"
    idx++
    if (idx < 101) {
        setTimeout(updateBar, 15)
    }  
} 

function updateBar2() {
    successfulBarEl.style.width = idx2 + "%"
    idx2++
    if (idx2 < 66) {
        setTimeout(updateBar2, 15)
    }
}
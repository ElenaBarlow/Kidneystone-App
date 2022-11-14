let num = 0;

const value = document.querySelector(".value");
const btns = document.querySelectorAll(".btn");
const decreaseBtn = document.querySelector(".btn-danger")

btns.forEach((btn)=>{
  btn.addEventListener("click", (event)=> {
   const styles = event.currentTarget.classList
   if (styles.contains("btn-danger")) {
    num--;
   } else if (styles.contains("btn-success")) {
    num++;
   } 
   value.textContent = num;
   if (num === 0) {
    value.style.color = "black";
    decreaseBtn.classList.add("disabled")
   } else if (num < 5) {
    value.style.color = "green";
    decreaseBtn.classList.remove("disabled")
   } else if (num < 10) {
    value.style.color = "orange";
   } else if (num >= 10) {
    value.style.color = "red";
   } 
  })
})
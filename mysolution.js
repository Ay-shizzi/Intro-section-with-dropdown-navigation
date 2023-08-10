const company = document.getElementById("company");
const features = document.getElementById("features");
const featuresOpen = document.getElementById("features-down");
const companyOpen = document.getElementById("company-down");


company.addEventListener("click", ()=>{
    companyOpen.classList.toggle("open")
})
features.addEventListener("click", ()=>{
    featuresOpen.classList.toggle("open")
})
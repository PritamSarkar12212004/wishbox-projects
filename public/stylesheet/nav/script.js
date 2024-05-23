const adminBtn = document.querySelector(".admin");
const loginForm = document.querySelector(".loginForm");
// * nav fnction
flag=0
adminBtn.addEventListener("click",()=>{
    if(flag==0){
        loginForm.style.display="flex";
        flag=1;
    }else{
        loginForm.style.display="none";
        flag=0;
    }
})
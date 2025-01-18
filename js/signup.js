
async function init() {
    try {
        const $h3= document.getElementById("id_h3");
        const $form=document.getElementById("id_form");
        const $userNameInput=document.querySelector("#inputName");
        const $emailInput=document.querySelector("#inputEmail");
        const $passwordInput=document.querySelector("#inputPassword");
        const $confirmPasswordInput=document.querySelector("#inputConfirmPassword");
        const $errorMsg= document.querySelector("span");


        window.addEventListener("load",()=>{
          const search=location.search;
          const ar=search.split("=");
          $h3.innerText=`Hello ${ar[1].replace('+',' ')}`;
        });

        $form.addEventListener("submit", async (e)=>{
           
           e.preventDefault();
           $errorMsg.innerText="";
            
            const user=$userNameInput.value;
            const email=$emailInput.value;
            const password=$passwordInput.value;
            const confirm=$confirmPasswordInput.value;

            if(user.length>8 || user.length<4) {
              $errorMsg.innerText += `* user : between 4-8 letters [${user}]\n`;
              $errorMsg.style.display="block";
          }
          
          if(email.indexOf('@')==-1) {              
              $errorMsg.innerText += `* email : must be include '@' [${email}]\n`;
              $errorMsg.style.display="block";
          }
          if(password.length<5 || password.length>10 || password.indexOf('$')==-1) {              
              $errorMsg.innerText += `* password : between 5-10 letters and '$' letter [${password}]\n`;
              $errorMsg.style.display="block";
          }
          
          if(password!=confirm) {        
              $errorMsg.innerText += `* confirm : not equal to password [${password},${confirm}]\n`;
              $errorMsg.style.display="block";
          }  
          

          const isError=($errorMsg.innerText).length;

          //if OK
          if( !isError) {

            const formData = {
              user,
              email,
              password,
              confirm
              }
              
              try {

                const response=await axios.post("http://localhost:3000/validate", formData);
                const data= await axios.get("http://localhost:3000/home",{ params: { user: response  }});
                window.open(`${window.location.origin}/client/home.html?name=${user}`);
     
               
               
              }
              catch(err) {
                console.log(err)
              }


          }

           
        })


    }
    catch(err) {

        console.error(err.message);
    }
}

init();


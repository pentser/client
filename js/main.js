
async function init() {
    try {
        const $form=document.getElementById("id_form");
        const $nameInput=document.querySelector("#name");
        const $errorMsg= document.querySelector("span");
        
        $nameInput.addEventListener("input",()=> {
            if($nameInput.value.length>1) {
                $errorMsg.style="display:none"
            }
            
        })


        $form.addEventListener("submit",async (e)=>{

          
            if($nameInput.value.length<2) {
                e.preventDefault();
                $errorMsg.style="display:block"
            }
            else {
                try {
                    await axios.get ("http://localhost:3000/signup",{ params: { name: $nameInput.value  } });
                    
                }
                catch(err) {
                    console.log(err.msg);
                }                
            }          
        })

        // get response from server
        let res=await axios.get("http://localhost:3000");
        console.log(res);
    }
    catch(err) {

        console.error(err.message);
    }
}

init();
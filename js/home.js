async function init() {
    try {
        const $row=document.getElementById("id_row");
        
        const newDiv = document.createElement("div")
        newDiv.className="col";
        newDiv.innerHTML=`
            <h1>${"temporery text"}</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis saepe earum asperiores, assumenda eius labore!</p>    
        `;
        $row.appendChild(newDiv);          

    }
    catch(err) {
        console.log(err)
    }

}

init();
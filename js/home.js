function init() {

       ;
        let url=location.href;
        let search=url.split("?");

        const $row=document.getElementById("id_row");
        const newDiv = document.createElement("div")
        newDiv.className="col";
        newDiv.innerHTML=`
            <h1>${search[1]}</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis saepe earum asperiores, assumenda eius labore!</p>    
        `;
        $row.appendChild(newDiv);            
}

init();
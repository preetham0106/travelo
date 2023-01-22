for( persons in localStorage){
    const obj=JSON.parse(localStorage[persons])
    //console.log('hi')
    if(obj.islogged){
        console.log('indi')
        document.getElementById("name").value=obj.name
        document.getElementById("username").value=obj.username
        document.getElementById("address").value=obj.address
        document.getElementById("mail").value=obj.mail
        document.getElementById("heading").innerHTML=obj.name

        const edit=document.getElementById("edit")
        edit.addEventListener("click",()=>{
            console.log("hi")
           const email1=obj.mail
           obj.name=document.getElementById("name").value
           obj.username=document.getElementById("username").value
           obj.address=document.getElementById("address").value
          // obj.email=document.getElementById("mail").value
           //localStorage.removeItem(email1)

           localStorage.setItem(obj.email,JSON.stringify(obj))
           document.getElementById("name").value=obj.name
           document.getElementById("username").value=obj.username
           document.getElementById("address").value=obj.address
           document.getElementById("mail").value=obj.mail
           document.getElementById("heading").innerHTML=obj.name

    }
        )
}
}




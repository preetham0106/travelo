
const person={name:"preetham",password:"12345",mail:"abc@gmail.com",username:"preetham178",address:"gachibouli",islogged:false}

const persons=[]
persons.push(person)

localStorage.setItem("abc@gmail.com",JSON.stringify(person))


//signup part

var exists=(email)=>{
    //console.log(email)
    if(localStorage.getItem(email))
    return true;
    return false
   }

const signup=document.getElementById("sign up")
signup.addEventListener("click", ()=>{
    document.getElementsByClassName('signupFrm')[0].style.display=''
    const signup=document.getElementById('signup')
    signup.addEventListener("click",()=>{

        const name=document.getElementById("firstname").value
    const email=document.getElementById("mail").value
    const username=document.getElementById('username').value
    const password=document.getElementById("password").value
    const cnfpassword=document.getElementById("cnfpassword").value
    const address=document.getElementById("address").value
    //console.log(email)
    if(email===null||name==null||username==null||password==null||cnfpassword==null||address==null){
        if(email.size()==0){
            document.getElementById("mail").value="mandetory"

        }
        if(name==null){
            document.getElementById("firstname").value="mandetory"

        }
        if(username==null){
            document.getElementById("username").value="mandetory"

        }
        if(password==null){
            document.getElementById("password").value="mandetory"

        }
        if(cnfpassword==null){
            document.getElementById("cnfpassword").value="mandetory"

        }
        if(address==null){
            document.getElementById("address").value="mandetory"

        }


    }
   else if(password!==cnfpassword){
    document.getElementById("password").value="";
    document.getElementById("cnfpassword").value=""

    document.getElementById("password").placeholder="passwords not matched"
    document.getElementById("cnfpassword").placeholder="passwords not matched"
   }
   else if(exists(email)){
    document.getElementById("mail").value="already exist"
   }

   else{
      const new_data={name:name,password:password,mail:email,username:username,address:address,islogged:false}
      persons.push(new_data)
      localStorage.setItem(email,JSON.stringify(new_data))
      //console.log(persons)


      document.getElementsByClassName('signupFrm')[0].style.display='none'

    

   }

    })

    



})







//login part

const btn=document.getElementById("login")


btn.addEventListener("click",()=>{
    document.getElementById('form').style.display=''
    
// document.getElementById('greeting').style.display='none'
const submit=document.getElementById('submit')
submit.addEventListener("click",()=>{
    const mailId=document.getElementById("typeEmailX").value


const passwd=document.getElementById("typePasswordX").value
console.log(mailId)
console.log(passwd)
console.log("button clicked")

 const obj=JSON.parse(localStorage.getItem(mailId))
//const obj=person

if(obj.mail===mailId){
console.log(obj)

   // const user=JSON.parse(obj)
    if(obj.password===passwd){
        console.log("valid")
        document.getElementById('form').style.display='none'
        document.getElementById('greeting').style.display=''
        document.getElementById('greeting').innerHTML="";
        document.getElementById('greeting').innerHTML=`welcome ${obj.name}`
        document.getElementById('options').style.display='none'
        obj.islogged=true;
        localStorage.setItem(mailId,JSON.stringify(obj))

       // localStorage[mailId].setItem(JSON.stringify(obj))
        document.getElementById('profile').style.display=''
        document.getElementById("logout").style.display=''

        const logout=document.getElementById("logout")
        logout.addEventListener("click",()=>{
            logout.style.display='none'

            
            obj.islogged=false;
            console.log(obj)
            localStorage.setItem(obj.email,JSON.stringify(obj))
            document.getElementById("profile").style.display='none'
            document.getElementById('options').style.display=''
            document.getElementById('greeting').innerHTML='Welcome to <strong>Tempo</strong>'


        })

        //document.getElementById('greeting').innerHTML="hello"

       // document.getElementById('greeting').style.display='flex'
    }
    else{
        document.getElementById("typeEmailX").value=""
        document.getElementById("typeEmailX").placeholder="invalid"
        document.getElementById("typePasswordX").value=""
        document.getElementById("typePasswordX").placeholder="invalid"

        // document.getElementById("typeEmailX").place

    }
}
else{
    document.getElementById("typeEmailX").value=""
    document.getElementById("typePasswordX").value=""
    document.getElementById("typeEmailX").placeholder="invalid"
    document.getElementById("typePasswordX").placeholder="invalid"

    // document.getElementById("typeEmailX").place


}

})




})



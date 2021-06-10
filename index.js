
const submit = document.getElementById('submit')

submit.addEventListener("click", () =>{
    const userName = document.querySelector('#name').value
    const userEmail = document.getElementById('email').value
    const userPhone = document.getElementById('phone').value

    let newline = "\r\n"
    var details = "Name: " + userName
    details += newline
    details += "Email: " + userEmail
    details += newline
    details += "Phone: " + userPhone



    if(userName !== '' && userEmail !== '' && userPhone !== ''){
        alert(details)
    }else{
        alert('Fill in all fields')
    }
})


// 
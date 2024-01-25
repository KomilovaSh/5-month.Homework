const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };



function validate(data) {
    if(!data.firstname.value){
        alert("Nom kiritilishi shart");
        data.firstname.focus();
        return false;
    }
    if(data.firstname.value.trim().length <3){
        alert("Kamida 3 ta elementdan iborat bo'lishi shart");
        data.firstname.focus();
        return false;
    }
    if(!data.email.value){
        alert("Email kiritilishi shart");
        data.email.focus();
        return false;
    }
    if(!validateEmail(data.email.value)){
        alert("Email noto'g'ri kiritildi");
        data.email.focus();
        return false;
    }
    if(!data.username.value){
        alert("Foydalanuvchi nomi kiritilishi shart");
        data.username.focus();
        return false;
    }
    if(!data.password.value){
        alert("Parol kiritilishi shart");
        data.password.focus();
        return false;
    }
    if(data.password.value.length<3){
        alert("Parol uzunligi kamida 3 ta bo'lish kerak");
        data.password.focus();
        return false;
    }
    if(data.password.value !=data.repassword.value){
        alert("Parol mos kelmadi");
        data.password.focus();
        data.repassword.value='';
        return false;
    }
    if(!data.repassword.value){
        alert("Parol qayta kiritilishi shart");
        data.repassword.focus();
        return false;
    }
    if(data.username.value){
        let dataUsers=getData();
        let isExist=dataUsers.some(user => {
            return data.username.value==user.username
        })
        if(isExist){
            alert("Bunday foydalanuvchi mavjud");
            data.username.focus();
            return false;
        }
    }

    return true;
}

function getData(){
    let data=[];
    if(localStorage.getItem('users')) {
        data=JSON.parse(localStorage.getItem('users'))
    }
    return data;
}
export{validate, getData}
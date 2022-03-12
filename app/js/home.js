function updateToken(){
    getSession().setToken(document.getElementById("token").value)
}

$("#updatebutton")[0].on("click", updateToken);


$("#token")[0].value = getSession().getToken()
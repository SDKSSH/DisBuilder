function updateToken(){
    getSession().setToken(document.getElementById("token").value)
}

window.onload = () => {
    $("#updatebutton").on("click", updateToken);
    $("#token").val(getSession().getToken())
}
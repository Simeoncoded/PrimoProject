
loggedUser = {role:""}

function selectUser(){

    radSelectedUser = document.querySelector('input[name="radUsers"]:checked').value
    for (role in userRoles){
        if (radSelectedUser == role){
            loggedUser.role = role;
        }
    }
    
    window.location.href = "index.html"

}

const userRoles = {
    admin:"Admin",
    quality:"Quality",
    engineer:"Engineer"
}
let usrname = document.getElementById('usrname');
let admin = document.getElementById('admin');
let guest = document.getElementById('guest');
let otherUser = document.getElementById('otherUser');

guest.addEventListener('click', function(e) {
    usrname.style.display = "none";
    otherUser.style.display = "block";
});

admin.addEventListener('click', function(e) {
    usrname.style.display = "block";
    otherUser.style.display = "none";
});
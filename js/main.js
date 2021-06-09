function slideUp() {
    document.getElementById('second').style.height = '428px';
    document.getElementById('first').style.height = '36px';
}

function slideDown() {
    document.getElementById('second').style.height = '0px';
    document.getElementById('first').style.height = '344px';
}


function popupShow() {
    document.getElementById('third').style.width = '100%';
    document.getElementById('third').style.height = '100%';
}

function popupClose() {
    document.getElementById('third').style.width = '0%';
    document.getElementById('third').style.height = '0%';
}

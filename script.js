let a;
function oii(b){
    const one = document.querySelector('#one');
    const two = document.querySelector('#two');
    const three = document.querySelector('#three');
    const four = document.querySelector('#four');
    const five = document.querySelector('#five');
    one.className = 'item';
    two.className = 'item';
    three.className = 'item';
    four.className = 'item';
    five.className = 'item';
    switch(b){
        case 1:one.className = 'sitem';break;
        case 2:two.className = 'sitem';break;
        case 3:three.className = 'sitem';break;
        case 4:four.className = 'sitem';break;
        case 5:five.className = 'sitem';break;
    }
    a=b;
}
function sub(){
    const mains = document.getElementById('main');
    mains.remove();
    const box = document.getElementById('box');
    box.innerHTML = "gammac";
}
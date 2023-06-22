let a;
function oii(b){
    const one = document.querySelector('#one');
    const two = document.querySelector('#two');
    const three = document.querySelector('#three');
    const four = document.querySelector('#four');
    const five = document.querySelector('#five');
    one.className = 'items';
    two.className = 'items';
    three.className = 'items';
    four.className = 'items';
    five.className = 'items';
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
    const box = document.getElementById('box');
    const mains = document.getElementById('main');
    mains.remove();

    const thank = document.createElement('div');
    const thankc = document.createAttribute('class');
    thankc.value = 'thank';
    thank.setAttribute(thankc);

    const img = document.createAttribute('img');
    const imgsrc = document.createAttribute('src');
    imgsrc.value= 'images/illustration-thank-you.svg';
    img.setAttribute(imgsrc);

    const rating = document.createElement('div');
    const ratingc = document.createAttribute('class');
    const ratingcon = document.createTextNode('You selected 4 out of 5');
    rating.appendChild(ratingcon);
    ratingc.value = 'lb';
    rating.setAttribute(ratingc);

    const hed = document.createElement('h1');
    const hedcon = document.createTextNode('Thank you!');
    hed.appendChild(hedcon);

    const des = document.createElement('p');
    const descon = document.createTextNode('We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!');
    des.appendChild(descon);

    thank.appendChild(img);
    thank.appendChild(rating);
    thank.appendChild(hed);
    thank.appendChild(des);
    document.querySelector('#box').appendChild(thank);

}
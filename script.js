function getElement(id){
    const elements = document.getElementById(id)
    return elements;
}

const hardIcon =document.getElementsByClassName('heard-icon');
for(const buttonCard of hardIcon){
    buttonCard.addEventListener('click', function(){
      
        const quantity = document.getElementById('total-life').innerText
        const currentLife = Number(quantity) + 1;
    getElement("total-life").innerText = currentLife;
        
    })
}

const callBtn =document.getElementsByClassName('btn-call');
for(const buttonCard of callBtn){
    buttonCard.addEventListener('click', function(){
      const serviceName = buttonCard.parentNode.parentNode.children[1].children[1].innerText;
      const serviceNumber = buttonCard.parentNode.parentNode.children[1].children[3].innerText;
    alert(`📞Caling ${serviceName} to ${ serviceNumber}`);

    const currentCoin = getElement("coin").innerText
    const balanceCoin = Number(currentCoin) - 20;
    getElement("coin").innerText = balanceCoin;
            
    })
}
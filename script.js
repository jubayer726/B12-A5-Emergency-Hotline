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

        const currentCoin = getElement("coin").innerText
        const balanceCoin = Number(currentCoin); 

        if(balanceCoin < 20){
            alert("আপনার পর্যাপ্ত কয়েন নেই ! কল করতে কমপক্ষে ২0 কয়েন লাগবে। ");
        return;
    }
      const serviceName = buttonCard.parentNode.parentNode.children[1].children[0].innerText;
      const serviceNumber = buttonCard.parentNode.parentNode.children[1].children[3].innerText;
    alert(`📞Caling ${serviceName} to ${ serviceNumber}`);

    const totalBalanceCoin = balanceCoin - 20;
    getElement("coin").innerText = totalBalanceCoin;

    const currentTime = new Date().toLocaleTimeString();
    const historyContrainer = getElement("history-contrainer");
    const newHistory = document.createElement("div");
        newHistory.innerHTML =`
            <div id="history-contrainer" class="bg-gray-100 m-5 p-3 rounded-xl flex justify-between items-center">
                <div>
                    <h1 class="card-title  text-gray-700 py-2">${serviceName}</h1>
                    <h2 class="emergency-number  text-gray-700 text-l">${serviceNumber}</h2> 
                </div>
                <div>
                    <h2>${currentTime}</h2>
                </div>
            </div>
        `;
    historyContrainer.append(newHistory);

            
    })
}

document.getElementById("history-clear-btn").addEventListener("click", function(){
    console.log("clicked");
    const historyContrainer = getElement("history-contrainer");
    historyContrainer.innerHTML = "";
})

console.log()

let generteButton=document.getElementById('generate-btn');

generteButton.addEventListener('click' , genrtateColour)

genrtateColour()

function generatingRandom() {
    let letters = '0123456789abcdef'
    let colour = '#'

    for(let i =0 ; i<6 ;i++){
        colour+=letters[Math.floor(Math.random() *16)]
    }

    return colour
}


function genrtateColour() {
    let colour=[];
    let HTML ='';

    for(let i=1 ; i<=5 ; i++){
    colour.push(generatingRandom())
    }

    console.log()

    colour.forEach((colour)=>{
        HTML+=`<div class="colour-containor js-colour-containor">
                <div class="coloor-box" style="background-color: ${colour};" ></div>
                <div class="coloue-info">        
                    <span>${colour}</span>
                    <i class="far fa-copy js-copy-img"
                    data-colour-num ="${colour}"
                    ></i>  
                </div>
                  
             </div>`
    })

    document.querySelector('.js-All-colour-containor')
    .innerHTML = HTML;
    
}

document.querySelectorAll('.js-copy-img').forEach((copyBtn)=>{

    copyBtn.addEventListener('click' ,()=>{
        
           let copiednum =copyBtn.dataset.colourNum;
           console.log(copiednum)
           navigator.clipboard.writeText(copiednum);
           copyed(copyBtn)

    })
})
'fas fa-check'

function copyed(copyBtn) {
    console.log()
    copyBtn.classList.remove('fa-copy' , 'far')
    copyBtn.classList.add('fa-check', 'fas')

    setTimeout(()=>{
       copyBtn.classList.add('fa-copy' , 'far')
    copyBtn.classList.remove('fa-check', 'fas')
    },1500)

}



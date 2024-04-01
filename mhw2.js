function ShowCreateZone(event) {
	let creazione = document.querySelector('[data-id="creazione"]');
	creazione.classList.remove('hidden');
}
const modalview = document.querySelector('#add');
modalview.addEventListener('click', ShowCreateZone);

function HideCreateZone(event) {
	let delet = document.querySelector('[data-id="creazione"]');
	delet.classList.add('hidden');

}
const remove = document.querySelector('#remove');
remove.addEventListener('click', HideCreateZone);


function ShowOrNotContact(event) {
    let delet = event.target.closest('.NewAllenatore').querySelector('.info');

    if (delet.classList.contains('hidden')) {
        delet.classList.remove('hidden');

    } else {
        delet.classList.add('hidden');

    }

}

const Contacts = document.querySelectorAll('.contatta');
for (const contact of Contacts){
    contact.addEventListener('click', ShowOrNotContact);
}




function NewTrainer(event) {
   
	var txt_intestazione = document.querySelector('input.nomeallenatore.intestazione');
    var txt_discipline = document.querySelector('input.disciplineallenatore.discipline');
    var txt_descrizione = document.querySelector('textarea.descrizione');
    var txt_tariffe = document.querySelectorAll('input.tariffa');
    var txt_Email = document.querySelector('#email');
    var txt_cellulare = document.querySelector('#cellulare');
    var txt_sede = document.querySelector('#sede');
    var txt_otherinfo = document.querySelector('textarea.other_info');

    console.log(txt_intestazione.value );
    var New = document.createElement("div");
  
	New.classList.add("NewAllenatore","withspace");
    New.innerHTML = `
                        <img src="immagini/who.png">
                        <div class="intestazione"> <span class="nomeallenatore">${txt_intestazione.value} </span>  </div> <button class="contatta"> Contatta </button>
                        <div class="discipline"> <span class="disciplineallenatore">${txt_discipline.value} </span></div>
                        <div class="descrizione">${txt_descrizione.value} </br> </div>
        <div class="tariffe">
            <span class="cadenza"> trimestre:       </span><span class="tariffa"> ${txt_tariffe[0].value} </span></br ></br >
                            <span class="cadenza">semestre:     </span> <span class="tariffa">  ${txt_tariffe[1].value} </span></br ></br >
                            <span class="cadenza"> annuale:     </span>  <span class="tariffa"> ${txt_tariffe[2].value} </span></br >
                        </div >


                       <div class="info hidden">
                            <div>
                                <span> Email: ${txt_Email.value} </span></br>
                                <span>Cellulare:${txt_cellulare.value} </span></br >
                                <span> Sede: ${txt_sede.value} </span></br>
                                <div class="other_info">
                                  ${txt_otherinfo.value}

                                </div>
                            </div>
                        </div>


         `;

    const nuovobottone = New.querySelector('.contatta');
    nuovobottone.addEventListener('click', ShowOrNotContact);
        

    New.setAttribute("data-id", "last");
    var lastone = document.querySelector('[data-id="last"]');
    lastone.insertAdjacentElement("afterend", New);
    lastone.removeAttribute('data-id');

    HideCreateZone(event);
    

}

const submit = document.querySelector('#enter');
submit.addEventListener('click', NewTrainer);
import { validation } from './validator.js';

//progress bar]
const progressBar = document.getElementById('progressBar')
const progress = document.getElementById('progress')
const steps = document.querySelectorAll('.step')

// get buttons 
const nextButtons = document.querySelectorAll('.but-next');
const backButtons = document.querySelectorAll('.but-back');

// forms containers
const forms = document.querySelectorAll('.form-container')

// error boxes
const errors = document.querySelectorAll('.error');

// Intor start
const introDOM = document.getElementById('intro')
nextButtons[0].addEventListener('click', (e) => {
    e.preventDefault()
    introDOM.style.display = 'none'
    forms[0].style.display = 'flex'
    progressBar.style.display = 'flex'
    steps[0].classList.add('inprogress')
})

// form1 start
nextButtons[1].addEventListener('click', () => {
    if (validation(credit_type.value)) {
        forms[0].style.display = 'none'
        forms[1].style.display = 'flex'
        progress.style.width = `20%`
        steps[1].classList.add('inprogress')
        steps[0].classList.remove('inprogress')
        steps[0].innerText = '✓'
    } else {
        errors[0].innerText = "Pažymėti laukai neužpildyti arba su klaidom!!"
        errors[0].style.display = 'flex'
    }
})

backButtons[0].addEventListener('click', () => {
    forms[1].style.display = 'none'
    forms[0].style.display = 'flex'
    progress.style.width = '0%'
    steps[1].classList.remove('active')
    steps[1].classList.remove('inprogress')
    steps[0].classList.add('inprogress')
    steps[0].innerText = '1';
})

// form2 start
nextButtons[2].addEventListener('click', () => {
    if (validation(car_type.value) && validation(car_model.value)) {
        forms[1].style.display = 'none'
        forms[2].style.display = 'flex'
        progress.style.width = '40%'
        steps[2].classList.add('inprogress')
        steps[1].classList.add('active')
        steps[1].classList.remove('inprogress')
        steps[1].innerText = '✓'
    } else {
        errors[1].innerText = "Pažymėti laukai neužpildyti arba su klaidom!!"
        errors[1].style.display = 'flex'
    }
})

backButtons[1].addEventListener('click', () => {
    forms[2].style.display = 'none'
    forms[1].style.display = 'flex'
    progress.style.width = '20%'
    steps[2].classList.remove('active')
    steps[2].classList.remove('inprogress')
    steps[1].classList.add('inprogress')
    steps[1].innerText = '2'
})

// form3 start
nextButtons[3].addEventListener('click', () => {
    if (parseInt(credit_amount.value) < 7000) {
        errors[2].innerText = "Mažiausia transporto priemonės kaina yra 7000 EUR"
        errors[2].style.display = 'flex'
    }
    else if (credit_amount.value > 50000) {
        errors[2].innerText = "Didziausia transporto priemonės kaina yra 50000 EUR"
        errors[2].style.display = 'flex'

    }
    else if (!validation(credit_amount.value)) {
        errors[2].innerText = "Pažymėti laukai neužpildyti arba su klaidom!!"
        errors[2].style.display = 'flex'
    }
    else if (isNaN(credit_amount.value * 1)) {
        errors[2].innerText = "Pažymėti laukai neužpildyti arba su klaidom!!"
        errors[2].style.display = 'flex'
    } else {
        forms[2].style.display = 'none'
        forms[3].style.display = 'flex'
        progress.style.width = '60%'
        steps[3].classList.add('inprogress')
        steps[2].classList.add('active')
        steps[2].classList.remove('inprogress')
        steps[2].innerText = '✓'
    }
})

backButtons[2].addEventListener('click', () => {
    forms[3].style.display = 'none'
    forms[2].style.display = 'flex'
    progress.style.width = '40%'
    steps[3].classList.remove('active')
    steps[3].classList.remove('inprogress')
    steps[2].classList.add('inprogress')
    steps[2].innerText = '3'

})

// form4 start
nextButtons[4].addEventListener('click', () => {
    if (validation(payment_period.value)) {
        forms[3].style.display = 'none'
        forms[4].style.display = 'flex'
        progress.style.width = '80%'
        steps[4].classList.add('inprogress')
        steps[3].classList.add('active')
        steps[3].classList.remove('inprogress')
        steps[3].innerText = '✓'
    } else {
        errors[3].innerText = "Pažymėti laukai neužpildyti arba su klaidom!!"
        errors[3].style.display = 'flex'
    }
})

backButtons[3].addEventListener('click', () => {
    forms[4].style.display = 'none'
    forms[3].style.display = 'flex'
    progress.style.width = '60%'
    steps[4].classList.remove('active')
    steps[4].classList.remove('inprogress')
    steps[3].classList.add('inprogress')
    steps[3].innerText = '4'
})

// submit
const summery = document.getElementById('summery')
const content = document.getElementById('info')
const message = document.getElementById('message')

const credit_type = document.getElementById('credit-type')
const car_type = document.getElementById('car-type')
const car_model = document.getElementById('car-model')
const credit_amount = document.getElementById('credit-amount')
const payment_period = document.getElementById('payment-period')
const read_conditions = document.getElementById('readConditions')

nextButtons[5].addEventListener('click', (e) => {
    e.preventDefault()
    const sum = `
        <div class="item" >
                <p class="title">Kredito tipas:</p>
                <p class="value">${credit_type.value == 'personal' ? 'Asmeninis kreditas.' : 'Šeimos/namų ūkio kreditas.'}</p>
            </div >
            <div class="item">
                <p class="title">Markė:</p>
                <p class="value">${car_type.value}</p>
            </div>
            <div class="item">
                <p class="title">Pagaminimo metai:</p>
                <p class="value"> ${car_model.value} m.</p>
            </div>
            <div class="item">
                <p class="title">Transporto priemonės kaina:</p>
                <p class="value"> ${credit_amount.value} EUR</p>
            </div>
            <div class="item">
                <p class="title">Lizingo laikotarpis (mėnesiai):</p>
                <p class="value"> ${payment_period.value} (mėnesiai)</p>
            </div>
             <div class="item">
                <p class="title">Papildoma informacija:</p>
                <p class="value"> ${message.value}</p>
            </div>
            <div class="btn-contaner">     
            </div> `

    if (read_conditions.checked && validation(message.value)) {
        content.innerHTML = sum;
        forms[4].style.display = 'none'
        summery.style.display = 'flex'
        progress.style.width = '100%'
        steps[5].classList.add('inprogress')
        steps[4].classList.add('active')
        steps[4].classList.remove('inprogress')
        steps[4].innerText = '✓'
    } else {
        errors[4].innerText = "Pažymėti laukai neužpildyti arba su klaidom!!"
        errors[4].style.display = 'flex'
    }
})

backButtons[4].addEventListener('click', () => {
    summery.style.display = 'none'
    forms[4].style.display = 'flex'
    progress.style.width = '80%'
    steps[5].classList.remove('active')
    steps[5].classList.remove('inprogress')
    steps[4].classList.add('inprogress')
    steps[4].innerText = '5'
})

//help button
const helpButon = document.getElementById('credit-type-info')
const close_help = document.getElementById('close-help')
const helpBox = document.getElementById('help-area')

helpButon.addEventListener('click', () => {
    if (helpButon.checked) {
        helpBox.style.display = 'inline'
    } else {
        helpBox.style.display = 'none'
    }
})
close_help.addEventListener('click', () => {
    helpBox.style.display = 'none'
    helpButon.checked = false;
})






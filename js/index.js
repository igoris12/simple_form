import { validation } from './validator.js';
// error boxes
const credit_type_error_box = document.getElementById('error-box-credit-type')
const error_box_car_type = document.getElementById('error-box-car-type')
const credit_amount_error_box = document.getElementById('error-box-credit-amount')
const payment_period_error_box = document.getElementById('error-box-payment-period')
const read_conditions_error_box = document.getElementById('error-box-readConditions')

// Intor start

const introButton = document.getElementById('intro-but')
const introDOM = document.getElementById('intro')
const from1 = document.getElementById('form1')

introButton.addEventListener('click', (e) => {
    e.preventDefault()
    introDOM.style.display = 'none'
    from1.style.display = 'flex'
})
// intor end



// form1 start
const from1_button = document.getElementById('form1-but')
const from2 = document.getElementById('form2')
const from2_button_back = document.getElementById('form2-but-back')

from1_button.addEventListener('click', () => {
    if (validation(credit_type.value)) {
        from1.style.display = 'none'
        from2.style.display = 'flex'
    } else {
        credit_type_error_box.innerText = "Pažymėti laukai neužpildyti arba su klaidom!!"
        credit_type_error_box.style.display = 'flex'

    }
})

from2_button_back.addEventListener('click', () => {
    from2.style.display = 'none'
    from1.style.display = 'flex'
})
// form1 end

// form2 start
const from2_button = document.getElementById('form2-but')
const from3 = document.getElementById('form3')
const from3_button_back = document.getElementById('form3-but-back')

from2_button.addEventListener('click', () => {
    if (validation(car_type.value) && validation(car_model.value)) {
        from2.style.display = 'none'
        from3.style.display = 'flex'

    } else {
        error_box_car_type.innerText = "Pažymėti laukai neužpildyti arba su klaidom!!"
        error_box_car_type.style.display = 'flex'
    }
})

from3_button_back.addEventListener('click', () => {

    from3.style.display = 'none'
    from2.style.display = 'flex'

})
// form2 end

// form3 start
const from4 = document.getElementById('form4')
const from4_button_back = document.getElementById('form4-but-back')
const from3_button = document.getElementById('form3-but')

from3_button.addEventListener('click', () => {
    if (parseInt(credit_amount.value) < 7000) {
        credit_amount_error_box.innerText = "Mažiausia transporto priemonės kaina yra 7000 EUR"
        credit_amount_error_box.style.display = 'flex'
    }
    else if (credit_amount.value > 50000) {
        credit_amount_error_box.innerText = "Didziausia transporto priemonės kaina yra 50000 EUR"
        credit_amount_error_box.style.display = 'flex'

    }
    else if (!validation(credit_amount.value)) {
        credit_amount_error_box.innerText = "Pažymėti laukai neužpildyti arba su klaidom!!"
        credit_amount_error_box.style.display = 'flex'
    }
    else if (isNaN(credit_amount.value * 1)) {
        credit_amount_error_box.innerText = "Pažymėti laukai neužpildyti arba su klaidom!!"
        credit_amount_error_box.style.display = 'flex'
    } else {
        from3.style.display = 'none'
        from4.style.display = 'flex'
    }
})


from4_button_back.addEventListener('click', () => {
    from4.style.display = 'none'
    from3.style.display = 'flex'
})
// form3 end

// form4 start
const from5 = document.getElementById('form5')
const from5_button_back = document.getElementById('form5-but-back')
const from4_button = document.getElementById('form4-but')

from4_button.addEventListener('click', () => {
    if (validation(payment_period.value)) {
        from4.style.display = 'none'
        from5.style.display = 'flex'
    } else {
        payment_period_error_box.innerText = "Pažymėti laukai neužpildyti arba su klaidom!!"
        payment_period_error_box.style.display = 'flex'
    }
})

from5_button_back.addEventListener('click', () => {
    from5.style.display = 'none'
    from4.style.display = 'flex'
})
// form4 end

// submit
const submit = document.getElementById('submit')
const summery_back = document.getElementById('summery-back')
const summery = document.getElementById('summery')
const content = document.getElementById('info')



const credit_type = document.getElementById('credit-type')
const car_type = document.getElementById('car-type')
const car_model = document.getElementById('car-model')
const credit_amount = document.getElementById('credit-amount')
const payment_period = document.getElementById('payment-period')
const read_conditions = document.getElementById('readConditions')


submit.addEventListener('click', (e) => {
    e.preventDefault()
    const sum = `
    <div class="item">
                <p class="title">Kredito tipas:</p>
                <p class="value">${credit_type.value == 'personal' ? 'Asmeninis kreditas.' : 'Šeimos/namų ūkio kreditas.'}</p>
            </div>
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
            <div class="btn-contaner">     
            </div>`


    if (read_conditions.checked) {
        console.log(sum);
        content.innerHTML = sum;
        from5.style.display = 'none'
        summery.style.display = 'flex'

    } else {
        read_conditions_error_box.innerText = "Pažymėti laukai neužpildyti arba su klaidom!!"
        read_conditions_error_box.style.display = 'flex'
    }


})
summery_back.addEventListener('click', () => {
    summery.style.display = 'none'
    from5.style.display = 'flex'
})



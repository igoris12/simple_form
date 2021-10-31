// sublit.addEventListener('click', (e) => {
//     e.preventDefault()
//     console.log(test.value);
// })

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
    from1.style.display = 'none'
    from2.style.display = 'flex'
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
    from2.style.display = 'none'
    from3.style.display = 'flex'
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
    from3.style.display = 'none'
    from4.style.display = 'flex'
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
    from4.style.display = 'none'
    from5.style.display = 'flex'
})

from5_button_back.addEventListener('click', () => {
    from5.style.display = 'none'
    from4.style.display = 'flex'
})
// form4 end

// submit
const submit = document.getElementById('submit')

const credit_type = document.getElementById('credit-type')
const car_type = document.getElementById('car-type')
const car_model = document.getElementById('car-model')
const credit_amount = document.getElementById('credit-amount')
const payment_period = document.getElementById('payment-period')
const read_conditions = document.getElementById('readConditions')
const get_info = document.getElementById('getInfo')





console.log(get_info);


// const submit = document.getElementById('submit')
// const submit = document.getElementById('submit')
// const submit = document.getElementById('submit')
// const submit = document.getElementById('submit')
// const submit = document.getElementById('submit')

submit.addEventListener('click', (e) => {
    e.preventDefault()
})


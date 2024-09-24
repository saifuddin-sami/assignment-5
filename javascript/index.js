const donationBtn = document.getElementById('dontaion-btn');
const historyBtn = document.getElementById('history-btn');

donationBtn.addEventListener('click', function () {
    donationBtn.style.backgroundColor = '#B4F461';
    historyBtn.style.backgroundColor = 'transparent';
    donationBtn.style.border = 'transparent';
    historyBtn.style.border = '1px solid rgba(17, 17, 17, 0.3)';
    document.getElementById('donation-container').classList.remove('hidden');
    document.getElementById('history-container').classList.add('hidden');
})

// History Button
historyBtn.addEventListener('click', function () {
    historyBtn.style.backgroundColor = '#B4F461';
    donationBtn.style.backgroundColor = 'transparent';
    historyBtn.style.border = 'transparent';
    donationBtn.style.border = '1px solid rgba(17, 17, 17, 0.3)';
    
    document.getElementById('donation-container').classList.add('hidden');
    document.getElementById('history-container').classList.remove('hidden');
})


// Section 1
const donateBtnfirst = document.getElementById('donate-btn-first');

donateBtnfirst.addEventListener('click', function () {
    const currentBalance = parseFloat(getInnerText('acc-balance'));
    const sectionBalance = parseFloat(getInnerText('section1-balance'));
    const inputBox = getInputValue('input-box1');

    if (inputBox <= 0 && inputBox !== 'number') {
        document.getElementById('input-box1').value = '';
        return alert('Invalid Input');
    }
    else if (parseFloat(inputBox) > currentBalance) {
        document.getElementById('input-box1').value = '';
        return alert('Not Enough Money')
    }
    else {
        const newBalance = currentBalance - parseFloat(inputBox);
        document.getElementById('acc-balance').innerText = newBalance;
        
        document.getElementById('section1-balance').innerText = sectionBalance + parseFloat(inputBox);
        
        document.getElementById('modal').classList.remove('hidden');
        document.getElementById('close-modal').addEventListener('click', function () {
            document.getElementById('modal').classList.add('hidden');
        })
        const div = document.createElement('div');
        div.classList.add('border', 'border-[rgba(17,17,17,0.1)]','p-6', 'md:p-8', 'rounded-[16px]', 'md:rounded-[32px]');
        div.innerHTML =
        `<h3 class="text-[#111111] font-bold text-xl mb-4"> ${inputBox} Taka is Donated for Flood at Noakhali, Bangladesh </h3>
        <p> Date: <span id="current-date"></span> </p>`
        const currentDate = new Date().toString();
        div.querySelector('#current-date').innerText = currentDate;
        document.getElementById('history-container').appendChild(div);
        document.getElementById('input-box1').value = '';
    }
})

// Section 2
const donateBtnSecond = document.getElementById('donate-btn-second');

donateBtnSecond.addEventListener('click', function () {
    const currentBalance = parseFloat(getInnerText('acc-balance'));
    const sectionBalance = parseFloat(getInnerText('section2-balance'));
    const inputBox = getInputValue('input-box2');

    if (inputBox <= 0 && inputBox !== 'number') {
        document.getElementById('input-box2').value = '';
        return alert('Invalid Input');
    }
    else if (parseFloat(inputBox) > currentBalance) {
        document.getElementById('input-box2').value = '';
        return alert('Not Enough Money')
    }
    else {
        const newBalance = currentBalance - parseFloat(inputBox);
        document.getElementById('acc-balance').innerText = newBalance;

        document.getElementById('section2-balance').innerText = sectionBalance + parseFloat(inputBox);

        document.getElementById('modal').classList.remove('hidden');
        document.getElementById('close-modal').addEventListener('click', function () {
            document.getElementById('modal').classList.add('hidden');
        })
        const div = document.createElement('div');
        div.classList.add('border', 'border-[rgba(17,17,17,0.1)]', 'p-6', 'md:p-8', 'rounded-[16px]', 'md:rounded-[32px]');
        div.innerHTML =
            `<h3 class="text-[#111111] font-bold text-xl mb-4"> ${inputBox} Taka is Donated for Flood Relief in Feni, Bangladesh </h3>
        <p> Date: <span id="current-date"></span> </p>`
        const currentDate = new Date().toString();
        div.querySelector('#current-date').innerText = currentDate;
        document.getElementById('history-container').appendChild(div);
        document.getElementById('input-box2').value = '';
    }
})

// Section 3
const donateBtnThird = document.getElementById('donate-btn-third');

donateBtnThird.addEventListener('click', function () {
    const currentBalance = parseFloat(getInnerText('acc-balance'));
    const sectionBalance = parseFloat(getInnerText('section3-balance'));
    const inputBox = getInputValue('input-box3');

    if (inputBox <= 0 && inputBox !== 'number') {
        document.getElementById('input-box3').value = '';
        return alert('Invalid Input');
    }
    else if (parseFloat(inputBox) > currentBalance) {
        document.getElementById('input-box3').value = '';
        return alert('Not Enough Money')
    }
    else {
        const newBalance = currentBalance - parseFloat(inputBox);
        document.getElementById('acc-balance').innerText = newBalance;

        document.getElementById('section3-balance').innerText = sectionBalance + parseFloat(inputBox);

        document.getElementById('modal').classList.remove('hidden');
        document.getElementById('close-modal').addEventListener('click', function () {
            document.getElementById('modal').classList.add('hidden');
        })
        const div = document.createElement('div');
        div.classList.add('border', 'border-[rgba(17,17,17,0.1)]', 'p-6', 'md:p-8', 'rounded-[16px]', 'md:rounded-[32px]');
        div.innerHTML =
            `<h3 class="text-[#111111] font-bold text-xl mb-4"> ${inputBox} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh </h3>
        <p> Date: <span id="current-date"></span> </p>`
        const currentDate = new Date().toString();
        div.querySelector('#current-date').innerText = currentDate;
        document.getElementById('history-container').appendChild(div);
        document.getElementById('input-box3').value = '';
    }
})

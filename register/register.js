// register.js

import { participantTemplate, successTemplate, totalFees} from './templates.js';

participantTemplate();


const submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", submitForm);


function submitForm(event) {
    event.preventDefault();

    let feeTotal = totalFees();
    const adultInput = document.getElementById("adult_name");
    const adultName = adultInput.value;

    const count = document.querySelectorAll("section[class^=participant]").length; // I got AI help with this one. Since count is handled within the templates module its not defined globally anymore. Is there a way to somehow get it without counting each section that was added?

    const info = {
    adultName: adultName,
    count: count,
    feeTotal: feeTotal
    };

    let success = successTemplate(info);

    const form = document.querySelector("form");
    form.classList.add('hide');

    const summarySection = document.getElementById("summary");
    summarySection.textContent = success;
}
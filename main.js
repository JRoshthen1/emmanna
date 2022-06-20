//Change modal of the About us section
//Anchors have onclick() event listener which passess show function,
// with current element attribute and id of the desired modal

function show(element, id) {

    //First hide all of the modals
    document.getElementById("step1").classList.add('hidden');
    document.getElementById("step2").classList.add('hidden');
    document.getElementById("step3").classList.add('hidden');
    document.getElementById("step4").classList.add('hidden');

    //deactivate all the buttons
    document.getElementById("stepButton1").classList.remove('step-button-active');
    document.getElementById("stepButton2").classList.remove('step-button-active');
    document.getElementById("stepButton3").classList.remove('step-button-active');
    document.getElementById("stepButton4").classList.remove('step-button-active');

    //activate desired modal
    document.getElementById(id).classList.remove('hidden');
    //activate clicked button
    element.classList.add('step-button-active')
}
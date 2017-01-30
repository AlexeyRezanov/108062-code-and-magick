'use strict';

var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = setup.querySelector('.setup-close');
var nameField = document.querySelector('.setup-user-name');
var wizard = document.querySelector('#wizard');
var wizardCoat = wizard.querySelector('#wizard-coat');
var wizardCoatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var wizardEyes = wizard.querySelector('#wizard-eyes');
var wizardEyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var setupFireballWrap = document.querySelector('.setup-fireball-wrap');
var setupFireballWrapColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

setupOpen.addEventListener('click', function () {
  setup.classList.remove('invisible');
});

setupClose.addEventListener('click', function () {
  setup.classList.add('invisible');
});

nameField.required = true;
nameField.maxLength = '50';

wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = wizardCoatColors[Math.floor(Math.random() * wizardCoatColors.length)];
});

wizardEyes.addEventListener('click', function () {
  wizardEyes.classList.add('style');
  wizardEyes.style.fill = wizardEyesColors[Math.floor(Math.random() * wizardEyesColors.length)];
});

setupFireballWrap.addEventListener('click', function () {
  setupFireballWrap.classList.add('style');
  setupFireballWrap.style.backgroundColor = setupFireballWrapColors[Math.floor(Math.random() * setupFireballWrapColors.length)];
});

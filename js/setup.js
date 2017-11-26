'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var wizardNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardSurnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

var rndArrayValue = function (arrayName) {
  var rnd = Math.floor(Math.random() * arrayName.length);
  return arrayName[rnd];
};

var template = document.querySelector('#similar-wizard-template').content;
var sutupSimilar = document.querySelector('.setup-similar');
var similarListElement = document.querySelector('.setup-similar-list');


for (var i = 0; i < 4; i++) {
  var wizardElement = template.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = rndArrayValue(wizardNames) + ' ' + rndArrayValue(wizardSurnames);
  wizardElement.querySelector('.wizard-coat').style.fill = rndArrayValue(coatColors);
  wizardElement.querySelector('.wizard-eyes').style.fill = rndArrayValue(eyesColors);
  similarListElement.appendChild(wizardElement);
}

sutupSimilar.classList.remove('hidden');

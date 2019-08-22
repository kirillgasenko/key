"use strict";

/*
* Регулярные выражение
*/
var cardReg = /^\d{12}$/;
var nameReg = /^['A-Za-z\u0410-\u044F][ '\x2DA-Za-z\u0410-\u044F]+['A-Za-z\u0410-\u044F]?$/;
/*
* месяц и год не выбраны вначале
*/

var chosenDay = null;
var chosenYear = null;
/*
* Глобальная проверка, если все поля верны кнопка становиться активной
*/

function switchConfirm() {
  var isValidCard = validate('cardN');
  var isValidName = validate('fname');
  var isValidLastName = validate('lname');
  var isValidDate = validate('date');

  if (isValidCard && isValidName && isValidLastName && isValidDate) {
    $('#confirm').prop("disabled", false);
    $('#confirm').css('opacity', '1');
  } else {
    $('#confirm').disabled = true;
    $('#confirm').css('opacity', '.6');
  }
}
/*
* Валидация
*/


function validate(fieldName) {
  var card = $("#card");
  var fname = $("#name");
  var lname = $("#lastName");
  var isValid = null;

  switch (fieldName) {
    case 'cardN':
      isValid = cardReg.test(card.val()) ? true : false;
      break;

    case 'fname':
      isValid = nameReg.test(fname.val()) ? true : false;
      break;

    case 'lname':
      isValid = nameReg.test(lname.val()) ? true : false;
      break;

    case 'date':
      isValid = chosenDay && chosenYear ? true : false;
      break;
  }

  return isValid;
}

;
/*
* Функция для добавление стилей при валидации
*/

function dateValidationCheck(t_el) {
  var isValid = validate('date');

  if (t_el) {
    if (!isValid) {
      t_el.closest('[data-validation]').addClass('invalid');
      t_el.closest('[data-validation]').removeClass('valid');
    } else {
      t_el.closest('[data-validation]').removeClass('invalid');
      t_el.closest('[data-validation]').addClass('valid');
    }
  } else {
    if (!isValid) {
      $('.date[data-validation]').addClass('invalid');
      $('.date[data-validation]').removeClass('valid');
    } else {
      $('.date[data-validation]').removeClass('invalid');
      $('.date[data-validation]').addClass('valid');
    }
  }

  switchConfirm();
}
/*
* валидация поля месяца
*/

$("#dayMonth").change(function () {
  chosenDay = $(this).val();

  if (chosenDay !== null && chosenYear !== null) {
    dateValidationCheck($(this));
    $(".select_main").css("width", "120px");
  }
});
/*
* валидация поля год
*/

$("#year").change(function () {
  chosenYear = $(this).val();

  if (chosenDay !== null && chosenYear !== null) {
    dateValidationCheck($(this));
    $(".select_main_second").css("width", "80px");
  }
});

/*
* отслеживание 
*/
$('input[type="text"]').blur(function () {
  var t_name = $(this).attr('name');
  var isValid = validate(t_name);

  if (t_name === 'lname') {
    dateValidationCheck();
  }

  if (isValid) {
    $(this).closest('[data-validation]').removeClass('invalid');
    $(this).closest('[data-validation]').addClass('valid');
    switchConfirm();
  } else {
    $(this).closest('[data-validation]').addClass('invalid');
    $(this).closest('[data-validation]').removeClass('valid');
  }
});
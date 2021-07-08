import $, { ajax } from 'jquery';
import mask from 'jquery.maskedinput/src/jquery.maskedinput';

const form = $('.form_main');
const action = form.attr('action');
const brandsSelect = $('.form_select.-brands');
const brandsOption = brandsSelect.children('.form_option');
const modelsSelect = $('.form_select.-models');
const modelsOption = modelsSelect.children('.form_option');

brandsSelect.addClass('-active');
modelsOption.eq(0).attr('selected', true);
modelsSelect.eq(0).addClass('-active');

brandsSelect.on('change', function(e) {
  const index = $(this).children(':selected').index();

  modelsSelect.removeClass('-active');
  modelsOption.attr('selected', false);

  modelsSelect.eq(index).addClass('-active');
});

form.find('input[name=Tel]').mask("+7 (999) 999-99-99");


form.on('submit', function(e) {
  const formName = form.find('input[name=Name]').val();
  const formTel = form.find('input[name=Tel]').val();
  const formBrand = brandsSelect.children(':selected').val();
  const index = brandsSelect.children('option:selected').index();
  const formModel = modelsSelect.eq(index).children('option:selected').val();
  const formYear = form.find('input[name=Year]').val();
  const formBudget = form.find('input[name=Budget]').val();

  const data = {
    name: formName,
    tel: formTel,
    brand: formBrand,
    model: formModel,
    year: formYear,
    budget: formBudget
  };
  //console.log(data);

  $.ajax({
    url: action,
    type: 'POST',
    data: data,
    success: function(response) { //Данные отправлены успешно
      $('.form_notice.-error').removeClass('-active');
      $('.form_notice.-success').addClass('-active');

      $('input').val('');

      brandsOption.attr('selected', false);  
      brandsOption.eq(0).attr('selected', true);
      modelsSelect.removeClass('-active');
      modelsSelect.eq(0).addClass('-active');
      modelsOption.attr('selected', false);
      modelsOption.eq(0).attr('selected', true);
    },
    error: function(response) { // Данные не отправлены
      $('.form_notice.-success').removeClass('-active');
      $('.form_notice.-error').addClass('-active');
    }
  });

  e.preventDefault();
});
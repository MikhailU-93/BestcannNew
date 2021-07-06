import $ from 'jquery';

const form = $('.form_main');
const action = form.attr('action');

const brandsSelect = $('.form_select.-brands');
const brandsOption = $('.form_option.-brands');

const modelsSelect = $('.form_select.-models');
// const modelsOption = modelsSelect.find('.form_option');

brandsSelect.addClass('-active');
modelsSelect.eq(0).addClass('-active');

brandsOption.on('click', function(e) {
  const index = $(this).index();
  //console.log(selectedIndex);
  console.log(123);

  modelsSelect.removeClass('-active');
  modelsSelect.eq(index).addClass('-active');
});



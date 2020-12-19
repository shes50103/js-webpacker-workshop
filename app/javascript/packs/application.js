// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

import $ from 'jquery';

// select2
import 'select2';
import 'select2/dist/css/select2.css';

window.$ = $;

document.addEventListener('turbolinks:load', function(){
  $('select[name="product[currency]"]').select2();
  $('select[name="product[tag_list][]"]').select2({
    tags: true,
    placeholder: 'select an option'
  });
})


// sweetalert2
import Swal from 'sweetalert2';

document.addEventListener('turbolinks:load', function(){

  document.querySelector('.js-submit-btn').addEventListener('click', function(e){
    e.preventDefault();

    Swal.fire({
      title: 'Do you want to save the changes?',
      showCancelButton: true,
      confirmButtonText: `Save`,
    }).then((result) => {
      console.log(result)
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Loading...',
          showConfirmButton: false,
        })
        document.querySelector('form').submit();
      }
    })
  })
})


// sweetalert2

import 'tempusdominus-bootstrap-4'
import 'tempusdominus-bootstrap-4/build/css/tempusdominus-bootstrap-4.min.css'
import 'font-awesome/css/font-awesome.min.css'

document.addEventListener('turbolinks:load', function(){
  $('#start_at').datetimepicker();
  $('#end_at').datetimepicker();

  $("#start_at").on("change.datetimepicker", function (e) {
    $('#end_at').datetimepicker('minDate', e.date);
  });
  $("#end_at").on("change.datetimepicker", function (e) {
      $('#start_at').datetimepicker('maxDate', e.date);
  });
})

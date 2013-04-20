$(document).ready(function() {
  $("#inputEventDate").datepicker();

  $("#request-form").validate({
    rules: {
      "entry.0.single": {
        required: true
      },
      "entry.1.single": {
        email: true,
        required: true
      },
      "entry.3.single": {
        required: true
      },
      "entry.6.single": {
        date: true,
        required: true
      },
      "entry.7.single": {
        required: true
      },
      "entry.8.single": {
        digits: true,
        required: true
      },
      "entry.9.single": {
        digits: true,
        required: true
      }
    },
    unhighlight: function(element) {
      var controlGroup = $(element).closest('.control-group');
      controlGroup.find('.help-inline').html("");
      controlGroup.removeClass('error');
    },
    success: function(element) {
      var controlGroup = element.closest('.control-group');
      controlGroup.find('.help-inline').html("");
      controlGroup.removeClass('error');
    },
    errorPlacement: function(error, element) {
      var controlGroup = element.closest('.control-group');
      controlGroup.find('.help-inline').html(error.text());
      controlGroup.addClass('error');
    },
    submitHandler: function(form) {
      var url = $(form).attr('action');
      var data = $(form).serialize();
      $.post(url, data)
        .done(function() { $('#request-quote-success').modal(); $(form)[0].reset(); })
        .fail(function() { alert('Please try again later.'); });
    }
  });
});

$('.js-input-number').on('input', function() {
  var value = this.value;
  value = value.replace(/[^0-9]/ig, '');
  this.value = value
});

$(".js-range-slider").ionRangeSlider({
  onStart: function (data) {
    $('.js-from').val(data.from);
    $('.js-to').val(data.to);
  },
  onChange: function (data) {
    $('.js-from').val(data.from);
    $('.js-to').val(data.to);
  },
  onUpdate: function (data) {
    $('.js-from').val(data.from);
    $('.js-to').val(data.to);
  },
});

$('.js-from').on('change', function() {
  $(".js-range-slider").data('ionRangeSlider').update({
    from: this.value
  })
});

$('.js-to').on('change', function() {
  $(".js-range-slider").data('ionRangeSlider').update({
    to: this.value
  })
});
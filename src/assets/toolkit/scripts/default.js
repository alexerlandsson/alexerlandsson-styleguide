$(function() {

  console.log('DEBUG: Javascripts loaded');

  $('[data-am-header] .main-nav-btn').on('click', function() {
    $(this).toggleClass('is-active');
    $('[data-am-mainnavigation]').toggleClass('is-open');
  });

});

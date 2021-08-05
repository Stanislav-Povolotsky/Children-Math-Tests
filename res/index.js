function closeModal() {
  var modal = bootstrap.Modal.getOrCreateInstance($('.modal'));
  modal.hide();
  //$('.modal').hide();
  var modalWindow = document.getElementById('iframeModalWindow');
  modalWindow.src = "";
}

$('.marketing a').click(function(event){
    event.preventDefault();
    $(".modal").find('iframe').attr("src",this.href);
    $('.modal').modal('show');
    // Hide the loading message
    /*$(".modal").find('iframe').load(function() {
        //$('.loading').hide();
    });*/
});

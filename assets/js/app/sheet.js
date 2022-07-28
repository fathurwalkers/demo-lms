$(document).ready(function () {
  var t = $('.sisawaktu');
  if (t.length) {
      sisawaktu(t.data('time'));
  }
});

function sisawaktu(t) {
  var time = new Date(t);
  var n = new Date();
  var x = setInterval(function() {
    var now = new Date().getTime();
    var dis = time.getTime() - now;
    var h = Math.floor((dis % (1000 * 60 * 60 * 60)) / (1000 * 60 * 60));
    var m = Math.floor((dis % (1000 * 60 * 60)) / (1000 * 60));
    var s = Math.floor((dis % (1000 * 60)) / (1000));
    h = ("0" + h).slice(-2);
    m = ("0" + m).slice(-2);
    s = ("0" + s).slice(-2);
    var cd = h + ":" + m + ":" + s;
    $('.sisawaktu').html(cd);
  }, 100);
  setTimeout(function() {
    waktuHabis();
  }, (time.getTime() - n.getTime()));
}

function simpan() {
  var lembar = $('#lembarUjian').serialize();
  var hasilUjian = function() {
    $.ajax({
       type: 'POST',
       url: url + 'ukom/simpan_hasil',
       dataType: 'json',
       data: lembar,
       success: function(response) {
          $('#message').html(response.message);
          if (response.error) {
            $('#responseDiv').removeClass('alert-success').addClass('alert-danger').show();
          } else {
            $('#responseDiv').removeClass('alert-danger').addClass('alert-success').show();
            setTimeout(function() {
              window.location = url + response.link;
            }, 1000);
          }
       }
    });
 };
 setTimeout(hasilUjian, 1000);
}

$(document).ready(function() {
  $('#lembarUjian').submit(function(e) {
    e.preventDefault();
    simpan();
  });
});

// function getCounter() {
//   var countDownDate = new Date("Aug 11, 2021 22:00:00").getTime();

//   var x = setInterval(function () {
//     var now = new Date().getTime();

//     var distance = countDownDate - now;

//     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//     var hours = Math.floor(
//       (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//     );
//     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//     var textDays = document.getElementById("days");
//     var textHours = document.getElementById("hours");
//     var textMinutes = document.getElementById("minutes");
//     var textSeconds = document.getElementById("seconds");

//     textDays.innerHTML = days < 10 ? "0" + days : days;
//     textHours.innerHTML = hours < 10 ? "0" + hours : hours;
//     textMinutes.innerHTML = minutes < 10 ? "0" + minutes : minutes;
//     textSeconds.innerHTML = seconds < 10 ? "0" + seconds : seconds;

//     if (distance < 0) {
//       clearInterval(x);
//     }
//   }, 1000);
// }
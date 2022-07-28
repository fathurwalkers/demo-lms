$(document).ready(function(){
   // Data Table
   $("#datatable").DataTable();
   $("#datatable1").DataTable();
   $("#datatable2").DataTable();
   $("#datatable3").DataTable();
   $("#datatable4").DataTable();
   $("#datatable5").DataTable();
   $("#datatable6").DataTable();
   $("#datatable7").DataTable();
   $("#datatable8").DataTable();
   $("#datatable9").DataTable();
   $("#datatable10").DataTable();
   $("#datatable11").DataTable();
   $("#datatable12").DataTable();
   $("#datatable13").DataTable();
   $("#datatable14").DataTable();

   // Max Lenght
   $("input#max").maxlength({warningClass:"badge badge-success",limitReachedClass:"badge badge-danger"});

   /* Date Picker */
   $('#tgl').daterangepicker({
      singleDatePicker: true,
      showDropdowns: true,
      locale:{format:"YYYY-MM-DD"}
   });
   $('#tgl2').daterangepicker({
      singleDatePicker: true,
      showDropdowns: true,
      timePicker:!0,
      timePicker24Hour: true,
      locale:{format:"YYYY-MM-DD HH:mm:ss"}
   });
   $('#tgl3').daterangepicker({
      singleDatePicker: true,
      showDropdowns: true,
      timePicker:!0,
      timePicker24Hour: true,
      locale:{format:"YYYY-MM-DD HH:mm:ss"}
   });

   // Filestyle
   $("#filestyleicon").filestyle({htmlIcon:'<span class="fas fa-folder-open mr-1"></span>'});

   // Live Clock
   setInterval(function() {
      var date = new Date();
      var h = date.getHours(),
         m = date.getMinutes(),
         s = date.getSeconds();
      h = ("0" + h).slice(-2);
      m = ("0" + m).slice(-2);
      s = ("0" + s).slice(-2);

      var time = h + ":" + m + ":" + s;
      $('.live-clock').html(time);
   }, 1000);

   // Countdown
   var time = $('.countdown');
    if (time.length) {
        countdown(time.data('time'));
    }

    function countdown(t) {
		var time = new Date(t);
		var n = new Date();
		var x = setInterval(function() {
			var now = new Date().getTime();
			var dis = time.getTime() - now;
			var d = Math.floor(dis / (1000 * 60 * 60 * 24));
			var h = Math.floor((dis % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			var m = Math.floor((dis % (1000 * 60 * 60)) / (1000 * 60));
			var s = Math.floor((dis % (1000 * 60)) / (1000));
			d = ("0" + d).slice(-2);
			h = ("0" + h).slice(-2);
			m = ("0" + m).slice(-2);
			s = ("0" + s).slice(-2);
			var cd = d + " Hari, " + h + " Jam, " + m + " Menit, " + s + " Detik ";
			$('.countdown').html(cd);

			setTimeout(function() {
				location.reload()
			}, dis);
		}, 1000);
	}
});

//summernote
$(function() {
   $('.summernote').summernote({
      height: '300px',
   });

   $('.summernote1').summernote({
      placeholder: 'Tulis sesuatu disini...',
      height: '300px',
      toolbar: [
         ['headline', ['style']],
         ['fontname', ['fontname']],
         ['textsize', ['fontsize']],
         ['style', ['bold', 'italic', 'underline', 'superscript', 'subscript', 'strikethrough', 'clear']],
         ['color', ['color']],
         ['alignment', ['ul', 'ol', 'paragraph', 'lineheight']],
         ['insert', ['link', 'picture', 'video']],
         ['view', ['fullscreen']]
      ]
   });

   $('.summernote2').summernote({
      placeholder: 'Tulis sesuatu disini...',
      height: '100px',
      toolbar: [
         ['style', ['bold', 'italic', 'underline', 'superscript', 'subscript', 'strikethrough', 'clear']],
         ['alignment', ['ul', 'ol', 'lineheight']],
         ['table', ['table']],
         ['insert', ['link', 'picture']],
         ['view', ['codeview', 'fullscreen']]
      ]
   });

   $('.summernote3').summernote({
      placeholder: 'Tulis sesuatu disini...',
      height: '50px',
      toolbar: [
         ['style', ['bold', 'italic', 'underline', 'superscript', 'subscript', 'strikethrough', 'clear']],
         ['alignment', ['ul', 'ol', 'lineheight']],
         ['table', ['table']],
         ['insert', ['link', 'picture']],
         ['view', ['codeview', 'fullscreen']]
      ]
   });

   $('.summernote4').summernote({
      placeholder: 'Tulis sesuatu disini...',
      height: '300px',
      toolbar: [
         ['headline', ['style']],
         ['fontname', ['fontname']],
         ['textsize', ['fontsize']],
         ['style', ['bold', 'italic', 'underline', 'superscript', 'subscript', 'strikethrough', 'clear']],
         ['color', ['color']],
         ['alignment', ['ul', 'ol', 'paragraph', 'lineheight']],
         ['insert', ['picture']],
         ['view', ['fullscreen']]
      ]
   });
});

// Form Reset
function Reset() {
   $('#Form').reset();
}

// Validate File
var _validFileExtensions = [".png", ".jpg", ".jpeg"];

function validate(file) {
   if (file.type == "file") {
      var sFileName = file.value;
      if (sFileName.length > 0) {
         var blnValid = false;
         for (var j = 0; j < _validFileExtensions.length; j++) {
            var sCurExtension = _validFileExtensions[j];
            if (sFileName.substr(sFileName.length - sCurExtension.length, sCurExtension.length).toLowerCase() == sCurExtension.toLowerCase()) {
               var file_size = $('#gambar')[0].files[0].size;
               if (file_size > 2000000) {
                  alert("Maaf. File Terlalu Besar ! Maksimal Upload 2 MB");
                  break;
               } else {
                  blnValid = true;
                  break;
               }
            }
         }

         if (!blnValid) {
            alert("Maaf Hanya Boleh File yang Berextensi : " + _validFileExtensions.join(", "));
            file.value = "";
            return false;
         }
      }
   }
   return true;
}

// image preview
function previewImage() {
   document.getElementById("image-preview").style.display = "block";
   var oFReader = new FileReader();
    oFReader.readAsDataURL(document.getElementById("gambar").files[0]);

   oFReader.onload = function(oFREvent) {
     document.getElementById("image-preview").src = oFREvent.target.result;
     document.getElementById("old-image").style.display = "none";
   };
 };

function validateProfil(file) {
   if (file.type == "file") {
      var sFileName = file.value;
      if (sFileName.length > 0) {
         var blnValid = false;
         for (var j = 0; j < _validFileExtensions.length; j++) {
            var sCurExtension = _validFileExtensions[j];
            if (sFileName.substr(sFileName.length - sCurExtension.length, sCurExtension.length).toLowerCase() == sCurExtension.toLowerCase()) {
               var file_size = $('#gambar')[0].files[0].size;
               if (file_size > 2000000) {
                  alert("Maaf. File Terlalu Besar ! Maksimal Upload 2 MB");
                  break;
               } else {
                  previewImage();
                  blnValid = true;
                  break;
               }
            }
         }

         if (!blnValid) {
            alert("Maaf Hanya Boleh File yang Berextensi : " + _validFileExtensions.join(", "));
            file.value = "";
            return false;
         }
      }
   }
   return true;
}
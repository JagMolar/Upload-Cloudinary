// INCLUIR LOS DATOS PROPIOS EN LAS VARIABLES!!
var CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/NUESTRANUBE/upload';//nuestra url de cloudinary y añadir /upload
var CLOUDINARY_UPLOAD_PRESET = 'j******6';//se obtiene desde settings/upload/uploads presets (clickar para enabled)

var imgPreview = document.getElementById('img-preview');
var fileUpload = document.getElementById('file-upload');

fileUpload.addEventListener('change', function(e){
    var file =e.target.files[0];//muestra los datos del archivo
    // console.log(file);
    var formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

    axios({
        url: CLOUDINARY_URL,
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencode'
        },
        data: formData
    }).then(function(res) {
        console.log(res);//ver datos transaccion
        imgPreview.src = res.data.secure_url; //mostramos la imagen
    }).catch(function(err) {
        console.log(err);//ver errores transacción
    });

});
var isVal = true;

function start() {
    if(isVal) {
        $('#loading').append(`
    <div class="preloader-wrapper small active">
        <div class="spinner-layer spinner-blue-only">
            <div class="circle-clipper left">
                <div class="circle"></div>
            </div>
            <div class="gap-patch">
                <div class="circle"></div>
            </div>
            <div class="circle-clipper right">
                <div class="circle"></div>
            </div>
        </div>
    </div>`);
        isVal = false;
    }
    
    if($('#url').val() == '') {
        isVal = true;
        $('#loading').empty();
    }
}

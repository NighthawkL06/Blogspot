document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('blogForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(form);
        jQuery( document ).ready( function() {
            jQuery( "#formID" ).submit();
            });

    
    });
});

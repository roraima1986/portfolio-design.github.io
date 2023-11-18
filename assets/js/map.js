document.addEventListener('DOMContentLoaded', (e) => {
    
    
    setTimeout(() => {
        document.querySelector('#load-iframe-map').innerHTML = `
            <iframe class="contact__iframe" frameborder="0" scroll="no" marginheigth="0" marginwidth="0" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2852.397973928678!2d-3.7132065612417553!3d40.41059971402051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4227d712af0d6b%3A0x5ffcae306e9757b9!2sC.%20de%20Calatrava%2C%2016%2C%2028005%20Madrid%2C%20Espa%C3%B1a!5e0!3m2!1ses!2scl!4v1699476891691!5m2!1ses!2scl" ></iframe>
        `;
    }, 500)
    
    
    
});
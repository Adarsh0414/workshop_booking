document.addEventListener('DOMContentLoaded', function() {
    const body = document.querySelector('body');
    if (body.dataset.messages) {
        const messages = JSON.parse(body.dataset.messages);
        messages.forEach(function(message) {
            toastr[message.tags](message.message);
        });
    }
});
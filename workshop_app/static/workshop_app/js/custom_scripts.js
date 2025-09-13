if (typeof messages !== 'undefined') {
    messages.forEach(function(message) {
        toastr[message.tags](message.message);
    });
}

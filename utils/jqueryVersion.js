
// https://stackoverflow.com/questions/6973941/how-to-check-what-version-of-jquery-is-loaded

if (typeof jQuery != 'undefined') {  
    // jQuery is loaded => print the version
    alert(jQuery.fn.jquery);
}


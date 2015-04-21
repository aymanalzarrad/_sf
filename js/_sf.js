/**
 * Make sure jQuery is running in noConflict() mode
 */
jQuery.noConflict();
/**
 * Attach FastClick and Init Foundation
 */
jQuery(document, function(){
    /* FastClick */
    FastClick.attach(document.body);
})
    /* Foundation */
    .foundation(
    /* Settings goes here */
);
let $address = $('#address');
let $bathrooms = $('#bathrooms');
let $bedrooms = $('#bedrooms');
let $homes = $('#homes');
let $form = $('form')

$form.on('submit', function(evt) {
    evt.preventDefault()
    let addressValue = $address.val();
    let bathroomValue = $bathrooms.val();
    let bedroomValue = $bedrooms.val();
    console.log(addressValue)
    console.log(bathroomValue)
    console.log(bedroomValue)
})
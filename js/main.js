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


    $homes.append(
        `<li style="display:none">Address: ${addressValue} Bedrooms: ${bedroomValue} Bathrooms: ${bathroomValue}</li>`
    )

    $('li').last().fadeIn(2000)
    
})

$homes.on('click', 'li', function() {
    $(this).fadeOut(3000, function() {
        $(this).remove()
    })
})
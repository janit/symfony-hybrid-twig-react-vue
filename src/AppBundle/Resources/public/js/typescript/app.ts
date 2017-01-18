
/// <reference path="appstate.d.ts" />


async function initTsApp(){


    let items = await loadContent();

    var output = '';

    for(let j in items){

        let apartment = items[j];

        output += `
                    <tr>
                        <td>${ apartment.id }</td>
                        <td>
                            ${ apartment.streetaddress }<br />
                            ${ apartment.city }<br />
                            ${ apartment.zipcode }
                        </td>
                        <td>${ apartment.country }</td>
                        <td>${ apartment.buildyear }</td>
                    </tr>
                    `;

    }

    let newRows = document.createElement('tbody');
    newRows.innerHTML = output;

    document.querySelector('#ts-app').appendChild(newRows);

}

function loadContent(){


    return new Promise( function(resolve, reject){

        setTimeout( () => {

            let items = JSON.parse('{"apartments":[{"id":1,"streetaddress":"9965 Kulas Green","city":"Port Arvilla","zipcode":"09978","country":"Libyan Arab Jamahiriya","buildyear":1977,"size":68},{"id":2,"streetaddress":"99892 Kemmer Station Suite 134","city":"Jaskolskiview","zipcode":"98395-3141","country":"Fiji","buildyear":1977,"size":68},{"id":3,"streetaddress":"96447 Jada Inlet Apt. 020","city":"Floland","zipcode":"05959","country":"McDonald Islands","buildyear":1977,"size":68}]}');

            resolve( items.apartments );

        },1000);

    } );

}
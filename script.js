var url = 'http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D';

$(document).ready(function () {
    const url = 'https://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D';
    $.get(url,
        function (data, textStatus, jqXHR) {
            for (let i = 0; i < data.length; i++) {
                createTableRows(data[i])
            }
            searchFun();
        });

    const createTableRows = (obj) => {
        let tr = $('<tr>').addClass('data-row').html(`<td class="column1">${obj.id}</td>
                                                        <td class="column2">${obj.firstName}</td>
                                                        <td class="column3">${obj.lastName}</td>
                                                        <td class="column4">${obj.email}</td>
                                                        <td class="column5">${obj.phone}</td>`);
        tr.click(() => {
            $('#table-body tr.active').removeClass('active');
            tr.addClass('active');
            $('#info-name').text(obj.firstName + " " + obj.lastName);
            $('#info-content textarea').text(obj.description);
            $('#info-address').text(obj.address.streetAddress);
            $('#info-city').text(obj.address.city);
            $('#info-state').text(obj.address.state);
            $('#info-zipcode').text(obj.address.zip);
            $('#info-content').css('display', 'block');
        })
        $('#table-body').append(tr);
    };

    const searchFun = () => {
        $('#search-box').keyup(()=>{
            let inputValue = $('#search-box').val().toUpperCase();
            let tablebody = document.getElementById('table-body');
            let tr = tablebody.getElementsByTagName('tr');
            for (let i=0;i<tr.length;i++){
                let td = tr[i].getElementsByTagName('td')[1];
                if(td){
                    let textValue = td.textContent || td.innerHTML;

                    if(textValue.toUpperCase().indexOf(inputValue) > -1){
                        tr[i].style.display = "";
                    }else{
                        tr[i].style.display = 'none';
                    }
                }
            }
        })
    } 
});

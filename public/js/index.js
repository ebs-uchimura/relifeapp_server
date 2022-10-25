// default url
const DEF_URL = 'https://yahoo.co.jp';
let toggleFlg = true;

$(function() {
    (async function() {
        const cdn = 'https://cdn.jsdelivr.net/npm/axios@1.1.3/dist/axios.min.js';
    
        const axios = await import(cdn);
    
            $("#usersearch").on('click', e => {
                // post request
                axios.get(DEF_URL)
                    .then(response => {
                        // got data
                        $("#userid").val(response);
                    })
                    .catch(error => {
                        // handle error
                        console.log(error);
                    })
                    .finally(() => {
                        // always executed
                    });
            }); 

            $("#seatsearch").on('click', e => {
                // post request
                axios.get(DEF_URL)
                    .then(response => {
                        // got data
                        $("#seatid").val(response);
                    })
                    .catch(error => {
                        // handle error
                        console.log(error);
                    })
                    .finally(() => {
                        // always executed
                    });
            }); 
    }());
});
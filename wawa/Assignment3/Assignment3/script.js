 var country = document.getElementById("country");
        var getdata = document.getElementById("getdata");
        var active = document.getElementById("active");
        var newcases = document.getElementById("newcases");
        var recovered = document.getElementById("recovered");


        const url = 'https://covid-193.p.rapidapi.com/statistics';
        getdata.addEventListener("click", function(){
            //url += statistics.value;
        
        const options = {
        	method: 'GET',
	        headers: {
		        'X-RapidAPI-Key': '9961b1b8cbmsh08b11d100490d0ep1adb3cjsn001baa23fa3b',
		        'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
            }
};
            fetch(url, options)
            .then(response => {
                // Memeriksa status response
                if (!response.ok) {
                throw new Error('Terjadi kesalahan: ' + response.status);
                }
                // Parsing response sebagai JSON
                return response.json();
            })
            .then(data => {
                // Data yang berhasil diambil tersedia di sini
                console.log('Data yang diterima:', data);
                active.innerHTML = data.response[0].cases.active;
                newcases.innerHTML = (data.response[0].cases.new == null) ? 0 : data.response[0].cases.new;
                recovered.innerHTML = data.response[0].cases.recovered;
                totalcases.innerHTML = data.response[0].cases.total;
                totaldeaths.innerHTML = data.response[0].deaths.total;
                totaltests.innerHTML = data.response[0].tests.total;
            })
            .catch(error => {
                // Menangani kesalahan jika ada
                //console.error('Terjadi kesalahan:', error);
                result.innerHTML = error;
            });
        });

fetch('http://127.0.0.1:8000/api/second-round/')
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            // If the response is not Ok Then we need to show some placeholder

        }
    }).then(
        function (data) {
            var secondRoundDateTime = new Date(data[0].result_time).getTime();

            if (data[0].winning_number == null) {
                var divSecondRoundResult = document.getElementById("secondRoundResult");
                // Set value XX to placeholder
                secondRoundResult = 'XX';
            } else {
                var secondRoundResult = data[0].winning_number
            }

            // Timer Funtionality
            var x = setInterval(function () {
                var now = new Date().getTime();

                if (secondRoundDateTime < now) {
                    var secRoundDiv = document.getElementsByClassName("2nd-round");
                    secRoundDiv[0].classList.add('hidden');
                }
                var diff = secondRoundDateTime - now;

                // Time calculations for days, hours, minutes and seconds
                var days = Math.floor(diff / (1000 * 60 * 60 * 24));
                var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((diff % (1000 * 60)) / 1000);

                // breaking the times 
                var nDays = diff / (1000 * 60 * 60 * 24);
                var nHours = (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60);
                var nH0 = nHours / 10;
                var nH1 = nHours % 10;
                var nMinutes = (diff % (1000 * 60 * 60)) / (1000 * 60);
                var nmin0 = nMinutes / 10;
                var nmin1 = nMinutes % 10;
                var nSeconds = (diff % (1000 * 60)) / 1000
                var n0ten = nSeconds / 10
                var n1ten = nSeconds % 10

                // show the timer
                document.getElementById("2ndsec2").innerText = Math.floor(n0ten);
                document.getElementById("2ndsec02").innerText = Math.floor(n1ten);
                document.getElementById("2ndmin0").innerText = Math.floor(nmin0);
                document.getElementById("2ndmin1").innerText = Math.floor(nmin1);
                document.getElementById("2ndhour0").innerText = Math.floor(nH0);
                document.getElementById("2ndhour1").innerText = Math.floor(nH1);


                if (diff < 0) {
                    // Set all the values to zero 00:00:00
                    clearInterval(x);
                    var secRoundDiv = document.getElementsByClassName("2nd-round");
                    secRoundDiv[0].classList.add('hidden');

                    if (secondRoundResult == 'XX') {
                        // Show something waitin 
                        var waiting_message = document.getElementById('waiting_message');
                        waiting_message.classList.remove('hidden');
                    } else {
                        var divSecondRoundResult = document.getElementById("secondRoundResult");
                        divSecondRoundResult.classList.remove('hidden');
                        divSecondRoundResult.textContent = `${secondRoundResult}`;

                        var second_round_time = document.getElementById("second_round_time");
                        second_round_time.classList.remove('hidden');
                        second_round_time.textContent = `${Date(data[0].result_time)}`;

                        var sec_round_heading = document.getElementById("sec_round_heading");
                        sec_round_heading.classList.remove('hidden');

                    }



                }
            }, 1000);

        },
    )




setInterval(function () {

    const e = Date.parse(new Date) / 1000;

    const a = 180 - e % 180;
    const i = a / 60;
    const n = a % 60;

    const o = n / 10;
    const s = n % 10;
    document.getElementById('min').textContent = Math.floor(i);
    document.getElementById('sec').textContent = Math.floor(o);
    document.getElementById('ten').textContent = Math.floor(s);


    // if (a==179){
    //   // $("#data_container").load(document.URL + ' #data_container');
    //   window.location.reload();
    //   console.log("loaded");
    // }

}, 1000)
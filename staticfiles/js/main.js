window.onload = () => {
    const root_url = window.location.origin
    // First Round Daily Game
    fetch(`${root_url}/api/first-round/`)
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                return {
                    'Error': 'Something went wrong with the response'
                }
            };
        })
        .then((data) => setCountDown(data))
        .catch(error => console.log(error));


    // Countdown for First Round Daily Game

    const setCountDown = (data) => {
        // html elements
        var firstRoundContainerEl = document.getElementsByClassName("1st-round");
        var firsRoundHeadingEl = document.getElementById("first_round_heading");
        var firstRoundResultEl = document.getElementById("firstRoundResult");
        var firstRoundResultTimeEl = document.getElementById("first_round_time");
        var waitngMessageEl = document.getElementById("1stwaiting_message");
        // Timer
        var hour_0 = document.getElementById("1sthour0");
        var hour_1 = document.getElementById("1sthour1");
        var min_0 = document.getElementById("1stmin0");
        var min_1 = document.getElementById("1stmin1");
        var sec_0 = document.getElementById("1stsec0");
        var sec_1 = document.getElementById("1stsec1");

        // get the time from the data
        if (data[0].result_time != null) {
            var timeFromApi = new Date(data[0].result_time).getTime();
        } else {
            // There is no time set so show somethign in front
            var timeFromApi = 0;
        }

        if (data[0].winning_number == null) {
            var winning_number = 'XX';

        } else {
            var winning_number = data[0].winning_number
        }




        // set Intervel TimerFuntionality
        var firstRoundTimer = setInterval(
            () => {
                var now = new Date().getTime();

                var daily_first_round_history = document.getElementsByClassName('daily_first_round_history')
                // Check if the time is already past
                if (timeFromApi < now) {
                    daily_first_round_history[0].classList.remove('hidden');
                    // Do something coz the time is over
                    var firstroundTimeDifference = -1;
                } else {
                    daily_first_round_history[0].classList.add('hidden');
                    firsRoundHeadingEl.classList.remove('hidden');
                    firsRoundHeadingEl.textContent = "TIME REMAINING"
                };
                var firstroundTimeDifference = timeFromApi - now;


                // Time calculations
                const total_days = firstroundTimeDifference / (1000 * 60 * 60 * 24);
                // Splice the hours into two digits
                const total_hours = (firstroundTimeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60);
                var hour_0_time = total_hours / 10;
                var hour_1_time = total_hours % 10;
                // Splice the minutes into two digits
                const total_minutes = (firstroundTimeDifference % (1000 * 60 * 60)) / (1000 * 60 * 60);
                var min_0_time = total_minutes / 10;
                var min_1_time = total_minutes % 10;
                // Splice the seconds into two digits
                const total_seconds = (firstroundTimeDifference % (1000 * 60)) / 1000
                var sec_0_time = total_seconds / 10;
                var sec_1_time = total_seconds % 10;

                // Displaying on the front
                hour_0.textContent = Math.floor(hour_0_time);
                hour_1.textContent = Math.floor(hour_1_time);
                min_0.textContent = Math.floor(min_0_time);
                min_1.textContent = Math.floor(min_1_time);
                sec_0.textContent = Math.floor(sec_0_time);
                sec_1.textContent = Math.floor(sec_1_time);


                if (firstroundTimeDifference < 0) {
                    // Set all the values to Zero
                    clearInterval(firstRoundTimer);
                    firstRoundContainerEl[0].classList.add('hidden');
                    if (winning_number == 'XX') {
                        waitngMessageEl.classList.remove('hidden');
                    } else {
                        firstRoundResultEl.textContent = `${winning_number}`;
                        firstRoundResultEl.classList.remove('hidden');
                        firstRoundResultTimeEl.classList.remove('hidden');
                        change_time_format = new Date(data[0].result_time);
                        firstRoundResultTimeEl.innerHTML = change_time_format.toLocaleString();
                        firsRoundHeadingEl.classList.remove('hidden');

                    }
                }


            }, 1000);

    }







    // Second Round Daily Game
    fetch(`${root_url}/api/second-round/`)
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
                    // Set value XX to placeholder
                    var secondRoundResult = 'XX';
                } else {
                    var secondRoundResult = data[0].winning_number
                }

                // Timer Funtionality
                var x = setInterval(function () {
                    var now = new Date().getTime();
                    var daily_second_round_history = document.getElementsByClassName('daily_second_round_history');
                    const sec_round_heading = document.getElementById('sec_round_heading');

                    if (secondRoundDateTime < now) {
                        daily_second_round_history[0].classList.remove('hidden');
                        var secRoundDiv = document.getElementsByClassName("2nd-round");
                        secRoundDiv[0].classList.add('hidden');
                        // sec_round_heading.textContent = "WINNING NUMBER";
                    } else {
                        
                    var daily_second_round_history = document.getElementsByClassName('daily_second_round_history');
                    daily_second_round_history[0].classList.add('hidden');
                    sec_round_heading.classList.remove('hidden');
                    sec_round_heading.textContent = "TIME REMAINING";
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
                    
               
                   
                    secondRoundResultLogic(diff, secondRoundResult, x, data);
                    


                }, 1000);

            },
        ).catch(err => console.log(err));



    // second round logic refactored
    const secondRoundResultLogic = (diff, secondRoundResult, x, data) => {
        const secondRoundResultEl = document.getElementById('secondRoundResult');
        const waiting_message = document.getElementById('waiting_message');
        const sec_round_heading = document.getElementById('sec_round_heading');
        const second_round_time = document.getElementById('second_round_time');
        if (diff < 0) {
            clearInterval(x);
            secondRoundResultEl.classList.remove('hidden');
            sec_round_heading.classList.remove('hidden');
            second_round_time.classList.remove('hidden');
            waiting_message.classList.remove('hidden');
            if (secondRoundResult == "XX") {
                waiting_message.textContent = "COMING SOON";
            } else {
                secondRoundResultEl.textContent = secondRoundResult;
                result_time = new Date(data[0].result_time);
                second_round_time.textContent = result_time.toLocaleString();
                waiting_message.classList.add('hidden');
            }
        } else {
            waiting_message.classList.add('hidden');
        }

    }








    //   Sunday Result Functionalities

    fetch(`${root_url}/api/sunday-result/`)
        .then(
            (response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    return {
                        "error": "Api fetch error"
                    }
                }
            }
        ).then((data) => {
            var sundayResultDateTime = new Date(data[0].result_time).getTime();

            // Check if the winning number is set or not if not set then
            // set the winning number variable with default value
            // else set the variable with the winning number

            if (data[0].winning_number == null) {
                var sundayResult = "XX";

            } else {
                sundayResult = data[0].winning_number;
            }

            var x = setInterval(() => {
                var now = new Date().getTime();
                var sunday_winning_number_history = document.getElementsByClassName('sunday_winning_number_history');
                if (sundayResultDateTime < now) {
                    var sundayResultTimerDiv = document.getElementsByClassName("sunday_result_timer_sction");
                    sundayResultTimerDiv[0].classList.add('hidden');
                    sunday_winning_number_history[0].classList.remove('hidden');

                } {
                    sunday_winning_number_history[0].classList.add('hidden');
                }
                var diff = sundayResultDateTime - now;

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
                document.getElementById("sundaysec0").innerText = Math.floor(n0ten);
                document.getElementById("sundaysec1").innerText = Math.floor(n1ten);
                document.getElementById("sundaymin0").innerText = Math.floor(nmin0);
                document.getElementById("sundaymin1").innerText = Math.floor(nmin1);
                document.getElementById("sundayhour0").innerText = Math.floor(nH0);
                document.getElementById("sundayhour1").innerText = Math.floor(nH1);
                var sundayresultHeading = document.getElementById('sundayresultHeading');
                sundayresultHeading.textContent = 'TIME REMAINING';
                if (diff < 0) {
                    clearInterval(x);
                    sundayResultTimerDiv[0].classList.add('hidden');
                    sundayresultHeading.textContent = 'COMING SOON';

                    if (sundayResult == "XX") {
                        sundayresultHeading.textContent = 'RESULT NOT YET PUBLISHED';
                    } else {

                        sundayresultHeading.textContent = 'WINNING NUMBER';
                        // displaying the winning number
                        sundayresultHeading.classList.remove('hidden');
                        sundayresultHeading.textContent = 'WINNING NUMBER';
                        var sundayResultNumber = document.getElementById("sundayResultNumber");
                        sundayResultNumber.classList.remove('hidden');
                        sundayResultNumber.textContent = `${sundayResult}`;
                        // displaying the date
                        var sunday_date_time = document.getElementById("sunday_date_time");
                        sunday_date_time.classList.remove('hidden');

                        sunday_date_time.textContent = new Date(data[0].result_time).toLocaleString();
                    
                    }

                }



            }, 1000);

        })









}
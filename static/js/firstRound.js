api_url = `${root_url}/new-api/first-round/`;
fetch('https://tripurateertoday.com/new-api/first-round/', {
        methode: 'get',
        headers: {
            'Authorization': 'Token ' + 'd158cfae4529a8dfd09110846774b36b72d14021'
        }
    }).then((res) => res.json())
    .then((res) => {
        return res[0];
    }).then((result) => {
        //here is all the functions
        var firstRoundTime = () => new Date(result.result_time);
        const app = document.querySelector('.first-round');

        // adding 0 infront of single digit time
        const format = (t) => {
            return t < 10 ? '0' + t : t;
        };

        // creating render methode for countdown class
        const render = (time) => {
            document.querySelector('#first_round_heading').classList.remove('hidden');
            document.querySelector('#first_round_heading').textContent = 'TIME REMAINING';
            app.innerHTML = `
              <div id="count_down" class="flex flex-row justify-center items-center space-x-2">
                <div>${format(time.hours)}</div>
                <div>:</div>
                <div>${format(time.minutes)}</div>
                <div>:</div>
                <div>${format(time.seconds)}</div>
              </div>
        `;
        };

        // Show message once after that if else block will be triggered on refresh
        const showMessage = () => {
            document.querySelector('#firstRoundResult').classList.remove('hidden');
            document.querySelector('#first_round_time').classList.remove('hidden');
            document.querySelector('#first_round_heading').classList.remove('hidden');
            document.querySelector('#firstRoundResult').textContent = result.winning_number;
            let firstRoundTime = new Date(result.result_time);
            document.querySelector('#first_round_time').textContent = firstRoundTime.toLocaleString();
            document.querySelector('#first_round_heading').textContent = "FIRST ROUND";
            app.classList.add('hidden');
        }




        const complete = () => {
            showMessage();
            // restart the countdown after showing the 
            // greeting message for a day ()
            setTimeout(() => {
                countdownTimer.setExpiredDate(firstRoundTime());
            }, 1000 * 60 * 60 * 24);
        };

        const countdownTimer = new CountDown(
            firstRoundTime(),
            render,
            complete
        );


        // show the winning number if timer is finised
        const remainingTime = firstRoundTime() - new Date();
        if (remainingTime < 0) {
            document.querySelector('#firstRoundResult').classList.remove('hidden');
            document.querySelector('#first_round_time').classList.remove('hidden');
            document.querySelector('#first_round_heading').classList.remove('hidden');
            document.querySelector('#firstRoundResult').textContent = result.winning_number;
            let firstRoundTime = new Date(result.result_time);
            document.querySelector('#first_round_time').textContent = firstRoundTime.toLocaleString();
            document.querySelector('#first_round_heading').textContent = "FIRST ROUND";
            app.classList.add('hidden');
        }


    }).catch((err) => {
        console.log(err);
    })
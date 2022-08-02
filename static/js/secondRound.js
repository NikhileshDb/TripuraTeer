// const api_url = window.location.origin
api_url = `${root_url}/new-api/second-round/`;

fetch('https://tripurateertoday.com/new-api/second-round/', {
        methode: 'get',
        headers: {
            'Authorization': 'Token ' + 'd158cfae4529a8dfd09110846774b36b72d14021'
        }
    }).then((res) => res.json())
    .then((res) => {
        return res[0];
    }).then((result) => {
        //here is all the functions
        var secondRoundTime = () => new Date(result.result_time);
        const app = document.querySelector('.second-round');

        // adding 0 infront of single digit time
        const format = (t) => {
            return t < 10 ? '0' + t : t;
        };

        // creating render methode for countdown class
        const render = (time) => {
            document.querySelector('#second_round_heading').classList.remove('hidden');
            document.querySelector('#second_round_heading').textContent = 'TIME REMAINING';
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
            document.querySelector('#secondRoundResult').classList.remove('hidden');
            document.querySelector('#second_round_time').classList.remove('hidden');
            document.querySelector('#second_round_heading').classList.remove('hidden');
            document.querySelector('#secondRoundResult').textContent = result.winning_number;
            let secondRoundTime = new Date(result.result_time);
            document.querySelector('#second_round_time').textContent = secondRoundTime.toLocaleString();
            document.querySelector('#second_round_heading').textContent = "SECOND ROUND";
            app.classList.add('hidden');
        }




        const complete = () => {
            showMessage();
            // restart the countdown after showing the 
            // greeting message for a day ()
            setTimeout(() => {
                countdownTimer.setExpiredDate(secondRoundTime());
            }, 1000 * 60 * 60 * 24);
        };

        const countdownTimer = new CountDown(
            secondRoundTime(),
            render,
            complete
        );


        // show the winning number if timer is finised
        const remainingTime = secondRoundTime() - new Date();
        if (remainingTime < 0) {
            document.querySelector('#secondRoundResult').classList.remove('hidden');
            document.querySelector('#second_round_time').classList.remove('hidden');
            document.querySelector('#second_round_heading').classList.remove('hidden');
            document.querySelector('#secondRoundResult').textContent = result.winning_number;
            let secondRoundTime = new Date(result.result_time);
            document.querySelector('#second_round_time').textContent = secondRoundTime.toLocaleString();
            document.querySelector('#second_round_heading').textContent = "SECOND ROUND";
            app.classList.add('hidden');
        }


    }).catch((err) => {
        console.log(err);
    })
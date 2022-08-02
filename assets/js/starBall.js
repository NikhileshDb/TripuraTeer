const root_url = window.location.origin
api_url = `${root_url}/new-api/starball-result/`;

fetch('https://tripurateertoday.com/new-api/starball-result/', {
        methode: 'get',
        credentials: 'include',
        headers: {
            'Access-Control-Allow-Origin': "*",
            'Authorization': 'Token ' + 'd158cfae4529a8dfd09110846774b36b72d14021'
        }
    }).then((res) => res.json())
    .then((res) => {

        return res[0];
    }).then((result) => {
        //here is all the functions
        var starBallResultTime = () => new Date(result.result_time);
        const app = document.querySelector('.starball_result_timer');

        // adding 0 infront of single digit time
        const format = (t) => {
            return t < 10 ? '0' + t : t;
        };

        // creating render methode for countdown class
        const render = (time) => {
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
            document.querySelector('#starBallResultNumber').classList.remove('hidden');
            document.querySelector('#starBall_date_time').classList.remove('hidden');
            document.querySelector('#starBallresultHeading').classList.remove('hidden');
            document.querySelector('#starBallResultNumber').textContent = result.winning_number;
            let starBallResultTime = new Date(result.result_time);
            document.querySelector('#starBall_date_time').textContent = starBallResultTime.toLocaleString();
            document.querySelector('#starBallresultHeading').textContent = "WINNING NUMBER";
            app.classList.add('hidden');
        }




        const complete = () => {
            showMessage();
            // restart the countdown after showing the 
            // greeting message for a day ()
            setTimeout(() => {
                countdownTimer.setExpiredDate(starBallResultTime());
            }, 1000 * 60 * 60 * 24);
        };

        const countdownTimer = new CountDown(
            starBallResultTime(),
            render,
            complete
        );


        // show the winning number if timer is finised
        const remainingTime = starBallResultTime() - new Date();
        if (remainingTime < 0) {
            document.querySelector('#starBallResultNumber').classList.remove('hidden');
            document.querySelector('#starBall_date_time').classList.remove('hidden');
            document.querySelector('#starBallresultHeading').classList.remove('hidden');
            document.querySelector('#starBallResultNumber').textContent = result.winning_number;
            let starBallResultTime = new Date(result.result_time);
            document.querySelector('#starBall_date_time').textContent = starBallResultTime.toLocaleString();
            document.querySelector('#starBallresultHeading').textContent = "WINNING NUMBER";
        }


    }).catch((err) => {
        console.log(err);
    })

        let hour = document.getElementById('hour');
        let minutes = document.getElementById('minutes');
        let seconds = document.getElementById('seconds');
        // let milliSec = document.getElementById('milliSec');
        let ampm = document.getElementById('ampm');

        function getTime() {
            let now = new Date();

            hour.innerHTML = addZero(now.getHours());
            minutes.innerHTML = addZero(now.getMinutes());
            seconds.innerHTML = addZero(now.getSeconds());
            // milliSec.innerHTML = addZero(now.getMilliseconds());

            ampm.innerHTML = now.getHours() >= 12 ? 'PM' : 'AM';
        }

        setInterval(getTime, 100);

        function addZero(num) {
            return (num < 10) ? '0' + num : num;
        }
    

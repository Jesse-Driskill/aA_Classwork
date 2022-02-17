class Clock {
    constructor() {
        this.date = new Date();
        this.hours = this.date.getHours();
        this.minutes = this.date.getMinutes();
        this.seconds = this.date.getSeconds();
        this.printTime();
    }

    printTime() {
        let newHours = undefined;
        let newMinutes = undefined;
        let newSeconds = undefined;

        if (this.hours < 10) {
            newHours = `0${this.hours}`;
        }
        else {
            newHours = this.hours;
        }
        if (this.minutes < 10) {
            newMinutes = `0${this.minutes}`;
        }
        else {
            newMinutes = this.minutes;
        }
        if (this.seconds < 10) {
            newSeconds = `0${this.seconds}`;
        }
        else {
            newSeconds = this.seconds;
        }
        console.log(`${newHours}:${newMinutes}:${newSeconds}` );
    }

    _tick() {
        this.seconds += 1;
        if (this.seconds >= 60) {
            this.seconds = 0;
            this.minutes += 1;

            if (this.minutes >= 60) {
                this.minutes = 0;
                this.hours += 1;
            }
        }

        this.printTime();
    }
}

const clock = new Clock();
// clock.printTime();
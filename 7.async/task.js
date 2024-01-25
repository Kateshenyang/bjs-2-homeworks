class AlarmClock {
    constructor(alarmCollection, intervalId) {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback, id) {
        if (typeof id === 'undefined') {
            throw new Error('Отсутствуют обязательные аргументы');
        } else if (typeof this.alarmCollection.find(clock => clock.id === id) !== "undefined") {
            return console.warn('Уже присутствует звонок на это же время');
        }
        else return this.alarmCollection.push({ callback: callback, time: time, canCall: true });
    }

    removeClock(id) {
        let inputArrLength = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter(clock => clock.id !== id);
        let outputArrLength = this.alarmCollection.length;
        return outputArrLength < inputArrLength;
    }

    getCurrentFormattedTime () {
        let zeroAdd = (number) => {
            if (number < 10) {
                return '0' + number;
            }
            return number;
        }
        let actualTime = new Date();
        let minutes = zeroAdd(actualTime.getMinutes());
        let hours = zeroAdd(actualTime.getHours());
        return hours + ':' + minutes;
    }
    start () {
        let checkClock = (clock) => {
            let alarm = this.getCurrentFormattedTime();
            if (clock.time === alarm) {
                return clock.callback();
            }
        }
        if (this.intervalId === null) {
            this.intervalId = setInterval(() => {
                this.alarmCollection.forEach(clock => checkClock(clock));
            }, 1000);
        }
        return;
    }
    stop () {
        if (this.intervalId !== null) {
            clearInterval(this.intervalId);
            return this.intervalId = null;
        }
    }
    resetAllCalls () {
        return this.alarmCollection.forEach(canCall === true);
    }
    clearAlarms () {
        this.stop();
        return this.alarmCollection = [];
    }
}
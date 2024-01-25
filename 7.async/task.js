class AlarmClock {
    constructor() {
      this.alarmCollection = [];
      this.intervalId = null;
    }
  
    addClock(time, callback, id) {
      if (!time || !callback) {
        throw new Error('Отсутствуют обязательные аргументы');
      }
      if (this.alarmCollection.some(alarm => alarm.time === time)) {
        console.warn('Уже присутствует звонок на это же время');
        return;
      }
      this.alarmCollection.push({ id, time, callback, canCall: true });
    }
  
    removeClock(id) {
      const initialLength = this.alarmCollection.length;
      this.alarmCollection = this.alarmCollection.filter(alarm => alarm.id !== id);
      return initialLength !== this.alarmCollection.length;
    }
  
    getCurrentFormattedTime() {
      const now = new Date();
      return now.toTimeString().slice(0, 5);
    }
  
    start() {
      if (this.intervalId) {
        return;
      }
      this.intervalId = setInterval(() => {
        const currentTime = this.getCurrentFormattedTime();
        this.alarmCollection.forEach(alarm => {
          if (alarm.time === currentTime && alarm.canCall) {
            alarm.canCall = false;
            alarm.callback();
          }
        });
      }, 1000);
    }
  
    stop() {
      if (this.intervalId) {
        clearInterval(this.intervalId);
        this.intervalId = null;
      }
    }
  
    resetAllCalls() {
      this.alarmCollection.forEach(alarm => alarm.canCall = true);
    }
  
    clearAlarms() {
      this.stop();
      this.alarmCollection = [];
    }
  }
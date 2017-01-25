const consoleLogger = ({message, type}) => console.log(`[${type}]: ${message}`); // eslint-disable-line

let notifyMethods = {
  error: consoleLogger,
  success: consoleLogger,
  info: consoleLogger,
};

const Notifier = {
  init(methods) {
    notifyMethods = methods;
  },

  notifyNow({ type, message }) {
    if (type in notifyMethods === false) {
      type = 'info';
    }
    notifyMethods[type].apply(null, [{ message, type }]);
  },
  notifyOnNextPage({ type, message }) {
    sessionStorage.setItem('messageToShow', JSON.stringify({ type, message }));
    return true;
  },
  showNextPageMessage() {
    if (typeof localStorage === 'undefined') return;
    try {
      const message = JSON.parse(window.sessionStorage.getItem('messageToShow'));
      window.sessionStorage.removeItem('messageToShow');
      if (!message) {
        return;
      }
      this.notifyNow(message);
    } catch (ex) {
      window.sessionStorage.removeItem('messageToShow');
      throw new Error('Invalid message stored in notification buffer');
    }
  },
};

export default Notifier;

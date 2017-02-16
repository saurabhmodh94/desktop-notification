window.onload = notifyMe();

function notifyMe() {
  // Let's check if the browser supports notifications
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  }

  // Let's check whether notification permissions have already been granted
  else if (Notification.permission === "granted") {
    // If it's okay let's create a notification
    var notification = new Notification("Hi there!", {
      icon: './../logo/meetm.png',
      body: "You've been notified!",
    });
    notification.onclick = function () {
      window.open("https://app.meetnotes.co/");
      notification.close();
    };
  }

  // Otherwise, we need to ask the user for permission
  else if (Notification.permission !== 'denied') {
    Notification.requestPermission(function (permission) {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        var notification = new Notification("Hi there!", {
          icon: './../logo/meetm.png',
          body: "You've been notified!",
        });
        notification.onclick = function () {
          window.open("https://app.meetnotes.co/");
          notification.close();
        };
      }
    });
  }

  // At last, if the user has denied notifications, and you
  // want to be respectful there is no need to bother them any more.
}

importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);
    const firebaseConfig = {
        apiKey: "AIzaSyD6BNkAuV0_spW3wZfTA3Yr4TsuGIcZufI",
        authDomain: "practice-f2c1b.firebaseapp.com",
        projectId: "practice-f2c1b",
        storageBucket: "practice-f2c1b.appspot.com",
        messagingSenderId: "531562968726",
        appId: "1:531562968726:web:36baab99b9909c3371f4b7"
      };

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});




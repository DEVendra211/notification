// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import { useEffect } from 'react'
// import { getToken } from "firebase/messaging";
// import { messaging } from './Firebase'
// // import sendNotification from '../public/firebase-messaging-sw'

// function App() {
//   const [count, setCount] = useState(0)
//   async function requestPermission(){
//     const permission=await Notification.requestPermission()

//     if(permission === "granted"){
//       const token = await getToken(messaging , {vapidKey:'BPqx2wVMpBIKNT7Ry7DorDcMKBUjmUf3GX5IBxTpmXa0y58P_hnMxbMqb9SJsb-j4zaVZ3NNkHoKyOIUKmZxogI'})
//       console.log(token);

//     }else if(permission ==="denied"){
//       alert('you denied for the notification')
//     }
//   }
//   useEffect(()=>{
//     requestPermission()
    
//   },[]) 

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import React from "react";

const PushNotificationButton = () => {
  const sendNotification = () => {
    const deviceRegistrationToken = "fFH-9Y_B2BF8GsGcSKEyIi:APA91bEFLmR7MkMJTXZNXEQxw5PhP51Ed9dXC5Y97-d9D-XuwSDqUFocdSyBE5LoSE0jFW98nWPUpjso6GYlzP6hi2rr21_tTlJsudnSUVbCIjqaE8VdkuZBz5pzEOoCqlOhh9e8xZMn"; // Replace with the actual token

    fetch("/send-notification", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ deviceRegistrationToken }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          console.log("Notification sent successfully.");
        } else {
          console.error("Failed to send notification.");
        }
      })
      .catch((error) => {
        console.error("Error sending notification:", error);
      });
  };

  return (
    <div>
      <button onClick={sendNotification}>Send Notification</button>
    </div>
  );
};

export default PushNotificationButton;


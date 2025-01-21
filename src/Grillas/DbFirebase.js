// import React, { useState, useEffect } from 'react';
// import { getDatabase, ref, onValue } from 'firebase/database';
// import { app } from '../Config/firebaseConfig.js';

// const database = getDatabase(app);

// function DbFirebase() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const usersRef = ref(database, 'Tabla');

//     const unsubscribe = onValue(usersRef, (snapshot) => {
//       const data = snapshot.val();
//       if (data) {
//         const userList = Object.values(data);
//         setData(userList);
//       } else {
//         setData([]);
//       }
//     });

//     return () => unsubscribe();
//   }, []);

//   return (
//     <div>
//       <h1>Lista de Usuarios</h1>
//       <ul>
//         {data.map((user) => (
//           <li key={user.Id}>
//             ID: {user.Id}, Interno: {user.Interno}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default DbFirebase;

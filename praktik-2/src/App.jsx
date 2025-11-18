// import React from 'react';
// import './App.css';

// function App() {
//   // Data dinamis
//   const student = {
//     name: "Ahmad Rizki",
//     nim: "12345678",
//     major: "Teknik Informatika",
//   };

//   const courses = ["Pemrograman React", "Algoritma", "Basis Data"];

//   // Function untuk menampilkan data
//   const getCurrentTime = () => {
//     return new Date().toLocaleTimeString();
//   };

//   return (
//     <div className="App">
//       {/* Data statis */}
//       <h1>Belajar JSX di React</h1>

//       {/* Menampilkan data dinamis */}
//       <div className="student-info">
//         <h2>Informasi Mahasiswa</h2>
//         <p>Nama: {student.name}</p>
//         <p>NIM: {student.nim}</p>
//         <p>Jurusan: {student.major}</p>
//       </div>

//       {/* Menampilkan array */}
//       <div className="courses">
//         <h3>Mata Kuliah:</h3>
//         <ul>
//           {courses.map((course, index) => (
//             <li key={index}>{course}</li>
//           ))}
//         </ul>
//       </div>

//       {/* Menampilkan function result */}
//       <div className="time">
//         <p>Waktu saat ini: {getCurrentTime()}</p>
//       </div>

//       {/* Conditional rendering */}
//       <div className="status">
//         <p>Status: {student.nim ? "Terdaftar" : "Belum terdaftar"}</p>
//       </div>
//     </div>
//   );
// }

// export default App;

// ============================================================

// import React, { useState } from 'react';
// import './App.css';
// import UserProfile from './components/UserProfile';

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const userData = {
//     name: "Sarah Johnson",
//     email: "sarah@example.com",
//     avatar: "/vite.svg",
//     joinDate: "2023-01-15"
//   };

//   return (
//     <div className="App">
//       <h1>Demo JSX dan Rendering</h1>

//       {/* Toggle Login State */}
//       <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
//         {isLoggedIn ? 'Logout' : 'Login'}
//       </button>

//       {/* Komponen dengan Conditional Rendering */}
//       <UserProfile user={userData} isLoggedIn={isLoggedIn} />

//       {/* Dynamic Styling */}
//       <div
//         style={{
//           padding: '20px',
//           margin: '10px 0',
//           backgroundColor: isLoggedIn ? '#d4edda' : '#f8d7da',
//           border: `2px solid ${isLoggedIn ? '#3e6c3e' : '#5c6b6b'}`,
//           borderRadius: '5px'
//         }}
//       >
//         Status: {isLoggedIn ? '✅ Berhasil login' : '❌ Belum login'}
//       </div>
//     </div>
//   );
// }

// export default App;

// ============================================================

import React, { useState } from 'react';
import './App.css';
import ProductCard from './components/ProductCard'; // ProductCard pada "import ProductCard" bukan nama file, tapi nama komponen

function App() {
  return (
    <>
    <h1>Daftar Produk</h1>
      <ProductCard name="Monitor Xiaomi" price={1000000} isAvailable={false} />
      <ProductCard name="Headset Gaming" price={750000} isAvailable={true} />
      <ProductCard name="Keyboard" price={500000} isAvailable={true} />
    </>
  );
}

export default App;

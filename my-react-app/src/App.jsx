/* eslint-disable react/prop-types */
// import React from "react";

// class Button extends React.Component {
//   render() {
//     return (
//       <button
//         className="h-10 px-6 font-semibold rounded-md bg-slate-700 text-white"
//         type="submit"
//       >
//         Buy now
//       </button>
//     );
//   }
// }

// ini yg direkomendari, soalnya masih ada di dokumentasi terbaru
// function ButtonBlack() {
//   return (
//     <button
//       className="h-10 px-6 font-semibold rounded-md bg-black text-white"
//       type="submit"
//     >
//       Buy now
//     </button>
//   );
// }

const Button = (props) => {
  const { children = "...", variant = "bg-black" } = props; //bisa nambahin nilai defaultnya juga
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${variant} text-white`}
      type="submit"
    >
      {children}
    </button>
  );
};

function App() {
  return (
    <div className="flex justify-center bg-blue-600 min-h-screen items-center">
      <div className="flex gap-x-2">
        <Button variant="bg-red-700">Login</Button>
        <Button variant="bg-slate-700">Sign-Up</Button>
        <Button variant="bg-black">Logout</Button>
      </div>
    </div>
  );
}

export default App;

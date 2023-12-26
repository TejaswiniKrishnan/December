import logo from './logo.svg';
import './App.css';
import List from './List';
import Myimg from './Myimg';
import File from './File';
import Form from './Form';

function App() {
  return (
    <div className="App">
      <List></List>
      <Myimg></Myimg>
      <File></File>
      <Form></Form>
    </div>
  );
}

export default App;
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import About from './About';
// import Home from './Home';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/About" element={<About />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

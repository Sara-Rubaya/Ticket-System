
import { Suspense } from 'react';
import './App.css'
import CustomerTickets from './Body/CustomerTickets'

import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'
import Banner from './Body/Banner';

function App() {
  const fetchTickets = async () => {
  const res = await fetch("/tickets.json");
  return res.json();
};


 const ticketsPromise = fetchTickets();
  return (
    <>
    
      <Navbar></Navbar>
      <div className="bg-gray-200 min-h-screen">
        <Banner />
        <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
          <CustomerTickets ticketsPromise={ticketsPromise} />
        </Suspense>
      </div>
      <Footer></Footer>
     
      
    </>
  )
}

export default App

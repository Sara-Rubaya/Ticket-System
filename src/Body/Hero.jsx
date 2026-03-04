import React from "react"

import tickets from "../../public/JsonData/ticket-data.json"
import TicketCard from "./TicketCard"

function Hero() {
  return (
    <div className="grid gap-4 p-5">
      {tickets.map((ticket) => (
        <TicketCard key={ticket.id} ticket={ticket} />
      ))}
    </div>
  )
}

export default Hero
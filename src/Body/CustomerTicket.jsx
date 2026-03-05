const CustomerTicket = ({ ticket }) => {
  const { id, title, status, description, priority, customer, date } = ticket;

  // Status badge color
  const statusClass = status === "Open" ? "bg-blue-400" : "bg-green-400";

  // Priority text color
  const priorityClass =
    priority === "HIGH"
      ? "text-error"
      : priority === "MEDIUM"
        ? "text-warning"
        : "text-success";
  return (
    <div className="card bg-gray-300  text-black shadow-md border border-base-200">
      <div className="card-body p-5 space-y-3">
        {/* Header */}
        <div className="flex justify-between  items-start">
          <h2 className="card-title text-lg font-semibold">{title}</h2>
          <span className={`badge ${statusClass} gap-2 px-3 py-3`}>
            <span
              className={`w-2 h-2 ${status === "Open" ? "bg-blue-600" : "bg-green-600"} rounded-full`}
            ></span>
            {status}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-black  ">{description}</p>

        {/* Footer Row */}
        <div className="flex  text-black justify-between items-center pt-2 text-sm ">
          <div className="flex items-center gap-3">
            <span className="text-black ">#{id}</span>
            <span className={`${priorityClass} font-medium uppercase`}>
              {priority} PRIORITY
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span>{customer}</span>
            <div className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 opacity-70"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10m-13 9h16a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v11a2 2 0 002 2z"
                />
              </svg>
              <span>{date}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerTicket;
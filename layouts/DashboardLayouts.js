import Link from "next/link";
import React from "react";

const DashboardLayouts = ({ children }) => {
  console.log(children);
  return (
    <div>
      <div style={{ positon: "relative" }} className="row ">
        <div className="col-md-2 dashboardItems">
          <div id="wrapper">
            <div className="bg-white" id="sidebar-wrapper">
              <div className="list-group list-group-flush my-3">
                <Link
                  href="/dashboard/myBooking"
                  className="list-group-item list-group-item-action bg-transparent second-text fw-bold"
                >
                  <a>
                    <i className="fas fa-project-diagram me-2"></i>My Booking
                  </a>
                </Link>
                <Link
                  href="/dashboard/teamMember"
                  className="list-group-item list-group-item-action bg-transparent second-text fw-bold"
                >
                  <a>
                    <i className="fas fa-chart-line me-2"></i>Team Member
                  </a>
                </Link>
                <Link
                  href="/Dashboard/Payment"
                  className="list-group-item list-group-item-action bg-transparent second-text fw-bold"
                >
                  <a>
                    <i className="fas fa-paperclip me-2"></i>Payment
                  </a>
                </Link>
                

                <Link
                  // onClick={logOut}
                  href="/Home"
                  className="list-group-item list-group-item-action bg-transparent text-danger fw-bold"
                >
                  Logout
                </Link>
              </div>
            </div>
            {/* sidebar-wrapper */}

            {/* Page Content */}
          </div>
        </div>
        <div className="col-md-10 dashboardOrigin">
          {/* <Outlet /> */}
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayouts;

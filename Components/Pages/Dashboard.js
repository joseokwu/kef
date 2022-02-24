import React from "react";
import Progress from "../Cards/Progress";
import Activate from "../Cards/Activate";
import Stats from "../Cards/Stats";
import PoweredBy from "../Cards/PoweredBy";
import LatestWinnerCard from "../Cards/LatestWinnerCard";

const Dashboard = () => {
  return (
    <div className=" max-w-[130rem]">
      {/* First Section */}
      <div className="flex flex-wrap">
        {" "}
        <Progress></Progress>
        <Activate></Activate>
      </div>

      {/* Second Section */}

      <div className="flex flex-wrap">
        {/* <Stats title={"15 Raffle Tickets"} text={"Total Number of Raffle Tickets"} color="#F0F0F0" img={"/3d-ticket.png"} /> */}
        <Stats title={"2 Rewards"} text={"Total Number of Rewards"} color="#FFF7E7" img={"/3d-ticket.svg"} />
        <Stats title={"2 Rewards"} text={"Total Number of Rewards"} color="#FFF7E7" img={"/3d-ticket.svg"} />
        <Stats title={"2 Rewards"} text={"Total Number of Rewards"} color="#FFF7E7" img={"/3d-ticket.svg"} />
        {/* <Stats title={"15 Raffle Tickets"} text={"Total Number of Raffle Tickets"} color="#F0F0F0" img={"/3d-ticket.png"} /> */}
      </div>

      {/* Third Section: Latest Winner Section */}
      <section className="flex flex-wrap">
        {/* div-1 */}
        <div className="mr-[2.4rem]">
          <div className="relative">
            <LatestWinnerCard />
          </div>
          <div className="py-[2.7rem] px-[4.2rem] flex items-center justify-between default-shadow bg-white rounded-[2rem] mt-[3.2rem] mb-[1.3rem]">
            <h3 className="text-[2.1rem] font-bold">Transaction History</h3>
            <a href="#" className="text-[#FCAC0D] text-[1.4rem] font-bold underline">
              View all
            </a>
          </div>

          <div className=" px-[4.2rem] bg-white rounded-[2rem] mb-[1.3rem] default-shadow">
            <div className="row flex items-center justify-between text-[#CF0C0F] text-[1.6rem] font-semibold py-[2.4rem] leading-[1.9rem] cursor-pointer border-b">
              <p>Purchase Raffle Ticket</p>
              <p>#5,000</p>
              <p>22 Oct, 2022</p>
            </div>
            <div className="row flex items-center justify-between text-[#CF0C0F] text-[1.6rem] font-semibold py-[2.4rem] leading-[1.9rem] cursor-pointer border-b">
              <p>Purchase Raffle Ticket</p>
              <p>#5,000</p>
              <p>22 Oct, 2022</p>
            </div>
          </div>
        </div>

        {/* div-2 */}
        <PoweredBy></PoweredBy>
      </section>
    </div>
  );
};

export default Dashboard;

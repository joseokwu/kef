import React from "react";
import Progress from "../Cards/Progress";
import Activate from "../Cards/Activate";
import Stats from "../Cards/Stats";

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
        <Stats title={"2 Rewards"} text={"Total Number of Rewards"} color="#FFF7E7" img={"/3d-ticket.png"} />
        <Stats title={"2 Rewards"} text={"Total Number of Rewards"} color="#FFF7E7" img={"/3d-ticket.png"} />
        <Stats title={"2 Rewards"} text={"Total Number of Rewards"} color="#FFF7E7" img={"/3d-ticket.png"} />
        {/* <Stats title={"15 Raffle Tickets"} text={"Total Number of Raffle Tickets"} color="#F0F0F0" img={"/3d-ticket.png"} /> */}
      </div>

      {/* Third Section: Latest Winner Section */}
      <section className="flex flex-wrap">
        {/* div-1 */}
        <div className="mr-[2.4rem]">
          <div className="relative">
            {/* <div className="w-[90%] h-[100px] bg-gray-600 absolute -top-[1/2] py-[3.2rem] rounded-[2rem] mx-auto"></div> */}
            <div className="flex flex-wrap items-center bg-[#101010] py-[3.2rem] rounded-[2rem] pl-[3.4rem] relative">
              <img className="h-[7.8rem] w-[7.8rem] object-cover rounded-full" src="/user-img.jpg" />
              <div className="ml-[2.7rem] mr-[15.7rem]">
                <span className=" text-[#FCAC0D] text-[13px] font-semibold">Latest Winners</span>
                <h3 className="text-[2.5rem] font-semibold leading-[3rem] text-white">Winner Okpere</h3>
              </div>
              <img src="/3d-trophy.png" className="bottom-0  right-0 absolute"></img>
            </div>
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
        <div className="py-[4.1rem] px-[5.9rem] bg-party rounded-[2rem] bg-cover w-[565px]">
          <h3 className="mb-[1.92rem] font-bold text-[4.4rem] w-[408px] text-[#FAFAFA] leading-[4.8rem]">Kennis Music Easter Fiesta, 2022</h3>
          <p className="mb-[4.2rem] font-normal text-[1.4rem] w-[27rem] leading-[2rem] text-[#FAFAFA]">Get your ticket for the event and book your spot to the most exciting event this easter</p>
          <button className="btn btn--outlined text-white !border-white mb-[4.8rem]">Buy Event Ticket</button>
          <div className="flex items-center">
            <span className="font-normal text-[1.2rem] text-[#FAFAFA] mr-12">Powered by</span>
            <img src="/kudibar-logo.svg"></img>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;

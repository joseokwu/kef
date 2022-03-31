import React, { useState } from "react";
import StatV2 from "../../Cards/Stats-v2";
import Container from "../../Layout/Container";
import Pagination from "@mui/material/Pagination";
import NavV1 from "../../NavPill/V1";
import SearchAdmin from "../../Form/searchAdmin";

const TransactionsAdmin = () => {
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(10);
  // const [active, setActive] = useState("All users");
  const navs = ["All Sales", "Event Tickets", "Raffle Tickets", "Progressive Token", "Live Session"];
  const data = [
    { firstName: "Jonathan", lastName: "Mcreynold", ticketType: "Event", DatePurchased: "21 March, 2022", amount: "500", phone: "+234(0)812 3456789", email: "j.mcreynold@gmail.com" },
    { firstName: "Jonathan", lastName: "Smith", ticketType: "Event", DatePurchased: "21 March, 2022", amount: "500", phone: "+234(0)812 3456789", email: "jonsmith@gmail.com" },
  ];
  return (
    <Container>
      <section className="flex flex-wrap gap-6">
        <StatV2 value={"1,000"} title={"Total Users"}></StatV2>
        <StatV2 value={"1,000"} title={"Total Users"}></StatV2>
        <StatV2 value={"1,000"} title={"Total Users"}></StatV2>
        <StatV2 value={"1,000"} title={"Total Users"}></StatV2>
        <StatV2 value={"1,000"} title={"Total Users"}></StatV2>
      </section>

      {/*  */}
      <section className="mt-[4.6rem] flex items-center mb-[3.2rem]">
        <NavV1
          activeNav={"All Sales"}
          navs={navs}
          onChange={(val) => {
            console.log("Nav change", val);
          }}
        />
        <SearchAdmin></SearchAdmin>
      </section>

      {/* Table */}
      <div className="w-[100%] overflow-x-scroll scroll_hide rounded-3xl border border-[#CECCCC]">
        <table className=" w-full  border-collapse">
          <thead className="text-bl text-black-light whitespace-nowrap bg-gray-lightest-2  caption_heavy h-[48px] font-medium ">
            <tr className="">
              <th className="border-b border-gray-lighter font-medium text-left pt-[10px] px-[16px] pl-[5.8rem]">
                <span className=" align-text-bottom mt-auto text-[#A1A1A1] font-medium text-[1.2rem]">First Name</span>
              </th>
              <th className="border-b border-gray-lighter font-medium text-left pt-[10px] px-[16px] ">
                <span className=" align-text-bottom mt-auto text-[#A1A1A1] font-medium text-[1.2rem]">Last Name</span>
              </th>
              <th className="border-b border-gray-lighter font-medium text-left pt-[10px] px-[16px] ">
                <span className=" align-text-bottom mt-auto text-[#A1A1A1] font-medium text-[1.2rem]">Email</span>
              </th>
              <th className="border-b border-gray-lighter font-medium text-left pt-[10px] px-[16px] ">
                <span className=" align-text-bottom mt-auto text-[#A1A1A1] font-medium text-[1.2rem]">Phone Number</span>
              </th>
              <th className="border-b border-gray-lighter font-medium text-left pt-[10px] px-[16px]">
                <span className=" align-text-bottom mt-auto text-[#A1A1A1] font-medium text-[1.2rem]">Ticket Type</span>
              </th>
              <th className="border-b border-gray-lighter font-medium text-left pt-[10px] px-[16px]">
                <span className=" align-text-bottom mt-auto text-[#A1A1A1] font-medium text-[1.2rem]">Amount</span>
              </th>
              <th className="border-b border-gray-lighter font-medium text-right pt-[10px] px-[16px] pr-[6.5rem]">
                <span className=" align-text-bottom mt-auto text-[#A1A1A1] font-medium text-[1.2rem] ">Date Purchased</span>
              </th>
            </tr>
          </thead>
          <tbody className="caption_light text-black-default whitespace-nowrap h-[48px]">
            {data.map((el) => {
              return (
                <>
                  <tr className="">
                    <td className=" border-gray-lighter p-[16px] text-left align-text-bottom font-semibold text-[1.2rem] pl-[5.8rem]">{el.firstName}</td>
                    <td className=" border-gray-lighter p-[16px] text-left align-text-bottom font-semibold text-[1.2rem]">{el.lastName}</td>
                    <td className=" border-gray-lighter p-[16px] text-left align-text-bottom font-semibold text-[1.2rem]">{el.email}</td>
                    <td className=" border-gray-lighter p-[16px] text-left align-text-bottom font-semibold text-[1.2rem]">{el.phone}</td>
                    <td className=" border-gray-lighter p-[16px] text-left align-text-bottom font-semibold text-[1.2rem]">{el.ticketType}</td>
                    <td className=" border-gray-lighter p-[16px] text-left align-text-bottom font-semibold text-[1.2rem]">{el.amount}</td>
                    <td className=" border-gray-lighter p-[16px] text-right align-text-bottom font-semibold text-[1.2rem] pr-[6.5rem]">{el.DatePurchased}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-center mt-[3.2rem]">
        <button
          onClick={() => {
            onNext();
          }}
          className={`h-[4rem] grid place-items-center place-content-center rounded-[5px] p-[1.2rem] border border-[#827F7F] bg-[#F0F0F0]`}
        >
          <svg className=" rotate-180" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.88047 5.00005L0.167969 1.28755L1.22847 0.227051L6.00147 5.00005L1.22847 9.77305L0.167969 8.71255L3.88047 5.00005Z" fill="black" />
          </svg>
        </button>
        <Pagination count={totalPage} page={page} onChange={() => {}} variant="outlined" shape="rounded" hidePrevButton hideNextButton />
        <button
          onClick={() => {
            onNext();
          }}
          className={`h-[4rem] grid place-items-center place-content-center rounded-[5px] p-[1.2rem] border border-[#827F7F] bg-[#F0F0F0]`}
        >
          <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.88047 5.00005L0.167969 1.28755L1.22847 0.227051L6.00147 5.00005L1.22847 9.77305L0.167969 8.71255L3.88047 5.00005Z" fill="black" />
          </svg>
        </button>
      </div>
    </Container>
  );
};

export default TransactionsAdmin;

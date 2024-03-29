import React, { useState } from "react";
import calender from "../../assets/images/svgs/mybooking.png";
import dollar from "../../assets/images/svgs/dollar.svg";
import summary from "../../assets/images/svgs/summary.svg";
import tick from "../../assets/svgs/tick.svg";
import cross from "../../assets/svgs/cross1.svg";
import OtpVerififcation from "../profile/OtpVerification";

// import { useState } from "react";

function EventCards({ events, userType }) {
  const [Otpmodal, setOtpmodal] = useState(false);
  const dateFormat = (date) => {
    let x = new Date(date);
    return (
      "date",
      ("0" + x.getDate()).slice(-2) +
        " " +
        x.toLocaleString("default", { month: "long" }) +
        " " +
        x.getFullYear() +
        " , " +
        ("0" + x.getHours()).slice(-2) +
        ":" +
        ("0" + x.getMinutes()).slice(-2)
    );
  };

  const handleChangeOtp = (e) => {
    setOtpmodal(!Otpmodal);
  };
  return (
    <>
      {events.length !== 0 ? (
        events.map((event) => (
          <div
            key={event._id}
            className="flex-col p-5 mt-5 w-full border rounded-lg"
          >
            {Otpmodal && (
              <OtpVerififcation
                eventId={event._id}
                handleChangeOtp={handleChangeOtp}
              />
            )}
            <div className="flex justify-between items-center py-2">
              <p className="font-Manrope font-black text-[#535353] text-[16px]">
                {userType === "M"
                  ? event.mentee?.first_name + " " + event.mentee?.last_name
                  : event.mentor?.name}
              </p>
              <a
                href={`https://${event.mentor?.google_meet_link}`}
                target="blank"
                style={{ background: "rgba(212, 195, 240, 0.5)" }}
                className="text-[#8F6EC5]  text-[12px] font-semibold mr-2 px-2.5 py-0.5 rounded"
              >
                Join Meet
              </a>
            </div>
            <hr className="w-full" />
            <div className="flex items-center gap-x-3 pt-3">
              <img src={calender} alt="c" />
              <p className="font-Manrope font-medium text-[#bbb9b9] text-[12px]">
                Date - {dateFormat(event.start_date)}
              </p>
            </div>
            <div className="flex items-center gap-x-3 pt-2">
              <img src={dollar} alt="c" className="w-3 h-3" />
              <p className="font-Manrope font-medium text-[#bbb9b9] text-[12px]">
                Fees - ₹{event.amount}
              </p>
            </div>
            {event.summary !== "" && (
              <div className="flex items-center gap-x-3 pt-2">
                <img src={summary} alt="c" className="w-3 h-3" />
                <p className="font-Manrope font-medium text-[#bbb9b9] text-[12px]">
                  {event.summary}
                </p>
              </div>
            )}
            {userType === "M" && (
              <div className="flex items-center gap-x-3 pt-2">
                <img
                  src={event.is_successfully_finished ? tick : cross}
                  alt="c"
                  className="w-3 h-3"
                />
                <p
                  onClick={!event.is_successfully_finished && handleChangeOtp}
                  className={`font-Manrope ${
                    event.is_successfully_finished
                      ? "bg-green-700"
                      : "bg-red-400"
                  } rounded px-1 text-white font-medium text-[12px]`}
                >
                  {event.is_successfully_finished ? "Finished" : "Finish"}
                </p>
              </div>
            )}
            {/* <div className="flex rounded-b-lg bg-[#f8f8f8] justify-end items-center gap-x-3 py-2 pr-5">
                    <button type="button" className="bg-[#8f6ec5] text-white text-[14px] font-Manrope font-semibold py-1 px-3 rounded-lg">Make Payment</button>   
                    <button type="button" className="text-[#8f6ec5] text-[14px] font-Manrope font-semibold py-1 px-3 rounded-lg" style={{background: "rgba(68,61,246,0.1)"}}>Cancel</button>
            </div> */}
          </div>
        ))
      ) : (
        <h1 className="flex pt-[40%] items-center justify-center font-poppins font-semibold text-[#686868] text-lg">
          No Events Found
        </h1>
      )}
    </>
  );
}

export default EventCards;

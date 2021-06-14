import React, { useState } from 'react';
import Modal from './modal/Modal';
import Table from "./table/Table";
import "./Calendar.css";

const Calendar = () => {
  const [data, setData] = useState([])
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <section className="calendar">
        <button onClick={() => setShowModal(!showModal)}>{!showModal? "Create event" : "Hide modal"}</button>
      </section>
      {showModal && (
        <div>
          <Modal data={data} setData={setData} />
        </div>
      )}
      <Table data={data} />
    </>
  );
}

export default Calendar;

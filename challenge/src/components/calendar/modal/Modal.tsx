import React, { useState } from 'react';
import "./Modal.css";

const Modal = (props: any) => {

  const [name, setName] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [birthday, setBirthday] = useState('');
  const [showMeeting, setShowMeeting] = useState(true);
  const [showBirthday, setShowBirthday] = useState(false);

  const { data, setData } = props;

  const handleCreate = () => {
    if (data.length < 10) {
      const newData = data.concat({ "name": name, "start": start, "end": end, "birthday": birthday })
      setData(newData)
      console.log(newData)
      clearEvent();
    } else {
      alert("You reach the limit event")
    }
  }

  const clearEvent = () => {
    setBirthday('');
    setEnd('');
    setStart('');
    setName('');
  }

  const handleShowBirthday = () => {
    setShowMeeting(false);
    setShowBirthday(true);
  }

  const handleMeetingShow = () => {
    setShowMeeting(true);
    setShowBirthday(false);
  }


  return (
    <section className="modal">
      <button onClick={handleShowBirthday}>Day reminder</button>
      <button onClick={handleMeetingShow}>Meeting schedule</button>
      <form onSubmit={handleCreate}>

      <label>Name</label>
      <input
        type="text"
        autoFocus
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
      {
        showBirthday && (
          <>
            <label>Birthday date</label>
            <input
              type="date"
              autoFocus
              required
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
              />
          </>
        )
      }
      {
        showMeeting && (
          <>
            <label>Start date</label>
            <input
              type="datetime-local"
              autoFocus
              required
              value={start}
              onChange={(e) => setStart(e.target.value)}
              />
            <label>End date</label>
            <input
              type="datetime-local"
              autoFocus
              required
              value={end}
              onChange={(e) => setEnd(e.target.value)}
              />
          </>
        )
      }
      <button type="submit">Create</button>
      </form>
    </section>
  );
}

export default Modal;

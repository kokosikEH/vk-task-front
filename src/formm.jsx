import React, { useState, useEffect} from 'react'
import ReactJson from 'react-json-view';
import Select from 'react-select';
import './form.css';

const tower = [
  { value: "А", label: "А" },
  { value: "Б", label: "Б" },
];
const floor = [];
for (let i = 3; i <= 27; i++) {
  const value = i;
  floor.push({ value, label: value });
}
const room = [];
for (let i = 1; i <= 10; i++) {
  const value = i;
  room.push({ value, label: value });
}
export default function Example() {

  const [selectedTower, setSelectedTower] = useState(null);
  const [selectedFloor, setSelectedFloor] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);

  const handleResetClick = () => {
    setSelectedTower(null);
    setSelectedFloor(null);
    setSelectedRoom(null);
  };

  const [jsonData, setJsonData] = useState({});

  useEffect(() => {
    console.log(jsonData);
  }, [jsonData]);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formDataObject = Object.fromEntries(formData.entries());
    setJsonData(formDataObject);
  };
  
  return (
    <div className='flex-column'>
      <b>Создание оъекта</b>
      <form onSubmit={handleSubmit} className="flex-column">
        <div>
          
          <div>

            <label htmlFor="tower">
              Башня*
            </label> 

            <Select
              value={selectedTower}
              onChange={setSelectedTower}
              className="basic-single"
              classNamePrefix="select"
              name="tower"
              options={tower}
              required 
            />   

          </div>

          <div>

            <label htmlFor="floor">
              Этаж*
            </label>

            <Select
              value={selectedFloor}
              onChange={setSelectedFloor}      
              className="basic-single"
              classNamePrefix="select"
              name="floor"
              options={floor}
              required 
            /> 

          </div>

          <div>

            <label htmlFor="room">
              Переговорка*
            </label>

            <Select
              value={selectedRoom}
              onChange={setSelectedRoom}      
              className="basic-single"
              classNamePrefix="select"
              name="room"
              options={room}
              required 
            /> 

          </div>

          <div>

            <label htmlFor="date_of_meeting" >
              Дата встречи*
            </label>

            <div className='flex-container'>

              <input
                className='date'
                type="date"
                name="date"
                required 
              />    

              <input
                className='date'
                type="time"
                name="time_start"
                required 
              />   

              <input
                className='date'
                type="time"
                name="time_end"
                required 
              /> 

            </div>
            
          </div>

          <div>

            <label htmlFor="company">
              Коментарий
            </label>

            <div>

              <input
              className='input'
              type="text"
              name="message"
              />

            </div>

          </div> 

        </div>

        <div>

          <button type="submit" className='button'>
            принять
          </button>

          <button type="reset"  onClick={handleResetClick} className='button'>
            очистить
          </button>
          
         
          
        </div>
        
      </form>   
      <a>Вывод json происходит и на странице, и в консоли:</a>
          {jsonData && (<ReactJson src={jsonData} name={null} collapsed={false} />)}    
    </div>
  )
}

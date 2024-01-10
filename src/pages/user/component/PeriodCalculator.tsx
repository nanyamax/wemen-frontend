import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calender/dist/Calendar.css';

import Moment from 'react-moment';

const PeriodCalculator = () => {
  const [value, onChange] = useState(new Date());
  const [cycle, cycleValue] = useState('23');
  const date = value;
  const cycleLength = parseInt(cycle);
  return (
    <>
      <div className="text-center">
        <h3>Calculate period</h3>
        <label for={'cycle'}>Select Cycle Length:</label>
        <select
          onChange={(e) => cycleValue(e.target.value)}
          defaultValue={cycle}
          className="m-3">
          <option value="23">23</option>
          <option value="24">24</option>
          <option value="25">25</option>
          <option value="26">26</option>
          <option value="27">27</option>
          <option value="28">28</option>
          <option value="29">29</option>
          <option value="30">30</option>
          <option value="31">31</option>
          <option value="32">32</option>
          <option value="33">33</option>
          <option value="34">34</option>
          <option value="35">35</option>
          <option value="36">36</option>
          <option value="37">37</option>
          <option value="38">38</option>
          <option value="39">39</option>
          <option value="40">40</option>
          <option value="41">41</option>
          <option value="42">42</option>
          <option value="43">43</option>
          <option value="44">44</option>
          <option value="45">45</option>
        </select>
      </div>
      <p className="text-center">Select Last Period Date</p>
      <div className="d-flex justify-content-center">
        <Calendar
          onChange={onChange}
          value={value}
          className="calender mt-0"></Calendar>
      </div>
      <div className="text-center mt-4 p-2">
        <p>Next Period</p>
        <Moment format="Do MMMM YYYY" add={{ days: cycleLength - 1 }}>
          {date}
        </Moment>
      </div>
    </>
  );
};

export default PeriodCalculator;

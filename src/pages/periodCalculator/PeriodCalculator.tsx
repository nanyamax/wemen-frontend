import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { DATE_FORMAT } from '../../common/constants';
import { Col, Form, Row } from 'react-bootstrap';
import dayjs from 'dayjs';

interface IProps {
  lastPeriod: string;
  setLastPeriod: React.Dispatch<React.SetStateAction<string>>;
  setCycle: React.Dispatch<React.SetStateAction<number>>;
}

const PeriodCalculator: React.FC<IProps> = ({
  lastPeriod,
  setLastPeriod,
  setCycle,
}) => {
  const numberOfDays = () => {
    const result: number[] = [];
    for (let i = 23; i <= 45; i++) {
      result.push(i);
    }

    return result;
  };

  return (
    <>
      <div className="text-center">
        <h3>Calculate period</h3>
        <Form.Group className="mb-3" as={Row}>
          <Form.Label column sm={6}>
            Select cycle length
          </Form.Label>
          <Col>
            <Form.Select
              size="lg"
              className="days-select"
              onChange={(e) => setCycle(Number(e.target.value ?? 23))}>
              {numberOfDays().map((days) => (
                <option value={days} key={days}>
                  {days}
                </option>
              ))}
            </Form.Select>
          </Col>
        </Form.Group>
      </div>
      <p className="text-center">Select Last Period Date</p>
      <div className="d-flex justify-content-center">
        <Calendar
          onClickDay={(value) =>
            setLastPeriod(dayjs(value).format(DATE_FORMAT.longDate))
          }
          value={lastPeriod}
          className="calender mt-0"></Calendar>
      </div>
    </>
  );
};

export default PeriodCalculator;

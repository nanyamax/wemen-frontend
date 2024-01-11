import React, { useState } from 'react';
import PeriodCalculator from './PeriodCalculator';
import { Container } from 'react-bootstrap';
import dayJs from 'dayjs';
import { DATE_FORMAT } from '../../common/constants';
import { dateSpliter } from '../../common/utils';

const PeriodCalculators: React.FC = () => {
  const [lastPeriod, setLastPeriod] = useState(dayJs().toString());
  const [cycle, setCycle] = useState(23);

  const nextPeriod = dayJs(lastPeriod)
    .add(cycle, 'days')
    .format(DATE_FORMAT.longDate);

  const splitedDate = dateSpliter(nextPeriod);

  return (
    <div>
      <Container className="period-calculator lg-3 md-2">
        <PeriodCalculator
          lastPeriod={lastPeriod}
          setLastPeriod={setLastPeriod}
          setCycle={setCycle}
        />
      </Container>
      <Container className="period-calculator-result lg-3 md-2">
        <div className="result-title">Your next period date</div>
        <div className="result-date">
          <div className="result-date-day">
            {splitedDate ? splitedDate.day : ''}
          </div>
          <div className="result-date-month">
            {splitedDate ? splitedDate.month : ''}
          </div>
          <div className="result-date-year">
            {splitedDate ? splitedDate.year : ''}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PeriodCalculators;

import { DateRange } from 'react-date-range';

const Calender = ({value ,handleDateChange}) => {
    console.log(value);
    return (
        <div>
            <DateRange
                rangeColors={['#F43F5E']}
                ranges={[value]}
                showDateDisplay={false}
                direction='vertical'
                onChange={handleDateChange}
            />
        </div>
    );
};

export default Calender;
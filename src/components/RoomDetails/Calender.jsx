import { DateRange } from 'react-date-range';

const Calender = ({ value, handleSelect }) => {
    return (
        <div>
            <DateRange
                rangeColors={['#F43F5E']}
                ranges={value}
                showDateDisplay={false}
                direction='vertical'
            />
        </div>
    );
};

export default Calender;
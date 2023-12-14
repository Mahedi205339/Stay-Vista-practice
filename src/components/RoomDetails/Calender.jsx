import { DateRange } from 'react-date-range';

const Calender = ({value}) => {
    console.log(value);
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
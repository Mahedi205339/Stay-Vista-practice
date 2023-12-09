import Heading from "../Shared/Heading";

const Header = ({room}) => {
    return (
        <div>
            <Heading title={room.title}  subtitle={room.location} />
      <div className='w-full md:h-[60vh] overflow-hidden rounded-xl'>
        <img
          className='object-cover w-full'
          src={room.image}
          alt='header image'
        />
      </div>
        </div>
    );
};

export default Header;
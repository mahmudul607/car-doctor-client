
import PropTypes from 'prop-types';
import './SectionHeader.css'

const SectionHeader = ({title, para1, para2}) => {
    return (
        <div className='w-full section-header'>
           <div className='text-center py-6 '>
           <h1 className="text-3xl font-bold section-title">{title}</h1>
           <p>{para1}</p>
            <p>{para2}</p>
           </div>

            
            
        </div>
    );
};

SectionHeader.propTypes = {
    title: PropTypes.string,
     para1:PropTypes.string, 
     para2: PropTypes.string
    
};

export default SectionHeader;

import PropTypes from 'prop-types';

const DarkMod = ({children}) => {
    const setDarkMode = () => {
        document.querySelector('body').setAttribute('data-theme', 'dark');
    }
    const setLightMode = () => {
        document.querySelector('body').setAttribute('data-theme', 'light');
    }
    
    const handleToggleTheme = (e) =>{
        if(e.target.checked) setDarkMode()
        else setLightMode()
        console.log('hello theme');
    }

    
    return (
        <div className='dark_mode dark-theme '>
            <input 
            className='dark_mode_input toggle text-right absolute right-4 top-4'
            type="checkbox"
            id='darkMode_toggle'
            onChange={handleToggleTheme}
           
             />
            {
                children
            }

            
        </div>
    );
};

DarkMod.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DarkMod;

import PropTypes from 'prop-types';
// import { MdDarkMode } from "react-icons/md";
// import { CiLight } from "react-icons/ci";
const DarkMod = ({ children }) => {
    const setDarkMode = () => {
        document.querySelector('body').setAttribute('data-theme', 'dark');
        localStorage.setItem('selectedTheme', 'dark');
    }
    const setLightMode = () => {
        document.querySelector('body').setAttribute('data-theme', 'light');
        localStorage.setItem('selectedTheme', 'light');
    }

    const selectedTheme = localStorage.getItem('selectedTheme');

    if (selectedTheme === 'dark') {
        setDarkMode();
    }
    const handleToggleTheme = (e) => {
        if (e.target.checked) setDarkMode()
        else setLightMode()
        console.log('hello theme');
    }


    return (
        <div className='dark_mode dark-theme'>
            <div className=''>
                
                <label className="cursor-pointer grid place-items-center absolute top-4 right-4  text-white">
                    <input 
                    type="checkbox" 
                    value="synthwave" 
                    onChange={handleToggleTheme}
                    defaultChecked={selectedTheme === 'dark'}
                    className="toggle  bg-base-content row-start-1 col-start-1 col-span-2 w-12" 
                    />



                    <svg className="col-start-1  row-start-1 stroke-base-100 fill-base-100 text-black" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                    <svg className="col-start-2 row-start-1  stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                </label>
            </div>


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
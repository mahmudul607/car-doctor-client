
import PropTypes from 'prop-types';

import { TiDelete } from "react-icons/ti";



const BookingRow = ({ booking, handleDelete, handleBookingUpdate }) => {
   
    const {  img, price, customerName, date, _id, service, status, img2} = booking;

    
    
 
   
    
    
    return (
        <tr>
            <th>
                <label>
                    <TiDelete onClick={()=>handleDelete(_id)} className='w-24 h-12 cursor-pointer'/>
                </label>
            </th>
            <td>

                <div className="avatar">
                    <div className="w-24 rounded">
                        <img src={img || img2} />
                    </div>
                </div>


            </td>
            <td>{service}<br/>{customerName} </td>
            <td>$-{price}</td>
            <td>{date}</td>
            <th>
                {
                    status === 'confirm' ? <button className=" text-green-600" > Confirmed</button>
                    : 
                    <button className="btn btn-ghost btn-xs" onClick={()=>{handleBookingUpdate(_id)}}>Please Confirm</button>
                }
               
            </th>
        </tr>
    );
};

BookingRow.propTypes = {
    booking: PropTypes.object,
    handleDelete: PropTypes.func.isRequired,
    handleBookingUpdate: PropTypes.func.isRequired,

};

export default BookingRow;
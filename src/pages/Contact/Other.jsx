
import PropTypes from 'prop-types';

const Other = ({formData, setFormData}) => {
    return (
        <div>
            <form  className="max-w-md">
        <div className="mb-4">
          <label htmlFor="comment" className="block text-sm font-semibold text-gray-600 mb-1">
            Your Comment
          </label>
          <input
            type="text"
            id="comment"
            name="comment"
            placeholder='Write a Comment'
            value={formData.comment}
            onChange={(event) => setFormData({...formData, comment: event.target.value})}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="ratings" className="block text-sm font-semibold text-gray-600 mb-1">
            Your Ratings
          </label>
          <input
            type="text"
            id="ratings"
            name="ratings"
            placeholder='Give ratings in number of 5'
            value={formData.email}
            onChange={(event) => setFormData({...formData, ratings: event.target.value})}
           
            className="w-full border p-2 rounded"
            required
          />
        </div>

       

       
      </form>
            
        </div>
    );
};

Other.propTypes = {
    formData: PropTypes.object,
    setFormData: PropTypes.object
    
};

export default Other;
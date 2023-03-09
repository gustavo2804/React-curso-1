
import PropTypes from "prop-types";


export const FirstApp = ({ title, subTitle, name}) => {

    return(
        
       <> 
       <h1 data-testid="test-title">{title}</h1>
        {/* <h1>{newMessage.message}</h1> */}
        <p>{subTitle}</p>
        <p>{subTitle}</p>
        <p>{name}</p>
        </>
        )
    }   

    FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    
    }

    FirstApp.defaultProps = {
    title: "ahora estamos viendo",
    subTitle: "que hay de nuevo"
    
    }
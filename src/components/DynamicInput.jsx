import {
    MDBInput
  }
  from 'mdb-react-ui-kit';
const DynamicInput = (props) => {
    return(
        props.elem.map(
            (elem) => {
                return(
                    <MDBInput
                        wrapperClass="mb-4"
                        label={elem.label}
                        size="lg"
                        id="form1"
                        type={elem.type}
                        name="firstName"
                        onChange={(e) =>elem.value(e.target.value)}
                    />
                )   
            }
        )
        
    )
}
export default DynamicInput;
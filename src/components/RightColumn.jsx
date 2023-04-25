import Image from 'react-bootstrap/Image'
import Dota from '../images/Dota.png'
function RightColumn(){
    return(
        <center>
            <Image src={Dota} rounded style={{
                            width: 500,
                            height: 500
                    }}/>
        </center>
    )
}

export default RightColumn;
import 'bootstrap/dist/css/bootstrap.min.css';

//import components
import RightColumn from '../components/RightColumn';
import LeftColumn from '../components/LeftColumn';
export const Home = () => {
    const existingUsers = JSON.parse(localStorage.getItem('users'))
    console.log(existingUsers);
    return(
        <>
        <center><h1>Hello {existingUsers[0].firstName}</h1></center>
           <div class="container">
           
                <div class="row" >
                    <div class="col-md"  style={{
                            backgroundColor: 'black',
                            marginTop: 50,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: '100vh',
                    }}>
                        <LeftColumn />
                    </div>
                    <div class="col-md">
                        <RightColumn/>
                    </div>
                </div>
            </div> 
        </>
    )
}
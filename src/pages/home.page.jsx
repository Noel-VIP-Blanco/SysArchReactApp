import 'bootstrap/dist/css/bootstrap.min.css';

//import components
import RightColumn from '../components/RightColumn';
import LeftColumn from '../components/LeftColumn';
import WelcomeUser from '../components/WelcomeUser';

export const Home = () => {
    
    return(
        <>
        <WelcomeUser/>
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
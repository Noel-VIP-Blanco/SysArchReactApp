import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/home.page'
import CollapsibleExample from './components/Navbar';
import { Features } from './pages/features.page';
import { Pricing } from './pages/pricing.page';
const App = () => {
    return (
        <div className='App'>
            <CollapsibleExample />
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/features" element={<Features/>}/>
                    <Route path="/pricing" element={<Pricing/>}/>
                </Routes>
        </div>
    );
};

export default App;

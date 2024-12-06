import './App.css';
import User from './component/User.js';
import Header from './component/Header.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './component/Footer.js';
import AddUser from './component/AddUser.js';

function App() {
    return (
        <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <BrowserRouter>
                <Header />
                <main style={{ flex: 1 }}>
                    <Routes>
                        <Route path='/userlist' element={<User />} />
                        <Route path='/adduser' element={<AddUser />} />
                    </Routes>
                </main>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;

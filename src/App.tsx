
import {useContext} from 'react';
import {BrowserRouter, Route, Routes, useNavigate} from 'react-router-dom';

import {Context} from "./index";
import './App.css'
import Login from "./page/login/Login";
import Registration from "./page/registration/Registration";
import ContactPage from "./page/contact/ContactPage";
// import API from "./http/API";

function App() {

    const {user} = useContext(Context)

    // useEffect(() => {
    //     API.checkAuthorization()
    //         .then((data)=>{
    //             console.log(data)
    //                 user.data = data
    //                 user.isAuth = true
    //                 // toPage('/shop')
    //             }
    //         )
    //         .catch(e => {
    //             console.log(e)
    //         })
    // })

    return (
    <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login/>} />
            <Route path="/registration" element={<Registration/>} />
            {user.isAuth ?
                <>
                    <Route path="/contact" element={<ContactPage/>}/>
                    <Route path="*" element={<ContactPage/>} />
                </>
                :
                <Route path="*" element={<Login/>} />
            }
        </Routes>
    </BrowserRouter>
    );
}



export default App;
/*
    App > List + edit + ...
    login
    register
*/

import App from "../App";
import Articlelist from "../pages/articlelist";
import EditArticle from "../pages/EditArticle";
import Login from "../pages/Login";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

const BaseRouter = ()=>(
    <Router>
        <Routes>
            <Route path="/" element={<App/>}>
                <Route path="/list" element={<Articlelist></Articlelist>}></Route>
                <Route path="/edit" element={<EditArticle/>}></Route>
            </Route>
            <Route path="/login" element={<Login/>}></Route>
        </Routes>
    </Router>
);

export default BaseRouter;
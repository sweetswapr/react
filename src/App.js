import { Button } from 'antd';
import React from "react";
import 'antd/dist/antd.min.css'
import { Outlet } from 'react-router-dom';

const App = () => (
  <>
    <Button type="primary">Primary11 Button</Button>
    <Outlet/>
  </>
);


export default App;
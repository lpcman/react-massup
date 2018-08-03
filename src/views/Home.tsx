import * as React from 'react';
import { Link } from 'react-router-dom'
import Hi from '../containers/Hi';
import MainLayout from '../layout/main';

const Home = () => (
  <MainLayout>
    Home test me
    <Hi />
    <Hi />
    <Hi />
    <Hi />
    <Link to="/about?color=Blue&size=40">link to about</Link>
  </MainLayout>
);

export default Home;

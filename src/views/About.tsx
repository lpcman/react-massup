import * as React from 'react';
import { Link } from 'react-router-dom'
import Hello from '../containers/Hello';
import EmptyLayout from '../layout/empty/';

const About = (props: any) => (
  <EmptyLayout>
      about.
      <Hello />
      <Hello />
      <Hello />
      <Hello />
      <Link to="/">link to home</Link>
  </EmptyLayout>
);

export default About;

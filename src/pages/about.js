import React from 'react';
import Button from '../components/Button/Button';
import Layout from '../layout/Layout'
import { Link } from 'gatsby'

const AboutPage = () => (
  <Layout>
    <h1>Hello people, this is about page</h1>
    <Button as={Link} to="/">Go back</Button>
  </Layout>
);

export default AboutPage;
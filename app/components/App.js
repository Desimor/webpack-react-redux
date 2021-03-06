import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { footer } from '../styles/footer.scss';

const App = ({ children }) =>
    <div>
        <h1>Blood Types</h1>
        { children }
        <footer className={footer}>
            <Link to="/">Dashboard</Link>
            <Link to="/form">Form</Link>
        </footer>
    </div>;

App.propTypes = {
    children: PropTypes.object
};

export default App;

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Doughnut } from 'react-chartjs';
// import { addPerson } from '../actions';
// import ProductTable from '../components/ProductTable';
// import { filterableTable } from '../styles/filterableTable.scss';

/* const FilterableTable = ({ filter, onFilter }) => {
    let input;

    return (
        <div className={filterableTable}>
            <input
                value={filter}
                ref={node => {input = node;}}
                onChange={() => onFilter(input.value)} />

            <ProductTable filter={filter} />
        </div>
    );
};*/

class Dashboard extends React.Component {
    render() {
        const bloodTypes = {};
        this.props.people.forEach((person) => {
            bloodTypes[person.bloodType] = (bloodTypes[person.bloodType] || 0) + 1;
        });
        const data = Object.keys(bloodTypes).map((bloodType) => {
            return {
                value: bloodTypes[bloodType],
                label: bloodType
            };
        });
        const chartOptions = {};
        return (
            <div>
                <Doughnut data={data} options={chartOptions} width="700" height="400"/>
            </div>
        );
    }
}

// FilterableTable.propTypes = {
//     filter: PropTypes.string,
//     onFilter: PropTypes.func
// };

Dashboard.propTypes = {
    people: PropTypes.array
};

const mapStateToProps = (state) => {
    return {
        people: state.people
    };
};

export default connect(
    mapStateToProps,
)(Dashboard);

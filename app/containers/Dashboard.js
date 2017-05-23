import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Pie } from 'react-chartjs';
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
    constructor(props) {
        super(props);
        this.chartSeries = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map((bloodType) => {
            return {
                field: bloodType,
                name: bloodType
            };
        });
    }

    render() {
        const data = {
            labels: [
                'Green',
                'Blue',
                'Orange'
            ],
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56'
                    ],
                    hoverBackgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56'
                    ]
                }]
        };
        const chartOptions = {
            responsive: true
        };
        return (
            <div>
                <Pie data={data} options={chartOptions} width="700" height="400"/>
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

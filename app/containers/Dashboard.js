import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { PieChart } from 'react-d3-basic';
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
        this.width = 700;
        this.height = 400;
        this.chartSeries = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map((bloodType) => {
            return {
                field: bloodType,
                name: bloodType
            };
        });
    }

    name(d) {
        console.log(d);
        console.log(this.props.people);
        return d.bloodType;
    }

    value(d) {
        console.log(d);
        console.log(this.props.people);
        return d.bloodType;
    }

    render() {
        console.log(this.chartSeries);
        return (
            <div>
                <PieChart
                    data= {this.props.people || []}
                    width= {this.width}
                    height= {this.height}
                    chartSeries= {this.chartSeries}
                    value = {() => this.value()}
                    />
            </div>
                    // name = {() => this.name()}
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

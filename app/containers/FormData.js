import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { addPerson } from '../actions';
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

class NewPersonForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: '', bloodType: ''};
    }

    onNameChanged(e) {
        this.setState({
            name: e.target.value
        });
    }

    onBloodChanged(e) {
        this.setState({
            bloodType: e.target.value
        });
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="Name"
                    value={ this.state.name }
                    onChange={(e) => this.onNameChanged(e)} />
                <input type="text" placeholder="Blood Type"
                    value={ this.state.bloodType }
                    onChange={(e) => this.onBloodChanged(e)} />
                <button type="submit" onClick={() => this.props.onSubmitForm(this.state)}>Submit Ya Fool</button>
            </div>
        );
    }
}

// FilterableTable.propTypes = {
//     filter: PropTypes.string,
//     onFilter: PropTypes.func
// };

NewPersonForm.propTypes = {
    onSubmitForm: PropTypes.func
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmitForm: (formData) => dispatch(addPerson(formData))
    };
};

export default connect(
    null,
    mapDispatchToProps
)(NewPersonForm);

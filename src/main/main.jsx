import React, { Component } from 'react'
import { connect } from 'react-redux'
import Select from './select'
import Input from './input'
import Autocomplete from 'react-autocomplete'
import {
    changeDependencies,
    getDependencies,
    searchDependencies,
    selectDependencies,
    unselectDependencies
} from '../redux/actions/dependenciesActions';
import { getTypeProject } from '../redux/actions/typeProjectAction';
import { getLanguage } from '../redux/actions/languageActions'
import { getVersion } from '../redux/actions/versionAction';

class Main extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }

    componentDidMount() {
        const { getDependencies, getTypeProject, getLanguage, getVersion } = this.props;
        getDependencies();
        getTypeProject();
        getLanguage();
        getVersion();
    }


    handleSelect(event, dep) {
        const { selectDependencies } = this.props;
        selectDependencies(dep)
    }

    handleChange(event, value) {
        const { handleChange, searchDependencies } = this.props
        handleChange(event)
        searchDependencies(value)
    }


    handleClose(event, index) {
        const { unselectDependencies } = this.props
        unselectDependencies(index)
    }

    render() {
        const { dependenciesReducer, typeProjectReducer, languageReducer, versionReducer } = this.props;
        if (dependenciesReducer === undefined || !dependenciesReducer.dependenciesList) {
            return null;
        }
        return (
            <div className="container">
                <div className="row form-inline text-center">
                    <div className="form-inline">
                        <h2>
                            <span className="span-subtitle">
                                <label>Generate a </label>
                                <Select list={typeProjectReducer.typeList} />
                                <label> With</label>
                            </span>
                            <span className="span-subtitle">
                                <Select list={languageReducer.languageList} />
                                <label>and Spring Boot </label>
                                <Select list={versionReducer.versionList} />
                            </span>
                        </h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <h2>Project Metada</h2>
                        <p>Artifact coordinates</p>
                        <Input name="Group ID" value="com.example" />
                        <Input name="Artifact" value="demo" />
                    </div>
                    <div className="col-md-6">
                        <h2>Dependencies</h2>
                        <p>Add Spring Boot Starters and dependencies to your application</p>
                        <div className='form-group'>
                            <label className="control-label mb10">Search for dependencies</label>
                            <div className='autocomplete-wrapper'>
                                <Autocomplete
                                    value={dependenciesReducer.dependenciesChange}
                                    inputProps={{ id: 'dependencies-autocomplete' }}
                                    items={dependenciesReducer.list}
                                    getItemValue={(item) => item.name}
                                    onSelect={(event, state) => this.handleSelect(event, state)}
                                    onChange={(event, value) => this.handleChange(event, value)}
                                    renderItem={(item, isHighlighted) =>
                                        <div
                                            className={`item ${isHighlighted ? 'item-highlighted' : ''}`}
                                            key={item.abbr}
                                        >
                                            {item.name}
                                        </div>
                                    }
                                    renderMenu={(items, value) => (
                                        <div className="menu">
                                            {value === '' ? (
                                                <div className="item">Type of the name of a dependencies</div>
                                            ) : dependenciesReducer.loading ? (
                                                <div className="item">Loading...</div>
                                            ) : items.length === 0 ? (
                                                <div className="item">No matches for {value}</div>
                                            ) : items}
                                        </div>
                                    )}
                                />
                            </div>
                        </div>
                        <div className='form-group'></div>
                        <label className="control-label">Selected Dependencies</label>
                        <div className='dependencies'>
                            {
                                dependenciesReducer.dependenciesSelected.map((dependencies, index) =>
                                    <div className="tag" key={index}>
                                        {dependencies.name}
                                        <button
                                            type="button"
                                            className="close"
                                            aria-label="Close"
                                            onClick={(event, index) => this.handleClose(event, index)}
                                        >
                                            <span aria-hidden="true">×</span>
                                        </button>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ dependenciesReducer, typeProjectReducer, languageReducer, versionReducer }) => {
    return { dependenciesReducer, typeProjectReducer, languageReducer, versionReducer };
}
const mapDispatchToProps = (dispatch) => {
    return {
        getDependencies: () => dispatch(getDependencies()),
        getTypeProject: () => dispatch(getTypeProject()),
        getLanguage: () => dispatch(getLanguage()),
        getVersion: () => dispatch(getVersion()),
        handleChange: (event) => dispatch(changeDependencies(event)),
        searchDependencies: (value) => dispatch(searchDependencies(value)),
        selectDependencies: (dep) => dispatch(selectDependencies(dep)),
        unselectDependencies: (index) => dispatch(unselectDependencies(index))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Main)
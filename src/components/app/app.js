import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import nextId from "react-id-generator";

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [
                {name: 'John C.', salary: 800, increase: false, rise: false, id: nextId()},
                {name: 'Alex M.', salary: 3000, increase: true, rise: false, id: nextId()},
                {name: 'Carl W.', salary: 5000, increase: false, rise: false, id: nextId()}
            ]
        }
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (item) => {
        this.setState(({data}) => {
            return {
                data: [...data, { ...item, increase: false, rise: false, id: nextId() }]
            }
        })
    }

    onToggleProp = (id, key) => {
        this.setState(({data}) => ({
            data: data.map((item) => {
                if (item.id === id) {
                    return {...item, [key]: !item[key]}
                }

                return item;
            })
        }));
    }

    render() {
        return (
            <div className="app">
                <AppInfo data={this.state.data}/>
    
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
    
                <EmployeesList
                    data={this.state.data}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}/>
                <EmployeesAddForm
                    data={this.state.data}
                    onAdd={this.addItem}
                    />
            </div>
        )
    }
}

export default App;
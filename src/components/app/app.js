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
      ],
      term: '',
      filter: 'all',
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

  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter(item => {
      return item.name.indexOf(term) > -1
    })
  }

  onSearch = (term) => {
    this.setState({ term });
  }

  filterPost = (items, filter) => {
    const opts = {
      all: () => items,
      increase: () => items.filter((item) => item.increase),
      salary: () => items.filter((item) => item.salary > 1000),
    }

    return opts[filter]();
  }

  onToogleFilter = (filter) => {
    this.setState({ filter })
  }

  render() {
    const { data, term, filter } = this.state;
    const visibleData = this.filterPost(this.searchEmp(data, term), filter);

    return (
      <div className="app">
        <AppInfo data={data}/>
  
        <div className="search-panel">
          <SearchPanel onSearch={this.onSearch}/>
          <AppFilter onToogleFilter={this.onToogleFilter}/>
        </div>
  
        <EmployeesList
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
        />
        <EmployeesAddForm
          data={data}
          onAdd={this.addItem}
        />
      </div>
    )
  }
}

export default App;
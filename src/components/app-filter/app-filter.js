import { Component } from 'react';
import './app-filter.css';

class AppFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'all',

      tabs: [
        {
          name: 'all',
          label: 'Все сотрудники',
        },
        {
          name: 'increase',
          label: 'На повышение',
        },
        {
          name: 'salary',
          label: 'ЗП больше 1000$',
        },
      ]
    }
  }

  getClassNames = (active, current = 'all') => {
    return active === current ? 'btn btn-light' : 'btn btn-outline-light';
  }

  filter = (newActive) => {
    if (newActive === this.state.active) {
      return;
    }

    this.setState({ active: newActive })
    this.props.onToogleFilter(newActive);
  }

  render() {
    const buttons = this.state.tabs.map(({ name, label }) => (
      <button
        className={this.getClassNames(this.state.active, name)}
        key={name}
        type="button"
        onClick={() => this.filter(name)}
      >
        { label }
      </button>
    ));

    return (
      <div className="btn-group">
        { buttons }
      </div>
    )
  }
}

export default AppFilter;
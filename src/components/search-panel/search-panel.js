import { Component } from 'react';
import './search-panel.css';

class SearchPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
    }
  }

  search = (e) => {
    const term = e.target.value;

    this.setState({ term });
    this.props.onSearch(term)
  }

  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="Найти сотрудника"
        value={this.state.term}
        onInput={this.search}/>
    )
  }
}

export default SearchPanel;
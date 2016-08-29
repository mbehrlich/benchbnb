import React from 'react';
import BenchIndexItem from './bench_index_item';

class BenchIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   this.props.requestBenches();
  // }

  render() {
    let benchIds = Object.keys(this.props.benches);
    let benches = benchIds.map((id) => {
      return (<BenchIndexItem key={id} bench={this.props.benches[id]}/>);
    });

    return (
      <div>
        <ul className="benches">
          {benches}
        </ul>
      </div>
    );
  }
}

export default BenchIndex;

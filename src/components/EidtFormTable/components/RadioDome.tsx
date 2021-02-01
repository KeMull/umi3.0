import React from 'react';
import { Radio } from 'antd';
/**
 *
 */
class RadioDome extends React.Component {
  state = {
    value: 1,
  };
  componentDidMount() {
    const { value } = this.props;
    console.log(value);
    this.setState({ value });
  }
  onChange = e => {
    console.log(e.target.value);
  };
  render() {
    console.log(this.state.value);
    return (
      <Radio.Group onChange={this.onChange} value={this.state.value}>
        <Radio value={1}>A</Radio>
        <Radio value={2}>B</Radio>
      </Radio.Group>
    );
  }
}

export default RadioDome;

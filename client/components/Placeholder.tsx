import * as React from 'react';

interface Props {
  delay: number;
}

interface State {
  timedOut: boolean;
}

class Placeholder extends React.Component<Props, State> {
  public timeout: any;
  public state = {
    timedOut: false
  };

  public componentDidMount() {
    this.timeout = setTimeout(() => {
      this.setState({ timedOut: true });
    }, this.props.delay);
  }

  public componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  public render() {
    if (this.state.timedOut) {
      return this.props.children;
    }

    return null;
  }
}

export default Placeholder;

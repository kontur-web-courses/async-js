import React from 'react';
import './styles.css';
import Button from '@skbkontur/react-ui/Button';

export default class App extends React.Component {
    constructor () {
        super();
        this.state = {
            clickCount: null,
        };
    }

    componentDidMount() {
        fetch('http://localhost:3000/clickCount')
            .then(res => res.json())
            .then(res => this.setState({
                clickCount: res.clickCount,
            }));
    }

    onClick = () => {
        const { clickCount } = this.state;

        this.setState({
            clickCount: clickCount + 1,
        });

        fetch('http://localhost:3000/addClick', {
            method: 'POST',
        }).then(res => {
            if (!res.ok) {
                this.setState({
                    clickCount,
                });
            } else {
                return res.json();
            }
        }).then(res => {
            if (res && res.clickCount !== this.state.clickCount) {
                this.setState({
                    clickCount: res.clickCount
                });
            }
        });
    };

    render() {
        return (
            <div className={"root"}>
                <Button onClick={this.onClick}>Click Me!</Button>
                {this.state.clickCount !== null &&
                    <p>Click Count: {this.state.clickCount}</p>
                }
            </div>
        );
    }
}

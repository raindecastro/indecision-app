class Visibility extends React.Component {
    
    constructor(props) {
        super(props);
        this.toggleVisibility = this.toggleVisibility.bind(this);
        this.state = {
            visible: false
        };
    }

    toggleVisibility () {
        this.setState((prevState) => {
            return {
                visible: !prevState.visible
            };
        });
    }

    render () {
        return(
            <div>
                <h1>Visibility App</h1>
                <button onClick={this.toggleVisibility}>{this.state.visible ? 'HIDE ME' : 'LEMME SEE'}</button>
                {this.state.visible && (<p>LOL HI DER</p>)}
            </div>
        );
    }
}

ReactDOM.render(<Visibility />, document.getElementById('app'));
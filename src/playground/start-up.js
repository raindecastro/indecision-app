let chats = ["Hi", "What's Up!", "How are ya!"];
let username = "Rain de Castro";

class StartUp extends React.Component {

    render () {

        return (
            <div className="StartUp">
                <ChatRoom />
            </div>
        );
    }

}


class ChatRoom extends React.Component {

   
    
    render () {

        return (
            <div>
                <ul className="chats" ref="chats">
                    {
                        chats.map((chat) => <Message key={chat} chat={chat} user={username} />)
                    }
                </ul>
                <NewMessage />
            </div>
        );

    }

}

class Message extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.chat} - from {username}</p>
                
            </div>
        );
    }
}

class NewMessage extends React.Component {
    
    submitMessage() {
        test1 = ReactDOM.findDOMNode(this.refs.msg).value;
        console.log(test1);
    }

    render() {

        return (
            <div>
                <form className="input" onSubmit={(e) => {
                    // this.submitMessage(e);
                    e.preventDefault();
                    console.log(this.   submitMessage());
                }}>
                <input type="text" ref="msg" />
                <input type="submit" value="Submit" />
        </form>
            </div>
        );
    }
}

class Header extends React.Component {

    render () {

        return (
            <div>
                <h1>Start Up Service</h1>
            </div>
        );
    }

}

class Body extends React.Component {

    render () {

        return (
            <div>
                <p>This is the body</p>
            </div>
        );

    }

}

class Footer extends React.Component {

    render() {

        return (
            <div>
                <footer>This is the footer</footer>
            </div>
        );

    }

}

ReactDOM.render(<StartUp />, document.getElementById('app'));
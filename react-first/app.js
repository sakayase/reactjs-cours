class App extends React.Component {


    state = {
        firstnameUser: "Simooooon"
    }


    render() {
        return(
            <div className="root">
                <h1>Bienvenue...dans le monde réel, {"Bienvenue".toUpperCase()}.</h1>
                <p>Nique nique nique ta mère {Math.random()}</p>
                <p>Mon nom : {this.state.firstnameUser}</p>
            </div>
        )   
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
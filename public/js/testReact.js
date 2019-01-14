const myEl = React.createElement('h1', null, 'React Rendered');
ReactDOM.render(myEl,
    document.getElementById("toBeRendered"));

class ShoppingList extends React.Component {
    render(){
        return(
    <div className='shoppingList'>
        <h1>shopping list for {this.props.name}</h1>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </div>);
    }
}


class Box extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value : props.counter
        }
    }

    render() {
        return (<button className="square" onClick={() => this.setState({value : 'X'})}>{this.state.value}</button>);
    }
}

class Board extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return ([
            <Box key="one" counter='1'/>,
            <Box key="two" counter='2'/>            
        ])
    }
}


function doSomething() {
    
    ReactDOM.render(<BlogPost/>, document.getElementById("root"));  
};
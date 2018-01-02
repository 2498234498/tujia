import React,{Component} from "react"
import ReactDOM from "react-dom"
import "./components/public/reset.css"

class Header extends Component {
    render(){
        return (
            <div>hello world</div>
        )
    }
}

ReactDOM.render(<Header />,document.getElementById("root"))
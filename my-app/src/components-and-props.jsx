import React from "react";
// this concept is cool because he can clean my code and is very dinamic
class Welcome extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>
    }
}
class Question extends React.Component {
    render() {
        return <h1> How are you, {this.props.name} ?</h1>
    }
}
// This code represent this strech :
// Todos os componentes React tem que agir as funções puras em relação aos seus props.
// because App is function and he act as component
function App() {
    return (
        <div> 
            <hr></hr>
            <Welcome name="Eduardo Matos"></Welcome>
            <Question name="Edu"></Question>
        </div>
    )
}
// In this code i learned a lot, because i don't knew how send object in props, now i know :)
function UserInfo(props) {
    return (
        <div>
            <hr></hr>
            <div>
                Name user: {props.author.name}
                <br></br>
                Avatar user: {props.author.avatar}
            </div>
            <div>
                Text from user : {props.text}
            </div>
        </div>
    )
}
export {
    Welcome,
    Question,
    App,
    UserInfo
};

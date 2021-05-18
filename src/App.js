import React, { Component } from "react";
import Users from './components/Users';
import Navbar from './components/Navbar';
import AddUser from "./components/AddUser";

class App extends Component {
    constructor (props)
    {
        super(props);
        this.state={
            users:[
                {
                    id:3,
                    name:'ekrem',
                    surname:'tınas'
                },
                {
                    id:5,
                    name:'emin',
                    surname:'ekşi'
                },
                {
                    id:7,
                    name:'mertcan',
                    surname:'akdemir'
                },
                
            ]
        };
        this.ClickDelete=this.ClickDelete.bind(this);
        this.ClickAdd=this.ClickAdd.bind(this);
    }
    ClickDelete(id){

        console.log(id)
        let updatedUsers=this.state.users;
        updatedUsers=updatedUsers.filter(user=>user.id!==id);
        this.setState({
            users:updatedUsers
        });



    }
    ClickAdd(newUser){
        let updatedUsers=this.state.users;
        updatedUsers.push(newUser);
        this.setState({
            users:updatedUsers
        });
    }

    render() {



        return ( <div className = "container" >
                   <Navbar / >
                       <AddUser ClickAdd={this.ClickAdd} />
                    <Users users={this.state.users}  ClickDelete={this.ClickDelete} />
            </div>
        );
    }
}

export default App;
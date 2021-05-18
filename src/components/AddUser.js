import React,{Component} from 'react';


class AddUser extends Component{
    state={
        name:"",
        surname:""
    }
    onNameChange(e){

        this.setState({
        [e.target.name] : e.target.value
        });
    }
    onSurnameChange(e){
        this.setState({
        [e.target.name] : e.target.value
        });
    }
    onSubmitForm(e)
    {
        const {ClickAdd}=this.props;
        e.preventDefault();

        let newUser={
            id:Math.random(),
            name:this.state.name,
            surname:this.state.surname
        }

        ClickAdd(newUser);

    }
    render(){
        const {name,surname}=this.state;
        return(
            <div className="card">
                <div className="card-header">Add User</div>
                <div className="card-body">
                <form onSubmit={this.onSubmitForm.bind(this)}>
                <div className="form-group">
                    <label htmlFor="name" >Name:</label>
                    <input onChange={this.onNameChange.bind(this)} className="form-control" value={name} placeholder="Enter Name" type="text" name="name" id="name" />
                </div>
                <div className="form-group">
                    <label htmlFor="surname" >Surname:</label>
                    <input  onChange={this.onSurnameChange.bind(this)} className="form-control" value={surname} placeholder="Enter Surname" type="text" name="surname" id="surname" />
                </div>
                <button className="btn btn-danger btn-block">Add User</button>
                </form>
                </div>
            </div>
        );
    }
}
export default AddUser;
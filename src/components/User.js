import React,{Component} from 'react';

class User extends Component{

    OnClickDel(id,e){
        const {ClickDelete}=this.props;
        console.log('click:'+id);
        ClickDelete(id);
    }
    render(){
        const {user}=this.props;
        const {id,name,surname}=user;
        return(
            <tr>
            <th scope="row">{id}</th>
            <td>{name}</td>
            <td>{surname}</td>
            <td><button key={id} onClick={this.OnClickDel.bind(this,id)} className="btn btn-outline-danger">Delete</button></td>
          </tr>
        );
    }
}
export default User;
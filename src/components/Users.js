import React,{Component} from 'react';
import User from './User';


class Users extends Component{
render(){
    const {users,ClickDelete} = this.props;

    return(
<table className="table table-dark">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Name</th>
      <th scope="col">Surname</th>
      <th scope="col">Process</th>
    </tr>
  </thead>
  <tbody>
{
  users.map(user=>{
    return (<User key={user.id}  user={user} ClickDelete={ClickDelete} />);
  })
}
   
    
  </tbody>
</table>
    );

}

}
export default Users;
import React, { Fragment, Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import UpdateUserDetails from './updateDetails'

class UserDetails extends Component {
    
    render() {
        const { userData, handleChangefirstName, handleChangeSecondName, handleChangeDOB, handleChangeAge, handleChangeQualification,  
            first_name, second_name, DOB, age, qualification, addNewUserDetails } = this.props;
            
        return(
          <div className="container">
             First Name: <input type = "text" placeholder = "Enter first name" value = {this.props.first_name} onChange = {handleChangefirstName} /> <br />
             Last Name: <input type = "text" placeholder = "Enter second name" value = {this.props.second_name} onChange = {handleChangeSecondName} /> <br />
             DOB: <input type = "text" placeholder = "Enter DOB" value = {this.props.DOB} onChange = {handleChangeDOB} /> <br />
             Age: <input type = "text" placeholder = "Enter age" value = {this.props.age} onChange = {handleChangeAge} /> <br />
             Qualification: <input type = "text" placeholder = "Enter qualification" value = {this.props.qualification} onChange = {handleChangeQualification} /> <br />
             <button className="btn btn-primary" onClick = {addNewUserDetails}> Submit </button> 
  
              <table className="table">
                  <thead>
                   <tr>
                     <th>First Name</th>
                     <th>Last Name</th>
                     <th>DOB</th>
                     <th>Age</th>
                     <th>Qualification</th>
                   </tr>
                   </thead>
                   <tbody>
                       {userData?userData.map((item,i) => {
                           let textColour;
                           if(item.age > 30)
                           {
                              textColour = "green";
                           } 
                           else
                           {
                              textColour = "yellow";
                           }
                           return (
                               <tr style = {{color: textColour}}>
                                 <td>{item.first_name}</td>
                                 <td>{item.second_name}</td>
                                 <td>{item.DOB}</td>
                                 <td>{item.age}</td>
                                 <td>{item.qualification}</td>
                             </tr>
                           )
                       }): ""}
                   </tbody>
                  </table>
          </div>

        )
    }
} 

export default UpdateUserDetails(UserDetails)
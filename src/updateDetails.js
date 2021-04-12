import React from 'react'

const UpdatedUserDetails = OriginalUserDetails => {
    class NewComponent extends React.Component {
        constructor(props) {
            super(props)

            this.state = {
                requests: [],
                first_name: '',
                second_name:'',
                DOB: '',
                age: '',
                qualification: ''
            }
        }
        
        handleChangefirstName = (e) => {
            this.setState({first_name: e.target.value });
        }

        handleChangeSecondName = (e) => {
            this.setState({second_name: e.target.value });
        }

        handleChangeDOB = (e) => {
            this.setState({DOB: e.target.value });
        }

        handleChangeAge = (e) => {
            this.setState({age: e.target.value });
        }

        handleChangeQualification = (e) => {
            this.setState({qualification: e.target.value });
        }

        addNewUserDetails = () => {

            if(this.state.age == '' || this.state.age <= 0)
            {
               return alert("enter valid age");
            }

            let newDetails = {
                first_name: this.state.first_name, 
                second_name: this.state.second_name, 
                DOB: this.state.DOB, 
                age: this.state.age, 
                qualification: this.state.qualification  
            }
            this.state.requests.push(newDetails);
            this.setState({first_name: ''});
            this.setState({second_name: ''});
            this.setState({DOB: ''});
            this.setState({age: ''});
            this.setState({qualification: ''});
        }

        render() {
            return (
                <OriginalUserDetails userData = {this.state.requests} 
                  first_name={this.state.first_name} 
                  second_name={this.state.second_name} 
                  DOB={this.state.DOB} 
                  age={this.state.age} 
                  qualification={this.state.qualification} 
                  handleChangefirstName = {this.handleChangefirstName.bind(this)} 
                  handleChangeSecondName = {this.handleChangeSecondName.bind(this)} 
                  handleChangeDOB = {this.handleChangeDOB.bind(this)} 
                  handleChangeAge = {this.handleChangeAge.bind(this)} 
                  handleChangeQualification = {this.handleChangeQualification.bind(this)} 
                  addNewUserDetails = {this.addNewUserDetails.bind(this)} 
                  />
            )
        }
    }
    return NewComponent
}

export default UpdatedUserDetails
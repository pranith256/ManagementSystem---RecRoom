import React from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBInput,
    MDBIcon,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';
import "../Styles/form.css";
import axios from "axios";

class AdminLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {},
            errors: {}
        }


        this.handleChange = this.handleChange.bind(this);
        this.submitAdminLoginForm = this.submitAdminLoginForm.bind(this);

    };

    handleChange(e) {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
            fields
        });
    }

    submitAdminLoginForm(e) {
        const URL = "https://illinirecroom.herokuapp.com/login";
        e.preventDefault();
        if (this.validateForm()) {
            let fields = {};
            fields["emailid"] = "";
            fields["password"] = "";
            this.setState({fields: fields});
            let temp = this
            axios.post(URL, {
                "username": this.state.fields["emailid"],
                "password": this.state.fields["password"]
            })
                .then(function (response) {
                    console.log("received login response")
                    console.log(response);
                    if (response.data.data === "error") {
                        console.log("printing props"
                        )
                        console.log(this)
                        temp.props.func(false);
                        alert("username and/or password is invalid.")
                    } else {
                        localStorage.setItem('jwt', response.data.data.token)
                        console.log("calling this stupid function")
                        temp.props.func(true);
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }


    validateForm() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if (!fields["emailid"]) {
            formIsValid = false;
            errors["emailid"] = "*Please enter your email-ID.";
        } else {
            errors["emailid"] = "";
        }

        if (typeof fields["emailid"] !== "undefined") {
            //regular expression for email validation
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(fields["emailid"])) {
                formIsValid = false;
                errors["emailid"] = "*Please enter valid email-ID.";
            } else {
                errors["emailid"] = "";
            }
        }

        if (!fields["password"]) {
            formIsValid = false;
            errors["password"] = "*Please enter your password.";
        } else {
            errors["password"] = "";
        }


        this.setState({
            errors: errors
        });
        return formIsValid;
    }

    render() {
        return (
            <>
                <div className="headerText"></div>

                <MDBContainer fluid>

                    <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
                        <MDBCardBody>
                            <MDBRow>
                                <MDBCol md='10' lg='6'
                                        className='order-2 order-lg-1 d-flex flex-column align-items-center'>

                                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Admin Login</p>

                                    <div className="d-flex flex-row align-items-center mb-4 ">
                                        <MDBIcon fas icon="envelope me-3" size='lg'/>
                                        <MDBInput required label='Email' name='emailid'
                                                  value={this.state.fields.emailid} onChange={this.handleChange}
                                                  id='emailid' type='email' className='w-100'/>
                                        <div className="errorMsg">{this.state.errors.emailid}</div>
                                    </div>

                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <MDBIcon fas icon="lock me-3" size='lg'/>
                                        <MDBInput required label='Password' name='password' id='password'
                                                  type='password' value={this.state.fields.password}
                                                  onChange={this.handleChange}/>
                                        <div className="errorMsg">{this.state.errors.password}</div>
                                    </div>

                                    <MDBBtn className='mb-4' size='lg'
                                            onClick={this.submitAdminLoginForm}>Submit</MDBBtn>

                                </MDBCol>

                                <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                                    <MDBCardImage
                                        src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp'
                                        fluid/>
                                </MDBCol>

                            </MDBRow>
                        </MDBCardBody>
                    </MDBCard>

                </MDBContainer>
            </>
        );
    }
}

export default AdminLogin;
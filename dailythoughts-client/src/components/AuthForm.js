import React, {Component} from 'react';

class AuthForm extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            username: '',
            profileImageUrl: ''
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const authType = this.props.signUp ? "signup" : "signin";
        this.props.onAuth(authType, this.state).then(()=>{
            console.log("logged in ")
        })

    }
    render() {
        const {email, password, username, profileImageUrl} = this.state;
        const {heading, buttonText, signUp} = this.props;
        return (
            <div>
                <div className="row justify-content-md-center text-center my-5">
                    <div className="col-md-6">
                        <form onSubmit={this.handleSubmit}>
                            <h2>{heading}</h2>
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                name='email'
                                className="form-control"
                                id='email'
                                value={email}
                                onChange={this.handleChange}/>
                            <label htmlFor="password">Password</label>
                            <input
                                className="form-control"
                                type="password"
                                name='password'
                                id='password'
                                onChange={this.handleChange}/> {signUp && (
                                <div>
                                    <label htmlFor="username">Username</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name='username'
                                        id='username'
                                        value={username}
                                        onChange={this.handleChange}/>
                                    <label htmlFor="profileImageUrl">Image URL :</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name='profileImageUrl'
                                        id='profileImageUrl'
                                        value={profileImageUrl}
                                        onChange={this.handleChange}/>
                                </div>
                            )}
                            <button type="submit" className="btn btn-outline-primary btn-block btn-lg mt-3">
                                {buttonText}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default AuthForm;
import React from 'react';
import firebaseApp from '../../../utils/firebaseUtils';
import styles from '../Login.style';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Check from 'material-ui/svg-icons/navigation/check';

export default class Signin extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            logged: false,
            login: '',
            password: '',
            loginError: null,
            loginErrorMessage: ''
        };
    }

    render() {
        return (
            <div style={styles.wrapper}>
                {"Acesso"}
                <TextField
                    id="login"
                    hintText="exemplo@email.com"
                    errorText={this.state.loginError && " "}
                    floatingLabelText="Email"
                    value={this.state.login}
                    onChange={(e) => this.setProperty(e, 'login')}
                />
                <TextField
                    id="password"
                    errorText={this.state.loginError && " "}
                    floatingLabelText="Senha"
                    value={this.state.password}
                    onChange={(e) => this.setProperty(e, 'password')}
                    type="password"
                />
                <br />
                {this.state.loginError && <div>{'Erro: ' + this.state.loginError}</div>}
                <RaisedButton
                    label="Entrar"
                    labelPosition="before"
                    primary={true}
                    icon={<Check />}
                    fullWidth={true}
                    disabled={this.state.logged}
                    onTouchTap={() => this.onPressLoginButton()}
                    style={styles.input}
                />
            </div>
        )
    }

    setProperty(event, property) {
        const currentState = this.state;
        this.setState({
            ...currentState,
            loginError: null,
            loginErrorMessage: '',
            [property]: event.target.value
        })
    }

    onPressLoginButton() {
        return firebaseApp.auth().signInWithEmailAndPassword(this.state.login, this.state.password)
            .then(() => {
                this.setState({
                    ...this.state,
                    logged: true
                });
            })
            .catch((error) => {
                this.setState({
                    ...this.state,
                    logged: false,
                    loginError: error.code,
                    loginErrorMessage: error.message,
                    password: '',
                    login: ''
                });
            });
    }

}

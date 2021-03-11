import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../../Redux/Auth';

import s from './LoginView.module.css';
// import { Button } from 'react-bootstrap';



class LoginView extends Component {
 state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onLogin(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className={s.container}>
        <h2>Страница логина</h2>
        <form
          className={s.form}
          autoComplete="off"
          onSubmit={this.handleSubmit}
        >
          <label className={s.formLabel}>
            Почта
            <input
              className={s.formInput}
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>

          <label className={s.formLabel}>
            Пароль
            <input
              className={s.formInput}
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>
          <button className={s.formButton} type="submit">Войти</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onLogin: authOperations.logIn,
}

export default connect(null, mapDispatchToProps)(LoginView);


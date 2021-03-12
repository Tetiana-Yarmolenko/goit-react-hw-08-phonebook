import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../../Redux/Auth';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import s from './LoginView.module.css';

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
        <h2  className={s.title}>Страница логина</h2>
        <form
          className={s.form}
          autoComplete="off"
          onSubmit={this.handleSubmit}
        >
          <label className={s.formLabel}>
            Почта
            <input
              className={s.input}
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>

          <label className={s.formLabel}>
            Пароль
            <input
              className={s.input}
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>
          <Button className={s.formButton } as="input" type="submit" value="Войти" />{' '}
           {/* <Button type="submit" variant="primary">Войти</Button> */}
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onLogin: authOperations.logIn,
}

export default connect(null, mapDispatchToProps)(LoginView);


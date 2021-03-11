import React, { Component } from 'react';
import { connect } from 'react-redux';

import s from './RegisterView.module.css';
import { authOperations } from '../../Redux/Auth';


class RegisterView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

    handleChange = ({ target :{name, value} }) => {
    this.setState({[name]: value});
  };

  handleFormSubmit = e => {
    e.preventDefault();

    this.props.onRegister(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

    render() {
        const { name, email, password } = this.state;
        
    return (
      <div className={s.container}>
        <h2>Страница регистрации</h2>
        <form className={s.form} onSubmit={this.handleFormSubmit}>
          <label className={s.formLabel}>
             Имя
            <input
              type="text"
              name="name"
              onChange={this.handleChange}
              value={name}
              className={s.formInput}
            />
          </label>
          <label className={s.formLabel}>
            Почта
            <input
              type="email"
              name="email"
              onChange={this.handleChange}
              value={email}
              className={s.formInput}
            />
          </label>
          <label className={s.formLabel}>
            Пароль
            <input
              type="password"
              name="password"
              onChange={this.handleChange}
              value={password}
              className={s.formInput}
            />
          </label>
          <button type="submit" className={s.formButton}>
            Зарегистрироваться
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onRegister: authOperations.register,
}

export default connect(null, mapDispatchToProps)(RegisterView);
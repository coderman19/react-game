/* eslint-disable arrow-body-style */

import React from 'react';
import style from './ClassComponent.module.css';
import PropTypes from 'prop-types';


export class ClassComponent extends React.Component {
  state = {
    returned: false,
    result: 'Результат',
    userNumber: '',
    play: 'Угадать',
    rePlay: 'сыграть еще',
    randomNumber:
        Math.floor(Math.random() * this.props.max - this.props.min) +
        this.props.min,
    count: 0,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState(state => ({
      count: state.count + 1,
    }));
    this.setState(state => {
      if (!state.userNumber) {
        return {
          result: `Введите число`,
        };
      }

      if (state.userNumber > state.randomNumber) {
        return {
          result: `${state.userNumber} больше загаданного числа`,
          userNumber: '',
          play: 'Угадать',
        };
      }

      if (state.userNumber < state.randomNumber) {
        return {
          result: `${state.userNumber} меньше загаданного числа`,
          userNumber: '',
          play: 'Угадать',
        };
      }
      return {
        result: `Поздравляем, загаданное число ${state.userNumber}`,
        userNumber: '',
        returned: true,
        // play: <button onChange={this.returnPlay()}>сыграть еще</button>,
      };
    });
  };

  handleChange = e => {
    this.setState({
      userNumber: e.target.value,
    });
  };

  returnPlay = () => {
    console.log('работает');
    this.setState(state => ({
      count: -1,
      returned: false,
      result: 'введите число',
    }));
  };

  render() {
    console.log(this.state.count);
    console.log(this.state);
    return (
      <div className={style.container}>
        <div className={style.game}>
          <p className={style.result}>
            <span className={style.countUp}>
              {this.state.result}
            </span>
          </p>
          <p className={style.result}>
          число попыток
            <span className={style.count}>
              {this.state.count}
            </span></p>

          <form className={style.form} onSubmit={this.handleSubmit}>
            <label className={style.label} htmlFor='user_number'>
              Угадай число
            </label>
            <input className={style.input} type='number' id='user_number'
              onChange={this.handleChange} value={this.state.userNumber} />
            {!this.state.returned ?
              <button className={style.btn}>{this.state.play}</button> :
              <button className={style.btn} onClick={this.returnPlay}>
                {this.state.rePlay}</button>}
          </form>
        </div>
      </div>
    );
  }
}

ClassComponent.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
};


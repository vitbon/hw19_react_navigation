import React, {Component, useState} from "react";
import {Redirect} from 'react-router-dom';
import "./view.css";

export default class ViewContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true,
    };
  }

  getMFIcon = (str) => {
    let sign = "";
    switch (str) {
      case 'male': sign = "👨"; break;
      case 'female': sign = "👩"; break;
    }
    return sign;
  }

  closeModal = async () => {
    await this.setState({isOpen: false});
    window.location.href = "/hw19_react_navigation/contact";
    //return <Redirect to="/contact" />
  }

  render() {
    if(!this.props.location.data) return <Redirect to={'/contact/'} />;
    return (
      <>
        {(this.state.isOpen) &&
          <div className="modal_overlay">
            <div className="modal_window">
              <div className="modal_header">
                <span className="modal_title">Detailed Information</span>
                <span className="modal_close" onClick={this.closeModal}>X</span>
              </div>
              <div className="modal_body">
                <div className="modal_field_title">Full Name</div>
                <input type="text"
                       className="modal_field_box"
                       value={`${this.props.location.data.cnt.firstName} ${this.props.location.data.cnt.lastName}`}>
                </input>
                <div className="modal_field_title">Phone</div>
                <input className="modal_field_box"
                       type="text"
                       value={`${this.props.location.data.cnt.phone}`}>
                </input>
                <div className="modal_field_title">Sex</div>
                <input className="modal_field_box"
                       type="text"
                       value={this.getMFIcon(`${this.props.location.data.cnt.gender}`)}>
                </input>

                <div className="modal_field_title">Describe</div>
                <textarea className="modal_field_big"
                       value='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consequatur cupiditate laudantium maiores nisi, omnis placeat quae quisquam, quo repellat.'>
                </textarea>

                <div className="modal_field_title">Log</div>
                <textarea className="modal_field_big"
                       value='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consequatur cupiditate laudantium maiores nisi, omnis placeat quae quisquam, quo repellat.'>
                </textarea>

              </div>
              <div className="modal_footer">
                <button className="modal_button" onClick={this.closeModal}>OK</button>
              </div>
            </div>
          </div>
        }
      </>
    );
  }
}


/*
  Завдання Advanced:
  - Додайте сторінку одного контакту з детальною інформацією про нього (стать, номер, телефон, опис, умовна переписка).
  - Потрапити на цю сторінку можна, натиснувши по контакту на сторінці контактів. Зверніть увагу, що інформація повинна
    бути актуальною, а посилання змінюється на /contacts/test.
    Де test – username у вашому масиві contacts
*/
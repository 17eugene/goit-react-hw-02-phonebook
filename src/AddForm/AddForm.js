import React from "react";

import styles from "./AddForm.module.css";

class AddForm extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      number: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value, //в значение артибута 'name' у инпута положиди знаение 'value'
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.submitHandler(this.state);
    this.setState({ name: "", number: "" });
    console.log(this.state);
    console.log(this.state.name);
    console.log(this.state.number);
  };

  render() {
    return (
      <div>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <label className={styles.label}>
            Name
            <input
              className={styles.input}
              type="text"
              onChange={this.handleChange}
              name="name"
              value={this.state.name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
            />
          </label>

          <label className={styles.form}>
            Number
            <input
              className={styles.input}
              type="tel"
              name="number"
              value={this.state.number}
              onChange={this.handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
            />
          </label>

          <button type="submit" className={styles.add_btn}>
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

export { AddForm };

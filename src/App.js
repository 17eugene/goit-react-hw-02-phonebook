import React from "react";
import shortid from "shortid";
import { AddForm } from "./AddForm/AddForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";

import "./index.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      contacts: [
        { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
        { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
        { id: "id-3", name: "Eden Clements", number: "645-17-79" },
        { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
      ],
      filter: "",
    };
  }

  formSubmitHandler = (data) => {
    let newContact = {
      id: shortid.generate(),
      ...data,
    };

    if (
      this.state.contacts.find(
        (contact) =>
          contact.number === data.number ||
          contact.name.toLowerCase() === data.name.toLowerCase()
      )
    ) {
      alert("Contact already exist!");
      return;
    }

    this.setState((prevState) => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  filterChange = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFiltredContacts = () => {
    const normalized = this.state.filter.toLowerCase();

    return this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalized)
    );
  };

  render() {
    let filtredContacts = this.getFiltredContacts();
    return (
      <div>
        <AddForm submitHandler={this.formSubmitHandler} />
        <Filter value={this.state.filter} onChange={this.filterChange} />
        <ContactList
          contacts={filtredContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export { App };

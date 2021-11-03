import s from "./App.module.css";

import { Component } from "react";
import shortid from "shortid";

import Form from "../Form";
import ContactList from "../ContactList";
import Filter from "../Filter";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };
  handleSubmitForm = ({ name, number }) => {
    const { contacts } = this.state;

    contacts.some(({ name: contactName }) => contactName === name)
      ? alert(`${name} is already in contacts`)
      : this.setState((prev) => ({
          contacts: [
            ...prev.contacts,
            { name, number, id: shortid.generate() },
          ],
        }));
  };
  handleFilter = ({ target }) => {
    const { value } = target;
    this.setState({
      filter: value,
    });
  };
  removeItem = (id) => {
    // const delItem = target.closest("LI").firstChild.textContent;
    this.setState((prev) => ({
      contacts: prev.contacts.filter(({ name }) => name !== id),
      // contacts: [...prev.contacts.filter(({ name }) => name !== delItem)],
    }));
  };
  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = () =>
      filter
        ? contacts.filter(({ name }) => {
            return name.toLowerCase().includes(filter.toLowerCase());
          })
        : contacts;
    return (
      <div className="App">
        <h1 className={s.title}>Phonebook</h1>
        <Form handleSubmitForm={this.handleSubmitForm} />
        <h2 className={s.title}>Contacts</h2>
        <Filter handleFilter={this.handleFilter} value={filter} />
        <ContactList
          contacts={filteredContacts()}
          removeItem={this.removeItem}
        />
      </div>
    );
  }
}

export default App;

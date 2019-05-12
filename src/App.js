import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Nombre por defecto',
      job: 'Cargo por defecto',
      email: ''
    }

    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  handleFieldChange(event) {
    const field = event.currentTarget;
    const key = field.id;

    const newValue = {};
    newValue[key] = field.value;

    console.log(newValue);
    this.setState(newValue);
  }

  render() {
    const {name, job, email} = this.state;
    return (
      <div className="app">
        <div className="app__fields">
          <div className="app__fields-item">
            <label htmlFor="name">Escribe tu nombre</label>
            <input type="text" id="name" onChange={this.handleFieldChange} />
          </div>
          <div className="app__fields-item">
            <label htmlFor="job">Escribe tu trabajo</label>
            <input type="text" id="job" onChange={this.handleFieldChange} />
          </div>
          <div className="app__fields-item">
            <label htmlFor="email">Escribe tu email</label>
            <input type="text" id="email" onChange={this.handleFieldChange} />
          </div>
        </div>
        <div className="app__card">
          <h1 className="app__card-name">{name}</h1>
          <h2 className="app__card-job">{job}</h2>
          <ul className="app__card-links">
            <li className="app__card-link">
              <a href={`mailto:${email}`} className="app__card-link-item">{email}</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;

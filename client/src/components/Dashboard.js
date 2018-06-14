import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Form from './Form';

class Dashboard extends React.Component{
  state = { foods: [], showForm: false }

  componentDidMount() {
    axios.get('/api/foods')
    .then( res => this.setState( { foods: res.data}))
  }

  show( ) {
    let { foods } = this.state;
    return (
      <ul>
        {foods.map ( p =>
          <li key={p.id}>
            <Link to ={`/foods/${p.id}`}>{p.name} </Link>
          </li>
        )
      }
      </ul>
    )
  }
  

  form() {
    return <Form submit={this.submit}/>
  }

  submit = (food) => {
    const { foods } = this.state
    axios.post('/api/products', { food } )
      .then( res => this.setState({ foods: [res.data, ...foods ], showForm: false }) )
  }

  toggleForm = () => {
    this.setState( state => {
      return { showForm: !state.showForm }
    })
  }

  render() {
    const { showForm } = this.state;
    return (
      <div>
        <h2>Foods</h2>
        <button onClick={this.toggleForm}>{ showForm ? 'Hide' : 'Show' } form</button>
        { showForm ? this.form() : this.show() }     
      </div>
    )
  }
}

  export default Dashboard;
  
import React from 'react';
import axios from 'axios';
import Form from './Form'

class Food extends React.Component {
  state = { food: [], edit: false }

  componentDidMount() {
    axios.get('/api/foods/')
      .then( res => this.setState({ food: res.data }) )
  }

  toggleEdit = () => {
    this.setState( state => {
      return { edit: !this.state.edit}
    })
  }

  submit = (food) => {
    debugger
    axios.put(`/api/foods/${this.props.match.params.id}`, { food })
      .then( res => this.setState({ food: res.data, edit: false}));    
  }

  show = () => {
    const { food } = this.state;
    return food.map( f => (
        <div>
          <h1>{f.name}</h1>
          <h3>{f.description}</h3>
          <h3>{f.price}</h3>
        </div>

        
    ))
  }

  edit() {
    return <Form {...this.state.food} submit={this.submit}/>
  }

  render() {
   const { edit } = this.state;
  return (
    <div>
      { edit ? this.edit(): this.show() }
      {/* {this.show()} */}
      <button onClick={
        this.toggleEdit}>{edit ? 'Cancel' : 'Edit'
        }
      </button>
    </div>
    )
  }
}

export default Food;
import React, {Component} from 'react'
import * as request from 'superagent'
import { Link } from 'react-router-dom'

export default class CoctailsList extends Component {
    state = { }

    componentDidMount() {
        request
          .get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
          .then(res=>
            console.log('data for state', res.body))
            // this.setState({keys: Object.keys(res.body.message)}))
          .catch(console.error)
    }

    render(){
        console.log(this.state)
        return <div>
            <h1>Coctails List</h1>
            
            </div>
    }
}
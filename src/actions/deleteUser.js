import $ from 'jquery'
import { browserHistory } from 'react-router'

export default function deleteUser(id){
  return function(dispatch){
    $.ajax({url: `https://your-agora-api.herokuapp.com/users/${id}`,
      type: "DELETE",
      headers: {authorization: localStorage.getItem('jwt')}
    }).done(
      localStorage.removeItem('jwt'),
      browserHistory.push('/')
    )
  }
}

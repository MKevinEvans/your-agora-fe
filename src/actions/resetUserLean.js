import $ from 'jquery'

export default function resetUserLean(){
  return function(dispatch){
    $.ajax({
      url: `https://development-your-agora-api.herokuapp.com/leaning/reset`,
      type: "GET",
      headers: {authorization: localStorage.getItem('jwt')},
      contentType: 'application/json; charset=utf-8',
    })
  }
}

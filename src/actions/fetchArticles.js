import $ from 'jquery'
import { browserHistory } from 'react-router'

export default function fetchArticles(searchTerm, currentUserId){

  return function(dispatch){
    dispatch({type: 'FETCHING_ARTICLES'})
    $.ajax({
      url: `https://your-agora-api.herokuapp.com/fetch_first_article`,
      type: 'POST',
      data: JSON.stringify({search_term: searchTerm, current_user_id: currentUserId }),
      contentType: 'application/json; charset=utf-8',
      dataType: 'json'
    }).done(function(data){
      if (data.error === "RAWR")
        browserHistory.push('/servererror')
      else {
  //NOTE: DATA IS NOW AN ARRAY OF ARTICLES OBJECTS! NO NEED ANYMORE TO CALL .article ON ANYTHING OTHER THAN STASHES
        dispatch({type: 'FETCH_FIRST_ARTICLE', payload: data})
        dispatch({type: 'FETCHED_FIRST_ARTICLE'})
        browserHistory.push('/articles/random/teaser')
        $.ajax({
          url: `https://your-agora-api.herokuapp.com/articles`,
          type: 'POST',
          data: JSON.stringify({search_term: searchTerm, current_user_id: currentUserId }),
          contentType: 'application/json; charset=utf-8',
          dataType: 'json'
        }).done(function(data){
          dispatch({type: 'FETCH_ARTICLES', payload: data})
        })
      }
    })
  }
}

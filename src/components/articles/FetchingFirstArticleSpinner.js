import React, {Component} from 'react'
import { connect } from 'react-redux'

class FetchingFirstArticleSpinner extends Component{


  render(){
	    if(this.props.fetching){
	  		return ( <img role="presentation" id="spinner" src="/images/courier.gif" /> )
		} else {
			return ( <div id="spinner"> </div>)
		}
	}
}


function mapStateToProps(state){
  return {fetching: state.articles.fetching_first_article}
  
}


export default connect(mapStateToProps)(FetchingFirstArticleSpinner)
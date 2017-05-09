import React, {Component} from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component{
	render(){
		if(!this.props.abook){
			return<div> Select a book to get Stated</div>		
		}
		
		return(	
			<div>
			<h3>Details For:</h3>
			<div>Title:{this.props.abook.title}</div>
			<div>Pages:{this.props.abook.pages}</div>

			</div>
		)
	}
}

function mapStateToProps(state){
	return{
		abook:state.activeBook
	}
}


export default connect(mapStateToProps)(BookDetail);
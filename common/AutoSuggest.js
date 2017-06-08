import React, {Component} from 'react';
import TextBoxStyles from './styles/TextBoxStyles.css'
class AutoSuggest extends Component{

	constructor(props){
		super(props);
		this.onSuggestionClick = this.onSuggestionClick.bind(this);
		this.displayTextValue = this.displayTextValue.bind(this);
		this.getSelectedProduct = this.getSelectedProduct.bind(this);
		this.state={
			suggestionvalue : '',
			autoSuggestData : [],
			actualValue : '',
			isSuggestion: true,

		}
	}
	onSuggestionClick(value){
		this.setState({actualValue : value});
		this.setState({isSuggestion : false});
		this.props.onSuggestionsValue(value);
	}
	displayTextValue(e){
		this.state.actualValue = e.target.value;
		this.setState({autoSuggestData : this.props.data.filter(this.getSelectedProduct)});
		this.props.getvalue(e.target.value);
	}
	getSelectedProduct(value, index, array){
		let returnValue = false;
		if(value.productName.includes(this.state.actualValue)){
			returnValue = true;
		}
		return returnValue;
	}
	render(){
		let result, _self=this;
		console.log(this.props.data);
		if(this.state.autoSuggestData.length > 0){
			result = this.state.autoSuggestData.map(function(value){
				return <div key={Math.random()} className="suggest" onClick={_self.onSuggestionClick.bind(_self, value.productName)}>{value.productName}</div>
			});
		}
			let textBox = (
					<div className="autoSuggestionsWrapper">
						<input type="text" id="searchBoxText" 
							   className={TextBoxStyles.searchBoxText} 
							   onChange={this.displayTextValue}
							   value={this.state.actualValue}/>
					<div className={this.state.isSuggestion ? TextBoxStyles.results : TextBoxStyles.noResults}>{result}</div>
					</div>);
			return(textBox);
	}
}

AutoSuggest.propTypes = {
	data: React.PropTypes.array,
	onSuggestionsValue: React.PropTypes.func,
	getvalue: React.PropTypes.func


}

export default AutoSuggest;
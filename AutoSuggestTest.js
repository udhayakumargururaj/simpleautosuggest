import React from 'react';
import AutoSuggest from './common/AutoSuggest';
class AutoSuggestTest extends React.Component{
	constructor(){
		super();
		this.onSuggestionsValue = this.onSuggestionsValue.bind(this);
		this.getvalue = this.getvalue.bind(this);
		this.state={
			data : [{'productName':'java'},
					{'productName':'javascript'},
					{'productName':'php'}]
					
		}
	}
	onSuggestionsValue(value){
		console.log('suggestions');
		console.log(value);
	}
	getvalue(value){
		console.log('getValue');
		console.log(value);	
	}
	render(){
		let component = (<AutoSuggest onSuggestionsValue={this.onSuggestionsValue}
							getvalue={this.getvalue} data={this.state.data}/> );

		return(<div> {component}</div>);

	}

}
export default AutoSuggestTest;
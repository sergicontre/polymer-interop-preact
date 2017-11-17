import { h, Component } from 'preact';
import style from './style.less';

export default class Home extends Component {
	state = {
		text: 'Hello',
		counter : 0
	};
	updateText = e => {
        this.setState({ text: e.target.value });
	};
	handleEvent = e =>{
		this.setState({ counter: this.state.counter + 1 });
	}
    render({ }, { text , counter }) {
		return (
			<div class={style.home}>
				<h1>Preact interop with Polymer</h1>
				<img src="../../assets/logo.png"></img>
				<p>This is the Home component.</p>
				<p>Events from Polymer component: {this.state.counter} </p>
				Type a message here: <input value={text} onInput={this.updateText} />
				<my-poly-component text={this.state.text} onkick={this.handleEvent}></my-poly-component>					
			</div>
		);
	}
}

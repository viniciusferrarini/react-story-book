import React, { Component } from 'react';
import ReclamacaoLista from './components/ReclamacaoLista';
import { Container } from 'react-bootstrap';
import { situation1, situation2 } from './situation/situation';
import AppPresenter from './presenter/AppPresenter';
import Dispatcher from './dispatcher/dispatcher';

class AppView extends Component {

	constructor() {
		super();
		Dispatcher.initPostEventHandler(this._update);
		this.state =  AppPresenter.situation();
	}

	_update() {
		this.setState(AppPresenter.situation());
	}

	componentDidMount() {
		document.addEventListener('keydown', (e) => {
			e = e || window.event;
			if (!e.altKey) return;
			if (e.keyCode === 188) this.alteraSituation(situation1);
			if (e.keyCode === 190) this.alteraSituation(situation2);
		});
	}

	alteraSituation(situation) {
		this.setState(situation);
	}

	render() {
		return ( 
			<Container>
				<section className="conteudo">
					<ReclamacaoLista situation={this.state} />
				</section>
			</Container>
		);
	}
}

export default AppView;
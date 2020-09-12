import Dispatcher from '../dispatcher/dispatcher';
import ReclamacaoRepository from '../repository/ReclamacaoRepository';

class ReclamacaoPresenter {

    constructor() {
        this.state = null;
        this.stateLoading = false;
        Dispatcher.addEventHandler('RECLAMACAO_LIST_ALL', this._onListAll.bind(this));
    }

    _onListAll(event) {
        this.state = event.result;
        this.stateLoading = false;
    }

    situation() {
        if (this.state === null) {
            if (!this.stateLoading) {
                this.stateLoading = true;
                ReclamacaoRepository.listAll();
            }
            return 'CARREGANDO';
        } 
        return this.state;
    }
}
export default ReclamacaoPresenter;
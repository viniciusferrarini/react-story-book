import ReclamacoesPresenter from './ReclamacoesPresenter';

class AppPresenter {

    constructor() {
        this.reclamacoesPresenter = new ReclamacoesPresenter();
    }

    static situation() {
        return { 
            selecaoDoMenu: 'RECLAMACOES',
            reclamacoes: this.reclamacoesPresenter.situation() 
        };
    }

}

export default AppPresenter;
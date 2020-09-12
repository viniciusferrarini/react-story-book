import Dispatcher from '../dispatcher/dispatcher';

class ReclamacaoRepository {

    static listAll() {
        Dispatcher.dispatch({
            type: 'RECLAMACAO_LIST_ALL',
            result: [
                {
                    'titulo': 'Reclamacao 1',
                    'descricao': 'Lorem ipsum dolor sit amet, conse',
                    'foto': 'img/img1.png',
                },
                {
                    'titulo': 'Reclamacao 2',
                    'descricao': 'Lorem ipsum dolor sit amet, conse asdf',
                    'foto': 'img/img2.png',
                }
            ]
        });
    }

}
export default ReclamacaoRepository;
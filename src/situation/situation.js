const Abas = { DASHBOARD: 'DASHBOARD', RECLAMACOES: 'RECLAMACOES', PERFIL: 'PERFIL' };

const situation1 = {
    'selecaoDoMenu': Abas.RECLAMACOES,
    'reclamacoes': [
        {
            'titulo': 'Reclamacao 1',
            'descricao': 'Lorem ipsum dolor sit amet, conse',
            'foto': 'img/img1.png',
        },
        {
            'titulo': 'Reclamacao 2',
            'descricao': 'Lorem ipsum dolor sit amet, conse asdf',
            'foto': 'img/img2.png',
        },
    ]
};

const list = () => {
    let lista = [];
    for (let i = 0; i < 50; i++) {
        lista.push({
            'titulo': `Reclamacao ${i}`,
            'descricao': `Lorem ipsum dolor sit amet, conse ${i}`,
            'foto': 'img/img2.png',
        });
    }
    return lista;
};

const situation2 = {
    'selecaoDoMenu': Abas.DASHBOARD,
    'reclamacoes': list()
};

module.exports = {situation1, situation2}
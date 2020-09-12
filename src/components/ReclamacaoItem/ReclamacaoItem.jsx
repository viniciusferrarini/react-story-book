import React, { Component } from 'react';
import './estilos.css';

class ReclamacaoItem extends Component {
    render() { 
        return (
            <reclamacao-item>
                <img src={this.props.foto} alt={this.props.titulo} />{this.props.titulo}<br/>
                {this.props.descricao}
            </reclamacao-item>
        )
    }
}
export default ReclamacaoItem;
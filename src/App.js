import React from 'react';
import Lista from './componentes/lista';
import AppStyle from './AppStyle';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    item: '',
    marca: '',
    quantidade: '',
    listaDeProdutos: []
    };
  }

  Gravar=()=>{
    let atualizar = this.state.atualizarInput;
    let novosProdutos = this.state.listaDeProdutos;
    novosProdutos.push({});

    this.setState({
      listaDeProdutos: novosProdutos

  });
  }
  componentDidMount(){
    console.log('did mount');
    this.atualizar();
  }

    atualizarInput = event => {
      this.setState({
        [event.target.name]: event.target.value,
      });
    }
  atualizar=()=>{
      console.log('atualizar');
      fetch("http://localhost:5000/produtos").then(resposta => resposta.json()).then(dados => this.setState({listaDeProdutos: dados.produtos})).catch(erro => console.log(`ERRO: ${erro}`));
    }
  render() {
    return (
<div>
      <h1>Lista de Compras</h1>
      <section id="novo">
        <h3>Novo produto:</h3>
        <div>
          <input onChange={this.props.atualizar} value={this.props.atualizarInput} type="text" name='item' placeholder="Nome do produto" />
          <input onChange={this.props.atualizar} value={this.props.atualizarInput} type="text" name='marca' placeholder="Marca (opcional)" />
          <input onChange={this.props.atualizar} value={this.props.atualizarInput} type="number" name='quantidade' placeholder="Quantidade" />
          <button onClick={this.props.Gravar}>Cadastrar</button>
        </div>
      </section>
      <Lista lista={this.state.listaDeProdutos}/>
</div>
);
  }
}

export default App;

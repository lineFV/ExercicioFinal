import React from 'react';


class lista extends React.Component {
  render() {
    return (
      <section id="lista">
      {this.props.lista.map((item, indice) => {
      return(
        <p key={indice}>{item}</p>
      );
    })}
      </section>
);
  }
}

export default lista;

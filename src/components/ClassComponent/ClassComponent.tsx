import React from 'react';

class ClassComponent extends React.Component<{ name: string }> {
  //para componente basedo em classe funcionar com esatdo, base inserir o metodo state
  state = {
    name: 'Mundo!!!',
  };
  render() {
    return (
      <div>
        <p>name: {this.state.name}</p>
        <button
          onClick={() => {
            this.setState({ name: 'Ricardo' });
          }}
        >
          Clique aqui
        </button>
      </div>
    );
  }
}

export default ClassComponent;

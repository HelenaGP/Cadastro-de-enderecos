import { useState, useEffect } from "react";

import { api } from './services/api.js'

import { Button } from './components/Button'

import './Home.css'

export function Home() {
  const [userName, setUserName] = useState('');
  const [nickname, setNickname] = useState('');

  const [cep, setCep] = useState('');
  const [uf, setUf] = useState('');
  const [city, setCity] = useState('');
  const [adress, setAdress] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [homeNumber, setHomeNumber] = useState('');
  const [complement, setComplement] = useState('');


  const [userList, setUserList] = useState<{ userName: string; cep: string; newAdress: boolean }[]>([]);

  const [newAdress, setNewAdress] = useState(Boolean)

  const saveData = (event:any) => {
    event.preventDefault()
    if (validateName() && validateNickName() && validateCep() && validateUf() && validateCity() && validateAdress() && validateNeighborhood() && validateHomeNumber() && validateComplement()) {
      const newData = {userName, cep, newAdress};
      setUserList([...userList, newData]);
      clearFields();
    } else {
      alert('Formulário não foi salvo, por favor, verifique os campos.');
      if(!validateCep()) {
        alert('Verifique o campo CEP, preenchimento obrigatório com apenas números no formato "XXXXX-XXX"')
      }
    }
  };

  function validateName() {
    const input = userName;
    if (input !== "") {
      let regex = /^[a-zA-Z0-9À-ÖØ-öø-ÿ\s]+$/;
      if (regex.test(input)) {
        return true
      }
      else {

        alert('Nome cadastrado inválido. Digite apenas números e letras.')
        return false
      }
    }
    else {
      alert('Nome não preenchido. Campo obrigatório.')
      return false
    }
  }

  function validateNickName() {
    const input = nickname;
    let regex = /^[a-zA-Z0-9À-ÖØ-öø-ÿ\s]+$/;
    if (regex.test(input) || input == "") {
      return true
    }
    else {
      alert('Apelido cadastrado inválido. Digite apenas números e letras.')
      return false
    }
  }

  function validateCep() {
    const input = cep;
    if (input !== "") {
      let regex = /^\d{5}-\d{3}$/;
      if (regex.test(input)) {
        return true
      }
      else {
        return false
      }
    }
    else {
    return false
    }
  }

  function validateUf() {
    const input = uf;
    if (input !== "") {
      let regex = /^[A-Za-z]{2}$/;
      if (regex.test(input)) {
        return true
      }
      else {
        alert('UF cadastrado inválido. Digite apenas duas letras.')
        return false
      }
    }
    else {
      alert('UF não preenchido. Campo obrigatório.')
      return false
    }
  }

  function validateCity() {
    const input = city;
    if (input !== "") {
      let regex = /^[a-zA-Z0-9À-ÖØ-öø-ÿ\s]+$/;
      if (regex.test(input)) {
        return true
      }
      else {
        alert('Cidade cadastrada inválida. Digite apenas números e letras.')
        return false
      }
    }
    else {
      alert('Cidade não preenchida. Campo obrigatório.')
      return false
    }
  }

  function validateAdress() {
    const input = adress;
    if (input !== "") {
      let regex = /^[a-zA-Z0-9À-ÖØ-öø-ÿ\s]+$/;
      if (regex.test(input)) {
        return true
      }
      else {
        alert('Logradouro cadastrado inválido. Digite apenas números e letras.')
        return false
      }
    }
    else {
      alert('Logradouro não preenchido. Campo obrigatório.')
      return false
    }
  }

  function validateNeighborhood() {
    const input = neighborhood;
    if (input !== "") {
      let regex = /^[a-zA-Z0-9À-ÖØ-öø-ÿ\s]+$/;
      if (regex.test(input)) {
        return true
      }
      else {
        alert('Bairro cadastrado inválido. Digite apenas números e letras.')
        return false
      }
    }
    else {
      alert('Bairro não preenchido. Campo obrigatório')
      return false
    }
  }

  function validateHomeNumber() {
    const input = homeNumber;
    if (input !== "") {
      let regex = /^[0-9\s]+$/;
      if (regex.test(input)) {
        return true
      }
      else {
        alert('Número cadastrado inválido. Digite apenas números')
        return false
      }
    }
    else {
      alert('Número não preenchido. Campo obrigatório')
      return false
    }
  }

  function validateComplement() {
    const input = complement;
    if (input !== "") {
      let regex = /^[a-zA-Z0-9À-ÖØ-öø-ÿ\s]+$/;
      if (regex.test(input)) {
        return true
      }
      else {
        alert('Complemento cadastrado inválido. Digite apenas números e letras.')
        return false
      }
    }
    else {
      alert('Complemento obrigatório, caso não tenha, digite NA')
      return false
    }
  }

  function clearFields() {
    setUserName('')
    setNickname('')
    setCep('')
    setUf('')
    setCity('')
    setAdress('')
    setNeighborhood('')
    setHomeNumber('')
    setComplement('')
  }

  useEffect(() => {
    const fetchCEP = async () => {
      if (validateCep()) {
        try {
          const response = await api.get(`/${cep}/json/`);
          const result = await response.data;
          if (result.erro) {
            console.log(result.erro)
            setNewAdress(true)
          }
          else {
            setNewAdress(false)
            setNeighborhood(result.bairro)
            setCity(result.localidade)
            setAdress(result.logradouro)
            setUf(result.uf)
          }
        } catch (error) {
          console.error('Erro:', error);
        }
      }
    };
    fetchCEP();
  }, [cep]);


  return (
    <div className="main">
      <div className="content">
        <div className="texts">
          <h1> Cadastro de endereços </h1>
          <p>Preencha o formulário para cadastrar os endereços:</p>
        </div>
        <form>
          <div className="input-wrapper">
            <label htmlFor="fullName">Nome completo*:</label>
            <input
              id="fullName"
              type="text"
              value={userName}
              onChange={e => setUserName(e.target.value)} />
          </div>

          <div className="input-wrapper">
            <label htmlFor="nickname">Apelido:</label>
            <input
              id="nickname"
              type="text"
              value={nickname}
              onChange={e => setNickname(e.target.value)} />
          </div>

          <div className="input-wrapper">
            <label htmlFor="cep">CEP*:</label>
            <input
              id="cep"
              type="text"
              maxLength={9}
              value={cep}
              onChange={e => setCep(e.target.value)}
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="uf">UF*:</label>
            <input
              id="uf"
              type="text"
              maxLength={2}
              value={uf}
              onChange={e => setUf(e.target.value)} />
          </div>

          <div className="input-wrapper">
            <label htmlFor="city">Cidade*:</label>
            <input
              id="city"
              type="text"
              value={city}
              onChange={e => setCity(e.target.value)} />
          </div>

          <div className="input-wrapper">
            <label htmlFor="adress">Logradouro*:</label>
            <input
              id="adress"
              type="text"
              value={adress}
              onChange={e => setAdress(e.target.value)} />
          </div>

          <div className="input-wrapper">
            <label htmlFor="neighborhood">Bairro*:</label>
            <input
              id="neighborhood"
              type="text"
              value={neighborhood}
              onChange={e => setNeighborhood(e.target.value)} />
          </div>

          <div className="input-wrapper">
            <label htmlFor="homeNumber">Número*:</label>
            <input
              id="homeNumber"
              type="text"
              value={homeNumber}
              onChange={e => setHomeNumber(e.target.value)} />
          </div>

          <div className="input-wrapper">
            <label htmlFor="complement">Complemento*:</label>
            <input
              id="complement"
              type="text"
              value={complement}
              onChange={e => setComplement(e.target.value)} />
          </div>

          <Button onClick={saveData}></Button>
        </form>
        <h2>Endereços Cadastrados</h2>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>CEP</th>
              <th>Novo endereço</th>
            </tr>
          </thead>
          <tbody>
          {userList.map((userData, index) => (
              <tr key={index}>
                <td>{userData.userName}</td>
                <td>{userData.cep}</td>
                <td>{userData.newAdress ? 'Sim' : 'Não'}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <footer>
          <a href="https://www.linkedin.com/in/helenagpasseti" target="_blank">LinkedIn: @helenagpasseti</a>
          </footer>
      </div>
    </div>

  )

}



import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Input from './components/Input'
import Button from './components/Button'
import api from '../api'

const FormPage = props => {

  const [form, setForm] = useState({id:'',title:'',author:''})

   // Pegar os dados de cada input no formulário
  const handleChange = (e) => {
    const {name, value} = e.target;
    setForm({...form, [name]: value })
  }


  // enviar um livro para o servidor, e, pegar a atualizacao
  const handleSubmit = (e) => {
    e.preventDefault();
    api.post("/books", form )
      .then(res => {
        console.log(res)
        // limpa formulario
        setForm({id:'',title:'',author:''})
       
      })
      .catch(err => console.log(err))
    
  }

  return (
    <div>
        <h1>FormPage</h1>
        <form>
        <Input id="id" label="ID" name="id"
         value={form.id} onChange={handleChange} />
        <Input id="title" label="Title" name="title"
         value={form.title} onChange={handleChange} />
        <Input id="author" label="Author" name="author"
         value={form.author} onChange={handleChange} />

          {/* Aqui não se passa nenhum parametro. Então posso chamar direto. Obs: evento (e) não é parâemtro
          obrigatório */}

        <Button onClick={handleSubmit}>
          <h2>Submit</h2>
        </Button>
      </form>

    </div>
  )
}

FormPage.propTypes = {}

export default FormPage
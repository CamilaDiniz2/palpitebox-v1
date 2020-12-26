import React, { useState } from 'react';
import { FaSave, FaSpinner } from 'react-icons/fa';
import PageTitle from '../components/PageTitle';

const Pesquisa = () => {
  const [form, setForm] = useState({
    Nome: '',
    Email: '',
    Whatsapp: '',
    Nota: '',
    Opiniao: '',
  });

  const notas = [0, 1, 2, 3, 4, 5];
  const camposPesquisa = Object.keys(form);
  camposPesquisa.pop();
  let flagCamposNaoPreenchidos = false;

  const [sucess, setSucess] = useState(false);
  const [retorno, setRetorno] = useState({});
  const [saveButton, SetSaveButton] = useState(false);

  const save = async () => {
    let camposSemPreenchimento = '';
    camposPesquisa.map((campo) => {
      if (form[campo] === '') {
        flagCamposNaoPreenchidos = true;
        camposSemPreenchimento += `${campo} \n`;
      }
    });

    if (flagCamposNaoPreenchidos == true) {
      alert(
        `Você ainda não preencheu os seguintes campos: \n${camposSemPreenchimento}`
      );
      return;
    } else {
      try {
        SetSaveButton(true);
        const response = await fetch('/api/save', {
          method: 'POST',
          body: JSON.stringify(form),
        });

        const data = await response.json();

        setSucess(true);
        setRetorno(data);
      } catch (err) {}
    }
  };

  const onChange = (evt) => {
    const value = evt.target.value;
    const key = evt.target.name;
    setForm((old) => ({
      ...old,
      [key]: value,
    }));
  };
  return (
    <div className="pt-6">
      <PageTitle title="Pesquisa" />
      <h1 className="text-center text-3xl font-bold my-8">
        Críticas e sugestões
      </h1>
      <p className="w-10/12 text-center mb-6 mx-2 text-lg text-gray-900 font-medium mx-auto">
        O restaurante X sempre busca por atender melhor seus clientes. <br />
        Por isso, estamos sempre abertos a ouvir a sua opinião.
      </p>

      {!sucess && (
        <div className="flex flex-col items-start mx-auto my-6 w-4/5 lg:w-4/12 lg:justify-start">
          <label for="nome" className="font-bold mt-6 font-family: Roboto">
            Nome*
          </label>
          <input
            id="nome"
            type="text"
            placeholder="Nome"
            name="Nome"
            onChange={onChange}
            value={form.Nome}
            className="px-4 py-4 block bg-yellow-100 placeholder-gray-500 opacity-70 rounded-md w-full my-2 focus:outline-none focus:shadow-lg focus:opacity-100 focus:bg-yellow-200 focus:placeholder-gray-700 lg:w-full"
          />

          <label for="email" className="font-bold mt-6 font-family: Roboto">
            E-mail*
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            name="Email"
            onChange={onChange}
            value={form.Email}
            className="px-4 py-4 block bg-yellow-100 placeholder-gray-500 opacity-70 rounded-md w-full my-2 focus:outline-none focus:shadow-lg focus:opacity-100 focus:bg-yellow-200 focus:placeholder-gray-700 lg:w-full"
          />

          <label for="whatsapp" className="font-bold mt-6 font-family: Roboto">
            Whatsapp*
          </label>
          <input
            id="whatsapp"
            type="text"
            placeholder="Whatsapp"
            name="Whatsapp"
            onChange={onChange}
            value={form.Whatsapp}
            className="px-4 py-4 block bg-yellow-100 placeholder-gray-500 opacity-70 
            rounded-md w-full my-2 focus:outline-none focus:shadow-lg focus:opacity-100 
            focus:bg-yellow-200 focus:placeholder-gray-700 lg:w-full"
          />

          <label for="criticas" className="font-bold mt-6 font-family: Roboto">
            Críticas e sugestões de melhoria:
          </label>
          <textarea
            id="criticas"
            type="text"
            placeholder="Dê sua opinão ..."
            name="Opiniao"
            onChange={onChange}
            value={form.Opiniao}
            className="px-4 py-4 block bg-yellow-100 placeholder-gray-500 opacity-70 
            rounded-md w-full my-2 focus:outline-none focus:shadow-lg focus:opacity-100 
            focus:bg-yellow-200 focus:placeholder-gray-900 lg:w-full"
          />

          <label className="font-bold mt-6 mb-4 font-family: Roboto">
            Nota*
          </label>
          <div className="flex justify-center mx-auto flex-wrap bg-yellow-100 opacity-70">
            {notas.map((nota) => {
              return (
                <label
                  className="flex flex-col w-1/6 px-6 py-4 text-gray-900 font-bold
                  text-center mx-auto md:px-8"
                >
                  {nota}
                  <input
                    className="text-center"
                    type="radio"
                    name="Nota"
                    value={nota}
                    onChange={onChange}
                  />
                </label>
              );
            })}
          </div>
          <p className="my-4 text-left text-sm text-gray-700">
            Os campos com * são de preenchimento obrigatório
          </p>

          <button
            onClick={save}
            className=" flex flex-row justify-center items-center bg-yellow-500 
            text-center font-bold text-white outline-none tracking-wide uppercase 
            w-4/5 py-3 mt-8 mx-auto rounded-md mb-4 hover:bg-yellow-600
            hover:shadow-lg focus:outline-none lg:w-3/5"
          >
            {!saveButton && (
              <div className="flex items-center justify-evenly">
                <FaSave className="mr-4"></FaSave>
                <span>Salvar</span>
              </div>
            )}
            {saveButton && (
              <div className="flex items-center justify-evenly">
                <svg class="animate-spin h-5 w-5 mr-4" viewBox="0 0 24 24">
                  <FaSpinner></FaSpinner>
                </svg>
                <span>Salvando</span>
              </div>
            )}
          </button>
        </div>
      )}

      {sucess && (
        <div className="flex flex-col items-start mx-auto my-6 w-4/5 lg:w-6/12 lg:justify-start">
          <p
            className="text-center text-gray-900 font-medium mb-8 mx-2 
          p-4 w-4/5 mx-auto bg-gray-200 border-t-4 border-b-4 border-yellow-500 md:w-3/5"
          >
            Obrigado por contribuir com sua sugestão ou crítica.
          </p>
          {retorno.showCoupon && (
            <div
              className="w-full mx-auto text-center text-white text-2xl mt-4 px-2 
            py-6 bg-gray-600 border-2 border-dashed border-white rounded md:w-4/6"
            >
              Seu cupom é: <br />
              <span className="font-bold text-2xl">{retorno.Cupom}</span>
            </div>
          )}
          {retorno.showCoupon && (
            <div className="mt-12 mb-8 bg-gray-300 mx-auto text-center p-4">
              <span
                className="font-bold text-black text-lg text-center w-full
              block mb-2 pb-2 mx-auto border-b-2 border-gray-600"
              >
                {retorno.Promo}
              </span>
              <br />
              <span className="font-medium text-md italic">
                Tire um print ou foto desta tela e apresente ao garçom.
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Pesquisa;

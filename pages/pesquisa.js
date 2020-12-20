import React, { useState } from 'react';
import PageTitle from '../components/PageTitle';

const Pesquisa = () => {
  const [form, setForm] = useState({
    Nome: '',
    Email: '',
    Whatsapp: '',
    Nota: '',
  });

  const notas = [0, 1, 2, 3, 4, 5];
  const camposPesquisa = ['Nome', 'Email', 'Whatsapp', 'Nota'];
  let flagCamposPrenechidos = false;

  const [sucess, setSucess] = useState(false);
  const [retorno, setRetorno] = useState({});

  const save = async () => {
    let camposSemPreenchimento = [];
    camposPesquisa.map((campo) => {
      if (form[campo] === '') {
        flagCamposPrenechidos = true;
        camposSemPreenchimento.push(campo);
      }
    });
    if (flagCamposPrenechidos == true) {
      alert(
        `Você ainda precisa preencher os seguintes dados: ${camposSemPreenchimento}`
      );

      return;
    } else {
      try {
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
          <label className="font-bold mt-6 font-family: Roboto">Nome:</label>
          <input
            type="text"
            placeholder="Nome"
            name="Nome"
            onChange={onChange}
            value={form.Nome}
            className="px-4 py-4 block bg-yellow-100 placeholder-gray-500 opacity-70 rounded-md w-full my-2 focus:outline-none focus:shadow-lg focus:opacity-100 focus:bg-yellow-200 focus:placeholder-gray-700 lg:w-full"
          />

          <label className="font-bold mt-6 font-family: Roboto">E-mail:</label>
          <input
            type="email"
            placeholder="Email"
            name="Email"
            onChange={onChange}
            value={form.Email}
            className="px-4 py-4 block bg-yellow-100 placeholder-gray-500 opacity-70 rounded-md w-full my-2 focus:outline-none focus:shadow-lg focus:opacity-100 focus:bg-yellow-200 focus:placeholder-gray-700 lg:w-full"
          />

          <label className="font-bold mt-6 font-family: Roboto">
            Whatsapp:
          </label>
          <input
            type="text"
            placeholder="Whatsapp"
            name="Whatsapp"
            onChange={onChange}
            value={form.Whatsapp}
            className="px-4 py-4 block bg-yellow-100 placeholder-gray-500 opacity-70 
            rounded-md w-full my-2 focus:outline-none focus:shadow-lg focus:opacity-100 
            focus:bg-yellow-200 focus:placeholder-gray-700 lg:w-full"
          />

          <label className="font-bold mt-6 mb-4 font-family: Roboto">
            Nota:
          </label>
          <div className="flex justify-center mx-auto flex-wrap">
            {notas.map((nota) => {
              return (
                <label
                  className="flex flex-col w-1/6 px-6 py-2 text-gray-900 
                font-bold text-center mx-auto md:px-8"
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

          <button
            onClick={save}
            className="bg-yellow-500 text-center font-bold text-white 
            tracking-wide uppercase w-4/5 py-3 mt-8 mx-auto rounded-md mb-4 
            hover:bg-yellow-600 hover:shadow-lg lg:w-3/5"
          >
            Salvar
          </button>
        </div>
      )}

      {sucess && (
        <div className="flex flex-col items-start mx-auto my-6 w-4/5 lg:w-6/12 lg:justify-start">
          <p
            className="text-center text-gray-900 font-medium mb-8 mx-2 
          bg-yellow-200 p-4 w-4/5 mx-auto border-t-4 border-yellow-600 border-b-4"
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

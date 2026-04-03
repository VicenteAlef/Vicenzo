const Footer: React.FC = () => {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }
  return (
    <footer className="w-full min-h-20 bg-gray-200 px-[5%] py-10 ">
      <div className=" grid md:grid-cols-2 gap-5">
        <div>
          <div className="text-sm uppercase font-playfair mb-2">Newsletter</div>
          <div className="mb-2">
            Inscreva-se e receba e-mails com as ultimas notícias da Vicenzo,
            incluindo lançamentos e novas coleções.
          </div>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Seu e-mail"
              className="border border-gray-400 p-3 rounded-sm"
            />
            <button
              type="submit"
              className=" p-3 bg-gray-800 text-white rounded-sm ml-2"
            >
              Confirmar
            </button>
          </form>
        </div>
        <div className="grid grid-cols-2">
          <div>
            <div className="text-sm uppercase font-playfair mb-2">
              Siga Vicenzo
            </div>
            <ul>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">X</a>
              </li>
              <li>
                <a href="#">LinkedIn</a>
              </li>
            </ul>
          </div>
          <div>
            <div className="text-sm uppercase font-playfair mb-2">
              Institucional
            </div>
            <ul>
              <li>
                <a href="#">Sobre Nós</a>
              </li>
              <li>
                <a href="#">Nossas Lojas</a>
              </li>
              <li>
                <a href="#">Ultimas notícias</a>
              </li>
              <li>
                <a href="#">Desfiles</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center font-playfair uppercase text-3xl py-10">
        Vicenzo
      </div>
      <div className="w-full flex justify-center ">
        <a
          href="https://vicentedeveloper.com"
          target="_blank"
          className="text-sm text-gray-600"
        >
          Vicente Dev - 2026
        </a>
      </div>
    </footer>
  );
};

export default Footer;

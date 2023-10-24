const index__input = document.querySelector('.index__input');
const index__button = document.querySelector('.index__button');

const recebendoValor = () => {
    const pesquisando = async () => {
        const usuario = index__input.value

        try {
            const respostaUsuario = await fetch(`https://api.github.com/users/${usuario}`);
            const respostaReposUsuario = await fetch(`https://api.github.com/users/${usuario}/repos`);


            if (!respostaUsuario.ok) {
                window.location.replace("http://127.0.0.1:5500/src/pages/error.html")
            } else {
                const dadosUsuario = await respostaUsuario.json();
                const dadosReposUsuario = await respostaReposUsuario.json();

                localStorage.setItem('userData', JSON.stringify(dadosUsuario))
                localStorage.setItem('reposUserData', JSON.stringify(dadosReposUsuario))

                window.location.replace("http://127.0.0.1:5500/src/pages/profile.html")
            }

        } catch (erro) {
            console.error(erro);
            throw new Error('Erro ao buscar os dados do usuário.');
        }
    };

    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        pesquisando();
    });

    index__button.addEventListener('click', pesquisando);
};

recebendoValor();
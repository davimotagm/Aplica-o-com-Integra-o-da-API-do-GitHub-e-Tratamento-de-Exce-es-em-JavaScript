const alterandoValores = async () => {
    const profile__image = document.querySelector('.profile__image');
    const profile__username = document.querySelector('.profile__username');
    const profile__repos = document.querySelector('.profile__ul');

    const dadosUsuario = JSON.parse(localStorage.getItem('userData'))
    const dadosReposUsuario = JSON.parse(localStorage.getItem('reposUserData'))

    profile__username.innerText = `${dadosUsuario.name}`
    profile__image.src = `${dadosUsuario.avatar_url}`

    dadosReposUsuario.forEach(repos => {
        profile__repos.insertAdjacentHTML("beforeend", 
        `<li>
          <h4>${repos.name}</h4>
          <p>
          ${repos.description}
          </p>
          <a href="${repos.html_url}" target="_blank">Repositório</a>
        </li>`
        )
    });
    console.log(dadosReposUsuario)
}


const trocarUsuario = () => {
    const voltarInicio = document.querySelector('.profile__change-user--button');
    voltarInicio.addEventListener(('click'), () => {
        window.location.replace('http://127.0.0.1:5500/')
    })
}

alterandoValores();
trocarUsuario();



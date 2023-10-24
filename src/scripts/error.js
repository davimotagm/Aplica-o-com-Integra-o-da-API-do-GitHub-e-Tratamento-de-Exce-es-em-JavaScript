const novaBusca = () => {
    const voltarInicio = document.querySelector('.new-search__button');

    voltarInicio.addEventListener(('click'), () => {
        window.location.replace('http://127.0.0.1:5500/')
    })
}

novaBusca();
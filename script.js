document.addEventListener('DOMContentLoaded', () =>{
    let SearchWrapper = document.querySelector('.search__wrapper');

        // open search
    document.querySelector('.header-search__btn').addEventListener('click', function(){
        SearchWrapper.classList.add('is-active');
    });

    // close search
    document.querySelector('.search__colse').addEventListener('click', function(){
        SearchWrapper.classList.remove('is-active');
    });
})
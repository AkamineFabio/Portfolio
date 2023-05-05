
const form = document.getElementById('searchform');
const tvshowsContainer = document.querySelector('.tvshows__container');
let showName = '';

form.addEventListener('submit', async function(e){
    e.preventDefault();
    const searchTerm = form.elements.query.value; /* get the value input */
    showName = form.elements.query.value;
    const config = {params :{q:searchTerm}}; 
    const res = await axios.get(`https://api.tvmaze.com/search/shows` , config); /* use the input value to complete the research link */
    makeList(res.data);
    form.elements.query.value = '';
});

const makeImages = (shows) =>{
    for(let tvshow of shows){
        if(tvshow.show.image){
            const img = document.createElement('IMG');
            img.src = tvshow.show.image.medium;
            document.body.append(img);
        }
    }
}

const makeList = (arrayshows) =>{
    const containerShows =  document.createElement('DIV');
    containerShows.classList.add('show');
    tvshowsContainer.append(containerShows);
    console.log(containerShows);
    
    const showTitle = document.createElement('H1');
    showTitle.classList.add('show__title');
    showTitle.innerText = 'Shows with: ' + showName;
    containerShows.appendChild(showTitle);

    const showList = document.createElement('UL');
    showList.classList.add('show__list');
    showList.classList.add('flex');
    containerShows.appendChild(showList);


    for(let tvshow of arrayshows){
        const showLi = document.createElement('LI');
        showLi.classList.add('show__item');
        showList.append(showLi);

        if(tvshow.show.image){
            const img = document.createElement('IMG');
            img.src = tvshow.show.image.medium;
            showLi.append(img);
        }

        const itemTitle = document.createElement('H2');
        console.log(tvshow.show.name);
        itemTitle.innerText = tvshow.show.name;
        showLi.append(itemTitle);

        const score = document.createElement('P');
        score.innerText = 'Score: ' + parseFloat(tvshow.score * 10).toFixed(2);
        console.log(score);
        showLi.append(score);
    }
}

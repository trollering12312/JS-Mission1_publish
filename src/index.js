console.log('working!');

function getInput() {

    const title = document.getElementById('search_bar').value;

    if (title) {

        const url_base = 'https://www.omdbapi.com/?apikey=7035c60c';

        const url = url_base + '&s=' + title;
        getData(url);
    } else {
        alert("invalid input!")
    }
}

function getData(url) {
    //loading 관련
    const loading = '<div id="load">Loading...</div>';
    document.getElementById("result").innerHTML = loading;
    //API 
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            document.getElementById("result").innerHTML = '';

            if (data.Response == 'True') {
                for(const movie of data.Search){
                    document.getElementById("result").innerHTML += (
                        '<p>' + movie.Title + '</p>'
                        + '<img class="poster" src=' + movie.Poster + ' alt="[No Poster for this Movie...]" />'
                        +'<br>');
                }
            } else {
                alert("error:" + data.Error);
            }
        })
        .then(() => {
            const io = new IntersectionObserver((entries, observer) => {
                entries.forEach((entry) => {
                  if(entry.isIntersecting){
                    entry.target.classList.add('visible');
                  } else {
                    entry.target.classList.remove('visible');
                  }
                });                            
              });
              
              document.querySelectorAll('.poster').forEach((poster) => io.observe(poster));

        })
        .catch((error) => alert('error:' + error));
}

window.getInput = getInput;

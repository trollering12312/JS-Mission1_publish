window.getInput=function(){const e=document.getElementById("search_bar").value;var t;e?(t="https://www.omdbapi.com/?apikey=7035c60c&s="+e,document.getElementById("result").innerHTML='<div id="load">Loading...</div>',fetch(t).then((e=>e.json())).then((e=>{if(document.getElementById("result").innerHTML="","True"==e.Response)for(const t of e.Search)document.getElementById("result").innerHTML+="<p>"+t.Title+'</p><img class="poster" src='+t.Poster+' alt="[No Poster for this Movie...]" /><br>';else alert("error:"+e.Error)})).then((()=>{const e=new IntersectionObserver(((e,t)=>{e.forEach((e=>{e.isIntersecting?e.target.classList.add("visible"):e.target.classList.remove("visible")}))}));document.querySelectorAll(".poster").forEach((t=>e.observe(t)))})).catch((e=>alert("error:"+e)))):alert("invalid input!")};
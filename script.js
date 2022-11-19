const titlePage = 'titlePage';
const tableAnalytics = 'tableAnalytics';
const btnSearch = 'btnSearch';
const searchTeam = 'searchTeam';

// Create var teamSearch | Verify "input empty" 
function searchResult() {
  var teamSearch = document.getElementById('searchTeam').value;

  if (teamSearch == "") {
    document.getElementById(titlePage).innerHTML = 'Por favor digite o nome de um time!';
    return true;
  }
  else {
    // show Analylics
    document.getElementById(tableAnalytics).style = "display:show";
    document.getElementById(btnSearch).style = "display:none";
    document.getElementById(searchTeam).style = "display:none";
    document.getElementById(titlePage).innerHTML = 'Aqui os resultados para o ' + teamSearch;
    console.log(teamSearch);
  }
};

// Function for Search when press key "Enter"
document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    searchResult();
  }
});

  //    window.location = 'index.html?search=' + teamSearch.value;

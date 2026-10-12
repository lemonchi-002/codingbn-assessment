const searchInput = document.getElementById("search");
const rows = document.querySelectorAll("#sRows tr");

searchInput.addEventListener("input", function(){
    const searchText = searchInput.value.toLowerCase();

    rows.forEach(function(row){
        const name = row.cells[0].textContent.toLowerCase();
        row.hidden = !name.includes(searchText);
    });
});
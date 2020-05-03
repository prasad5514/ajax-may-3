// function ajax()
// {
//     //creating an XHR object

// }      
function CreateTableFromJSON() {
    var xhttp=new XMLHttpRequest();
//eventlistener
xhttp.onreadystatechange=function()
{
    //condition
    if(this.readyState==4&&this.status==200)
    {
        //document.getElementById("demo").innerHTML=this.responseText;
        var response=JSON.parse(this.responseText);//responseText holding content from people.json   
        //console.log(response);
        var myBooks=response.myBookss;//. operater to access the array
        //console.log(jpeople);
        // var output="";
        // for(var i=0;i<jpeople.length;i++)
        // {
        //     output+="<li>"+jpeople[i].name;+"</li>"
        // }
        // //console.log(output);
        // document.getElementById("demo").innerHTML=output;
        var col = [];
    for (var i = 0; i < myBooks.length; i++) {
        for (var key in myBooks[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }

    // CREATE DYNAMIC TABLE.
    var table = document.createElement("table");

    // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

    var tr = table.insertRow(-1);                   // TABLE ROW.

    for (var i = 0; i < col.length; i++) {
        var th = document.createElement("th");      // TABLE HEADER.
        th.innerHTML = col[i];
        tr.appendChild(th);
    }

    // ADD JSON DATA TO THE TABLE AS ROWS.
    for (var i = 0; i < myBooks.length; i++) {

        tr = table.insertRow(-1);

        for (var j = 0; j < col.length; j++) {
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = myBooks[i][col[j]];
        }
    }

    // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
    var divContainer = document.getElementById("showData");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
}

    }

xhttp.open("GET","test2.json",true);//april27ajax.txt/april26json.json,three object in an array
xhttp.send(); 
}
    // var myBooks = [
        
    // ]

    // EXTRACT VALUE FOR HTML HEADER. 
    // ('Book ID', 'Book Name', 'Category' and 'Price')
    
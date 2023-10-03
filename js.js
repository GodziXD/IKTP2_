function validateForm() 
{
    let x = document.forms["urlap"]["nev"].value;
    if (x == "")
    {    
        alert("A 'Név' mezőt muszáj kitöltened!");
        return false;
    }
}
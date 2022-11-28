function validate()
{
    var n = document.getElementById("validate").value;
    n=parseInt(n);
    if(isNaN(n)==false)
    {
        if(n<1 || n>10)
        {
        alert("number should be between 1-10");
        document.getElementById("validate");
        document.getElementById("validate").focus();
        document.getElementById("validate").select();
        }
    else{
        alert("Thank you");
    }
}

else{
    alert("Not a range in number")
    document.getElementById("validate").focus();
    document.getElementById("validate").select();

}
}
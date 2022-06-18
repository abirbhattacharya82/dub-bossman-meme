function change()
{
    fetch('https://dub-bossman-meme.herokuapp.com').then(
        (arr)=>{
            arr.json().then(
                (res)=>{
                    const image=document.getElementById('image');
                    var link=res["img"];
                    image.setAttribute("src",link);
                }
            )
        }
    )
}
function copy()
{
    var copyText = document.getElementById("url").innerHTML;
    navigator.clipboard.writeText(copyText.value);
}
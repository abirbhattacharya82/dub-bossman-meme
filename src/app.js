function change()
{
    fetch('https://dub-bossman-meme.herokuapp.com/dub').then(
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
function sayiUret(ustLimit = 49)
{
    return Math.ceil(Math.random() * ustLimit)
}
for(var kolon = 1; kolon <= 8; kolon++)
{
    console.log("Kolon : " + kolon)
    for(var i = 1; i <= 6; i++)
    {
        console.log(sayiUret())
    }
}


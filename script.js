function TenxTen()
{
    for(i=0; i < 10; i++) 
    {
    const container = document.querySelector('#Box4');
    const Row = document.createElement('div');
    Row.id = 'r' + i;
    Row.classList.add('Row');
    container.appendChild(Row)
        for(j=0; j < 10; j++)
        {
        const rcontainer = document.querySelector(`#r${i}.Row`);
        const Col = document.createElement('div');
        Col.classList.add('Col');
        rcontainer.appendChild(Col)
        } 
    }
}

TenxTen()

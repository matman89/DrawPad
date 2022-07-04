function TenxTen()
{
    for(i=0; i < 10; i++) 
    {
    const container = document.querySelector('#Box4');
    const Row10 = document.createElement('div');
    Row10.id = 'r' + i;
    Row10.classList.add('Row10');
    container.appendChild(Row10)
        for(j=0; j < 10; j++)
        {
        const rcontainer = document.querySelector(`#r${i}.Row10`);
        const Col10 = document.createElement('div');
        Col10.classList.add('Col10');
        rcontainer.appendChild(Col10)
        } 
    }
}


function TwentyxTwenty()
{
    for(i=0; i < 20; i++) 
    {
    const container = document.querySelector('#Box4');
    const Row20 = document.createElement('div');
    Row20.id = 'r' + i;
    Row20.classList.add('Row20');
    container.appendChild(Row20)
        for(j=0; j < 20; j++)
        {
        const rcontainer = document.querySelector(`#r${i}.Row20`);
        const Col20 = document.createElement('div');
        Col20.classList.add('Col20');
        rcontainer.appendChild(Col20)
        } 
    }
}

function ThirtyxThirty()
{
    for(i=0; i < 30; i++) 
    {
    const container = document.querySelector('#Box4');
    const Row30 = document.createElement('div');
    Row30.id = 'r' + i;
    Row30.classList.add('Row30');
    container.appendChild(Row30)
        for(j=0; j < 30; j++)
        {
        const rcontainer = document.querySelector(`#r${i}.Row30`);
        const Col30 = document.createElement('div');
        Col30.classList.add('Col30');
        rcontainer.appendChild(Col30)
        } 
    }
}

ThirtyxThirty()



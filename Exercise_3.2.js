const getDivisors = num =>
{
    const divs=[];
    for(let i=1;i<=Math.sqrt(num);++i) 
    {
        if (i*i===num) divs.push(i);
        else if (num%i===0) divs.push(i,num/i);
    }
    return divs.sort((first, second) => first - second);
};

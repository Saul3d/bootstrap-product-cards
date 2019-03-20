const products = [
    {
        title: 'product 1',
        description: 'blah blah, blah', 
        imageUrl: 'https://r.hswstatic.com/w_907/gif/tesla-cat.jpg',
        size: '4" x 4"',
        weight: '8oz',
        price1:'$1.99',
        price2:'$1.49',
        price3:'$0.99',
        validUntil: '04/01/2016'
    },
    {
        title: 'product 2',
        description: 'blah blah, blah', 
        imageUrl: 'https://r.hswstatic.com/w_907/gif/tesla-cat.jpg',
        size: '4" x 4"',
        weight: '8oz',
        price1:'$1.99',
        price2:'$1.49',
        price3:'$0.99',
        validUntil: '04/01/2016'
    },
    {
        title: 'product 3',
        description: 'blah blah, blah', 
        imageUrl: 'https://r.hswstatic.com/w_907/gif/tesla-cat.jpg',
        size: '4" x 4"',
        weight: '8oz',
        price1:'$1.99',
        price2:'$1.49',
        price3:'$0.99',
        validUntil: '04/01/2016'
    },
    {
        title: 'product 4',
        description: 'blah blah, blah', 
        imageUrl: 'https://r.hswstatic.com/w_907/gif/tesla-cat.jpg',
        size: '4" x 4"',
        weight: '8oz',
        price1:'$1.99',
        price2:'$1.49',
        price3:'$0.99',
        validUntil: '04/01/2016'
    },
    {
        title: 'product 5',
        description: 'blah blah, blah', 
        imageUrl: 'https://r.hswstatic.com/w_907/gif/tesla-cat.jpg',
        size: '4" x 4"',
        weight: '8oz',
        price1:'$1.99',
        price2:'$1.49',
        price3:'$0.99',
        validUntil: '04/01/2016'
    },
];

const printToDom = (divId, textToPrint) => {
    const selectedElement = document.getElementById(divId);
    selectedElement.innerHTML = textToPrint;
}
const domStringBuilder = () => { 
    let domString= '';
    let domString= '<div class="row">';
    products.forEach((product)=> {
        domString += `<div class="col-4">${product.title}</div>` ;
   
        
    })
    domString += `</div>`;
    printToDom('container', domString);

}

const Init = () => {
    domStringBuilder();

} 
Init();

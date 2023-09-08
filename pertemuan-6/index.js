// membuat tampilan card , js dan css
// g boleh ada elemen di html
// bikin wrepper
// item dijadiin card
// cardnya ke wrepper
// wreppernya ke body

//list dari back end
const items = [
    {
        id : 1,
        name :'buku',
        status: true,
        price : 2000,
        imgUrl: 'https://static.republika.co.id/uploads/images/inpicture_slide/buku-buku-ilustrasi-_120407140038-442.jpg'
    },
    {
        id : 2,
        name :'pena',
        status: true,
        price : 2000,
        imgUrl: 'https://th.bing.com/th/id/OIP.dSsGnTdVZVvATg_Q8k59SAHaEc?w=312&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7'
    },
    {
        id : 3,
        name :'tas',
        status: true,
        price : 2000,
        imgUrl: 'https://th.bing.com/th/id/OIP.eTs8Ac0Zg9AJGXNm_sXy3AHaHa?w=207&h=207&c=7&r=0&o=5&dpr=1.3&pid=1.7'
    },
    {
        id : 4,
        name :'sepatu',
        status: true,
        price : 2000,
        imgUrl: 'https://cf.shopee.co.id/file/436fd1fddc0cd01bf8c22c226c543f8d'
    },   
]

// cara buat elemen 
// const wdiv= document.createElement('div')
// wdiv.setAttribute('id', 'wrapper')
// wdiv.classList.add('wrapper')
// console.log(wdiv)

// ngeluping item
function parseItemsToCard (){
    for (let i = 0; i < items.length; i++){
        // console.log(items[i])
        const name[] = document.createElement('div')// nama
        const cardiv = document.createElement('div')// div
        const statusdiv = createStatusLabel(items[i])
        const priceSpan = document.createElement('span')
        const itemsTag = document.createElement('span')
        
        //set value nama
        name[].textContect = items[i].name
        //set price
        priceSpan.textContent = Number(item.price).toLocaleString(en-Us)
        replace(/,/g,'-')
        // set src img
        itemimg.setAttribute('src', items[i].imgUrl)
        cardiv.classList.add('card')

        cardiv.append(nameH1)
        cardiv.append(statusdiv)
        cardiv.append(priceSpan)
        cardiv.append(items)
    }
    // const cardiv = document.createElement('div')
}

function createStatusLabel(item){
    const statusdiv = document.createElement('span')
    // statusdiv

    const currentColor = (item.status) ? 'color green': 'color red'
    statusdiv.classList.add(currentColor, 'status label')
    return statusdiv
}

function main(){
    const wdiv= document.createElement('div')
    wdiv.setAttribute('id', 'wrapper')
    wdiv.classList.add('wrapper')

    document.body.append(wdiv)
    // console.log(wdiv)
}
main()
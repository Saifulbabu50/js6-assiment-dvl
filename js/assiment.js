const loadReTro = async (handelText) => {
    const res = await fetch(` https://openapi.programming-hero.com/api/retro-forum/posts?category=${handelText}`)
    const data = await res.json();
    // console.log(data);
    const retros = data.posts;
    displayRetro(retros)

}

const displayRetro = retros => {
    const cordContainer = document.getElementById('card-container')
    // console.log(cordContainer);
    retros.forEach(retro => {
        const retroCard = document.createElement('div');
        retroCard.classList = `card card-side w-[772px] shadow-xl bg-[#F3F3F5] gap-55`
        retroCard.innerHTML = `
            <figure>
                <img class="w-24 gap-52 mb-36 p-5 " src="${retro.image}" alt="" />
            </figure>
            <div class="card-body">
                <div class="justify-between">
                <p>#${retro.category}</p>
                <p class="pr-9">Author : ${retro.author.name}</p>
                
                </div>
                <h2 class="card-title">10 Kids Unaware of Their Halloween Costume</h2>
                <p>It’s one thing to subject yourself to ha Halloween costume mishap because <br>,
                 hey that’s your prerogative</p>
            <div class="card-actions justify-between">
                 <div class="flex justify-center gap-5">
                    <img class="w-6" src="images/tabler-icon-message-2.png" alt="" srcset="">
                    <p>${retro.comment_count}</p>
                    <img class="w-6" src="images/Vector.png" alt="" srcset="">
                                <p>${retro.view_count}</p>
                    <img class="w-6" src="images/tabler-icon-clock-hour-9.png" alt="" srcset="">
                                <p>${retro.posted_time}</p>
                    </div>
                <div>
                    <img src="images/Group.png" alt="" srcset=""> 
                </div>
                </div>
            </div>
        `
        cordContainer.appendChild(retroCard);
        // console.log(retroCard)
    })
}



const handelSearch = (retros) => {
    const handelSearchText = document.getElementById('Search-box');
    handelSearchText.textContent = ``;
    const handelText = handelSearchText.value
    loadReTro(handelText)
    // console.log(handelText)
}

const loadDataCard= async ()=>{
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
    const data = await res.json();
    const cards = data
    // console.log(cards)
    displayShowCard(cards)
}
const displayShowCard = cards =>{
    // console.log(cards)
    const cardContainers = document.getElementById('card-containers')

    cards.forEach(card => {
        console.log(card)
        const dataCard=document.createElement('div');
        dataCard.classList ='card bg-base-100 w-96 shadow-xl'
        dataCard.innerHTML=`
            <figure class="px-10 pt-10">
                <img src="${card.cover_image}" alt="Shoes"
                    class="rounded-xl" />
            </figure>
            <div class="card-body ">
                <div class="flex">
                    <h2 class="card-title"><img src="images/Frame.png " alt=""></h2>
                    <h1>${card.author.posted_date}</h1>
                </div>
                <p class="font-extrabold">${card.title}</p>
                <p>${card.description}</p>
                <div class="card-actions flex">
                    <div class="flex items-center justify-center">
                        <img class="rounded-full w-14 h-14" src="${card.profile_image}" alt="">
                    </div>
                    <div>
                        <h1 class="font-bold">${card.author.name}</h1>
                        <p>${card.author.designation}</p>
                    </div>
                </div>
            </div>    `
        cardContainers.appendChild(dataCard)    
    });
}
loadDataCard()

// const loadReTroCard = async () => {
//     const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts')
//     const data = await res.json();
//     const cards = data.posts;
//     // displayRetros(cards)
//     console.log(cards)
// }
// loadReTroCard();




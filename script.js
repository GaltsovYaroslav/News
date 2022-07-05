const newsList = document.querySelector('.news-list');         // Блок вывода данных
const btnGen = document.getElementById('s-n__general');         // }
const btnReg = document.getElementById('s-n__regional');        //  } 
const btnMedia = document.getElementById('s-n__news-media');     //   } Селектор 
const btnLife = document.getElementById('s-n__life');           //   }           фильтрации
/*const btnOpin = document.getElementById('s-n__opinion');        //  }
const btnEco = document.getElementById('s-n__economy');        // } */

const FILTER_TYPE_GEN = 's-n__general';
const FILTER_TYPE_REG = 's-n__regional';
const FILTER_TYPE_MED= 's-n__news-media';
const FILTER_TYPE_LIF= 's-n__life';
/* const FILTER_TYPE_OPI= 's-n__opinion';
const FILTER_TYPE_ECO= 's-n__economy'; */

let currentTab = 's-n__general';
let allNews = [{
    author: "www.irishtimes.com",
    category: [
        "regional",
        "northen"
    ],
    description: "For the best site experience please enable JavaScript in your browser settings...",
    id: "952828c9-1b78-4278-8a68-a28a7309e154",
    image: "https://www.irishtimes.com/polopoly_fs/1.4870411.1651763179!/image/image.png",
    language: "en",
    published: "2022-07-05 13:02:00 +0000",
    title: "Results Northern Ireland Assembly Election 2022 | The Irish Times",
    url: "https://www.irishtimes.com/news/politics/assembly-election-2022/ni-results-hub-2022"
},
{
    author: "Bernama",
    category: ["general"],
    description: "PUTRAJAYA: The Higher Education Ministry has decided to continue the Food@Campus Keluarga Malaysia free food voucher initiative for B40 students at universities to blunt the impact of rising food costs on students.\n\n © New Straits Times Press (M) Bhd",
    id: "8d0961e0-89c9-4811-9d2a-addab865c439",
    image: "None",
    language: "en",
    published: "2022-07-05 09:18:48 +0000",
    title: "Keluarga Malaysia voucher programme to be continued",
    url: "https://www.nst.com.my/news/nation/2022/07/810982/foodcampus-keluarga-malaysia-voucher-programme-be-continued"
 }];
let genNews = [];
let regNews = [];
let MediaNews = [];
let lifeNews = [];
/* let opinionNews = [];
let ecoNews = []; */
let newsItemElems = [];

const getNewsTemlate = (news, index) => {
    if (news.image === "None") {
        news.image = "./7canal.jpg"
    }
    return `
     <li class="news-list__news">
        <img class="n-l__n__images" src=${news.image}>
        <h2 class="n-l__n__title">${news.title}</h3>
        <h3 class="n-l__n__description">${news.description}</h3>
        <h4 class="n-l__n__data">${news.published}</h4>
        <a href="${news.url}" class="n-l__n__url">Show more</a>
    </li>
    `
};

const filterTasks = (currentTab)  => { 
        if (currentTab === "s-n__general") {
            render(genNews); 
        } 
        if (currentTab === "s-n__regional") {
                render(regNews);                       
        }
        if (currentTab === "s-n__news-media") {
            render(MediaNews); 
        }
        if (currentTab === "s-n__life") {
            render(lifeNews); 
        }
/*         if (currentTab === "s-n__opinion") {
            render(opinionNews); 
        }
        if (currentTab === "s-n__economy") {
            render(ecoNews); 
        } */
};

const render = (arrayForRender)  => {  
    newsList.innerHTML = '';
    if (!arrayForRender.length) return; 
    else {
        arrayForRender.forEach((item, index) => {
          newsList.innerHTML += getNewsTemlate(item, index);
        });
        newsItemElems = document.querySelectorAll('.news-list__news');  
    }
};

for (let i = 0; i<allNews.length; i++) {
    if (allNews[i].category == "general") {
        genNews[i] = allNews[i];
    } 
    if (allNews[i].category[0] === "regional" || allNews[i].category[1] === "northen") {
        regNews[i] = allNews[i];
    } 
    if (allNews[i].category[0] == "news_media") {
        genNews[i] = allNews[i];
    }  
    if (allNews[i].category[0] == "lifestyle" || allNews[i].category[1] == "health") {
        genNews[i] = allNews[i];
    }  
}

btnGen.addEventListener('click', () => {
    filterTasks(FILTER_TYPE_GEN);
});

btnReg.addEventListener('click', () => {
    filterTasks(FILTER_TYPE_REG);
});

btnMedia.addEventListener('click', () => {
    filterTasks(FILTER_TYPE_MED);
});

btnLife.addEventListener('click', () => {
    filterTasks(FILTER_TYPE_LIF);
});



let input = document.querySelector("#pole");
let task = "";
document.querySelector("#poisk").onclick = function () {
    let task = input.value;
    if (task == "погода") {
        document.location.href ="https://www.google.com/search?q=%D0%BF%D0%BE%D0%B3%D0%BE%D0%B4%D0%B0+%D1%81%D0%BF%D0%B1&oq=%D0%BF%D0%BE%D0%B3%D0%BE&aqs=chrome.0.0i131i433i512l3j69i57j0i131i433i650l2j0i131i433i457i512j0i402i512j0i402i650j0i131i433i650.5547j1j15&sourceid=chrome&ie=UTF-8";
    }else if(task == "переводчик") {
        document.location.href ="https://www.google.com/search?q=%D0%BF%D0%B5%D1%80%D0%B5%D0%B2%D0%BE%D0%B4%D1%87%D0%B8%D0%BA&oq=gtht&aqs=chrome.1.69i57j0i1i10i67i650j0i1i10i67i131i433i650j0i1i10i131i433i512j46i1i10i199i465i512j0i1i10i512l5.1573j0j15&sourceid=chrome&ie=UTF-8";
    }else if(task == 'стим'){
        document.location.href ='https://store.steampowered.com/?l=russian'
    }else if(task == 'ютуб'){
        document.location.href ='https://www.youtube.com/'
    }else if(task == 'уроки'){
        document.location.href ='https://infourok.ru/'
    }else {
        alert("запрос не найден");
    }
};

async function api(){

    v=fetch('https://restcountries.com/v3.1/all')
    out=await v;
    prom=out.json();
    result=await prom;
    // console.log(result)

    // 
    // 
    // console.log(i.latlng);
    // 
    // 
    // 
    


    for(i of result){
        try{
            parentcont=document.querySelector('.weather-data')
            var data_cont=document.createElement('div')
            lat=i.latlng[0]
            lng=i.latlng[1]
            data_cont.setAttribute('lat',lat)
            data_cont.setAttribute('lng',lng)
            data_cont.classList.add('countrydata')
            data_cont.classList.add('card')
            data_cont.classList.add('card-body')
            data_cont.classList.add('card-header')
            data_cont.classList.add('col-lg-4')
            data_cont.classList.add('col-sm-12')

            // data_cont.setAttribute('class','countrydata card card-header card-body col-lg-4 col-sm-12')

            var countryName=document.createElement('p')
            countryName.innerText=i.name.common
            console.log(i.name.common);
            countryName.style.backgroundColor='rgb(177, 176, 175)'
            


            var countryFlag=document.createElement('img')
            countryFlag.setAttribute('src',i.flags.png)
            console.log(i.flags.png);
            

            var countryCapital=document.createElement('p')
            countryCapital.innerText=`Capital : ${i.capital[0]}`
            console.log(i.capital[0]);

            var countryRegion=document.createElement('p')
            countryRegion.innerText=`Region : ${i.region}`
            console.log(i.region);

            var countryCode=document.createElement('p')
            countryCode.innerText=`Country code : ${i.cca3}`
            console.log(i.cca3);

            var button_Weather=document.createElement('Button')
            button_Weather.setAttribute('onclick','weatherapi(this)')
            button_Weather.setAttribute('class','btn btn-primary')
            button_Weather.setAttribute('type','button')
            button_Weather.setAttribute('data-bs-toggle','modal')
            button_Weather.setAttribute('data-bs-target','#exampleModal')
            // button_Weather.classList.add('btn btn-primary')
            button_Weather.innerText='click for Weather'


            
            data_cont.append(countryName, countryFlag, countryCapital, countryRegion, countryCode,button_Weather)
            

            

            parentcont.append(data_cont)


        }
        catch{
            // 
        }

       
  
    }
   



    



}
async function weatherapi(e){
    console.log(e);
    console.log('gets executed')

    var parent=e.parentElement
    var lat=parent.getAttribute('lat')
    var lon=parent.getAttribute('lng')

    var API_key='952e0d1384676732dcf2b015248b84b0';

    url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`
    v1=fetch(url);
    out1=await v1;
    prom1=out1.json();
    result1=await prom1;
    console.log(result1); 

    var popup=document.querySelector('#exampleModal .modal-body')
    popup.innerText=result1.weather[0].description
}

api()


const requestURL = 'https://github.com/FelixS2000/wdd230/blob/main/business-directory/data.json' 

const company1 = {
    companies:"Rica",
    address:"KM 6 1/2 Autopista Duarte, EN, Santo Domingo",
    phoneNumber:"809-563-7422"
}
const company2 = {
    companies:"Nestle",
    address:"Av. Abraham Lincoln 118, Santo Domingo",
    phoneNumber:"849-214-5111"
}
const company3 = {
    companies:"Claro",
    address:"Av. John F. Kennedy esquina Av. Abraham Lincoln, Serrallés, Ágora Mall, Santo Domingo 10150",
    phoneNumber:"809-220-1111"
}

const company4 = {
    companies:"Air Century",
    address:" International Airport La Isabela , Dr. Joaquín Balaguer, 11A Santo Domingo",
    phoneNumber:"809-426-4333"
}

const company5 = {
    companies:"Grupo Corripio",
    address:" Av. Núñez de Cáceres, casi esq. John F. Kennedy Distrito Nacional, Santo Domingo",
    phoneNumber:"809-227-3200"
}

const company6 = {
    companies:"Brugal",
    address:"Piso 11, Downtown Business Tower Ave. Núñez de Cáceres esq. Rómulo Betancourt. Santo Domingo",
    phoneNumber:"809-566-5651"
}

const company7 = {
    companies:"Grupo Vimenca",
    address:"AV. Abraham Lincoln NO. 306 Santo Domingo",
    phoneNumber:"809-200-7380"
}

const company8 = {
    companies:"Seguros Universal",
    address:"Av. Winston Churchill No. 1100,Evaristo Morales",
    phoneNumber:"809-544-7100"
}

const company9 = {
    companies:"Altice Dominicana S.A",
    address:"Av. Sarasota esq. Arrayanes y las caobas, local 57A-I, Plaza Bella Vista Mall",
    phoneNumber:"809-859-6555"
}

const c1name = JSON.stringify(company1.companies);
const c1address = JSON.stringify(company1.address);
const c1phone = JSON.stringify(company1.phoneNumber);


const c2name = JSON.stringify(company2.companies);
const c2address = JSON.stringify(company2.address);
const c2phone = JSON.stringify(company2.phoneNumber);


const c3name = JSON.stringify(company3.companies);
const c3address = JSON.stringify(company3.address);
const c3phone = JSON.stringify(company3.phoneNumber);


const c4name = JSON.stringify(company4.companies);
const c4address = JSON.stringify(company4.address);
const c4phone = JSON.stringify(company4.phoneNumber);


const c5name = JSON.stringify(company5.companies);
const c5address = JSON.stringify(company5.address);
const c5phone = JSON.stringify(company5.phoneNumber);


const c6name = JSON.stringify(company6.companies);
const c6address = JSON.stringify(company6.address);
const c6phone = JSON.stringify(company6.phoneNumber);


const c7name = JSON.stringify(company7.companies);
const c7address = JSON.stringify(company7.address);
const c7phone = JSON.stringify(company7.phoneNumber);


const c8name = JSON.stringify(company8.companies);
const c8address = JSON.stringify(company8.address);
const c8phone = JSON.stringify(company8.phoneNumber);


const c9name = JSON.stringify(company9.companies);
const c9address = JSON.stringify(company9.address);
const c9phone = JSON.stringify(company9.phoneNumber);


document.getElementById('company1').innerText = 'Business name:' +''+ c1name + 'Business Address:' + c1address +  'Business Phone' +c1phone;


document.getElementById('company2').innerText = 'Business name:' +''+ c2name + 'Business Address:' + c2address +  'Business Phone' +c2phone;


document.getElementById('company3').innerText = 'Business name:' +''+ c3name + 'Business Address:' + c3address +  'Business Phone' +c3phone;


document.getElementById('company4').innerText = 'Business name:' +''+ c4name + 'Business Address:' + c4address +  'Business Phone' +c4phone;


document.getElementById('company5').innerText = 'Business name:' +''+ c5name + 'Business Address:' + c5address +  'Business Phone' +c5phone;


document.getElementById('company6').innerText = 'Business name:' +''+ c6name + 'Business Address:' + c6address +  'Business Phone' +c6phone;


document.getElementById('company7').innerText = 'Business name:' +''+ c7name + 'Business Address:' + c7address +  'Business Phone' +c7phone;


document.getElementById('company8').innerText = 'Business name:' +''+ c8name + 'Business Address:' + c8address +  'Business Phone' +c8phone;


document.getElementById('company9').innerText = 'Business name:' +''+ c9name + 'Business Address:' + c9address +  'Business Phone' +c9phone;


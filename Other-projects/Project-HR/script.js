const text1 =  document.getElementById('textarea1'); 
const text2 =  document.getElementById('textarea2'); 

const phone1 =  document.querySelector('.phone1');
const phone2 =  document.querySelector('.phone2');
const phone3 =  document.querySelector('.phone3');
const phone4 =  document.querySelector('.phone4');
const phone5 =  document.querySelector('.phone5');
const phone6 =  document.querySelector('.phone6');

const phoneNumBtn =  document.querySelectorAll('.phone-num'); 
const allBtns =  document.querySelector('.phone-btns'); 

const copy1 =  document.querySelector('.copy1'); 
const copy2 =  document.querySelector('.copy2'); 
const copy3 =  document.querySelector('.copy3'); 
const copy4 =  document.querySelector('.copy4'); 
const copy5 =  document.querySelector('.copy5'); 
const copy6 =  document.querySelector('.copy6'); 

const tel1 =  document.querySelector('.tel1'); 
const tel2 =  document.querySelector('.tel2'); 
const tel3 =  document.querySelector('.tel3'); 
const tel4 =  document.querySelector('.tel4'); 
const tel5 =  document.querySelector('.tel5'); 
const tel6 =  document.querySelector('.tel6'); 

const phoneRes =   document.querySelectorAll('.phone-result'); 
//let allPhone = [];

extract_btn.addEventListener('click', () => {
  const text1Input = text1.value

  //const nameMatch = text1Input.match(/^(.*?)\s(SSN:|$)/);
  const nameMatch = text1Input.match(/^([A-Z\s,]+)\s(SSN:|$)/);
  const name = nameMatch ? nameMatch[1] : ''; // Check if SSN is present
  const ssnMatch = text1Input.match(/SSN:\s(\d{3}-\d{2}-\d{4})/);
  const ssn = ssnMatch ? ssnMatch[1] : ''; // Check if SSN is present
  const lexIdMatch = text1Input.match(/LexID®?:\s(\d{4}-\d{4}-\d{4})/);
  const lexId = lexIdMatch ? lexIdMatch[1] : ''; // Check if Lex ID is present

  const formattedSsn = ssn.replace(/-/g, '')
  const formattedLexId = lexId.replace(/-/g, '.');

  const phoneNumbers = text1Input.match(/\d{3}-\d{3}-\d{4}/g);
  const phoneNum = phoneNumbers.map(e => e.replace(/(\d{3})-(\d{3})-(\d{4})/g, '($1)$2-$3'));
  //allPhone = phoneNum
  //text2.value = text1.value;
  text2.value += name;
  // text2.value += ' SSN: ' +  formattedSsn; 
  text2.value += ' Lex ID: ' + formattedLexId;
  text2.value += ' ' + phoneNum;

  let result = {};

  function createVariable(arr){
    const tnp = {};
    arr.forEach((value, index) => {
      tnp[`tnp${index + 1}`] = value;
    });
    result = tnp;
    return tnp;
  }

  const phone = createVariable(phoneNum);

  phone1.textContent = phone.tnp1; 
  phone2.textContent = phone.tnp2; 
  phone3.textContent = phone.tnp3; 
  phone4.textContent = phone.tnp4;
  phone5.textContent = phone.tnp5;
  phone6.textContent = phone.tnp6;

  phone1.textContent ? tel1.style.display = 'block' : console.log('phone1 hidden');
  phone2.textContent ? tel2.style.display = 'block' : console.log('phone2 hidden');
  phone3.textContent ? tel3.style.display = 'block' : console.log('phone3 hidden');
  phone4.textContent ? tel4.style.display = 'block' : console.log('phone4 hidden');
  phone5.textContent ? tel5.style.display = 'block' : console.log('phone5 hidden');
  phone6.textContent ? tel6.style.display = 'block' : console.log('phone6 hidden');

  ssn_btn.addEventListener('click', () => navigator.clipboard.writeText(formattedSsn))

  })

  copy_btn.addEventListener('click', () => {
    navigator.clipboard.writeText(text2.value)
  })

  function clickPhone(e){
    navigator.clipboard.writeText(e.target.textContent);
  }


  phone1.addEventListener('click', clickPhone);
  phone2.addEventListener('click', clickPhone);
  phone3.addEventListener('click', clickPhone);
  phone4.addEventListener('click', clickPhone);
  phone5.addEventListener('click', clickPhone);
  phone6.addEventListener('click', clickPhone);

  const text = "crush alg lend - tel tnp # "

  copy1.addEventListener('click', () => navigator.clipboard.writeText(text + phone1.textContent))
  copy2.addEventListener('click', () => navigator.clipboard.writeText(text + phone2.textContent))
  copy3.addEventListener('click', () => navigator.clipboard.writeText(text + phone3.textContent))
  copy4.addEventListener('click', () => navigator.clipboard.writeText(text + phone4.textContent))
  copy5.addEventListener('click', () => navigator.clipboard.writeText(text + phone5.textContent))
  copy6.addEventListener('click', () => navigator.clipboard.writeText(text + phone6.textContent))



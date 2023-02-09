import throttle from 'lodash.throttle';

const STORAGE_KEY= "feedback-form-state";
const fromObject={
    email: document.querySelector('input'),
    message: document.querySelector('textarea'),
    form: document.querySelector('.feedback-form'),
};
const params={};


fromObject.form.addEventListener('input', throttle(onFormInput,500));
fromObject.form.addEventListener('submit',onFormsSubmit);

function onFormInput(event){
 const key = event.target.name;
 params[key]= event.target.value;
 localStorage.setItem(STORAGE_KEY,JSON.stringify(params));
};

function onFormsSubmit(event){
    event.preventDefault();
    console.log(params);

    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
};

function getStorageData(){
    const data = localStorage.getItem(STORAGE_KEY);
    const paramsData =JSON.parse(data);
    if (paramsData){
        if (paramsData.email){
            fromObject.email.value = paramsData.email;
        };
    
        if(paramsData.message){
            fromObject.message.value = paramsData.message;  
        };
    }  
};

getStorageData();
const validation = (text, numberField) => {
   if (!numberField) {
      let result = prompt(text);
      while(!result) {
         result = prompt(text);
      }
      return result;
   } else {
      let result = +prompt(text);
      while (!result){
         result = +prompt(text)
      }
      return result
   }
}
const getInfo = (text, numberField = false) => {
   const result = validation(text, numberField);
   return result;
};

const getGenderBoolean = () => {
   const result = confirm("Enter your gender");
   return result;
};

const getPension = (age, gender) => {
if((gender && age >= 65) || (!gender && age >= 55)){
   return "да";
} else {
   return "нет";
}
};

const showInfo = (name, surname, patronymic, age, gender, pension) => {
   alert(`Ваше ФИО: ${name} ${surname} ${patronymic}
Ваш возраст в годах: ${age}
Ваш возраст в днях: ${age * 365}
Через 5 лет будет вам: ${age + 5}
Ваш пол: ${gender}
Вы на пенсии: ${pension}`)
}
const init = () => {
   let name = getInfo("Enter your name");
   const surname = getInfo("Enter your surname");
   const patronymic = getInfo("Enter your patronymic");
   const age = getInfo("Enter your age", true);
   const genderBoolean = getGenderBoolean();
   const gender = genderBoolean ? "male" : "female"
   const pension = getPension(age, genderBoolean);
   showInfo(name, surname, patronymic, age, gender, pension)
}
init();
const person = {
  name : 'Roman'
};

function info (old, phone) {
  console.log(`Имя: ${this.name}, Возраст: ${old}, Телефон: ${phone}`);
}

function funcBind(fn, context, ...rest) {
  return function () {
    const uniqId = Date.now().toString();
    
    context[uniqId] = fn;

    const result = context[uniqId](...rest);

    delete context[uniqId];

    return result;
  };
}

info(); // Имя: undefined, Возраст: undefined, Телефон: undefined
funcBind(info, person, '25', '12345678')(); // Имя: Roman, Возраст: 25, Телефон: 12345678

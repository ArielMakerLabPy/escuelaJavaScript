function newFunction(name, age, country) {
  var name = name || 'John Doe';
  var age = age || 30;
  var country = country || 'PY';
  console.log(name, age, country);
}

//es6
function newFunction2(name='John Doe', age=30, country='PY') {
    console.log(name, age, country);
}

newFunction2();
newFunction2('Ricardo Prada', 40, 'BR');

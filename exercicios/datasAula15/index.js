const dataAtual = new Date();

console.log(dataAtual); // retorna a data atual
console.log(dataAtual.getDate()); // retorna o dia do mes
console.log(dataAtual.getMonth() + 1); // retorna o mes
console.log(dataAtual.getFullYear()); // retorna o ano de 4 dígitos
console.log(dataAtual.getMinutes()); // retorna os minutos
console.log(dataAtual.getSeconds()); // retorna os segundos
console.log(dataAtual.toUTCString()); // converte pra UTC
console.log(dataAtual.toISOString()); // converte para ISO

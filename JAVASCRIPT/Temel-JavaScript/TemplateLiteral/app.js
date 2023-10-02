const fullname = "Akın CENGİZ";
const department = "Bilişim";
const salary = 4000;

const value = "İsim\t\t: " + fullname + "\nDepartman\t: " + department + "\nMaaş\t\t: " + salary;

console.log(value);

const vLiteral = `İsim\t\t: ${fullname}\nDepartman\t: ${department}\nMaaş\t\t: ${salary}`;
console.log(vLiteral);

const html = "<ul>" + 
                "<li>" + fullname + "</li>" +
                "<li>" + department + "</li>" +
                "<li>" + salary + "</li>" +
            "</ul>";
document.body.innerHTML = html;

function brutHesapla(){
    return salary * 1.2;
}

const lHtml = `<ul>
<li>${fullname}</li>
<li>${department}</li>
<li>${salary}</li>
<li>${10*4}</li>
<li>${brutHesapla()}</li>
</ul>`;

document.body.innerHTML += lHtml;
let name = 'Alex'
let money = 10000
let account = 7777
let quest_name = prompt('Как вас зовут?')
let quest_acc = 0
let quest_money = 0




if(quest_name === name) {
    quest_acc = prompt('Номер счёта')
} else {
    alert('Досвидули') 
    
}

if(quest_acc == '7777') {
    quest_money = prompt('Сколько обналичить?')
} else {
    alert('Досвидули')
}

if(quest_money <= money) {
     alert(`Cнял ${quest_money} и осталось ${money - quest_money}`)
} else if(quest_money > money) {
    alert('Недостаточно средств')
}  


else{
    alert('Воду мутишь')
}
//crie uma variável para armazenar o nome e a quantidade de experiência
//(XP) de um herói, depois utilize uma estrutura de decisão para apresentar
//alguma das mensagens abaixo:

//se XP for menor do que 1.000 = ferro 
//se XP for entre 1.001 e 2.000 = bronze
//se XP for entre 2.001 e 5.000 = prata 
//se XP for entre 6.001 e 7.000 = ouro
//se XP for entre 7.001 e 8.000 = platina 
//se XP for entre 8.001 e 9.000 = ascendente
//se XP for entre 9.001 e 10.000 = imortal 
//se XP for maior ou igual a 10.001 = radiante

//saída 
//ao final deve se exibir uma mensagem:
//o herói de nome **{nome}** está 
//no nível de **{nivel}**

let nomeHeroi = "Davi"
let nivelExperiencias = 10.000

if(nivelExperiencias < 1.000){
    nivelExperiencias = "Ferro"
    nomeHeroi = "maria"
}
if(nivelExperiencias >= 1.001 && nivelExperiencias <= 2.000){
    nivelExperiencias = "Bronze" 
    nomeHeroi = "Julio"
}
if(nivelExperiencias >= 2.001 && nivelExperiencias <= 5.000){
    nivelExperiencias = "Prata"
    nomeHeroi = "Chico"
}
if(nivelExperiencias >= 6.001 && nivelExperiencias <= 7.000){
    nivelExperiencias = "Ouro"
    nomeHeroi = "Francisco"

}
if(nivelExperiencias >= 7.001 && nivelExperiencias <= 8.000){
    nivelExperiencias = "Platina"
    nomeHeroi = "Tania"
}
if(nivelExperiencias >= 8.001 && nivelExperiencias <= 9.000){
    nivelExperiencias = "Ascendente"
    nomeHeroi = "Bete"

}
if(nivelExperiencias >= 9.001 && nivelExperiencias <= 10.000){
    nivelExperiencias = "Imortal"
    nomeHeroi = "Davi"
}
if(nivelExperiencias >= 10.001){
    nivelExperiencias = "Radiante"
    nomeHeroi = "Pedro"
}
console.log()
console.log("O herói:" + nomeHeroi) 
console.log("O nível de esperiência:" + nivelExperiencias)

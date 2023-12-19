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

const nomeHeroi = "Davi"
const nivelExperiencias = 10_000

let nivel

if (nivelExperiencias <= 1_000) {
    nivel = "Ferro"
} else if (nivelExperiencias <= 2_000) {
    nivel = "Bronze"
} else if (nivelExperiencias <= 5_000) {
    nivel = "Prata"
} else if (nivelExperiencias <= 7_000) {
    nivel = "Ouro"
} else if (nivelExperiencias <= 8_000) {
    nivel = "Platina"
} else if (nivelExperiencias <= 9_000){
    nivel = "Ascendente"
} else if (nivelExperiencias <= 10_000){
    nivel = "Imortal"
} else {
    nivel = "Radiante"
}

console.log("O herói: " + nomeHeroi + " está no nível de esperiência: " + nivel)

let num = document.getElementById('num')
let lista = document.getElementById('val')
let res = document.getElementById('res')
let val = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, val)) {
        val.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `O valor ${num.value} foi adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
         alert("[ERRO] Valor inválido ou já encontrado.")
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (val.length == 0) {
        alert('[ERRO] Adicione valores para finalizar.')
    } else {
        let tota = val.length
        let maior = val[0]
        let menor = val[0]
        let soma = 0

        for (let pos in val) {
            soma += val[pos]
            if (val[pos] > maior) {
                maior = val[pos]
            }
            if (val[pos] < menor) {
                menor = val[pos]
            }
        }

        let media = soma / tota

        res.innerHTML = ''
        res.innerHTML += `<p>No total, temos ${tota} números cadastrados.</p>`
        res.innerHTML += `<p>O maior número informado é ${maior}.</p>`
        res.innerHTML += `<p>O menor número informado é ${menor}.</p>`
        res.innerHTML += `<p>A soma de todos os valores temos ${soma}.</p>`
        res.innerHTML += `<p>A media dos números informados é ${media}.</p>`
    }
}
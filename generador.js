let password = document.getElementById('password')

function genPassword(){
    let chars = '0123456789abcdefghijklmnpqrstuvwyz@#$%˄&*()ABCDFGHIJKLMNOPQRSTUVWYZ'

    let passwordLength = 12
    let password = ''
    for (let i = 0; i < passwordLength; i++) {
        let randonNumber = math.floor(math.random() * chars.length)
        password += chars.substr(randonNumber, randonNumber + 1)
    }
    document.getElementById('password').value = password
}

function copyPassword(){
    let copytext = document.getElementById('password')
    copytext.select()
    copytext.setSelectionRange(0, 999)
    document.execCommand('copy')
}


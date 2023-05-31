pipeline {
    agent any

    stages {
        stage('Clonar o repositorio') {
            steps {
                git branch: 'main', url: 'https://github.com/nicolefgross/testes-e2e-ebac-shop.git'
            }
        }
        stage('Instalar dependências') {
            steps {
                bat 'npm install'
            }
        }
        stage('Executar testes') {
            steps {
                bat 'npm run cy:run'
            }
        }
    }
}
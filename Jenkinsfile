pipeline {
    agent any
    
    tools {nodejs "node"}
    
    stages {
        stage('Build') {
            steps {
                sh 'npm install --prefix /backend'
                sh 'npm install --prefix /frontend'  

            }
        }
       
        stage('Deploy') {
            steps {
                echo "Deployment is running"
            }
        }
    }
}
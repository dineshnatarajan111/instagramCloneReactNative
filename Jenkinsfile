pipeline{
  agent any
  stages{

    stage("SCM Checkout"){
      steps{
        checkout scmGit(branches: [[name: '*/master']], extensions: [], userRemoteConfigs: [[credentialsId: '13324564-8f8c-4b77-b7c7-203cab75750f', url: 'https://github.com/dineshnatarajan111/instagramCloneReactNative.git']])
      }
    }

    stage("Processing logs"){
      environment {
          MY_FILES = sh(script: 'git log 75fdf46 007f32e --pretty=format:"%s"', returnStdout: true, returnStdoutTrim: true)
        }
        steps {
          sh '''
            echo "$MY_FILES"
            cat $WORKSPACE/cat.xlsx
          '''
        }
    }

  }
}
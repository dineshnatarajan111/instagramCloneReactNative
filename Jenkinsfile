pipeline{
  agent any
  def res = []
  stages{

    stage("SCM Checkout"){
      steps{
        checkout scmGit(branches: [[name: '*/master']], extensions: [], userRemoteConfigs: [[credentialsId: '13324564-8f8c-4b77-b7c7-203cab75750f', url: 'https://github.com/dineshnatarajan111/instagramCloneReactNative.git']])
      }
    }

    stage("Processing logs"){
      steps{
        sh 'git shortlog 75fdf46 007f32e'
      }
    }

  }
}
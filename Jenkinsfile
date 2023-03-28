import jenkins.model.*
jenkins = Jenkins.instance

node{
  agent any;

  stage("SCM Checkout"){
    print("Hello")
    checkout scmGit(branches: [[name: '*/master']], extensions: [], userRemoteConfigs: [[credentialsId: '13324564-8f8c-4b77-b7c7-203cab75750f', url: 'https://github.com/dineshnatarajan111/instagramCloneReactNative.git']])
  }

  stage("Processing logs"){
    def res = []
    res = sh 'git shortlog 75fdf46 007f32e'
    print(res[0])
    print(res[1])
  } 
}

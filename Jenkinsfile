node{
  stage("Git checkout"){
    checkout scmGit(branches: [[name: '*/master']], extensions: [], userRemoteConfigs: [[credentialsId: '13324564-8f8c-4b77-b7c7-203cab75750f', url: 'https://github.com/dineshnatarajan111/instagramCloneReactNative.git']])
  }
  stage("Build"){
    def workspace = pwd()
    print("$workspace")
  }
  stage("Pick excel"){
    print("Hello")
  }
}

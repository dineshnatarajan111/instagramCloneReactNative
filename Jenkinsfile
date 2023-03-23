node{
  def workspace = pwd()
  
  stage("Git checkout"){
    checkout scmGit(branches: [[name: '*/master']], extensions: [], userRemoteConfigs: [[credentialsId: '13324564-8f8c-4b77-b7c7-203cab75750f', url: 'https://github.com/dineshnatarajan111/instagramCloneReactNative.git']])
  }
  
  stage("Build"){
    print("$workspace")
  }
  
  stage("Pick excel"){
    input {
      message 'Upload xlsx file here'
      ok 'OK'
      parameters {
        file '/input'
      }
    }
  }
}

pipeline{
  agent any
  stages{

    // stage("SCM Checkout"){
    //   steps{
    //     checkout scmGit(branches: [[name: '*/master']], extensions: [], userRemoteConfigs: [[credentialsId: '13324564-8f8c-4b77-b7c7-203cab75750f', url: 'https://github.com/dineshnatarajan111/instagramCloneReactNative.git']])
    //   }
    // }

    stage("Processing logs"){
      environment {
          MY_FILES = bat(script: 'git log 75fdf46 007f32e --pretty=format:%s', returnStdout: true, returnStdoutTrim: true)
        }
        steps {
          script{
            bat '''
            git log 75fdf46 007f32e --pretty="%s"
            '''
            // print('{git log 75fdf46 007f32e --pretty=format:%s}')
            // print("{env.WORKSPACE}")
            // String fileContents = new File("${env.WORKSPACE}/res.txt").text
            // print(fileContents)

            // def words = []
            // new File( "${env.WORKSPACE}/res.txt" ).eachLine { line ->
            //     words << line
            // }

            // // print them out
            // words.each {
            //     println it
            // }

            // def words = new File("${env.WORKSPACE}/res.txt") as String[]
            // print(words[0])

            // new File("${env.WORKSPACE}/res.xlsx").splitEachLine( /,/ ){ 
            //   println it 
            // }
          }
        }
    }

  }
}
def code

node{
  
  stage("Checkout"){
    checkout scm
  }

  stage("Load"){
    code = load 'groovy/flieReader.groovy'
  }

  stage("calling function in groovy file"){
    code.sample()
  }

  stage("reading exce file"){
    code.read_excel()
  }


  // stage("SCM Checkout"){
  //   steps{
  //     checkout scmGit(branches: [[name: '*/master']], extensions: [], userRemoteConfigs: [[credentialsId: '13324564-8f8c-4b77-b7c7-203cab75750f', url: 'https://github.com/dineshnatarajan111/instagramCloneReactNative.git']])
  //   }
  // }

  // stage("Processing logs"){
  //   environment {
  //       MY_FILES = sh(script: 'git log 75fdf46 007f32e --pretty=format:"%s"', returnStdout: true, returnStdoutTrim: true)
  //     }
  //     steps {
  //       sh '''
  //         git log ${KLI_image} ${GPERF_image} --pretty=format:"%s" > res.csv
  //         echo "$MY_FILES"
  //       '''
  //       script{
  //         new File("${env.WORKSPACE}/res.csv").splitEachLine( /,/ ){ 
  //           println it 
  //         }
  //       }
  //     }
  // }
}
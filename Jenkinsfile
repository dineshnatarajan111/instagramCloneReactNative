node{
  stage("Build"){
    def workspace = pwd()
    print("$workspace")
  }
  stage("Pick excecl"){
    def workspace = node.getWorkspaceFor("InstagramFolder/excelLoader")
    print("$workspace")
  }
}

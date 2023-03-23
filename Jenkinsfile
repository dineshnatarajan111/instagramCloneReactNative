node{
  Job item = jenkins.getItemByFullName('InstagramFolder/excelLoader')
  def workspace_path
  stage("Build"){
    def workspace = pwd()
    print("$workspace")
  }
  stage("Pick excecl"){
    def workspace = node.getWorkspaceFor(item)
    print("$workspace")
  }
}


def read_excel(){
    env.WORKSPACE = pwd()
    def version = readFile "${env.WORKSPACE}/GPF_KLI_Dummy.xlsx"
    print(version)
}

def sample(){
    print("Hello!World")
}

return this
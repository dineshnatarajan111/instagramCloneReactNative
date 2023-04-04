
def read_excel(){
    env.WORKSPACE = pwd()
    def version = readFile "${env.WORKSPACE}/GPF_KLI_Dummy.xlsx"
}

def sample(){
    print("Hello!World")
}

return this
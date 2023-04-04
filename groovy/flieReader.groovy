import groovy.util.XmlSlurper
import java.util.Map
import jenkins.*
import jenkins.model.*
import hudson.*
import hudson.model.*  

def read_excel(){
    env.WORKSPACE = pwd()
    def version = readFile "${env.WORKSPACE}/GPF_KLI_Dummy.xlsx"
    print(version)
}

def sample(){
    print("Hello!World")
}

return this
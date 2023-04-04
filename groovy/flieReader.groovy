@Grab('org.codehaus.groovy.scriptom')
import org.codehaus.groovy.scriptom.ActiveXObject

def read_excel(){
    def excelObj = new ActiveXObject('Excel.Application')

    def workBook = excelObj.Workbooks.Open("GPF_KLI_Dummy.xlsx")

    //To get a sheet by index
    def sheetByIndex = workBook.Sheets.Item[1]

    print(sheetByIndex)
    
    //To get the active sheet in the workbook
    def sheetActive = workBook.ActiveSheet

    print(sheetActive)
    
    //To get the sheet by name
    def sheetByName = workBook.Sheets('Sheet1')

    print(sheetByName)

    def cellValue = sheet.Cells(2,1).Value

    print(cellValue)
}

def sample(){
    print("Hello World")
}

return this
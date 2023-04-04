import groovy.util.XmlSlurper
import java.util.Map
import jenkins.*
import jenkins.model.*
import hudson.*
import hudson.model.*

import java.io.*
import java.text.SimpleDateFormat
import java.util.Calendar
import org.apache.poi.ss.usermodel.*
import org.apache.poi.hssf.usermodel.*
import org.apache.poi.xssf.usermodel.*
import org.apache.poi.ss.util.*

import org.codehaus.groovy.scriptom.*

// def read_excel(){
//     env.WORKSPACE = pwd()
//     def version = readFile "${env.WORKSPACE}/GPF_KLI_Dummy.xlsx"

// }

def read_excel() {

    def fs = new FileInputStream("GPF_KLI_Dummy.xlsx")

    Workbook wb = WorkbookFactory.create(fs);
    def ws = wb.getSheet("Sheet1");
    int r = ws.getLastRowNum();
    testRunner.testCase.getTestStepByName("Properties").setPropertyValue("DataRowCount", r.toString());
    for (def i = 1; i <= r; i++) {
        def row = ws.getRow(i)
        def headerRow = ws.getRow(0)
        def noOfCell = row.getLastCellNum();
        for (def j = 0; j < noOfCell; j++) {
            def headertext = ws.getRow(0).getCell(j).getStringCellValue()
            Cell cell = row.getCell(j)
            if (cell == null || cell.getCellType() == Cell.CELL_TYPE_BLANK) {
                value = "";
            } else if (cell.getCellType() == Cell.CELL_TYPE_BOOLEAN) {
                value = (cell.getBooleanValue());
            } else if (cell.getCellType() == Cell.CELL_TYPE_NUMERIC) {
                if (DateUtil.isCellDateFormatted(cell)) {
                    Date date = cell.getDateCellValue();
                    SimpleDateFormat format1 = new SimpleDateFormat("dd-MM-yyyy");
                    String formatted = format1.format(date);
                    value = formatted
                } else {
                    value = (cell.getNumericCellValue());
                }
            } else if (cell.getCellType() == Cell.CELL_TYPE_STRING) {
                value = (cell.getStringCellValue());
            } else if (cell.getCellType() == Cell.CELL_TYPE_ERROR) {} else if (cell.getCellType() == Cell.CELL_TYPE_FORMULA) {
                value = String.valueOf(cell.getStringCellValue())
            }
            testRunner.testCase.getTestStepByName("Properties").setPropertyValue(headertext.toString() + "" + i.toString(), value.toString())
        }
    }


    //am based condition
    for (int i = 1; i <= 4; i++) {
        if (context.expand('${Properties#Firstname' + i.toString() + '}').toLowerCase().contains("am")) {
            log.info context.expand('${Properties#Firstname' + i.toString() + '}') + " " + context.expand('${Properties#Lastname' + i.toString() + '}')
        }
    }
}

def sample(){
    print("Hello!World")
}

return this
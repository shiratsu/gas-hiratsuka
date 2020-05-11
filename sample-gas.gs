function myFunction() {
  //Browser.msgBox("Hello World&quot", Browser.Buttons.OK);
  
  var currentRow = getCurrentRow();
  
  var currentSheet = SpreadsheetApp.getActiveSheet();
  getSpecificColumns(currentSheet,2,1,currentSheet.getLastRow(),1);
}

function getCurrentRow() {
  var currentSelection = SpreadsheetApp.getActiveSheet().getActiveSelection()
  var currentValue = currentSelection.getValue();
  var currentRow = currentSelection.getRowIndex();
  Logger.log(currentValue);
  Logger.log(currentRow);

  return currentRow;
}

function getSpecificColumns(currentSheet,xBegin,yBegin,xLast,yLast){
  
  var range = currentSheet.getRange(xBegin, yBegin, xLast, yLast);
  Logger.log(range.getDisplayValues());
}

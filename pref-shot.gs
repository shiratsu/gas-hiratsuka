function myFunction() {
  //Browser.msgBox("Hello World&quot", Browser.Buttons.OK);
  
  var currentSheet = SpreadsheetApp.getActiveSheet();
  var aryStr = getSpecificColumns(currentSheet,2,1,currentSheet.getLastRow(),1);
  
  aryStr.forEach(function(strPref){
    Logger.log(strPref[0]);
  });
}


//指定した範囲のデータを取得
function getSpecificColumns(currentSheet,xBegin,yBegin,xLast,yLast){
  
  var range = currentSheet.getRange(xBegin, yBegin, xLast, yLast);
  Logger.log(range.getDisplayValues());
  
  return range.getDisplayValues();
}

// 都道府県コードをもとにワーク一覧を取得
function getShotWorkList(pref){
  var response = UrlFetchApp.fetch('https://api.openbd.jp/v1/get?isbn=' + pref);
  
}  

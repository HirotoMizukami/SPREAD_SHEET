// 「https://docs.google.com/spreadsheets/d/xxxxxxxxx/edit#gid=0」の一部
var spreadsheet = SpreadsheetApp.openById(PropertiesService.getScriptProperties().getProperty('SPREAD_SHEET'));

function appendToSheet(text, opt_sheet_name) {
  this.sheet_name = opt_sheet_name === undefined ? 'debug' : opt_sheet_name;
  
  var sheet = spreadsheet.getSheetByName(sheet_name);
  sheet.appendRow([text]);
}

function setToSheet(text, cell, opt_sheet_name) {
  this.sheet_name = opt_sheet_name === undefined ? 'debug' : opt_sheet_name;
  
  var sheet = spreadsheet.getSheetByName(sheet_name);
  sheet.getRange(cell).setValue([text]);
}
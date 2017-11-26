var mysql=require("mysql")
var config_general = require("../config-general.json")


var con = mysql.createConnection(config_general["DbConfig"])
var BD = {}

BD.getAllData = function(tablaname,callback){
	if (con) {
		con.query('SELECT * FROM '+tablaname, function(error, rows) {
			if(error)
				throw error
			else
				callback(null, rows)
		})
	}
}

BD.getDataByData = function(tablaname,dataJ,callback){
	if (con) {
		con.query('SELECT * FROM '+tablaname+' '+'WHERE '+Object.keys(dataJ)[0]+' = '+con.escape(dataJ[Object.keys(dataJ)[0]]), function(error, rows) {
			if(error)
				throw error
			else
				callback(null, rows)
		})
	}
}

BD.delete = function(tablaname,dataJ, callback){
  if(con){
    var sql = 'DELETE FROM  '+tablaname+' WHERE '+Object.keys(dataJ)[0]+' = '+con.escape(dataJ[Object.keys(dataJ)[0]])
    con.query(sql, function(error, result)
    {
      if(error){
        throw error
      }
      else{
        callback(null,{"mensaje":"Borrado"})
      }
    })
  }
}
BD.insertData = function(tablaname,dataJ, callback){
  if(con){
    var sql = 'INSERT INTO '+tablaname+' SET ?'
    con.query(sql,dataJ ,function(error, result)
    {
      if(error){
        throw error
      }
      else{
        callback(null,{"mensaje":"se agrego"})
      }
    });
  }
}

BD.updateData = function(tablaname,index,dataJ, callback){
  if(con){
    var sql = 'UPDATE '+tablaname+' SET ? WHERE '+Object.keys(index)[0]+' = '+con.escape(index[Object.keys(index)[0]])
    con.query(sql,dataJ ,function(error, result)
    {
      if(error){
        throw error;
      }
      else{
        callback(null,{"mensaje":"se actualizo"})
      }
    })
  }
}

module.exports = BD;
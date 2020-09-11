var fs = require("fs");

function log2json(src) {
    src = src.slice(1, -1);
    return "{\"log\":[" + src + "]}";
}

function search_site(arr, searchvalue)
{
    let log = [];

    for(let i=0; i<arr.length; i++) {
        if((arr[i].s.indexOf(searchvalue) > -1)){
            log.push(arr[i]);
        }
    }

    return log;
}

function search_device_id(arr, searchvalue)
{
    let log = [];
    for(let i=0; i<arr.length; i++) {
        if((arr[i].e.indexOf(searchvalue) > -1)){
            log.push(arr[i]);
        }
    }

    return log;
}

function search_level(arr, searchvalue)
{
    let log = [];
    for(let i=0; i<arr.length; i++) {
        if((arr[i].l.indexOf(searchvalue) > -1)){
            log.push(arr[i]);
        }
    }

    return log;
}

function search_info(arr, searchvalue)
{
    let log = [];
    for(let i=0; i<arr.length; i++) {
        if((arr[i].i.indexOf(searchvalue) > -1)){
            log.push(arr[i]);
        }
    }

    return log;
}

function search_date(arr, s_date_str, e_date_str)
{
    let log = [];
    let s_date = new Date(s_date_str);
    let e_date = new Date(e_date_str);
    let date; 
    let select = 0;

    if(s_date_str.length > 0 && e_date_str.length == 0) {
        select = 1;
    } else if(s_date_str.length == 0 && e_date_str.length > 0) {
        select = 2;
    } else if(s_date_str.length == 0 && e_date_str.length == 0) {
        return arr;
    }

    for(let i=0; i<arr.length; i++) {
        date =  new Date(arr[i].d.slice(0, 10));
        switch(select){
            case 0:
                if((date >= s_date) && (date <= e_date)){
                    log.push(arr[i]);
                }
            break;
            case 1:
                if((date >= s_date)){
                    log.push(arr[i]);
                }
            break;
            case 2:
                if((date <= e_date)){
                    log.push(arr[i]);
                }
            break;
        }

    }

    return log;
}




fs.readFile('elog_file.log', function (err, data) {
    if (err){
      console.log(err.stack);
      return;
    }
    let str = log2json(data.toString());
    console.log(str);
    let log = JSON.parse(str).log;

	let log = JSON.parse(str).log;
	log = log.reverse();


    log = search_site(log, "33");
    log = search_device_id(log, "0101");
    log = search_level(log, "");
    log = search_info(log, "");
    log = search_date(log, "", "");
    console.log(log);

});
var DEFAULT_HOST = '47.104.89.112:802';
var PM_WEBSERVICE_URL = 'http://pm2.crbcint.com:8091/flowwebservice/services/flowWebservice?wsdl';
var FUND_WEBSERVICE_URL = 'http://app.crbcint.com:80/MobileOffice/';

function getLocalStoreageHost() {
	var host = window.localStorage.getItem(SET_HOST);
	if(isNullStr(host)) {
		host = DEFAULT_HOST;
	}
	return host;
}

function getHost() {
	var host = getLocalStoreageHost();
	return 'http://' + host + '/oamulti/BLL/mobileApi.ashx?';
}

var SET_HOST = 'SET_HOST';

var TIMEOUT = 30000;

var PAGE_SIZE = 20;
var MAX_PAGE_SIZE = 19860727;

// 下面是LocalStorage key
var TokenKey = "TokenKey";
var UserName = "UserName";
var UserId = "UserId";
var DeptId = 'DeptId';

var SaveUserName = 'SaveUserName';
var SavePwd = 'SavePwd';

var CheckSavePwd = 'CheckSavePwd';
var CheckAutoLogin = 'CheckAutoLogin';

var FIR_APP_ID = '59fbe13fca87a833a400044c';
var FIR_API_TOKEN = '9e2418f9731df097c2d8504c37179f95';
var FIR_CHECK_URL = 'http://api.fir.im/apps/latest/' + FIR_APP_ID + '?api_token=' + FIR_API_TOKEN;

var FIR_LINK_Android = 'http://fir.im/njbw';
var FIR_LINK_IOS = "http://fir.im/g6x";

var FONT_SIZE = 'FONT_SIZE';

var HOME_ACTION_TYPE = 'HOME_ACTION_TYPE';
var HOME_ACTION_TAP = '单击';
var HOME_ACTION_DOUBLETAP = '双击';
var HOME_ACTION_LONGTAP = '长按';
function myQuery(selector){
    var obj = {};
    obj.elmList = document.querySelectorAll(selector);
    obj.prop = function(pname, pvalue){
        // this == obj  : 현재 실행 중인 함수(메서드)가 속한 객체
        for (var i = 0; i < this.elmList.length; i++) {
            var elm = this.elmList[i];
            elm[pname] = pvalue;
        }
    }
    return obj;
}
var $ = myQuery;
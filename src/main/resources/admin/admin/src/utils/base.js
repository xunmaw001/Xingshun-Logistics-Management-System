const base = {
    get() {
        return {
            url : "http://localhost:8080/xingshunwuliu/",
            name: "xingshunwuliu",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/xingshunwuliu/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "兴顺物流管理系统"
        } 
    }
}
export default base

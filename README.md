# INF
    接口管理系统重构（MEAN）
    先要安装 node express mongodb
    开发工具 webStorm

# 安装 node / express / mongodb / angular
    打开nodejs官网，点击硕大的绿色Download按钮，它会根据系统信息选择对应版本（.msi文件）。然后像安装
    QQ一样安装它就可以了（安装路径随意）。

    1.1 nodejs:https://nodejs.org/en/
    1.2 node -v查看安装的nodejs版本，出现版本号，说明刚刚已正确安装nodejs。PS：未能出现版本号，请尝试注销电脑重试；
    1.3 npm -v查看npm的版本号，npm是在安装nodejs时一同安装的nodejs包管理器，那它有什么用呢？稍后解释；
    1.4 cd定位到目录，用法：cd + 路径 ；
    1.5 dir列出文件列表；
    1.6 cls清空命令提示符窗口内容。

    npm 安装好后 安装全局 express : npm install express -g

    MongoDB的官网是：http://www.mongodb.org/

    1.1 MongoDB将数据目录存储在 db 目录下。但是这个数据目录不会主动创建，我们在安装完成后需要创建它。
        请注意，数据目录应该放在根目录下（(如： C:\ 或者 D:\ 等 )。
        我们已经在C：盘 安装了 mongodb，现在让我们创建一个data的目录然后在data目录里创建db目录。

    1.2 为了从命令提示符下运行MongoDB服务器，你必须从MongoDB目录的bin目录中执行mongod.exe文件。


    1.3  启动 mongodb:
             mongo
             show dbs;               数据库
             use  xx ;               使用数据库
             show collections        当前数据库 的文档集
             db.xx.find()            查询 数据表

    Angular : 用 bower依赖管理工具安装

# npm介绍
    1.1、说明：npm（node package manager）nodejs的包管理器，用于node插件管理（包括安装、卸载、管理依赖等）；
    1.2、使用npm安装插件：命令提示符执行npm install <name> [-g] [--save-dev]；
        1.2.1、<name>：node插件名称。例：npm install gulp-less --save-dev
        1.2.2、-g：全局安装。将会安装在C:\Users\Administrator\AppData\Roaming\npm，并且写入系统环境变量；
                非全局安装：将会安装在当前定位目录；  全局安装可以通过命令行在任何地方调用它，本地安装将安装在定位目录的
                node_modules文件夹下，通过require()调用；
        1.2.3、--save：将保存配置信息至package.json（package.json是nodejs项目配置文件）；
        1.2.4、-dev：保存至package.json的devDependencies节点，不指定-dev将保存至dependencies节点；一般保存在dependencies
                的像这些express/ejs/body-parser等等。
                node package有两种依赖，一种是dependencies一种是devDependencies，其中前者依赖的项该是正常运行该包时所需要的
                依赖项，而后者则是开发的时候需要的依赖项，像一些进行单元测试之类的包。
        1.2.5、为什么要保存至package.json？因为node插件包相对来说非常庞大，所以不加入版本管理，将配置信息写入package.json
                并将其加入版本管理，其他开发者对应下载即可（命令提示符执行npm install，则会根据package.json下载所有需要的包，
                npm install --production只下载dependencies节点的包）。
    1.3、使用npm卸载插件：npm uninstall <name> [-g] [--save-dev]  PS：不要直接删除本地插件包
        1.3.1、删除全部插件：npm uninstall gulp-less gulp-uglify gulp-concat ……???太麻烦
        1.3.2、借助rimraf：npm install rimraf -g 用法：rimraf node_modules
    1.4、使用npm更新插件：npm update <name> [-g] [--save-dev]
        1.4.1、更新全部插件：npm update [--save-dev]
    1.5、查看npm帮助：npm help
    1.6、当前目录已安装插件：npm list

# Bower
    Bower(前端的包管理工具)是一个客户端技术的软件包管理器，它可用于搜索、安装和卸载如JavaScript、HTML、CSS之类的网络资源
    https://segmentfault.com/a/1190000002971135

    1.1 安装： npm install -g bower
    1.2 自定义包的安装目录： .bowerrc  --（在git bash 上 vim编辑器）
                             {
                               "directory" : "public/bower_components"
                             }
    1.3 bower初始化:   bower init

# gulp
    gulp是前端开发过程中对代码进行构建的工具，是自动化项目的构建利器；她不仅能对网站资源进行优化，
    而且在开发过程中很多重复的任务能够使用正确的工具自动完成；使用她，我们不仅可以很愉快的编写代码，
    而且大大提高我们的工作效率。

    安装：npm install gulp --save-dev(保存至devDependencies节点)




# 工程初始化：
     1.1 express 工程目录生成： express (会生成package.json)
     1.2 重建package.json: npm init
     1.3 git .gitignore配置
         vim .gitignore 进入编辑界面
            忽略文件 /node_module/  退出保存  (package.json 存放第三方中间件)
                    /public/bower_components/  页面第三方js组件等

     1.4 bower初始化
         1.4.1 在项目根目录上.bowerrc
         1.4.2 bower init
         安装jquery  bower install jquery --save
         ---
     1.5 建文件夹
            controllers --存放控制器
            models      --存放模型



	
接口：
    登录：http://10.20.100.194:8088/interfaceManager/login.action 
		  data：{userName:beiweiping,passWord:beiweiping}
		  {"type":UR206067385601} 	登录成功
		  
	模块列表：http://10.20.100.194:8088/interfaceManager/InterFunctionListApp?opType=search&goType=app&searchType=''&searchVal=''
	
	增加模块：http://10.20.100.194:8088/interfaceManager/InterFunctionListApp?opType=add&goType=app
			  data:{inter_functionName:测试app接口,userId:UR206067385601,userName:'贝伟平'}
			  
	修改模块：http://10.20.100.194:8088/interfaceManager/InterFunctionListApp?opType=update&goType=app
			  data:{inter_functionName:测试app接1,inter_functionNum:INF791040581,userId:UR206067385601,userName:'贝伟平'}
			  
    删除模块：http://10.20.100.194:8088/interfaceManager/InterFunctionListApp?opType=delete&goType=app
			  data:{inter_functionName:xxxx,inter_functionNum:INF791040581,userName:'贝伟平'}
			  {"resultI":1} 删除操作成功
			  {"resultI":INF791040581} 新增编辑成功
	模块下接口列表：http://10.20.100.194:8088/interfaceManager/AppFunctionListApp?opType=search
					{inter_functionNum:INF012012479 
	接口详细		inter_appNum:AP6322173514} 
	
	新增接口        http://10.20.100.194:8088/interfaceManager/AppFunctionListApp?opType=add&goType=app
	
					inter_functionNum: 模块ID    INF012012479
					inter_appName:     接口名字
					inter_appVersion:  版本号
					inter_appState:    接口状态 1关闭 2开发
					inter_appReqType： 格式JSON
					inter_appHPType：  请求方式 POST GET
					inter_appAddress:  接口地址
					inter_appDescribe：功能描述
					inter_appFileds：  请求字段详细
					inter_appReqV：    请求示例
					inter_appReqFileds:返回字段
					inter_appReturnV： 返回示例
					inter_appKeyPar：  额外参数
					inter_appNum：     接口id(用于编辑)
					userId：           用户id
					userName           用户名
					
					{"resultI":"AP8117400691"} 新增成功
					
	删除接口:	    http://10.20.100.194:8088/interfaceManager/AppFunctionListApp?opType=delete&goType=app	
	
					inter_appNum:   AP8117400691
					inter_appName:  SCA877833
					inter_address:  http:www.baidu.com
					inter_descript: 测试接口app	
					userId：           用户id
					userName           用户名
						
	用户管理分页列表：   http://10.20.100.194:8088/interfaceManager/UserMsgServletApp
	
				 page：      当前页
				 rows:       每页多少条
				 userFiName: 姓名
				 userName:   账号
				 userMail:   邮箱
				 userRoleId: 角色 1 管理员  2普通用户
				 userAge:    年龄



		

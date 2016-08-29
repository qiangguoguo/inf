# INF
    接口管理系统重构（MEAN）
    先要安装 node express mongodb
    开发工具 webStorm

# 安装 node / express / mongodb
    打开nodejs官网，点击硕大的绿色Download按钮，它会根据系统信息选择对应版本（.msi文件）。然后像安装QQ一样安装它就可以了（安装路径随意）。

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


# 工程初始化：
     1.1 express 工程目录生成： express
     1.2 重建package.json: npm init
     1.3 git .gitignore配置
         vim .gitignore 进入编辑界面
            忽略文件 /node_module/  退出保存
     1.4

# gulp
    gulp是前端开发过程中对代码进行构建的工具，是自动化项目的构建利器；她不仅能对网站资源进行优化，
    而且在开发过程中很多重复的任务能够使用正确的工具自动完成；使用她，我们不仅可以很愉快的编写代码，
    而且大大提高我们的工作效率。

    安装：npm install gulp --save-dev

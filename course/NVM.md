## NVM 管理nodejs版本

[官方github地址](https://github.com/coreybutler/nvm-windows) | [菜鸟教程](https://www.runoob.com/w3cnote/nvm-manager-node-versions.html)  
[下载地址](https://github.com/coreybutler/nvm-windows/releases)
::: warning 注意
假如已经安装过nodejs的先进行卸载  
    卸载步骤--  
    假如你没有删除你的nodejs安装包 直接运行安装包 选择remove进行卸载删除  
如果你没有安装包：  
    cmd 查看当前安装的node版本号 去官网下载一个对应版本号的安装包去进行卸载  
不推荐你自己删除文件夹或者使用geek删除工具 等去卸载  
:::

### 一、安装步骤

  1. 运行nvm安装包进行安装  
     这个地方的安装路径不能是中文也不能有空格,最好使用纯英文
        ![](.\assets\nvm1.png)
  2. 选择nodejs各个版本安装的目录  
     注意 nodejs的目录不要选择在nvm的安装目录下  
        ![](.\assets\nvm2.png)
  3. 安装完之后 
     打开cmd 输入 nvm -v 查看版本号 检查是否成功

### 二、安装nodejs

nvm help 查看相关命令
`nvm list available`  查看所有版本列表,可以下载哪些版本 不加代表当前本地安装了哪些版本  
`nvm install`  版本号  安装相应的版本  
`nvm use` 版本号 使用切换相应的版本  

`nvm install lts`  安装最新版

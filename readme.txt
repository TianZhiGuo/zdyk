#git 建立本地仓库
#1.git init  ----自动生成   .git文件夹
#2.配置 ssh key 与本地建立连接 参考 http://jingyan.baidu.com/article/a65957f4e91ccf24e77f9b11.html
#3.本地文件要经过 add  commit  push  提交到远程服务器 参考 http://www.jianshu.com/p/dcbb8baa6e36


#4.可以从远程仓库直接clone仓库
#$ git clone git://github.com/schacon/grit.git


#配置信息
#$ git config --global user.name "TianZhiGuo"
#$ git config --global user.email "929860963@qq.com"

#commit代码到储存区 git commit -a -m <提交说明信息>
#push代码到远程仓库 git push <远程仓库名> <需要推送的分支名>

#查看分支
#$ git branch

#更新远程仓库代码到本地
#$ git pull

#新建分支 git branch <分支名>
#切换分支 git checkout <分支名>

#新建并切换到 git checkout -b <分支名>

#推送本地分支到远程仓库 git push <远程仓库名> <需要推送的新分支名>

#删除本地分支 git branch -d <分支名>
#删除远程分支 git push :<需要删除的远程分支名>
webpack 模版
2
### 简单介绍
* 写了三个自定义的组件，两个组件是加和减的组件，还有一个是按钮的组件，都放在components文件夹中，add是加的组件，subtract是减的组件，go是按钮组件。
* 页面：新增三个页面，add1，存放的是加组件的详情，以及单放了一个取vuex中count的值，可以多组件之间传值；sub1，存放的是减组件的详情；calculator，存放的是vuex所用到的加和减组件。每个页面都引入了自己封装的按钮组件。
* 跳转：从首页可以进行跳转，进入到页面以后也可以跳转到首页。



### 本次作业介绍
* 使用的组件  Dialog Toast Tab Textinput Button
* 点击输入名字以后，弹出dialog 点击确定（已经输入内容，如果没输入，就会提示请输入名字）会跳转到tab页面 在tab页面可以点击下方栏进入不同的tab选项栏。

### 第三周作业
* view中新增四个vue文件 ，其中joke是笑话的文件夹，其中包含列表页（可以下滑到底部加载下一页）和详情页，login是登录，register是注册。
* 新增utils文件，其中是axios的封装
* 新增api文件，其中是joke和login的接口
* webpack.config.js中新增proxy配置


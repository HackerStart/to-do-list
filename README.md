# ToDoList

本项目是一个用React实现的关于管理待办事项的应用源码。



## 项目启动命令

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.



## ToDoList 简介

![](http://tva1.sinaimg.cn/large/007X8olVly1g6wri74jb3j316h0u0whl.jpg)

##### **功能1：访问ToDolist应用 **

* 作为用户，通过todolist网址，访问到ToDoList的界面。

##### 功能2：添加待办事项

* 作为用户，可以在输入框中输入待办事项，点击Add按钮或者单击回车键来添加待办事项，
* 添加待办事项完成后，输入框清空。
* 添加待办事项完成后，新添加的待办事项将现实中待办列表区，并放在最下面。

##### 功能3：显示待办列表

* 当用户添加待办事项后，将待办列表显示在列表区，待办事项的编号依次递增。
* 待办事项编号为偶数的列表项的背景颜色为(f4ecec)。

##### 功能4：完成/激活待办事项的状态

* 用户可以点击待办事项前面的选择框，选中某个待办事项，就将其标记为已完成，同时，待办事项的文字将用删除线标记，同时文字颜色变成灰色。
* 用户可以对已经完成的待办事项激活，单击选中框即可，文件和样式将恢复到激活状态。

##### 功能5：过滤不同类型的待办事项

* 用户可以点击最下面的ALL按钮来查看所有的待办事项，默认这个按钮选中。
* 用户可以点击最下面的Active按钮来查看所有未完成的待办事项。
* 用户可以点击最下面的Complete按钮来查看所有已完成的待办事项。

##### 功能6：修改待办事项名称

* 用户可以双击任何一个待办事项，从而修改待办事项的名称。
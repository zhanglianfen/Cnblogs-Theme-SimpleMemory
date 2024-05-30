# 菜单数据

如果遇到菜单数据不显示，请以下面的方式进行排查处理。

## 核对插件版本对菜单数据的支持

不同版本对菜单数据的支持不一样：

| **版本**  | **菜单数据新增记录**                                            |
| --------- | --------------------------------------------------------------- |
| <= v1.1.4 | 最新随笔、 我的标签、随笔分类 <br> 随笔档案、阅读排行、推荐排行 |
| v1.1.5    | 搜索框、日历、文章档案                                          |
| v1.1.8    | 积分与排名                                                      |
| v1.2.0    | 最新评论                                                        |
| v1.2.4    | 文章分类                                                        |

## 支持的菜单数据不显示的调试方法

### 开启对应显示设置

『博客设置』--->『选项』--->『控件显示设置』--->『SAVE』

::: tip 提示
由于博客园有缓存机制，设置后稍等几分钟才会生效。
:::

## 设置对应数据

如果没有相应的数据，即使设置了显示，博客园也不会返回对应的栏目的数据，这样也会造成不显示的问题。

* 随笔分类：『博客设置』--->『随笔』--->『分类』
* 推荐排行：如果没有推荐，此类别不会显示，解决办法只能是别人给你点个推荐。

### 利用工具调试

如果以上两种方式都不能解决问题，使用此方法进行尝试。

使用浏览器的『开发者工具』搜索HTML代码：

```html
<h3 class="catListTitle">
```

注释掉 class `catListTitle` 的 CSS 设置 `display: none!important`

这时你会发现在页面右下方，默认样式的侧边数据栏显示了出来，找一找有没有菜单没显示那栏数据。

* 如果这里没有，那可能是官方问题，检查下自己的设置。
* 如果这里有，(；´д｀)ゞ，可能是插件处理逻辑有问题，请 [issues](https://github.com/BNDong/Cnblogs-Theme-SimpleMemory/issues) 提交问题，会在以后的版本中进行修复！
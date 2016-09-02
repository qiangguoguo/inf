/**
 * Created by beiwp on 2016/9/2.
 */
'use strict';

var mongoose = require('mongoose'),
    test = mongoose.model('test'),
    core = require('../../libs/core'),
    config = require('../../config'),
    _ = require('underscore');


/**
 * 删除对象 test beiwp on 2016/9/2
 */
var funDeltest = function (obj, res, mess) {
    obj.remove(function (err) {
        if (err) {
            return core.resJson(res, {type: 0, message: core.getErrorMessage(err)});
        }
        core.resJson(res, {type: 1, message: '删除成功'});
    });
};

/**
 * 新增更新对象 test beiwp on 2016/9/2
 */
var funEdittest = function (obj, res, mess) {
    obj.save(function (err, result) {
        if (err || !result) {
            return core.resJson(res, {type: 0, message: core.getErrorMessage(err)});
        }
        core.resJson(res, {type: 1, message: mess + '成功', data: result});
    });
};


/**
 * 新增 test beiwp on 2016/9/2
 * @param req
 * @param res
 */
exports.addtest = function (req, res) {
    console.log(req.method + '======test controller addtest ======' + new Date());

    var obj = req.body;
    if (obj) {
        var test = new test(obj);

        funEdittest(test, res);
    }
};

/**
 * 删除 test beiwp on 2016/9/2
 * @param req
 * @param res
 */
exports.deltest = function (req, res) {
    console.log(req.method + '======test controller deltest ======' + new Date());

    var id = req.params.id;//获取参数
    if (id) {
        test.findById(id).populate('author').exec(function (err, result) {
            if (err) {
                return core.resJson(res, {type: 0, message: core.getErrorMessage(err)});
            }
            if (!result) {
                return core.resJson(res, {type: 0, message: '查询对象不存在'});
            }

            // 权限判断
            /*var isAdmin = req.Roles && req.Roles.indexOf('admin') > -1;
             var isAuthor = result.author && ((result.author._id + '') === req.session.user._id);
             if (!(isAdmin && isAuthor)) {
             return core.resJson(res, {type: 0, message: '没有权限'});
             }*/

            funDeltest(result, res);

        });
    } else {
        core.resJson(res, {type: 0, message: '参数获取失败'});
    }

};


/**
 * 修改 test beiwp on 2016/9/2
 * @param req
 * @param res
 */
exports.edittest = function (req, res) {
    console.log(req.method + '======test controller edittest ======' + new Date());

    var id = req.params.id;//获取参数
    var obj = req.body; //获取对象

    if (id && obj) {
        test.findById(id).populate('author').exec(function (err, result) {
            if (err) {
                return core.resJson(res, {type: 0, message: core.getErrorMessage(err)});
            }
            if (!result) {
                return core.resJson(res, {type: 0, message: '查询对象不存在'});
            }

            // 权限判断
            /*var isAdmin = req.Roles && req.Roles.indexOf('admin') > -1;
             var isAuthor = result.author && ((result.author._id + '') === req.session.user._id);
             if (!(isAdmin && isAuthor)) {
             return core.resJson(res, {type: 0, message: '没有权限'});
             }*/


            _.extend(result, obj);

            funEdittest(result, res);

        });
    } else {
        core.resJson(res, {type: 0, message: '参数获取失败'});
    }
};

/**
 * 列表 test beiwp on 2016/9/2
 * @param req
 * @param res
 */
exports.listtest = function (req, res) {
    console.log(req.method + '======test controller list ======' + new Date());
    var condition = {};

    //分页查询参数 暂时根据用户名 姓名模糊匹配查询
    //{'$or':[{'username':new RegExp('test')}
    //{'username':new RegExp('tes'),'name':new RegExp('呵呵')}
    var nameParams = req.query.name;
    if (nameParams) {
        condition.name = new RegExp(nameParams);
    }
    test.count(condition, function (err, total) {
        console.log("test总数==" + total);
        if (err) {
            return core.resJson(res, {type: 0, message: core.getErrorMessage(err)});
        }
        var query = test.find(condition).populate('author');
        //分页
        var pageInfo = core.createPage(req, total, 10);
        pageInfo.countItems = total;
        console.log('test============分页参数============');
        console.log(pageInfo);
        query.skip(pageInfo.start);
        query.limit(pageInfo.pageSize);
        query.sort({created: -1});
        query.exec(function (err, results) {
            //返回结果
            var obj = {
                type: 1,
                message: '查询成功',
                pages: pageInfo,
                rows: results
            };
            core.resJson(res, obj, 'list');
        });
    });
};

/**
 * 查看  test beiwp on 2016/9/2
 * @param req
 * @param res
 */
exports.viewtest = function (req, res) {
    console.log(req.method + '======test controller viewtest ======' + new Date());

    var id = req.params.id;//获取参数
    if (id) {
        test.findById(id).populate('author').exec(function (err, result) {
            if (err) {
                return core.resJson(res, {type: 0, message: core.getErrorMessage(err)});
            }
            if (!result) {
                return core.resJson(res, {type: 0, message: '查询对象不存在'});
            }

            //权限判断
            /*var isAdmin = req.Roles && req.Roles.indexOf('admin') > -1;
             var isAuthor = result.author && (( result.author._id + '' ) === req.session.user._id);
             if (!( isAdmin && isAuthor)) {
             return core.resJson(res, {type: 0, message: '没有权限'})
             }*/

            core.resJson(res, result);
        });
    } else {
        core.resJson(res, {type: 0, message: '参数获取失败'});
    }

};


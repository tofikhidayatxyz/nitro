'use strict'

module.exports = route => {

    route('/hefo').render('index', {
        name: 'hef'
    })

    route('/example').response(({req, res, next, render}) => {
        res.send('async')
        res.end()
    });

    // route('/prov').response(({req, res, next, render}) => {
    //     res.send('async')
    // });
    /**
     * Route('/blog/')
     * .collection('posts')
     * .selector('name') // fileName title dll  
     * .filter(function(itm){
     *      return itm > 0
     * })
     * .render('blog')
     * .detail('blog-detail')
     * .exec()
     */

}


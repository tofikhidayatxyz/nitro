'use strict'

module.exports = route => {

    // route('/hefo').render('pages/index', {
    //     name: 'hef'
    // })

    // route('/example').response(({req, res, next, render}) => {
    //     res.send('async')
    //     res.end()
    // });

    // route('/prov').response(({req, res, next, render}) => {
    //     res.send('async')
    // });
    route('/').collection('post')
    /**
     * Route('/blog/')
     * .collection('posts')
     * .selector('name') // fileName title dll  
     * .filter(function(itm){
     *      return itm > 0
     * })
     * .render('blog')
     * .view('blog-detail')
     * .exec()
     */

}


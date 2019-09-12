var uuid = require('uuid/v4');
module.exports = function (grunt){
    var guid = uuid().replace('-', '');

    grunt.initConfig({
        concat:{
            app:{
                src:[
                    "app/resources/src/js/***/**/*.js"
                ],
                dest:`app/resources/build/js.${guid}.js`
            }
        },        
    })

    grunt.loadTasks("tasks");
    
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.registerTask('default', ['concat', 'buildDevIndexHtml']);

    grunt.registerTask('buildDevIndexHtml', 'builds dev html', function () {
        var indexContent = grunt.file.read('app/views/gruntTemplates/index.html', { encoding: 'utf8' });

        var jsPath = `app/resources/build/js.${guid}.js`;
        var cssPath = `app/resources/build/css.${guid}.css`;

        var jsScript = '<script type="text/javascript" src="' + jsPath + '"></script>';
        var cssSheet = '<link rel="stylesheet" href="' + cssPath + '">';

        var jsStr = indexContent.replace('@@JSSCRIPTS', jsScript);
        var returnStr = jsStr.replace('@@CSSSHEET', cssSheet);

        grunt.file.write('index.html', returnStr, { encoding: 'utf8' });
    });
    
};
module.exports = function(grunt){
	grunt.initConfig({
		// 获取package.json信息
		pkg: grunt.file.readJSON('package.json'),
		// uglify插件配置信息
		uglify: {
			options: {
				stripBanners: true,
				banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */'
			},
			build: {
				src: 'src/jquery-wincn-utils.js',
				dest: 'build/<%=pkg.name%>-<%=pkg.version%>.min.js'
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default', ['uglify']);
}
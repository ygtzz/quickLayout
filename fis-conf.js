fis.match("(*)",{
    release: '/$1',
    useCache : false
});

fis.match('**/*.css', {
	optimizer: fis.plugin('clean-css'),
    packTo: '/quick-layout.min.css'
})
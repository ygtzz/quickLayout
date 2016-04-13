fis.match("*",{
    release: '/$0',
    useCache : false
});

fis.match('*.md',{
	release:false
});

fis.match('**/*.css', {
	optimizer: fis.plugin('clean-css'),
    packTo: '/qlayout.min.css'
})

